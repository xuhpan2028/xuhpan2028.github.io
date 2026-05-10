---
title: "Computer Vision K-Means Lab"
title_zh: "计算机视觉 K-Means 实验"
excerpt: "Texture classification, segmentation, SIFT matching, and Bag-of-Words codebooks with K-means."
excerpt_zh: "使用 K-means 完成纹理分类、图像分割、SIFT 匹配和 Bag-of-Words 码本构建。"
collection: portfolio
permalink: /portfolio/computer-vision-kmeans/
badges:
  - en: "Course Project"
    zh: "课程项目"
  - en: "Classic CV"
    zh: "传统计算机视觉"
  - en: "Algorithm Notes"
    zh: "算法笔记"
---

<div class="bilingual-page" data-bilingual-root data-lang="en">
<section class="lang-panel lang-panel--en" lang="en" markdown="1">

This USC EE569 project connected classical computer vision feature engineering with unsupervised learning and classifier comparison.

The project was useful because it forced the full classical vision pipeline to be explicit: create features by hand, reduce or cluster those features, then compare how unsupervised and supervised methods behave on texture and matching tasks.

{% include architecture-flow.html title="Architecture Diagram" steps="Image dataset|Texture/SIFT features|PCA projection|K-means codebook|SVM comparison|Segmentation or matching output" %}

## Feature Pipeline

- Built 25-dimensional Laws energy texture features from filter responses.
- Applied PCA to compare the original feature space with reduced 3D representations.
- Used K-means and SVM for texture classification.
- Performed K-means segmentation on 24-dimensional texture features.
- Built an 8-bin SIFT Bag-of-Words codebook using K-means.

## Important Algorithms

**Laws texture energy.** Laws filters capture local micro-patterns such as level, edge, spot, ripple, and wave responses. After filtering, local energy aggregation turns pixel neighborhoods into texture descriptors. This is useful for texture classification because it converts raw intensity patterns into a compact signal about local structure.

**PCA dimensionality reduction.** PCA finds orthogonal directions with maximum variance. In this project it helped answer whether the texture classes were separable in a lower-dimensional representation. The reduced 3D view was also useful for interpreting whether K-means clusters were aligned with the handcrafted feature space.

**K-means clustering.** K-means alternates between assigning each sample to its nearest centroid and updating each centroid as the mean of assigned samples. I used it in two ways: texture classification through feature clustering, and image segmentation where each pixel or region is assigned to a texture cluster.

**SVM classification.** SVM was used as the supervised comparison point. Unlike K-means, which does not use labels during fitting, SVM learns a decision boundary that maximizes margin between labeled classes. Comparing both methods made the tradeoff between unsupervised structure and supervised discrimination clear.

**SIFT Bag-of-Words.** SIFT descriptors were quantized into an 8-bin visual vocabulary using K-means. Each image can then be represented by a histogram of visual-word occurrences, which turns local keypoint descriptors into a fixed-length feature vector for matching or classification.

## Algorithm Notes

<details class="algorithm-note">
<summary>K-means is sensitive to feature scale</summary>
<div class="algorithm-note__content" markdown="1">
Texture energy, PCA coordinates, and SIFT descriptors can live on different numeric scales. Before K-means, normalization is not just preprocessing polish; it changes the geometry of the nearest-centroid assignment and can decide which visual patterns become codebook words.
</div>
</details>

<details class="algorithm-note">
<summary>Bag-of-Words trades geometry for a compact histogram</summary>
<div class="algorithm-note__content" markdown="1">
The SIFT Bag-of-Words pipeline ignores exact keypoint layout after quantization. That makes image comparison simple and robust to local changes, but it also loses spatial relationships that would be useful for fine-grained matching.
</div>
</details>

## Technical Stack

K-means, PCA, SVM, SIFT, Laws features, MATLAB, image segmentation.

</section>
<section class="lang-panel lang-panel--zh" lang="zh" markdown="1">

这个 USC EE569 项目把传统计算机视觉特征工程、无监督学习和分类器对比连接在一起。

项目价值在于把完整的传统视觉管线显式展开：手工构造特征，降维或聚类，然后比较无监督和监督方法在纹理与匹配任务上的表现。

{% include architecture-flow.html title="架构图" steps="图像数据集|纹理/SIFT 特征|PCA 投影|K-means 码本|SVM 对比|分割或匹配输出" %}

## 特征流程

- 从滤波响应构建 25 维 Laws 能量纹理特征。
- 使用 PCA 比较原始特征空间和降到 3 维后的表示。
- 使用 K-means 和 SVM 做纹理分类。
- 在 24 维纹理特征上执行 K-means 分割。
- 使用 K-means 构建 8-bin SIFT Bag-of-Words 码本。

## 重要算法

**Laws 纹理能量。** Laws 滤波器捕捉局部的 level、edge、spot、ripple、wave 等微结构。滤波后通过局部能量聚合把像素邻域变成纹理描述符，适合把原始灰度模式转成紧凑结构信号。

**PCA 降维。** PCA 寻找方差最大的正交方向。本项目用它判断纹理类别是否能在低维表示中分离，并辅助解释 K-means 聚类是否与手工特征空间一致。

**K-means 聚类。** K-means 在“分配样本到最近中心”和“用样本均值更新中心”之间交替。本项目中它既用于特征聚类式纹理分类，也用于给像素或区域分配纹理簇的图像分割。

**SVM 分类。** SVM 是监督对比方法。与不使用标签的 K-means 不同，SVM 学习最大化类别间隔的决策边界，对比两者能清楚体现无监督结构与监督判别能力的差异。

**SIFT Bag-of-Words。** SIFT 描述子通过 K-means 量化成 8 个视觉词，每张图像再表示为视觉词直方图，把局部关键点描述转成固定长度特征向量。

## 算法笔记

<details class="algorithm-note">
<summary>K-means 对特征尺度敏感</summary>
<div class="algorithm-note__content" markdown="1">
纹理能量、PCA 坐标和 SIFT 描述子可能处在不同数值尺度上。K-means 前的归一化不只是预处理细节；它会改变最近中心分配的几何结构，并影响哪些视觉模式成为码本词。
</div>
</details>

<details class="algorithm-note">
<summary>Bag-of-Words 用紧凑直方图换取空间信息</summary>
<div class="algorithm-note__content" markdown="1">
SIFT Bag-of-Words 在量化后忽略关键点的精确空间布局。这让图像比较更简单，也更能容忍局部变化，但会损失对细粒度匹配有用的空间关系。
</div>
</details>

## 技术栈

K-means, PCA, SVM, SIFT, Laws features, MATLAB, image segmentation.

</section>
</div>
