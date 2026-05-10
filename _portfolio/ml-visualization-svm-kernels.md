---
title: "SVM & Kernel Methods"
title_zh: "SVM 与核方法"
excerpt: "Interactive kernel classification demo for margin-style separation and RBF locality."
excerpt_zh: "用于理解间隔分类和 RBF 局部性的核分类交互演示。"
collection: portfolio
permalink: /portfolio/ml-visualization/svm-kernels/
---

<div class="bilingual-page" data-bilingual-root data-lang="en">
  <section class="lang-panel lang-panel--en" lang="en">
    <p>Support vector machines search for a separating boundary with strong margin behavior. Kernel methods make nonlinear boundaries possible by comparing points through a similarity function instead of an explicit feature map.</p>
    <h2>Algorithm intuition</h2>
    <ul>
      <li><strong>Margin:</strong> a good boundary separates classes while staying away from the closest examples.</li>
      <li><strong>RBF kernel:</strong> nearby points have high similarity, while distant points have little influence.</li>
      <li><strong>Gamma:</strong> higher gamma makes the boundary more local and flexible.</li>
    </ul>
  </section>
  <section class="lang-panel lang-panel--zh" lang="zh">
    <p>SVM 寻找具有大间隔性质的分类边界。核方法通过相似度函数实现非线性边界，而不必显式构造高维特征。</p>
    <h2>算法直觉</h2>
    <ul>
      <li><strong>间隔：</strong> 好的边界不仅分开类别，还尽量远离最接近的样本。</li>
      <li><strong>RBF 核：</strong> 近距离样本相似度高，远距离样本影响小。</li>
      <li><strong>Gamma：</strong> gamma 越高，边界越局部、越灵活。</li>
    </ul>
  </section>

  <section class="sim-lab">
    <h2><span data-i18n-en="Kernel boundary" data-i18n-zh="核方法决策边界">Kernel boundary</span></h2>
    <div class="sim-card">
      <canvas data-svm-canvas height="320"></canvas>
      <div class="sim-controls">
        <label><span data-i18n-en="Gamma" data-i18n-zh="Gamma">Gamma</span> <input data-svm-gamma type="range" min="1" max="90" value="28"> <span data-svm-gamma-value>0.003</span></label>
        <label><span data-i18n-en="C" data-i18n-zh="C 值">C</span> <input data-svm-c type="range" min="10" max="100" value="50"> <span data-svm-c-value>1.0</span></label>
      </div>
    </div>
  </section>
</div>
