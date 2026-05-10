---
title: "Decision Trees & Boosting"
title_zh: "决策树与 Boosting"
excerpt: "Interactive tree split and boosting-style boundary visualization."
excerpt_zh: "决策树划分和 Boosting 风格边界的交互式可视化。"
collection: portfolio
permalink: /portfolio/ml-visualization/decision-trees-boosting/
badges:
  - en: "Interactive Demo"
    zh: "交互演示"
  - en: "Algorithm Notes"
    zh: "算法笔记"
  - en: "Boosting"
    zh: "提升方法"
---

<div class="bilingual-page" data-bilingual-root data-lang="en">
  <section class="lang-panel lang-panel--en" lang="en">
    <p>Decision trees build predictions through axis-aligned splits. Boosting combines many weak trees or stumps so later rounds focus on mistakes made by earlier rounds.</p>
    <h2>Algorithm intuition</h2>
    <ul>
      <li><strong>Greedy splits:</strong> each split tries to reduce impurity in the child regions.</li>
      <li><strong>Depth:</strong> deeper trees fit more detail but can overfit.</li>
      <li><strong>Boosting:</strong> repeated weak learners refine the boundary over multiple rounds.</li>
    </ul>
  </section>
  <section class="lang-panel lang-panel--zh" lang="zh">
    <p>决策树通过一系列轴对齐划分进行预测。Boosting 会组合多个弱分类器，让后续轮次重点修正前面轮次的错误。</p>
    <h2>算法直觉</h2>
    <ul>
      <li><strong>贪心划分：</strong> 每次划分尽量降低子区域的不纯度。</li>
      <li><strong>树深度：</strong> 更深的树能拟合更多细节，但更容易过拟合。</li>
      <li><strong>Boosting：</strong> 多轮弱学习器逐步修正决策边界。</li>
    </ul>
  </section>

  <section class="algorithm-notes">
    <details class="algorithm-note">
      <summary><span data-i18n-en="Greedy splits are local decisions" data-i18n-zh="贪心划分是局部决策">Greedy splits are local decisions</span></summary>
      <div class="algorithm-note__content">
        <p data-i18n-en="A tree split is chosen because it improves impurity immediately, not because it is globally optimal for the whole tree. Boosting partly compensates for this by adding later weak learners that focus on the residual mistakes." data-i18n-zh="决策树选择某个划分，是因为它能立即降低不纯度，而不是保证整棵树全局最优。Boosting 通过后续弱学习器关注残余错误，部分弥补这种局部决策。">A tree split is chosen because it improves impurity immediately, not because it is globally optimal for the whole tree. Boosting partly compensates for this by adding later weak learners that focus on the residual mistakes.</p>
      </div>
    </details>
  </section>

  <section class="sim-lab">
    <h2><span data-i18n-en="Tree boundary" data-i18n-zh="决策树边界">Tree boundary</span></h2>
    <div class="sim-card">
      <canvas data-tree-canvas height="320"></canvas>
      <div class="sim-controls">
        <label><span data-i18n-en="Depth" data-i18n-zh="深度">Depth</span> <input data-tree-depth type="range" min="1" max="4" value="2"> <span data-tree-depth-value>2</span></label>
        <label><span data-i18n-en="Rounds" data-i18n-zh="轮数">Rounds</span> <input data-boost-rounds type="range" min="1" max="8" value="3"> <span data-boost-rounds-value>3</span></label>
      </div>
    </div>
  </section>
</div>
