(function () {
  const palette = ["#2b8cbe", "#e34a33", "#31a354", "#756bb1", "#f39c12", "#de2d8a"];
  let currentLang = localStorage.getItem("site-lang") || "en";

  function setText(node, lang) {
    const text = node.getAttribute(`data-i18n-${lang}`);
    if (text) node.textContent = text;
  }

  function updateI18n() {
    document.documentElement.setAttribute("data-lang", currentLang);
    document.documentElement.setAttribute("lang", currentLang === "zh" ? "zh" : "en");
    document.querySelectorAll("[data-bilingual-root]").forEach((root) => root.setAttribute("data-lang", currentLang));
    document.querySelectorAll("[data-i18n-en][data-i18n-zh]").forEach((node) => setText(node, currentLang));
    document.querySelectorAll("[data-lang-button]").forEach((button) => {
      button.classList.toggle("is-active", button.getAttribute("data-lang-button") === currentLang);
    });
    document.querySelectorAll("[data-lang-toggle]").forEach((toggle) => {
      toggle.textContent = toggle.getAttribute(`data-label-${currentLang}`) || (currentLang === "zh" ? "EN" : "中文");
    });
    updateRunButton();
    updateKMeansRunButton();
  }

  function setupLanguageSwitch() {
    document.querySelectorAll("[data-lang-toggle]").forEach((toggle) => {
      toggle.addEventListener("click", (event) => {
        event.preventDefault();
        currentLang = currentLang === "zh" ? "en" : "zh";
        localStorage.setItem("site-lang", currentLang);
        updateI18n();
      });
    });
    document.querySelectorAll("[data-lang-button]").forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        currentLang = button.getAttribute("data-lang-button") || "en";
        localStorage.setItem("site-lang", currentLang);
        updateI18n();
      });
    });
    updateI18n();
  }

  function sizeCanvas(canvas, height) {
    const rect = canvas.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;
    const width = Math.max(1, Math.floor((rect.width || 640) * ratio));
    canvas.width = width;
    canvas.height = Math.floor(height * ratio);
    const ctx = canvas.getContext("2d");
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    return { ctx, width: width / ratio, height };
  }

  function seededNoise(i) {
    const x = Math.sin(i * 91.345) * 10000;
    return x - Math.floor(x);
  }

  const lineState = { w: -0.35, b: 220, running: false, timer: null, points: [] };

  function updateRunButton() {
    const runButton = document.querySelector("[data-lr-run]");
    if (!runButton) return;
    const key = lineState.running ? "pause" : "run";
    const fallback = key === "pause"
      ? runButton.getAttribute(`data-i18n-pause-${currentLang}`)
      : runButton.getAttribute(`data-i18n-${currentLang}`);
    runButton.textContent = runButton.getAttribute(`data-label-${key}-${currentLang}`) || fallback || runButton.textContent;
  }

  function makeRegressionData(noise) {
    const points = [];
    for (let i = 0; i < 34; i += 1) {
      const x = 24 + i * 13.5;
      const ideal = 248 - 0.43 * x;
      const n = (seededNoise(i) - 0.5) * noise * 2.4;
      points.push([x, ideal + n]);
    }
    return points;
  }

  function regressionLoss(points, w, b) {
    return points.reduce((sum, [x, y]) => {
      const error = w * x + b - y;
      return sum + error * error;
    }, 0) / points.length;
  }

  function stepRegression(rate) {
    let dw = 0;
    let db = 0;
    lineState.points.forEach(([x, y]) => {
      const error = lineState.w * x + lineState.b - y;
      dw += error * x;
      db += error;
    });
    dw = (2 / lineState.points.length) * dw;
    db = (2 / lineState.points.length) * db;
    lineState.w -= rate * dw * 0.00001;
    lineState.b -= rate * db * 0.02;
  }

  function drawRegression() {
    const canvas = document.querySelector("[data-lr-canvas]");
    if (!canvas) return;
    const { ctx, width, height } = sizeCanvas(canvas, 320);
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, width, height);
    const scaleX = width / 500;
    const scaleY = height / 300;
    ctx.fillStyle = "#2b8cbe";
    lineState.points.forEach(([x, y]) => {
      ctx.beginPath();
      ctx.arc(x * scaleX, y * scaleY, 4, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.strokeStyle = "#222";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, lineState.b * scaleY);
    ctx.lineTo(width, (lineState.w * 500 + lineState.b) * scaleY);
    ctx.stroke();
    const loss = document.querySelector("[data-lr-loss]");
    if (loss) loss.textContent = regressionLoss(lineState.points, lineState.w, lineState.b).toFixed(2);
  }

  function resetRegression() {
    const noise = Number(document.querySelector("[data-lr-noise]")?.value || 24);
    lineState.w = -0.35;
    lineState.b = 220;
    lineState.points = makeRegressionData(noise);
    drawRegression();
  }

  function initRegression() {
    const rate = document.querySelector("[data-lr-rate]");
    const noise = document.querySelector("[data-lr-noise]");
    if (!rate || !noise) return;
    const updateLabels = () => {
      document.querySelector("[data-lr-rate-value]").textContent = (Number(rate.value) / 1000).toFixed(3);
      document.querySelector("[data-lr-noise-value]").textContent = noise.value;
    };
    rate.addEventListener("input", updateLabels);
    noise.addEventListener("input", () => { updateLabels(); resetRegression(); });
    document.querySelector("[data-lr-step]")?.addEventListener("click", () => {
      stepRegression(Number(rate.value) / 1000);
      drawRegression();
    });
    document.querySelector("[data-lr-reset]")?.addEventListener("click", resetRegression);
    document.querySelector("[data-lr-run]")?.addEventListener("click", () => {
      lineState.running = !lineState.running;
      updateRunButton();
      clearInterval(lineState.timer);
      if (lineState.running) {
        lineState.timer = setInterval(() => {
          for (let i = 0; i < 4; i += 1) stepRegression(Number(rate.value) / 1000);
          drawRegression();
        }, 80);
      }
    });
    updateLabels();
    resetRegression();
  }

  function makeClusterPoints() {
    const centers = [[90, 82], [310, 86], [125, 240], [365, 235], [235, 165], [440, 140]];
    const points = [];
    centers.forEach(([cx, cy], clusterIndex) => {
      for (let i = 0; i < 18; i += 1) {
        const a = seededNoise(clusterIndex * 100 + i) * Math.PI * 2;
        const r = 12 + seededNoise(clusterIndex * 200 + i) * 34;
        points.push([cx + Math.cos(a) * r, cy + Math.sin(a) * r]);
      }
    });
    return points;
  }

  const kmState = { points: makeClusterPoints(), centers: [], labels: [], iter: 0, timer: null, running: false };

  function updateKMeansRunButton() {
    document.querySelectorAll("[data-kmeans-run]").forEach((button) => {
      const key = kmState.running ? "pause" : "run";
      const fallback = key === "pause"
        ? button.getAttribute(`data-i18n-pause-${currentLang}`)
        : button.getAttribute(`data-i18n-${currentLang}`);
      button.textContent = button.getAttribute(`data-label-${key}-${currentLang}`) || fallback || button.textContent;
    });
  }

  function initKCenters(k) {
    const points = kmState.points;
    const centers = [points[0].slice()];
    while (centers.length < k) {
      let bestPoint = points[0];
      let bestDist = -1;
      points.forEach((point) => {
        const minDist = Math.min(...centers.map((center) => {
          const dx = point[0] - center[0];
          const dy = point[1] - center[1];
          return dx * dx + dy * dy;
        }));
        if (minDist > bestDist) {
          bestDist = minDist;
          bestPoint = point;
        }
      });
      centers.push(bestPoint.slice());
    }
    kmState.centers = centers;
    kmState.labels = new Array(points.length).fill(0);
    kmState.iter = 0;
  }

  function kmeansStep() {
    kmState.labels = kmState.points.map((point) => {
      let best = 0;
      let bestDist = Infinity;
      kmState.centers.forEach((center, index) => {
        const dx = point[0] - center[0];
        const dy = point[1] - center[1];
        const dist = dx * dx + dy * dy;
        if (dist < bestDist) {
          best = index;
          bestDist = dist;
        }
      });
      return best;
    });
    kmState.centers = kmState.centers.map((center, index) => {
      const members = kmState.points.filter((_, pointIndex) => kmState.labels[pointIndex] === index);
      if (!members.length) return center;
      return [
        members.reduce((sum, point) => sum + point[0], 0) / members.length,
        members.reduce((sum, point) => sum + point[1], 0) / members.length
      ];
    });
    kmState.iter += 1;
  }

  function kmeansInertia() {
    return kmState.points.reduce((sum, point, index) => {
      const center = kmState.centers[kmState.labels[index]] || kmState.centers[0];
      const dx = point[0] - center[0];
      const dy = point[1] - center[1];
      return sum + dx * dx + dy * dy;
    }, 0);
  }

  function drawKMeans() {
    const canvas = document.querySelector("[data-kmeans-canvas]");
    const slider = document.querySelector("[data-kmeans-slider]");
    if (!canvas || !slider) return;
    const { ctx, width, height } = sizeCanvas(canvas, 320);
    const scaleX = width / 520;
    const scaleY = height / 330;
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#fff";
    ctx.fillRect(0, 0, width, height);
    kmState.points.forEach((point, index) => {
      const label = kmState.labels[index] || 0;
      ctx.fillStyle = palette[label % palette.length];
      ctx.beginPath();
      ctx.arc(point[0] * scaleX, point[1] * scaleY, 4.5, 0, Math.PI * 2);
      ctx.fill();
    });
    kmState.centers.forEach((center, index) => {
      ctx.strokeStyle = "#111";
      ctx.fillStyle = palette[index % palette.length];
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.rect(center[0] * scaleX - 8, center[1] * scaleY - 8, 16, 16);
      ctx.fill();
      ctx.stroke();
    });
    document.querySelectorAll("[data-kmeans-value]").forEach((node) => node.textContent = slider.value);
    const inertia = document.querySelector("[data-kmeans-inertia]");
    if (inertia) inertia.textContent = Math.round(kmeansInertia()).toLocaleString();
    const iter = document.querySelector("[data-kmeans-iter]");
    if (iter) iter.textContent = String(kmState.iter);
  }

  function resetKMeans() {
    const slider = document.querySelector("[data-kmeans-slider]");
    initKCenters(Number(slider?.value || 4));
    drawKMeans();
  }

  function initKMeans() {
    const slider = document.querySelector("[data-kmeans-slider]");
    if (!slider) return;
    slider.addEventListener("input", resetKMeans);
    document.querySelector("[data-kmeans-step]")?.addEventListener("click", () => {
      kmeansStep();
      drawKMeans();
    });
    document.querySelector("[data-kmeans-reset]")?.addEventListener("click", resetKMeans);
    document.querySelector("[data-kmeans-run]")?.addEventListener("click", (event) => {
      kmState.running = !kmState.running;
      updateKMeansRunButton();
      clearInterval(kmState.timer);
      if (kmState.running) {
        kmState.timer = setInterval(() => {
          kmeansStep();
          drawKMeans();
          if (kmState.iter >= 12) {
            kmState.running = false;
            clearInterval(kmState.timer);
            updateKMeansRunButton();
          }
        }, 500);
      }
    });
    resetKMeans();
  }

  function solveLinearSystem(a, b) {
    const n = b.length;
    for (let i = 0; i < n; i += 1) {
      let pivot = i;
      for (let r = i + 1; r < n; r += 1) {
        if (Math.abs(a[r][i]) > Math.abs(a[pivot][i])) pivot = r;
      }
      [a[i], a[pivot]] = [a[pivot], a[i]];
      [b[i], b[pivot]] = [b[pivot], b[i]];
      const div = a[i][i] || 1e-8;
      for (let c = i; c < n; c += 1) a[i][c] /= div;
      b[i] /= div;
      for (let r = 0; r < n; r += 1) {
        if (r === i) continue;
        const factor = a[r][i];
        for (let c = i; c < n; c += 1) a[r][c] -= factor * a[i][c];
        b[r] -= factor * b[i];
      }
    }
    return b;
  }

  function initPolynomial() {
    const canvas = document.querySelector("[data-poly-canvas]");
    const degreeInput = document.querySelector("[data-poly-degree]");
    if (!canvas || !degreeInput) return;
    const ridgeInput = document.querySelector("[data-poly-ridge]");
    const points = Array.from({ length: 26 }, (_, i) => {
      const x = -1 + (2 * i) / 25;
      const y = 0.35 + 0.8 * x - 1.25 * x * x + 0.55 * Math.sin(8 * x) + (seededNoise(i) - 0.5) * 0.35;
      return [x, y];
    });
    const draw = () => {
      const degree = Number(degreeInput.value);
      const ridge = Number(ridgeInput?.value || 0) / 50;
      const m = degree + 1;
      const xtx = Array.from({ length: m }, () => Array(m).fill(0));
      const xty = Array(m).fill(0);
      points.forEach(([x, y]) => {
        const powers = Array.from({ length: m }, (_, p) => Math.pow(x, p));
        for (let r = 0; r < m; r += 1) {
          xty[r] += powers[r] * y;
          for (let c = 0; c < m; c += 1) xtx[r][c] += powers[r] * powers[c];
        }
      });
      for (let i = 1; i < m; i += 1) xtx[i][i] += ridge;
      const coeffs = solveLinearSystem(xtx, xty);
      const { ctx, width, height } = sizeCanvas(canvas, 320);
      const sx = (x) => ((x + 1.15) / 2.3) * width;
      const sy = (y) => height - ((y + 1.5) / 3.2) * height;
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, width, height);
      ctx.strokeStyle = "#ddd";
      ctx.beginPath();
      ctx.moveTo(0, sy(0));
      ctx.lineTo(width, sy(0));
      ctx.stroke();
      ctx.strokeStyle = "#222";
      ctx.lineWidth = 2;
      ctx.beginPath();
      for (let i = 0; i <= 160; i += 1) {
        const x = -1.1 + (2.2 * i) / 160;
        const y = coeffs.reduce((sum, coef, p) => sum + coef * Math.pow(x, p), 0);
        if (i === 0) ctx.moveTo(sx(x), sy(y));
        else ctx.lineTo(sx(x), sy(y));
      }
      ctx.stroke();
      ctx.fillStyle = "#2b8cbe";
      points.forEach(([x, y]) => {
        ctx.beginPath();
        ctx.arc(sx(x), sy(y), 4, 0, Math.PI * 2);
        ctx.fill();
      });
      document.querySelector("[data-poly-degree-value]").textContent = String(degree);
      if (ridgeInput) document.querySelector("[data-poly-ridge-value]").textContent = ridge.toFixed(2);
    };
    degreeInput.addEventListener("input", draw);
    ridgeInput?.addEventListener("input", draw);
    draw();
  }

  function classData() {
    return [
      [90, 90, 0], [120, 110, 0], [150, 80, 0], [180, 120, 0], [210, 100, 0], [240, 140, 0],
      [280, 210, 1], [320, 230, 1], [350, 190, 1], [390, 220, 1], [420, 180, 1], [455, 235, 1],
      [165, 235, 0], [205, 260, 0], [255, 245, 1], [300, 130, 1], [335, 115, 1]
    ];
  }

  function initKnn() {
    const canvas = document.querySelector("[data-knn-canvas]");
    const slider = document.querySelector("[data-knn-k]");
    if (!canvas || !slider) return;
    const draw = () => {
      const k = Number(slider.value);
      const points = classData();
      const { ctx, width, height } = sizeCanvas(canvas, 320);
      const sx = width / 520;
      const sy = height / 330;
      for (let x = 0; x < 520; x += 10) {
        for (let y = 0; y < 330; y += 10) {
          const votes = points.map((p) => ({ label: p[2], d: (p[0] - x) ** 2 + (p[1] - y) ** 2 }))
            .sort((a, b) => a.d - b.d)
            .slice(0, k)
            .reduce((sum, item) => sum + (item.label ? 1 : -1), 0);
          ctx.fillStyle = votes >= 0 ? "rgba(227,74,51,.16)" : "rgba(43,140,190,.16)";
          ctx.fillRect(x * sx, y * sy, 10 * sx + 1, 10 * sy + 1);
        }
      }
      points.forEach(([x, y, label]) => {
        ctx.fillStyle = palette[label];
        ctx.strokeStyle = "#111";
        ctx.beginPath();
        ctx.arc(x * sx, y * sy, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      });
      document.querySelector("[data-knn-k-value]").textContent = String(k);
    };
    slider.addEventListener("input", draw);
    draw();
  }

  function initSvm() {
    const canvas = document.querySelector("[data-svm-canvas]");
    const gammaInput = document.querySelector("[data-svm-gamma]");
    if (!canvas || !gammaInput) return;
    const cInput = document.querySelector("[data-svm-c]");
    const points = classData();
    const draw = () => {
      const gamma = Number(gammaInput.value) / 10000;
      const c = Number(cInput?.value || 50) / 50;
      const { ctx, width, height } = sizeCanvas(canvas, 320);
      const sx = width / 520;
      const sy = height / 330;
      for (let x = 0; x < 520; x += 8) {
        for (let y = 0; y < 330; y += 8) {
          const score = points.reduce((sum, p) => {
            const sign = p[2] ? 1 : -1;
            const d = (p[0] - x) ** 2 + (p[1] - y) ** 2;
            return sum + sign * Math.exp(-gamma * d) * c;
          }, 0);
          ctx.fillStyle = score >= 0 ? "rgba(227,74,51,.14)" : "rgba(43,140,190,.14)";
          ctx.fillRect(x * sx, y * sy, 8 * sx + 1, 8 * sy + 1);
        }
      }
      points.forEach(([x, y, label]) => {
        ctx.fillStyle = palette[label];
        ctx.strokeStyle = "#111";
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.arc(x * sx, y * sy, 5.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      });
      document.querySelector("[data-svm-gamma-value]").textContent = gamma.toFixed(3);
      if (cInput) document.querySelector("[data-svm-c-value]").textContent = c.toFixed(1);
    };
    gammaInput.addEventListener("input", draw);
    cInput?.addEventListener("input", draw);
    draw();
  }

  function initTree() {
    const canvas = document.querySelector("[data-tree-canvas]");
    const depthInput = document.querySelector("[data-tree-depth]");
    if (!canvas || !depthInput) return;
    const roundsInput = document.querySelector("[data-boost-rounds]");
    const points = classData();
    const predict = (x, y, depth) => {
      if (depth <= 1) return x + y > 470 ? 1 : 0;
      if (x < 245) return y > 205 && depth > 2 ? 0 : 0;
      if (y < 155) return depth > 2 ? 1 : 0;
      return 1;
    };
    const draw = () => {
      const depth = Number(depthInput.value);
      const rounds = Number(roundsInput?.value || 1);
      const { ctx, width, height } = sizeCanvas(canvas, 320);
      const sx = width / 520;
      const sy = height / 330;
      for (let x = 0; x < 520; x += 10) {
        for (let y = 0; y < 330; y += 10) {
          const label = predict(x + rounds * 6, y - rounds * 3, depth);
          ctx.fillStyle = label ? "rgba(227,74,51,.15)" : "rgba(43,140,190,.15)";
          ctx.fillRect(x * sx, y * sy, 10 * sx + 1, 10 * sy + 1);
        }
      }
      ctx.strokeStyle = "#222";
      ctx.setLineDash([5, 4]);
      [245, 155, 205].forEach((value, index) => {
        ctx.beginPath();
        if (index === 0) { ctx.moveTo(value * sx, 0); ctx.lineTo(value * sx, height); }
        else { ctx.moveTo(0, value * sy); ctx.lineTo(width, value * sy); }
        ctx.stroke();
      });
      ctx.setLineDash([]);
      points.forEach(([x, y, label]) => {
        ctx.fillStyle = palette[label];
        ctx.strokeStyle = "#111";
        ctx.beginPath();
        ctx.arc(x * sx, y * sy, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      });
      document.querySelector("[data-tree-depth-value]").textContent = String(depth);
      if (roundsInput) document.querySelector("[data-boost-rounds-value]").textContent = String(rounds);
    };
    depthInput.addEventListener("input", draw);
    roundsInput?.addEventListener("input", draw);
    draw();
  }

  function initEm() {
    const canvas = document.querySelector("[data-em-canvas]");
    const softnessInput = document.querySelector("[data-em-softness]");
    if (!canvas || !softnessInput) return;
    const points = makeClusterPoints().slice(0, 72);
    const centers = [[110, 90], [345, 100], [250, 235]];
    const draw = () => {
      const softness = Number(softnessInput.value) / 20;
      const { ctx, width, height } = sizeCanvas(canvas, 320);
      const sx = width / 520;
      const sy = height / 330;
      ctx.fillStyle = "#fff";
      ctx.fillRect(0, 0, width, height);
      points.forEach((point) => {
        const weights = centers.map((center) => {
          const d = (point[0] - center[0]) ** 2 + (point[1] - center[1]) ** 2;
          return Math.exp(-d / (1200 * softness));
        });
        const total = weights.reduce((a, b) => a + b, 0) || 1;
        const best = weights.indexOf(Math.max(...weights));
        ctx.globalAlpha = Math.max(.25, weights[best] / total);
        ctx.fillStyle = palette[best];
        ctx.beginPath();
        ctx.arc(point[0] * sx, point[1] * sy, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      });
      centers.forEach((center, index) => {
        ctx.strokeStyle = palette[index];
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(center[0] * sx, center[1] * sy, 65 * sx * softness, 42 * sy * softness, 0, 0, Math.PI * 2);
        ctx.stroke();
      });
      document.querySelector("[data-em-softness-value]").textContent = softness.toFixed(2);
    };
    softnessInput.addEventListener("input", draw);
    draw();
  }

  function init() {
    setupLanguageSwitch();
    initRegression();
    initKMeans();
    initPolynomial();
    initKnn();
    initSvm();
    initTree();
    initEm();
    window.addEventListener("resize", () => {
      drawRegression();
      drawKMeans();
      document.querySelector("[data-poly-degree]")?.dispatchEvent(new Event("input"));
      document.querySelector("[data-knn-k]")?.dispatchEvent(new Event("input"));
      document.querySelector("[data-svm-gamma]")?.dispatchEvent(new Event("input"));
      document.querySelector("[data-tree-depth]")?.dispatchEvent(new Event("input"));
      document.querySelector("[data-em-softness]")?.dispatchEvent(new Event("input"));
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
