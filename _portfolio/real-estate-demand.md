---
title: "Real Estate Demand Forecasting"
title_zh: "房地产需求预测"
excerpt: "Time-series demand prediction with lag features, tree models, TFT experiments, and ensemble weighting."
excerpt_zh: "使用滞后特征、树模型、TFT 实验和加权集成进行时间序列需求预测。"
collection: portfolio
permalink: /portfolio/real-estate-demand/
badges:
  - en: "Course Project"
    zh: "课程项目"
  - en: "Forecasting"
    zh: "预测建模"
  - en: "Ensemble Modeling"
    zh: "集成建模"
---

<div class="bilingual-page" data-bilingual-root data-lang="en">
<section class="lang-panel lang-panel--en" lang="en" markdown="1">

This USC project explored demand forecasting for real estate transaction data. The strongest results came from pragmatic model selection: tree-based models and weighted ensembles handled tabular seasonal behavior better than direct neural forecasting.

The central lesson was that forecasting is not automatically a deep learning problem. Real estate demand has lag effects, calendar structure, and local volatility, so the feature design and validation setup were more important than choosing the most complex model.

## Forecasting Pipeline

- Built lag and rolling-window features for monthly demand prediction.
- Compared XGBoost, LightGBM, seasonal baselines, two-stage models, and TFT variants.
- Used validation feedback to design weighted ensembles.
- Learned that data behavior should drive model complexity.

{% include architecture-flow.html title="Architecture Diagram" steps="Transaction history|Lag/rolling features|Time-series validation|XGBoost/LightGBM/TFT|Weighted ensemble|Demand forecast" %}

## Important Algorithms

**Lag features.** Lag features convert past observations into supervised inputs, such as demand one month ago, three months ago, or one year ago. They are strong baselines for real estate because recent demand and seasonality often explain a large part of future behavior.

**Rolling-window statistics.** Rolling means, volatility, and trend indicators summarize local history. These features help models distinguish a short spike from a sustained demand shift.

**Gradient-boosted decision trees.** XGBoost and LightGBM build ensembles of weak decision trees, each correcting residual errors from earlier trees. They are effective for tabular forecasting because they capture nonlinear interactions between time, location, lag, and market variables without heavy preprocessing.

**Temporal Fusion Transformer.** TFT was tested as a neural forecasting approach with attention over temporal inputs. It is powerful when there is enough data and useful covariates, but this project showed that direct neural forecasting can underperform simpler models if the dataset is limited or noisy.

**Weighted ensemble.** The final ensemble combined model outputs based on validation behavior. This reduces dependence on a single model family and can stabilize forecasts when different models perform better in different time periods.

## Algorithm Notes

<details class="algorithm-note">
<summary>Forecast validation must preserve time order</summary>
<div class="algorithm-note__content" markdown="1">
Random train/test splits leak future information into the training set. For demand forecasting, validation should move forward in time so lag features, rolling statistics, and model selection only use information that would have been available at prediction time.
</div>
</details>

<details class="algorithm-note">
<summary>Tree ensembles can beat neural forecasting on tabular data</summary>
<div class="algorithm-note__content" markdown="1">
When data is limited and covariates are mostly structured tabular signals, boosted trees often capture nonlinear interactions with less tuning than sequence models. TFT becomes more attractive when there are richer temporal covariates and enough history to learn stable attention patterns.
</div>
</details>

## Technical Stack

XGBoost, LightGBM, Temporal Fusion Transformer, time-series validation, ensemble modeling.

</section>
<section class="lang-panel lang-panel--zh" lang="zh" markdown="1">

这个 USC 项目研究房地产交易数据的需求预测。最好的结果来自务实的模型选择：树模型和加权集成比直接神经预测更适合这个表格型季节性数据。

核心经验是预测问题不一定天然适合深度学习。房地产需求有滞后效应、日历结构和局部波动，因此特征设计与验证方式比选择最复杂模型更关键。

## 预测流程

- 为月度需求预测构建滞后特征和滚动窗口特征。
- 比较 XGBoost、LightGBM、季节性基线、两阶段模型和 TFT 变体。
- 根据验证集反馈设计加权集成。
- 形成“由数据行为决定模型复杂度”的建模判断。

{% include architecture-flow.html title="架构图" steps="交易历史|滞后/滚动特征|时间序列验证|XGBoost/LightGBM/TFT|加权集成|需求预测" %}

## 重要算法

**滞后特征。** 滞后特征把历史观测转成监督学习输入，例如一个月前、三个月前或一年前的需求。房地产需求通常受近期需求和季节性影响，因此这是强基线。

**滚动窗口统计。** 滚动均值、波动率和趋势指标概括局部历史，帮助模型区分短期尖峰和持续需求变化。

**梯度提升决策树。** XGBoost 和 LightGBM 通过弱决策树集成逐步修正残差。它们适合表格预测，因为能捕捉时间、区域、滞后和市场变量之间的非线性交互，且预处理成本低。

**Temporal Fusion Transformer。** TFT 是带时间输入注意力机制的神经预测方法。它在数据充足且协变量有效时很强，但本项目显示在数据有限或噪声较大时，直接神经预测可能弱于简单模型。

**加权集成。** 最终集成根据验证表现组合多个模型输出，降低对单一模型族的依赖，并在不同时段模型表现变化时稳定预测。

## 算法笔记

<details class="algorithm-note">
<summary>预测验证必须保持时间顺序</summary>
<div class="algorithm-note__content" markdown="1">
随机划分训练集和测试集会把未来信息泄漏到训练中。需求预测应使用按时间向前滚动的验证方式，确保滞后特征、滚动统计和模型选择只使用预测时真正可见的信息。
</div>
</details>

<details class="algorithm-note">
<summary>表格数据中树集成可能优于神经预测</summary>
<div class="algorithm-note__content" markdown="1">
当数据有限且协变量主要是结构化表格信号时，提升树通常能用更少调参捕捉非线性交互。TFT 更适合有丰富时间协变量且历史数据足够支持稳定注意力模式的场景。
</div>
</details>

## 技术栈

XGBoost, LightGBM, Temporal Fusion Transformer, time-series validation, ensemble modeling.

</section>
</div>
