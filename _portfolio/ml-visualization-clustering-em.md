---
title: "Clustering, GMMs & EM"
title_zh: "聚类、GMM 与 EM"
excerpt: "Interactive clustering lab comparing hard K-means assignments with soft Gaussian mixture responsibilities."
excerpt_zh: "比较 K-means 硬分配和高斯混合软责任的聚类交互实验室。"
collection: portfolio
permalink: /portfolio/ml-visualization/clustering-em/
badges:
  - en: "Interactive Demo"
    zh: "交互演示"
  - en: "Algorithm Notes"
    zh: "算法笔记"
  - en: "Clustering"
    zh: "聚类"
---

<div class="bilingual-page" data-bilingual-root data-lang="en">
  <section class="lang-panel lang-panel--en" lang="en">
    <p>K-means uses hard assignments: every point belongs to exactly one cluster. Gaussian mixture models use soft responsibilities: a point can partially belong to multiple components.</p>
    <h2>Algorithm intuition</h2>
    <ul>
      <li><strong>K-means:</strong> assign to nearest centroid, then move each centroid to its assigned mean.</li>
      <li><strong>EM:</strong> estimate responsibilities in the E-step, then update component parameters in the M-step.</li>
      <li><strong>Softness:</strong> larger covariance creates more overlap between mixture components.</li>
    </ul>
  </section>
  <section class="lang-panel lang-panel--zh" lang="zh">
    <p>K-means 使用硬分配：每个点只属于一个簇。高斯混合模型使用软分配：一个点可以同时部分属于多个高斯成分。</p>
    <h2>算法直觉</h2>
    <ul>
      <li><strong>K-means：</strong> 分配到最近中心点，再把中心点移动到样本均值。</li>
      <li><strong>EM：</strong> E 步估计责任权重，M 步更新模型参数。</li>
      <li><strong>Softness：</strong> 协方差越大，成分之间重叠越明显。</li>
    </ul>
  </section>

  <section class="algorithm-notes">
    <details class="algorithm-note">
      <summary><span data-i18n-en="Hard clusters vs. probabilistic responsibility" data-i18n-zh="硬聚类与概率责任">Hard clusters vs. probabilistic responsibility</span></summary>
      <div class="algorithm-note__content">
        <p data-i18n-en="K-means commits each point to one centroid, so uncertainty disappears after assignment. EM keeps a responsibility vector, which is more informative when clusters overlap or when a sample lies near a boundary between components." data-i18n-zh="K-means 会把每个样本直接分给一个中心点，分配后不确定性消失。EM 保留责任向量，当簇有重叠或样本位于成分边界附近时，这种表示更有信息量。">K-means commits each point to one centroid, so uncertainty disappears after assignment. EM keeps a responsibility vector, which is more informative when clusters overlap or when a sample lies near a boundary between components.</p>
      </div>
    </details>
  </section>

  <section class="sim-lab">
    <h2><span data-i18n-en="GMM responsibilities" data-i18n-zh="GMM 软责任">GMM responsibilities</span></h2>
    <div class="sim-card">
      <canvas data-em-canvas height="320"></canvas>
      <div class="sim-controls">
        <label><span data-i18n-en="Softness" data-i18n-zh="软分配强度">Softness</span> <input data-em-softness type="range" min="5" max="45" value="20"> <span data-em-softness-value>1.00</span></label>
      </div>
    </div>
  </section>
</div>
