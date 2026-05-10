(function () {
  const rootSelector = "[data-profile-assistant]";
  const stopwords = new Set([
    "a", "an", "and", "are", "as", "at", "about", "be", "by", "can", "did", "do", "does", "done", "for", "from", "has", "have", "he", "her", "his", "how", "in", "involve", "involves", "is", "it", "me", "of", "on", "or", "project", "projects", "tell", "that", "the", "their", "to", "what", "which", "who", "with", "work", "xuhan", "pan"
  ]);

  const synonymGroups = [
    ["llm", "large language model", "gpt", "qwen", "gemini", "prefix tuning", "prompt tuning", "alignment", "rag", "lora"],
    ["computer vision", "cv", "vision", "image", "images", "sift", "ocr", "paddleocr", "segmentation", "cnn", "camera"],
    ["speech", "tts", "audio", "whisper", "fish-speech", "voice", "spoken", "spectrogram"],
    ["imperial", "imperial college", "icl", "london", "eie"],
    ["usc", "university of southern california", "coursework", "graduate"],
    ["reinforcement learning", "rl", "policy gradient", "game ai"],
    ["forecasting", "time series", "xgboost", "lightgbm", "tft", "demand"],
    ["hardware", "fpga", "verilog", "esp32", "robot", "camera"],
    ["backend", "node.js", "angular", "service", "api"],
    ["research", "paper", "reading", "notes", "alignment", "multimodal", "fine-tuning"]
  ];

  const zhSuggestions = new Map([
    ["Computer vision projects", "计算机视觉项目"],
    ["Imperial College", "帝国理工"],
    ["LLM projects", "大模型项目"],
    ["Speech / TTS", "语音 / TTS"]
  ]);

  let currentLang = localStorage.getItem("site-lang") || "en";
  let docs = [];

  function basePath() {
    const script = document.currentScript?.getAttribute("src") || "";
    const marker = "/assets/js/profile-assistant.js";
    if (script.endsWith(marker)) return script.slice(0, -marker.length);
    return "";
  }

  function normalize(text) {
    return (text || "")
      .toLowerCase()
      .replace(/[^a-z0-9+#.\-\u4e00-\u9fff\s]/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function tokenize(text) {
    return normalize(text)
      .split(" ")
      .filter((token) => token && token.length > 1 && !stopwords.has(token));
  }

  function expandedTerms(question) {
    const normalized = normalize(question);
    const terms = new Set(tokenize(question));

    synonymGroups.forEach((group) => {
      if (group.some((term) => normalized.includes(term))) {
        group.forEach((term) => terms.add(term));
      }
    });

    if (/[\u4e00-\u9fff]/.test(question)) {
      [
        ["计算机视觉", "computer vision", "vision", "image", "ocr", "sift"],
        ["大模型", "llm", "large language model", "gpt", "qwen", "gemini"],
        ["语音", "speech", "tts", "audio", "fish-speech", "whisper"],
        ["帝国理工", "imperial", "imperial college", "icl"],
        ["南加州", "usc", "university of southern california"],
        ["强化学习", "reinforcement learning", "policy gradient"],
        ["研究", "research", "notes", "paper"],
        ["实习", "internship", "tencent", "banying"]
      ].forEach((group) => {
        if (group.some((term) => question.includes(term))) {
          group.forEach((term) => terms.add(term));
        }
      });
    }

    return Array.from(terms);
  }

  function docText(doc) {
    return normalize([
      doc.title,
      doc.title_zh,
      doc.type,
      ...(doc.tags || []),
      doc.summary,
      doc.summary_zh
    ].join(" "));
  }

  function scoreDoc(doc, terms, question) {
    const text = docText(doc);
    const normalizedQuestion = normalize(question);
    let score = 0;
    const matched = new Set();

    terms.forEach((term) => {
      if (!term) return;
      const tagHit = (doc.tags || []).some((tag) => normalize(tag).includes(term) || term.includes(normalize(tag)));
      const titleHit = normalize(doc.title).includes(term) || normalize(doc.title_zh).includes(term);
      const contentHit = text.includes(term);
      if (tagHit) {
        score += term.includes(" ") ? 8 : 5;
        matched.add(term);
      } else if (titleHit) {
        score += term.includes(" ") ? 7 : 4;
        matched.add(term);
      } else if (contentHit) {
        score += term.includes(" ") ? 4 : 2;
        matched.add(term);
      }
    });

    if (normalizedQuestion.includes("project") && doc.type.includes("project")) score += 1;
    if (normalizedQuestion.includes("intern") && doc.type.includes("internship")) score += 4;
    if (normalizedQuestion.includes("research") && doc.type.includes("research")) score += 4;
    if (normalizedQuestion.includes("education") && doc.type.includes("education")) score += 4;

    return { doc, score, matched: Array.from(matched).slice(0, 6) };
  }

  function retrieve(question) {
    const terms = expandedTerms(question);
    return docs
      .map((doc) => scoreDoc(doc, terms, question))
      .filter((item) => item.score >= 3)
      .sort((a, b) => b.score - a.score)
      .slice(0, 5);
  }

  function clear(node) {
    while (node.firstChild) node.removeChild(node.firstChild);
  }

  function makeEl(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function renderEmpty(answerNode) {
    clear(answerNode);
    const text = currentLang === "zh"
      ? "我只基于叙涵的简历、项目页面、研究笔记和时间线回答。这个问题没有找到足够证据。"
      : "I only answer from Xuhan's resume, project pages, research notes, and timeline. I could not find enough evidence for that question.";
    answerNode.appendChild(makeEl("p", "", text));
  }

  function renderLoading(answerNode) {
    clear(answerNode);
    const text = currentLang === "zh" ? "正在检索本地知识库..." : "Searching the local knowledge base...";
    answerNode.appendChild(makeEl("p", "", text));
  }

  function renderAnswer(answerNode, question) {
    const hits = retrieve(question);
    clear(answerNode);

    if (!hits.length) {
      renderEmpty(answerNode);
      return;
    }

    const intro = currentLang === "zh"
      ? "根据叙涵的简历和项目页面，相关内容是："
      : "Based on Xuhan's resume and project pages, the relevant items are:";
    answerNode.appendChild(makeEl("p", "assistant-answer__intro", intro));

    const list = makeEl("ol", "assistant-answer__list");
    hits.forEach(({ doc, matched }) => {
      const item = makeEl("li", "assistant-answer__item");
      const link = makeEl("a", "", currentLang === "zh" ? doc.title_zh : doc.title);
      link.href = doc.url;
      const summary = makeEl("p", "", currentLang === "zh" ? doc.summary_zh : doc.summary);
      const matchedText = matched.length
        ? (currentLang === "zh" ? `匹配关键词：${matched.join(", ")}` : `Matched terms: ${matched.join(", ")}`)
        : "";
      item.appendChild(link);
      item.appendChild(summary);
      if (matchedText) item.appendChild(makeEl("small", "", matchedText));
      list.appendChild(item);
    });
    answerNode.appendChild(list);

    const note = currentLang === "zh"
      ? "说明：这是静态检索助手，不调用外部模型；回答只来自本网站整理的知识库。"
      : "Note: this is a static retrieval assistant. It does not call an external model; answers come only from this site's curated knowledge base.";
    answerNode.appendChild(makeEl("p", "assistant-answer__note", note));
  }

  function updateLanguage(root) {
    currentLang = localStorage.getItem("site-lang") || document.documentElement.getAttribute("data-lang") || "en";
    const input = root.querySelector("[data-assistant-input]");
    if (input) {
      input.placeholder = currentLang === "zh"
        ? "询问叙涵的简历或项目"
        : "Ask a question about Xuhan's resume or projects";
    }
    root.querySelectorAll("[data-assistant-question]").forEach((button) => {
      const en = button.getAttribute("data-assistant-label-en") || button.textContent;
      button.setAttribute("data-assistant-label-en", en);
      button.textContent = currentLang === "zh" ? (zhSuggestions.get(en) || en) : en;
    });
  }

  function initAssistant(root) {
    const form = root.querySelector("[data-assistant-form]");
    const input = root.querySelector("[data-assistant-input]");
    const answer = root.querySelector("[data-assistant-answer]");
    if (!form || !input || !answer) return;

    updateLanguage(root);
    renderLoading(answer);

    fetch(`${basePath()}/assets/data/profile-kb.json`)
      .then((response) => response.json())
      .then((data) => {
        docs = Array.isArray(data) ? data : [];
        clear(answer);
        answer.appendChild(makeEl("p", "", currentLang === "zh" ? "输入问题，或点击上面的示例问题。" : "Ask a question or choose one of the examples above."));
      })
      .catch(() => {
        clear(answer);
        answer.appendChild(makeEl("p", "", currentLang === "zh" ? "知识库加载失败。请检查本地服务器是否正在运行。" : "The knowledge base could not be loaded. Check that the local server is running."));
      });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const question = input.value.trim();
      if (!question) return;
      renderAnswer(answer, question);
    });

    root.querySelectorAll("[data-assistant-question]").forEach((button) => {
      button.addEventListener("click", () => {
        input.value = button.getAttribute("data-assistant-question") || "";
        renderAnswer(answer, input.value);
      });
    });

    document.addEventListener("site-lang-change", () => {
      updateLanguage(root);
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(rootSelector).forEach(initAssistant);
  });
})();
