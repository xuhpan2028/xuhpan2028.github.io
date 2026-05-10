---
layout: archive
title: "AI Simulator"
title_zh: "AI 模拟器"
permalink: /simulator/
author_profile: true
---

<div class="bilingual-page" data-bilingual-root data-lang="en">
  <section class="lang-panel lang-panel--en" lang="en">
    <p>Interactive machine learning demos that run entirely in the browser. These are designed as visual study tools: tune parameters, train step by step, and watch model behavior change.</p>
  </section>
  <section class="lang-panel lang-panel--zh" lang="zh">
    <p>这些机器学习交互演示完全在浏览器中运行。你可以调整参数、逐步训练，并观察模型行为如何变化。</p>
  </section>
</div>

<section class="sim-lab">
  <h2><span data-i18n-en="Linear Regression Trainer" data-i18n-zh="线性回归训练器">Linear Regression Trainer</span></h2>
  <p data-i18n-en="The model learns a line y = wx + b by minimizing mean squared error. Increase the learning rate too much and training becomes unstable; increase noise and the best achievable fit gets worse." data-i18n-zh="模型通过最小化均方误差学习一条直线 y = wx + b。学习率过大会导致训练不稳定；噪声越大，最佳可达到的拟合效果越差。">The model learns a line <code>y = wx + b</code> by minimizing mean squared error. Increase the learning rate too much and training becomes unstable; increase noise and the best achievable fit gets worse.</p>
  <div class="sim-card">
    <canvas data-lr-canvas height="320"></canvas>
    <div class="sim-controls">
      <label><span data-i18n-en="Learning rate" data-i18n-zh="学习率">Learning rate</span> <input data-lr-rate type="range" min="1" max="100" value="24"> <span data-lr-rate-value>0.024</span></label>
      <label><span data-i18n-en="Noise" data-i18n-zh="噪声">Noise</span> <input data-lr-noise type="range" min="0" max="70" value="24"> <span data-lr-noise-value>24</span></label>
      <div class="sim-buttons">
        <button data-lr-step type="button" data-i18n-en="Step" data-i18n-zh="单步">Step</button>
        <button data-lr-run type="button" data-i18n-en="Auto Run" data-i18n-zh="自动运行">Auto Run</button>
        <button data-lr-reset type="button" data-i18n-en="Reset" data-i18n-zh="重置">Reset</button>
        <strong><span data-i18n-en="Loss:" data-i18n-zh="损失：">Loss:</span> <span data-lr-loss>0.000</span></strong>
      </div>
    </div>
  </div>
</section>

<section class="sim-lab">
  <h2><span data-i18n-en="K-Means Clustering" data-i18n-zh="K-Means 聚类">K-Means Clustering</span></h2>
  <p data-i18n-en="K-means repeatedly assigns points to the nearest center and then moves each center to the mean of its assigned points." data-i18n-zh="K-means 会反复把样本分配给最近的中心点，然后把每个中心点移动到所属样本的均值位置。">K-means repeatedly assigns points to the nearest center and then moves each center to the mean of its assigned points.</p>
  <div class="sim-card">
    <canvas data-kmeans-canvas height="320"></canvas>
    <div class="sim-controls">
      <label><span data-i18n-en="Clusters" data-i18n-zh="聚类数">Clusters</span> <input data-kmeans-slider type="range" min="2" max="6" value="4"> K = <span data-kmeans-value>4</span></label>
      <div class="sim-buttons">
        <button data-kmeans-step type="button" data-i18n-en="Step" data-i18n-zh="单步">Step</button>
        <button data-kmeans-run type="button" data-i18n-en="Run" data-i18n-zh="运行" data-i18n-pause-en="Pause" data-i18n-pause-zh="暂停">Run</button>
        <button data-kmeans-reset type="button" data-i18n-en="Reset" data-i18n-zh="重置">Reset</button>
        <strong><span data-i18n-en="Iteration:" data-i18n-zh="迭代：">Iteration:</span> <span data-kmeans-iter>0</span></strong>
        <strong><span data-i18n-en="Inertia:" data-i18n-zh="惯性：">Inertia:</span> <span data-kmeans-inertia>0</span></strong>
      </div>
    </div>
  </div>
</section>
