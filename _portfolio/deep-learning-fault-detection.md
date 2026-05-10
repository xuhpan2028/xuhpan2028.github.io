---
title: "Deep Learning Fault Detection Research"
title_zh: "深度学习故障检测研究"
excerpt: "GAN-based computer fault detection research with transfer learning and a survey of CNN, RNN, VAE, and reinforcement-learning approaches."
excerpt_zh: "基于 GAN 的计算机故障检测研究，结合迁移学习，并调研 CNN、RNN、VAE 和强化学习方法。"
collection: portfolio
permalink: /portfolio/deep-learning-fault-detection/
badges:
  - en: "Research Notes"
    zh: "研究笔记"
  - en: "Anomaly Detection"
    zh: "异常检测"
  - en: "GAN"
    zh: "GAN"
---

<div class="bilingual-page" data-bilingual-root data-lang="en">
<section class="lang-panel lang-panel--en" lang="en" markdown="1">

This project came from my Imperial College research work on deep learning methods for computer fault detection, with additional project folders found under `~/y3finalproject`. The work combined literature review with GAN-family prototypes for detecting abnormal system behavior using representation learning and generative modeling.

## Research Motivation

Fault detection is often difficult because real failure data is sparse, noisy, and expensive to label. A useful model must distinguish normal operational variation from true abnormal behavior, while adapting across machines or environments where the data distribution can shift.

{% include architecture-flow.html title="Architecture Diagram" steps="Telemetry or fault signals|Normal-behavior representation|GAN/VAE/CNN/RNN models|Anomaly score|Transfer adaptation|Alert or diagnosis output" %}

## Important Algorithms

**GAN-based anomaly detection.** A generative adversarial network contains a generator and discriminator trained against each other. For fault detection, the generator learns the distribution of normal behavior, while the discriminator or reconstruction error can expose samples that do not match the learned normal pattern. This is useful when labeled fault examples are limited.

**Conditional GAN and ACGAN variants.** The project folder includes conditional GAN and auxiliary-classifier GAN implementations. Conditional generation adds label information to the generator and discriminator, while ACGAN adds an auxiliary classification objective so generated samples are tied to class labels more explicitly.

**WGAN training objective.** Wasserstein GAN replaces the original GAN divergence with a Wasserstein-distance-inspired objective. This often improves training stability, which matters when fault classes are rare and the generated distribution must not collapse.

**Transfer learning.** Transfer learning reuses knowledge from a source task or domain to improve learning in a target domain. In fault detection, this matters because one machine, workload, or dataset may have enough data while another does not. Transferring representations can reduce the amount of target-domain data needed.

**CNN feature extraction.** CNNs are effective when fault signals can be represented as spatial or local-pattern data, such as spectrograms, heatmaps, or structured telemetry windows. Convolutions detect local motifs that may correspond to abnormal states.

**RNN sequence modeling.** RNN-style models are useful when the temporal order of events matters. Faults often appear as evolving sequences rather than isolated points, so recurrent models can capture dependencies across time.

**VAE representation learning.** Variational autoencoders learn a compressed latent representation and reconstruct the input. High reconstruction error can indicate an anomalous sample, especially when the VAE is trained primarily on normal behavior.

**Reinforcement-learning perspective.** Reinforcement learning was surveyed as a decision-optimization direction, especially for systems where detection can be tied to actions such as alerting, diagnosis, or adaptive maintenance.

## Algorithm Notes

<details class="algorithm-note">
<summary>Anomaly detection depends on the definition of normal</summary>
<div class="algorithm-note__content" markdown="1">
GAN and VAE approaches work best when the training distribution represents normal behavior clearly. If the normal set contains hidden faults or several incompatible operating modes, reconstruction error and discriminator scores become harder to interpret.
</div>
</details>

<details class="algorithm-note">
<summary>WGAN addresses training instability, not labeling scarcity by itself</summary>
<div class="algorithm-note__content" markdown="1">
The Wasserstein objective can make GAN optimization smoother, but it does not remove the need for representative normal data. In fault detection, stable training and careful dataset construction have to be treated as separate problems.
</div>
</details>

