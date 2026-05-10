---
title: "Polynomial Regression"
title_zh: "多项式回归"
excerpt: "Interactive polynomial regression demo for basis expansion, overfitting, and ridge regularization."
excerpt_zh: "用于理解基函数展开、过拟合和 Ridge 正则的多项式回归交互演示。"
collection: portfolio
permalink: /portfolio/ml-visualization/polynomial-regression/
---

<div class="bilingual-page" data-bilingual-root data-lang="en">
  <section class="lang-panel lang-panel--en" lang="en">
    <p>Polynomial regression extends linear regression by replacing the raw input with powers of the input. The model is still linear in its parameters, but the curve can bend as the degree increases.</p>
    <h2>Algorithm intuition</h2>
    <ul>
      <li><strong>Basis expansion:</strong> a scalar input becomes <code>[1, x, x^2, ...]</code>.</li>
      <li><strong>Least squares:</strong> coefficients minimize squared prediction error over the training points.</li>
      <li><strong>Ridge regularization:</strong> a penalty on large coefficients stabilizes high-degree curves.</li>
    </ul>
  </section>
  <section class="lang-panel lang-panel--zh" lang="zh">
    <p>多项式回归把输入扩展成多个幂次特征。模型对参数仍然是线性的，但随着阶数增加，拟合曲线可以变得更弯曲。</p>
    <h2>算法直觉</h2>
    <ul>
      <li><strong>基函数展开：</strong> 把标量输入变成 <code>[1, x, x^2, ...]</code>。</li>
      <li><strong>最小二乘：</strong> 通过最小化平方误差求解系数。</li>
      <li><strong>Ridge 正则：</strong> 惩罚过大的系数，让高阶曲线更稳定。</li>
    </ul>
  </section>

  <section class="sim-lab">
    <h2><span data-i18n-en="Polynomial fit" data-i18n-zh="多项式拟合">Polynomial fit</span></h2>
    <div class="sim-card">
      <canvas data-poly-canvas height="320"></canvas>
      <div class="sim-controls">
        <label><span data-i18n-en="Degree" data-i18n-zh="阶数">Degree</span> <input data-poly-degree type="range" min="1" max="10" value="3"> <span data-poly-degree-value>3</span></label>
        <label><span data-i18n-en="Ridge" data-i18n-zh="Ridge 正则">Ridge</span> <input data-poly-ridge type="range" min="0" max="80" value="10"> <span data-poly-ridge-value>0.20</span></label>
      </div>
    </div>
  </section>
</div>
