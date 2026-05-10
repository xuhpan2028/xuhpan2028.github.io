---
title: "KNN Interactive Lab"
title_zh: "KNN 交互实验室"
excerpt: "Interactive K-nearest-neighbors classifier showing local voting and decision boundary changes."
excerpt_zh: "展示局部投票和决策边界变化的 K 近邻分类器交互演示。"
collection: portfolio
permalink: /portfolio/ml-visualization/knn/
---

<div class="bilingual-page" data-bilingual-root data-lang="en">
  <section class="lang-panel lang-panel--en" lang="en">
    <p>K-nearest neighbors is a lazy learning algorithm: training stores examples, and prediction happens by looking up the closest labeled points at inference time.</p>
    <h2>Algorithm intuition</h2>
    <ul>
      <li><strong>Distance metric:</strong> this demo uses Euclidean distance.</li>
      <li><strong>Voting:</strong> the predicted class is the majority class among the nearest K samples.</li>
      <li><strong>K tradeoff:</strong> small K creates flexible boundaries; large K smooths local noise but may underfit.</li>
    </ul>
  </section>
  <section class="lang-panel lang-panel--zh" lang="zh">
    <p>KNN 是一种惰性学习算法：训练阶段主要保存样本，预测时再查找距离最近的已标注点。</p>
    <h2>算法直觉</h2>
    <ul>
      <li><strong>距离度量：</strong> 当前 demo 使用欧氏距离。</li>
      <li><strong>投票：</strong> 预测类别由最近 K 个样本的多数类别决定。</li>
      <li><strong>K 值权衡：</strong> 小 K 边界更灵活，大 K 更平滑但可能欠拟合。</li>
    </ul>
  </section>

  <section class="sim-lab">
    <h2><span data-i18n-en="KNN boundary" data-i18n-zh="KNN 决策边界">KNN boundary</span></h2>
    <div class="sim-card">
      <canvas data-knn-canvas height="320"></canvas>
      <div class="sim-controls">
        <label><span data-i18n-en="K" data-i18n-zh="K 值">K</span> <input data-knn-k type="range" min="1" max="15" step="2" value="5"> <span data-knn-k-value>5</span></label>
      </div>
    </div>
  </section>
</div>