## Outcome

- Surveyed deep learning approaches across generation, sequence modeling, representation learning, and decision optimization.
- Developed a GAN-based direction for computer fault detection.
- Studied how transfer learning can reduce data requirements when moving across environments.

## Technical Stack

GAN, CGAN, ACGAN, WGAN, transfer learning, CNN, RNN, VAE, reinforcement learning, anomaly detection.

</section>
<section class="lang-panel lang-panel--zh" lang="zh" markdown="1">

这个项目来自我在帝国理工关于计算机故障检测深度学习方法的研究，相关项目文件也出现在 `~/y3finalproject`。工作结合文献调研和 GAN 系列原型，用表示学习与生成式建模检测异常系统行为。

## 研究动机

故障检测困难在于真实故障数据稀缺、噪声大且标注成本高。有效模型需要区分正常运行波动和真正异常，同时适应不同机器或环境中的分布变化。

{% include architecture-flow.html title="架构图" steps="遥测或故障信号|正常行为表示|GAN/VAE/CNN/RNN 模型|异常分数|迁移适配|告警或诊断输出" %}

## 重要算法

**GAN 异常检测。** GAN 包含相互博弈的生成器和判别器。用于故障检测时，生成器学习正常行为分布，判别器或重构误差可以暴露不符合正常模式的样本，尤其适合标注故障样本有限的场景。

**Conditional GAN 与 ACGAN。** 项目目录中包含条件 GAN 和辅助分类器 GAN。条件生成把标签信息加入生成器和判别器，ACGAN 再加入辅助分类目标，让生成样本与类别标签绑定更明确。

**WGAN 训练目标。** Wasserstein GAN 用 Wasserstein 距离思想替代原始 GAN 散度，通常能提升训练稳定性。故障类别稀少时，稳定训练和避免模式崩塌非常重要。

**迁移学习。** 迁移学习把源任务或源域知识复用到目标域。故障检测中，不同机器、负载或数据集的数据量差异很大，迁移表示能降低目标域数据需求。

**CNN 特征提取。** 当故障信号可表示成频谱图、热力图或结构化遥测窗口时，CNN 能捕捉局部模式，这些模式可能对应异常状态。

**RNN 序列建模。** 故障往往是逐步演化的序列而不是孤立点。RNN 类模型可以捕捉时间依赖，帮助识别异常发展过程。

**VAE 表示学习。** VAE 学习压缩潜变量并重构输入。若模型主要在正常数据上训练，高重构误差可作为异常信号。

**强化学习视角。** 调研中也关注了把检测与告警、诊断、自适应维护等动作连接起来的决策优化方向。

## 算法笔记

<details class="algorithm-note">
<summary>异常检测取决于对正常状态的定义</summary>
<div class="algorithm-note__content" markdown="1">
GAN 和 VAE 方法在训练分布能清晰代表正常行为时效果最好。如果正常集合中混入隐藏故障，或包含多个互不兼容的运行模式，重构误差和判别器分数都会更难解释。
</div>
</details>

<details class="algorithm-note">
<summary>WGAN 改善训练稳定性，但不能单独解决标注稀缺</summary>
<div class="algorithm-note__content" markdown="1">
Wasserstein 目标可以让 GAN 优化更平滑，但不代表可以不需要有代表性的正常数据。在故障检测中，稳定训练和谨慎构造数据集是两个需要分别处理的问题。
</div>
</details>

## 结果

- 调研了生成、序列建模、表示学习和决策优化方向的深度学习方法。
- 开发了面向计算机故障检测的 GAN 方法方向。
- 研究了迁移学习如何降低跨环境数据需求。

## 技术栈

GAN, CGAN, ACGAN, WGAN, transfer learning, CNN, RNN, VAE, reinforcement learning, anomaly detection.

</section>
</div>
