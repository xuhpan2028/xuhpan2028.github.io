---
title: "Tencent AI Arena"
title_zh: "腾讯 AI Arena"
excerpt: "Backend and AI features for a programming education game platform serving 100,000 active learners."
excerpt_zh: "为服务 100,000 活跃学习者的编程教育游戏平台开发后端和 AI 功能。"
collection: portfolio
permalink: /portfolio/tencent-ai-arena/
badges:
  - en: "Production System"
    zh: "生产系统"
  - en: "LLM Feature"
    zh: "大模型功能"
  - en: "RL Experiment"
    zh: "强化学习实验"
---

<div class="bilingual-page" data-bilingual-root data-lang="en">
<section class="lang-panel lang-panel--en" lang="en" markdown="1">

At Tencent, I worked on AI Arena, an educational game platform for programming learners. The work combined production backend development with applied AI features.

The platform served approximately **100,000 active programming learners**, so AI features had to be reliable enough for product workflows rather than only demos. My work combined backend services, structured LLM behavior, and reinforcement-learning experiments for game AI.

## Product Work

- Developed backend functionality for an education game website using Node.js and Angular-backed services.
- Used Prefix Tuning to constrain LLM responses into fixed formats for text-driven interface editing.
- Improved game creation efficiency by **30%**.
- Applied Policy Gradient reinforcement learning to train football simulation AI players for high-difficulty levels.

{% include architecture-flow.html title="Architecture Diagram" steps="Learner/game creator input|Backend service validation|Prefix-tuned LLM command|Structured interface edit|Game-state update|RL football agent experiments" %}

## Important Algorithms

**Prefix Tuning for structured output.** Prefix Tuning adapts an LLM by learning task-specific continuous prefix vectors while keeping most model parameters fixed. In this project, the goal was not open-ended chat; the model needed to transform natural-language instructions into fixed-format interface edits. Prefix-style control helped constrain output format and reduce post-processing failures.

**Text-driven interface editing.** Natural-language editing requires mapping user intent to structured UI operations. The workflow treated model output as an intermediate command representation, so backend services could validate and apply edits to game elements consistently.

**Policy Gradient reinforcement learning.** For football-simulation AI players, the agent needed to learn actions from reward feedback rather than explicit labels. Policy Gradient methods optimize the parameters of a policy directly using sampled rewards. This fits game AI because the quality of an action often depends on delayed outcomes such as positioning, possession, or scoring.

**Backend integration.** The AI features were connected to production-facing services, which meant response format, latency, error handling, and compatibility with game-state logic mattered as much as the model itself.

## Algorithm Notes

<details class="algorithm-note">
<summary>Constrained generation is a product requirement</summary>
<div class="algorithm-note__content" markdown="1">
For interface editing, the model output is not final prose; it is an executable command candidate. Prefix-style control is useful because every malformed response becomes a product failure that backend validation must catch or reject.
</div>
</details>

<details class="algorithm-note">
<summary>Policy gradients fit delayed rewards</summary>
<div class="algorithm-note__content" markdown="1">
In a football simulation, a single movement may only matter several seconds later. Policy Gradient methods optimize expected return from sampled trajectories, so they can credit actions that contribute to delayed possession, positioning, or scoring outcomes.
</div>
</details>

## Technical Stack

Node.js, Angular, Prefix Tuning, structured LLM output, Policy Gradient, reinforcement learning.

</section>
<section class="lang-panel lang-panel--zh" lang="zh" markdown="1">

在腾讯，我参与 AI Arena 项目，这是一个面向编程学习者的教育游戏平台。工作结合了生产后端开发和应用型 AI 功能。

平台约有 **100,000 活跃编程学习者**，因此 AI 功能必须可靠地进入产品工作流，而不能只停留在 demo。我的工作覆盖后端服务、结构化 LLM 行为和游戏 AI 强化学习实验。

## 产品工作

- 使用 Node.js 和 Angular 相关服务为教育游戏网站开发后端功能。
- 使用 Prefix Tuning 约束 LLM 输出为固定格式，用于文本驱动界面编辑。
- 将游戏创建效率提升 **30%**。
- 使用 Policy Gradient 强化学习训练高难度足球模拟 AI 玩家。

{% include architecture-flow.html title="架构图" steps="学习者/创作者输入|后端服务校验|Prefix-tuned LLM 命令|结构化界面编辑|游戏状态更新|足球 AI 强化学习实验" %}

## 重要算法

**用于结构化输出的 Prefix Tuning。** Prefix Tuning 通过学习任务特定的连续前缀向量来适配 LLM，同时保持大部分模型参数不变。本项目目标不是开放聊天，而是把自然语言指令转换成固定格式的界面编辑，因此 prefix 风格控制有助于约束输出格式并降低后处理失败。

**文本驱动界面编辑。** 自然语言编辑需要把用户意图映射成结构化 UI 操作。流程把模型输出作为中间命令表示，再由后端服务验证并一致地应用到游戏元素上。

**Policy Gradient 强化学习。** 对足球模拟 AI 玩家而言，智能体需要从奖励反馈中学习动作，而不是依赖显式标签。Policy Gradient 直接用采样奖励优化策略参数，适合动作质量依赖延迟结果的游戏 AI 场景，例如站位、控球和进球。

**后端集成。** AI 功能连接到面向产品的服务，因此响应格式、延迟、错误处理以及与游戏状态逻辑的兼容性，与模型本身同样重要。

## 算法笔记

<details class="algorithm-note">
<summary>受约束生成是产品要求</summary>
<div class="algorithm-note__content" markdown="1">
在界面编辑中，模型输出不是最终文案，而是可执行命令候选。Prefix 风格控制有价值，因为每个格式错误的输出都会变成后端必须捕获或拒绝的产品失败。
</div>
</details>

<details class="algorithm-note">
<summary>Policy Gradient 适合延迟奖励</summary>
<div class="algorithm-note__content" markdown="1">
在足球模拟中，一个移动动作可能几秒后才体现价值。Policy Gradient 基于采样轨迹优化期望回报，因此能把站位、控球或进球等延迟结果归因到较早动作。
</div>
</details>

## 技术栈

Node.js, Angular, Prefix Tuning, structured LLM output, Policy Gradient, reinforcement learning.

</section>
</div>
