---
title: "Machine Learning Visualization"
title_zh: "机器学习可视化"
excerpt: "Interactive browser labs for classic machine learning algorithms, with bilingual notes and tunable controls."
excerpt_zh: "经典机器学习算法的浏览器交互实验室，包含双语说明和可调参数控件。"
collection: portfolio
permalink: /portfolio/ml-visualization/
---

<div class="bilingual-page mlviz-page" data-bilingual-root data-lang="en">
  <section class="lang-panel lang-panel--en" lang="en">
    <p>Classic machine learning algorithms are easiest to understand when the math is tied to a moving picture. This page is a hands-on hub for small, reproducible visualizations: change a parameter, watch the model update, and connect the animation back to the objective function.</p>

    <h2 id="why-this-hub-exists">Why this hub exists</h2>
    <ul>
      <li><strong>Make theory concrete</strong> by linking each formula to an interactive control.</li>
      <li><strong>Expose failure modes</strong> such as unstable gradient descent, noisy labels, poor initialization, and under-specified cluster counts.</li>
      <li><strong>Reuse the same interface</strong> across portfolio writeups, USC coursework notes, and interview-style algorithm explanations.</li>
    </ul>

    <h2 id="algorithm-gallery">Algorithm gallery</h2>
    <table>
      <thead>
        <tr>
          <th>Algorithm</th>
          <th>Visual goal</th>
          <th>What to tune</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Linear regression</td>
          <td>Show how gradient descent moves a fitted line toward lower mean squared error.</td>
          <td>Learning rate, noise, single-step vs. auto training.</td>
        </tr>
        <tr>
          <td>K-means clustering</td>
          <td>Reveal assignment and centroid updates as the number of clusters changes.</td>
          <td>Cluster count K and resulting inertia.</td>
        </tr>
        <tr>
          <td>PCA and feature reduction</td>
          <td>Project high-dimensional features into compact axes while tracking information loss.</td>
          <td>Number of components, reconstruction error.</td>
        </tr>
        <tr>
          <td>SVM and margin methods</td>
          <td>Visualize support vectors, decision boundary movement, and kernel locality.</td>
          <td>C, gamma, linear vs. RBF kernel.</td>
        </tr>
        <tr>
          <td>Decision trees</td>
          <td>Connect split rules to impurity reduction and overfitting control.</td>
          <td>Depth, min samples, feature choice.</td>
        </tr>
      </tbody>
    </table>

    <h2 id="interactive-labs">Interactive labs</h2>
    <p>The first two demos run entirely in the browser. They are intentionally small and deterministic, so the same input produces the same visual result when you revisit the page.</p>

    <p><a href="/portfolio/ml-visualization/polynomial-regression/">Open the <strong>Polynomial Regression</strong> page -></a> for a browser-side walkthrough of basis expansion, underfitting vs. overfitting, and ridge regularization.</p>

    <p><a href="/portfolio/ml-visualization/knn/">Open the <strong>KNN interactive lab</strong> -></a> for a client-side playground that demonstrates local voting and decision boundary sensitivity.</p>

    <p><a href="/portfolio/ml-visualization/svm-kernels/">Open the <strong>SVM & Kernel Methods</strong> page -></a> for an interactive view of margin-style classification and RBF kernel locality.</p>

    <p><a href="/portfolio/ml-visualization/decision-trees-boosting/">Open the <strong>Decision Trees & Boosting</strong> page -></a> for split visualization and boosting-style boundary refinement.</p>

    <p><a href="/portfolio/ml-visualization/clustering-em/">Open the <strong>Clustering, GMMs & EM</strong> page -></a> for step-by-step K-means updates and a soft-assignment Gaussian mixture view.</p>

    <h2 id="related-projects">Related project pages</h2>
    <ul>
      <li><a href="/portfolio/computer-vision-kmeans/">Computer Vision K-Means Lab</a> links K-means to texture segmentation, PCA, SVM classification, and SIFT Bag-of-Words.</li>
      <li><a href="/portfolio/real-estate-demand/">Real Estate Demand Forecasting</a> explains lag features, boosted trees, TFT experiments, and weighted ensembles.</li>
      <li><a href="/portfolio/multimodal-sarcasm/">Multimodal Sarcasm Recognition</a> covers Transformer encoding, audio/text/video fusion, and macro-F1 evaluation.</li>
      <li><a href="/portfolio/deep-learning-fault-detection/">Deep Learning Fault Detection Research</a> summarizes GAN anomaly detection, transfer learning, CNN/RNN/VAE methods, and RL perspectives.</li>
    </ul>
  </section>

  <section class="lang-panel lang-panel--zh" lang="zh">
    <p>经典机器学习算法最适合用可交互的方式理解：调一个参数，看模型如何变化，再把动画和目标函数对应起来。这个页面是一个轻量的可视化实验室，用来展示算法直觉、失败情况和调参影响。</p>

    <h2 id="why-this-hub-exists-zh">为什么做这个页面</h2>
    <ul>
      <li><strong>把理论变具体</strong>：每个公式都尽量对应一个可以操作的控件。</li>
      <li><strong>展示失败模式</strong>：例如学习率过大、标签噪声、初始化不好、聚类数量设置不合理。</li>
      <li><strong>复用同一套交互框架</strong>：后续可以用于作品集、USC 课程项目总结和面试算法讲解。</li>
    </ul>

    <h2 id="algorithm-gallery-zh">算法展示规划</h2>
    <table>
      <thead>
        <tr>
          <th>算法</th>
          <th>可视化目标</th>
          <th>可调参数</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>线性回归</td>
          <td>展示梯度下降如何让拟合直线逐步降低均方误差。</td>
          <td>学习率、噪声、单步训练与自动训练。</td>
        </tr>
        <tr>
          <td>K-means 聚类</td>
          <td>展示样本分配和中心点更新如何随聚类数量变化。</td>
          <td>聚类数量 K 和对应 inertia。</td>
        </tr>
        <tr>
          <td>PCA 与特征降维</td>
          <td>把高维特征投影到低维空间，同时观察信息损失。</td>
          <td>主成分数量、重建误差。</td>
        </tr>
        <tr>
          <td>SVM 与间隔方法</td>
          <td>展示支持向量、分类边界和核函数局部性的变化。</td>
          <td>C、gamma、线性核与 RBF 核。</td>
        </tr>
        <tr>
          <td>决策树</td>
          <td>把划分规则、纯度提升和过拟合控制联系起来。</td>
          <td>树深度、最小样本数、特征选择。</td>
        </tr>
      </tbody>
    </table>

    <h2 id="interactive-labs-zh">交互实验</h2>
    <p>下面两个 demo 完全在浏览器中运行。数据是确定性的，因此每次打开页面时，相同输入都会得到相同的可视化结果。</p>

    <p><a href="/portfolio/ml-visualization/polynomial-regression/">打开 <strong>Polynomial Regression</strong> 页面 -></a> 查看基函数展开、欠拟合/过拟合和 ridge 正则化。</p>

    <p><a href="/portfolio/ml-visualization/knn/">打开 <strong>KNN interactive lab</strong> -></a> 查看局部投票和决策边界对 K 值的敏感性。</p>

    <p><a href="/portfolio/ml-visualization/svm-kernels/">打开 <strong>SVM & Kernel Methods</strong> 页面 -></a> 查看间隔分类和 RBF 核的局部性。</p>

    <p><a href="/portfolio/ml-visualization/decision-trees-boosting/">打开 <strong>Decision Trees & Boosting</strong> 页面 -></a> 查看划分规则和 boosting 式边界修正。</p>

    <p><a href="/portfolio/ml-visualization/clustering-em/">打开 <strong>Clustering, GMMs & EM</strong> 页面 -></a> 查看 K-means 迭代和 GMM/EM 软分配。</p>

    <h2 id="related-projects-zh">相关项目页面</h2>
    <ul>
      <li><a href="/portfolio/computer-vision-kmeans/">Computer Vision K-Means Lab</a>：把 K-means 和纹理分割、PCA、SVM 分类、SIFT Bag-of-Words 联系起来。</li>
      <li><a href="/portfolio/real-estate-demand/">Real Estate Demand Forecasting</a>：解释滞后特征、树模型、TFT 实验和加权集成。</li>
      <li><a href="/portfolio/multimodal-sarcasm/">Multimodal Sarcasm Recognition</a>：覆盖 Transformer 编码、音频/文本/视频融合和 macro-F1 评估。</li>
      <li><a href="/portfolio/deep-learning-fault-detection/">Deep Learning Fault Detection Research</a>：总结 GAN 异常检测、迁移学习、CNN/RNN/VAE 方法和 RL 视角。</li>
    </ul>
  </section>

  <section class="sim-lab">
    <h2><span data-i18n-en="Linear Regression Trainer" data-i18n-zh="线性回归训练器">Linear Regression Trainer</span></h2>
    <p data-i18n-en="The model learns a line y = wx + b by minimizing mean squared error. Increase the learning rate too much and training becomes unstable; increase noise and the best achievable fit gets worse." data-i18n-zh="模型通过最小化均方误差学习直线 y = wx + b。学习率过大会导致训练不稳定；噪声越大，最优拟合效果也会变差。">The model learns a line y = wx + b by minimizing mean squared error. Increase the learning rate too much and training becomes unstable; increase noise and the best achievable fit gets worse.</p>
    <div class="sim-card">
      <canvas data-lr-canvas height="320"></canvas>
      <div class="sim-controls">
        <label><span data-i18n-en="Learning rate" data-i18n-zh="学习率">Learning rate</span> <input data-lr-rate type="range" min="1" max="100" value="24"> <span data-lr-rate-value>0.024</span></label>
        <label><span data-i18n-en="Noise" data-i18n-zh="噪声">Noise</span> <input data-lr-noise type="range" min="0" max="70" value="24"> <span data-lr-noise-value>24</span></label>
        <div class="sim-buttons">
          <button data-lr-step type="button"><span data-i18n-en="Step" data-i18n-zh="单步">Step</span></button>
          <button data-lr-run type="button" data-label-run-en="Auto Run" data-label-pause-en="Pause" data-label-run-zh="自动训练" data-label-pause-zh="暂停">Auto Run</button>
          <button data-lr-reset type="button"><span data-i18n-en="Reset" data-i18n-zh="重置">Reset</span></button>
          <strong><span data-i18n-en="Loss" data-i18n-zh="损失">Loss</span>: <span data-lr-loss>0.000</span></strong>
        </div>
      </div>
    </div>
  </section>

  <section class="sim-lab">
    <h2><span data-i18n-en="K-Means Clustering" data-i18n-zh="K-Means 聚类">K-Means Clustering</span></h2>
    <p data-i18n-en="K-means repeatedly assigns points to the nearest center and then moves each center to the mean of its assigned points. Use the slider to test whether the chosen K matches the visible data structure." data-i18n-zh="K-means 会反复把样本分配给最近的中心点，然后把中心点移动到所属样本的均值位置。拖动滑块可以观察 K 是否符合数据本身的结构。">K-means repeatedly assigns points to the nearest center and then moves each center to the mean of its assigned points. Use the slider to test whether the chosen K matches the visible data structure.</p>
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

  <section class="lang-panel lang-panel--en" lang="en">
    <h2 id="roadmap-snapshot">Roadmap snapshot</h2>
    <ol>
      <li>Add PCA and SVM labs using the same control language.</li>
      <li>Connect each visualization back to your USC and project experience pages.</li>
      <li>Keep the implementations lightweight enough to run on GitHub Pages without a backend.</li>
    </ol>
  </section>

  <section class="lang-panel lang-panel--zh" lang="zh">
    <h2 id="roadmap-snapshot-zh">后续规划</h2>
    <ol>
      <li>继续加入 PCA 和 SVM 实验，并保持统一的交互控件。</li>
      <li>把每个可视化实验和 USC 课程项目、个人经历页面对应起来。</li>
      <li>保持纯前端实现，让页面可以直接部署在 GitHub Pages 上。</li>
    </ol>
  </section>
</div>
