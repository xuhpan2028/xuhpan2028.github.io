---
title: "Machine Learning Visualization"
title_zh: "机器学习可视化"
excerpt: "Interactive browser labs for classic machine learning algorithms, with bilingual notes and tunable controls."
excerpt_zh: "经典机器学习算法的浏览器交互实验室，包含双语说明和可调参数控件。"
collection: portfolio
permalink: /portfolio/ml-visualization/
badges:
  - en: "Interactive Demo"
    zh: "交互演示"
  - en: "Algorithm Notes"
    zh: "算法笔记"
  - en: "Teaching Hub"
    zh: "教学中心"
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
        <tr>
          <td>Transformer attention</td>
          <td>Inspect token-to-token attention as locality and sharpness change.</td>
          <td>Attention temperature, local/global context.</td>
        </tr>
        <tr>
          <td>RAG retrieval</td>
          <td>Show how a query selects context chunks before answer generation.</td>
          <td>Query intent and retrieval top-k.</td>
        </tr>
        <tr>
          <td>LoRA fine-tuning</td>
          <td>Compare trainable adapter rank with parameter cost and task fit.</td>
          <td>Rank, training steps, expected saturation.</td>
        </tr>
        <tr>
          <td>CNN feature maps</td>
          <td>Reveal how small kernels respond to edges, blur, and sharpening filters.</td>
          <td>Kernel type and activation threshold.</td>
        </tr>
        <tr>
          <td>Speech spectrogram</td>
          <td>Connect pitch/energy patterns to simple speech-intent classification.</td>
          <td>Pitch contour and speaking energy.</td>
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
        <tr>
          <td>Transformer 注意力</td>
          <td>观察局部性和 sharpness 如何改变 token 之间的注意力。</td>
          <td>注意力温度、局部/全局上下文。</td>
        </tr>
        <tr>
          <td>RAG 检索</td>
          <td>展示查询如何先选择上下文片段，再进入回答生成。</td>
          <td>查询意图、检索 top-k。</td>
        </tr>
        <tr>
          <td>LoRA 微调</td>
          <td>比较 adapter rank 对可训练参数量和任务适配度的影响。</td>
          <td>Rank、训练步数、效果饱和。</td>
        </tr>
        <tr>
          <td>CNN 特征图</td>
          <td>展示小卷积核对边缘、模糊和锐化模式的响应。</td>
          <td>卷积核类型、激活阈值。</td>
        </tr>
        <tr>
          <td>语音频谱图</td>
          <td>把音高/能量模式与简单语音意图分类联系起来。</td>
          <td>音高轮廓、说话能量。</td>
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

  <section class="algorithm-notes" aria-labelledby="algorithm-notes-title">
    <h2 id="algorithm-notes-title"><span data-i18n-en="Algorithm Notes" data-i18n-zh="算法笔记">Algorithm Notes</span></h2>

    <details class="algorithm-note">
      <summary><span data-i18n-en="K-means: why K is not just a slider" data-i18n-zh="K-means：为什么 K 不只是一个滑块">K-means: why K is not just a slider</span></summary>
      <div class="algorithm-note__content">
        <p data-i18n-en="K-means optimizes compact spherical clusters, so a lower inertia is not automatically a better model. Increasing K almost always lowers inertia; the useful question is whether the new centroid explains real structure or only splits one natural group into smaller pieces." data-i18n-zh="K-means 优化的是紧凑的球状簇，因此 inertia 更低不一定代表模型更好。增大 K 通常都会降低 inertia，关键问题是新增中心点是否解释了真实结构，还是只是把一个自然簇拆得更碎。">K-means optimizes compact spherical clusters, so a lower inertia is not automatically a better model. Increasing K almost always lowers inertia; the useful question is whether the new centroid explains real structure or only splits one natural group into smaller pieces.</p>
      </div>
    </details>

    <details class="algorithm-note">
      <summary><span data-i18n-en="SVM: gamma controls locality" data-i18n-zh="SVM：gamma 控制局部性">SVM: gamma controls locality</span></summary>
      <div class="algorithm-note__content">
        <p data-i18n-en="With an RBF kernel, gamma controls how quickly similarity decays with distance. Low gamma produces broad influence and smoother boundaries; high gamma lets individual points shape tight local regions, which can fit training data well while generalizing poorly." data-i18n-zh="在 RBF 核中，gamma 控制相似度随距离衰减的速度。低 gamma 让样本影响更宽、边界更平滑；高 gamma 让单个样本形成很局部的区域，可能训练集效果好但泛化差。">With an RBF kernel, gamma controls how quickly similarity decays with distance. Low gamma produces broad influence and smoother boundaries; high gamma lets individual points shape tight local regions, which can fit training data well while generalizing poorly.</p>
      </div>
    </details>

    <details class="algorithm-note">
      <summary><span data-i18n-en="RAG: retrieval quality caps answer quality" data-i18n-zh="RAG：检索质量决定回答上限">RAG: retrieval quality caps answer quality</span></summary>
      <div class="algorithm-note__content">
        <p data-i18n-en="A generation model cannot reliably use facts that never enter its context window. In RAG systems, top-k, chunk size, embedding quality, and reranking often matter as much as the final prompt because they decide what evidence the model can see." data-i18n-zh="生成模型无法稳定利用没有进入上下文窗口的事实。在 RAG 系统中，top-k、切块大小、embedding 质量和 rerank 往往和最终 prompt 一样关键，因为它们决定模型能看到什么证据。">A generation model cannot reliably use facts that never enter its context window. In RAG systems, top-k, chunk size, embedding quality, and reranking often matter as much as the final prompt because they decide what evidence the model can see.</p>
      </div>
    </details>

    <details class="algorithm-note">
      <summary><span data-i18n-en="LoRA: rank is capacity, not free accuracy" data-i18n-zh="LoRA：rank 是容量，不是免费精度">LoRA: rank is capacity, not free accuracy</span></summary>
      <div class="algorithm-note__content">
        <p data-i18n-en="LoRA constrains the update matrix to a low-rank product. Raising rank gives the adapter more expressive power, but also more trainable parameters and a higher risk of memorizing a narrow dataset. The useful rank is the smallest one that captures the task shift." data-i18n-zh="LoRA 把权重更新限制为低秩矩阵乘积。提高 rank 会增加 adapter 表达能力，但也增加可训练参数和记忆小数据集的风险。合适的 rank 通常是能覆盖任务变化的最小值。">LoRA constrains the update matrix to a low-rank product. Raising rank gives the adapter more expressive power, but also more trainable parameters and a higher risk of memorizing a narrow dataset. The useful rank is the smallest one that captures the task shift.</p>
      </div>
    </details>
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

  <section class="sim-lab">
    <h2><span data-i18n-en="Transformer Attention Visualizer" data-i18n-zh="Transformer 注意力可视化">Transformer Attention Visualizer</span></h2>
    <p data-i18n-en="The heatmap approximates how a self-attention head redistributes focus across tokens. Lower temperature creates sharp attention; higher context bias makes nearby tokens dominate." data-i18n-zh="这个热力图近似展示一个 self-attention head 如何在 token 之间分配注意力。温度越低，注意力越尖锐；局部偏置越强，附近 token 越占主导。">The heatmap approximates how a self-attention head redistributes focus across tokens. Lower temperature creates sharp attention; higher context bias makes nearby tokens dominate.</p>
    <div class="sim-card">
      <canvas data-attention-canvas height="320"></canvas>
      <div class="sim-controls">
        <label><span data-i18n-en="Temperature" data-i18n-zh="温度">Temperature</span> <input data-attention-temp type="range" min="8" max="90" value="34"> <span data-attention-temp-value>0.34</span></label>
        <label><span data-i18n-en="Local bias" data-i18n-zh="局部偏置">Local bias</span> <input data-attention-local type="range" min="0" max="100" value="36"> <span data-attention-local-value>36%</span></label>
      </div>
    </div>
  </section>

  <section class="sim-lab">
    <h2><span data-i18n-en="RAG Retrieval Playground" data-i18n-zh="RAG 检索实验">RAG Retrieval Playground</span></h2>
    <p data-i18n-en="Retrieval-augmented generation works only if the right chunks are pulled before generation. Move the query intent slider to watch the top documents change." data-i18n-zh="RAG 的效果取决于生成前是否检索到正确片段。拖动查询意图滑块，可以看到 top 文档如何变化。">Retrieval-augmented generation works only if the right chunks are pulled before generation. Move the query intent slider to watch the top documents change.</p>
    <div class="sim-card">
      <canvas data-rag-canvas height="320"></canvas>
      <div class="sim-controls">
        <label><span data-i18n-en="Query intent" data-i18n-zh="查询意图">Query intent</span> <input data-rag-intent type="range" min="0" max="100" value="35"> <span data-rag-intent-label>LLM systems</span></label>
        <label><span data-i18n-en="Top-k" data-i18n-zh="Top-k">Top-k</span> <input data-rag-topk type="range" min="1" max="5" value="3"> <span data-rag-topk-value>3</span></label>
      </div>
      <p class="sim-note"><strong><span data-i18n-en="Retrieved context" data-i18n-zh="检索上下文">Retrieved context</span>:</strong> <span data-rag-context></span></p>
    </div>
  </section>

  <section class="sim-lab">
    <h2><span data-i18n-en="LoRA Fine-Tuning Intuition" data-i18n-zh="LoRA 微调直觉">LoRA Fine-Tuning Intuition</span></h2>
    <p data-i18n-en="LoRA trains small low-rank adapters instead of updating every base-model weight. Higher rank increases capacity and trainable parameters, but gains eventually saturate." data-i18n-zh="LoRA 训练低秩 adapter，而不是更新基础模型的全部权重。Rank 越高容量和可训练参数越多，但收益会逐渐饱和。">LoRA trains small low-rank adapters instead of updating every base-model weight. Higher rank increases capacity and trainable parameters, but gains eventually saturate.</p>
    <div class="sim-card">
      <canvas data-lora-canvas height="320"></canvas>
      <div class="sim-controls">
        <label><span data-i18n-en="Adapter rank" data-i18n-zh="Adapter rank">Adapter rank</span> <input data-lora-rank type="range" min="1" max="32" value="8"> r = <span data-lora-rank-value>8</span></label>
        <label><span data-i18n-en="Training steps" data-i18n-zh="训练步数">Training steps</span> <input data-lora-steps type="range" min="10" max="300" value="120"> <span data-lora-steps-value>120</span></label>
      </div>
    </div>
  </section>

  <section class="sim-lab">
    <h2><span data-i18n-en="CNN Feature-Map Viewer" data-i18n-zh="CNN 特征图查看器">CNN Feature-Map Viewer</span></h2>
    <p data-i18n-en="A convolution kernel is a local pattern detector. Change the kernel and threshold to see how a simple image turns into an activation map." data-i18n-zh="卷积核本质上是局部模式检测器。切换卷积核和阈值，可以看到一张简单图像如何变成激活图。">A convolution kernel is a local pattern detector. Change the kernel and threshold to see how a simple image turns into an activation map.</p>
    <div class="sim-card">
      <canvas data-cnn-canvas height="320"></canvas>
      <div class="sim-controls">
        <label><span data-i18n-en="Kernel" data-i18n-zh="卷积核">Kernel</span> <input data-cnn-kernel type="range" min="0" max="2" value="0"> <span data-cnn-kernel-label>Edge</span></label>
        <label><span data-i18n-en="Threshold" data-i18n-zh="阈值">Threshold</span> <input data-cnn-threshold type="range" min="0" max="80" value="18"> <span data-cnn-threshold-value>18</span></label>
      </div>
    </div>
  </section>

  <section class="sim-lab">
    <h2><span data-i18n-en="Speech Spectrogram Classifier" data-i18n-zh="语音频谱分类器">Speech Spectrogram Classifier</span></h2>
    <p data-i18n-en="Speech models often see spectrogram-like time-frequency features. Adjust pitch and energy to see how a toy classifier shifts between statement, question, and emphasis." data-i18n-zh="语音模型通常使用类似频谱图的时间-频率特征。调节音高和能量，观察玩具分类器如何在陈述、疑问和强调之间切换。">Speech models often see spectrogram-like time-frequency features. Adjust pitch and energy to see how a toy classifier shifts between statement, question, and emphasis.</p>
    <div class="sim-card">
      <canvas data-speech-canvas height="320"></canvas>
      <div class="sim-controls">
        <label><span data-i18n-en="Pitch rise" data-i18n-zh="音高上扬">Pitch rise</span> <input data-speech-pitch type="range" min="0" max="100" value="58"> <span data-speech-pitch-value>58%</span></label>
        <label><span data-i18n-en="Energy" data-i18n-zh="能量">Energy</span> <input data-speech-energy type="range" min="10" max="100" value="62"> <span data-speech-energy-value>62%</span></label>
      </div>
      <p class="sim-note"><strong><span data-i18n-en="Prediction" data-i18n-zh="预测">Prediction</span>:</strong> <span data-speech-prediction></span></p>
    </div>
  </section>

  <section class="lang-panel lang-panel--en" lang="en">
    <h2 id="roadmap-snapshot">Roadmap snapshot</h2>
    <ol>
      <li>Split the modern AI labs into dedicated pages when each demo has enough explanation.</li>
      <li>Connect the Transformer, RAG, LoRA, CNN, and speech demos back to relevant internship and USC project pages.</li>
      <li>Keep the implementations lightweight enough to run on GitHub Pages without a backend.</li>
    </ol>
  </section>

  <section class="lang-panel lang-panel--zh" lang="zh">
    <h2 id="roadmap-snapshot-zh">后续规划</h2>
    <ol>
      <li>当现代 AI demo 的解释足够完整后，拆分为独立页面。</li>
      <li>把 Transformer、RAG、LoRA、CNN 和语音 demo 与实习和 USC 项目页面对应起来。</li>
      <li>保持纯前端实现，让页面可以直接部署在 GitHub Pages 上。</li>
    </ol>
  </section>
</div>
