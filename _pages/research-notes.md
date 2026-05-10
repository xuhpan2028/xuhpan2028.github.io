---
layout: archive
title: "Research Notes"
title_zh: "研究笔记"
permalink: /research-notes/
author_profile: true
---

<div class="bilingual-page" data-bilingual-root data-lang="en">
<section class="lang-panel lang-panel--en" lang="en" markdown="1">

This page collects paper reading notes around the research directions that connect most directly to my projects: LLM alignment, multimodal learning, speech models, and efficient fine-tuning. The notes are written as engineering-facing summaries: what problem the paper addresses, what idea matters, and how it can influence a deployable system.

<div class="research-note-grid">
  <article class="research-note-card">
    <p class="research-note-card__tag">LLM Alignment</p>
    <h2>From Human Feedback to Controllable Assistants</h2>
    <p><strong>Representative papers:</strong> InstructGPT / RLHF, Constitutional AI, Direct Preference Optimization.</p>
    <p><strong>Core idea:</strong> Pretraining gives a model broad capability, but alignment methods shape the model toward helpful, harmless, and format-following behavior.</p>
    <p><strong>What I watch for:</strong> Reward model overfitting, prompt sensitivity, refusal calibration, and whether preference optimization actually improves product behavior rather than only benchmark scores.</p>
    <p><strong>Connection to my work:</strong> Tencent AI Arena required structured LLM outputs for interface editing, where alignment is practical control rather than abstract chat quality.</p>
  </article>

  <article class="research-note-card">
    <p class="research-note-card__tag">Multimodal Learning</p>
    <h2>Learning Across Text, Audio, and Vision</h2>
    <p><strong>Representative papers:</strong> CLIP, Flamingo, BLIP-2, LLaVA-style visual instruction tuning.</p>
    <p><strong>Core idea:</strong> Multimodal models align different input spaces so language can guide perception and perception can ground language.</p>
    <p><strong>What I watch for:</strong> Fusion timing, missing-modality robustness, whether visual features are grounded or only correlated, and how evaluation changes when language shortcuts exist.</p>
    <p><strong>Connection to my work:</strong> My sarcasm project uses text, audio, and video because sarcasm often appears as a conflict between literal meaning and delivery.</p>
  </article>

  <article class="research-note-card">
    <p class="research-note-card__tag">Speech Models</p>
    <h2>Speech as a Real-time Interface</h2>
    <p><strong>Representative papers:</strong> wav2vec 2.0, Whisper, VALL-E-style neural codec language modeling, streaming TTS systems.</p>
    <p><strong>Core idea:</strong> Speech systems are not only recognition or synthesis models; they are latency-sensitive interfaces that must handle noisy acoustic input, turn-taking, and partial outputs.</p>
    <p><strong>What I watch for:</strong> Time-to-first-token/audio, robustness to accents and noise, prosody control, and how streaming changes user perception.</p>
    <p><strong>Connection to my work:</strong> The AI voice-interaction terminal used OCR, LLM response planning, and fish-speech TTS, so speech quality and latency directly affected usability.</p>
  </article>

  <article class="research-note-card">
    <p class="research-note-card__tag">Efficient Fine-tuning</p>
    <h2>Adapting Large Models Without Full Retraining</h2>
    <p><strong>Representative papers:</strong> Prefix Tuning, Prompt Tuning, LoRA, QLoRA, adapter-based fine-tuning.</p>
    <p><strong>Core idea:</strong> Parameter-efficient fine-tuning changes a small set of trainable parameters while reusing the base model, making adaptation cheaper and easier to deploy.</p>
    <p><strong>What I watch for:</strong> Rank or prefix length, catastrophic forgetting, low-resource behavior, quantization side effects, and how much task control is possible without full fine-tuning.</p>
    <p><strong>Connection to my work:</strong> Prefix Tuning appears in my Tencent work, while the LoRA simulator on the portfolio page explains the adapter-rank tradeoff interactively.</p>
  </article>
</div>

## Reading Backlog

- Retrieval-augmented generation: chunking, reranking, and hallucination control.
- Multimodal instruction tuning: when cross-modal grounding fails.
- Streaming speech: incremental decoding, voice consistency, and interruption handling.
- Lightweight adaptation: LoRA rank selection, adapter composition, and quantized fine-tuning.

</section>
<section class="lang-panel lang-panel--zh" lang="zh" markdown="1">

这个页面整理我围绕研究方向做的论文阅读笔记，重点和我的项目经历直接相关：LLM alignment、多模态学习、语音模型和高效微调。笔记采用偏工程的写法：论文解决什么问题、核心思想是什么、以及如何影响可部署系统。

<div class="research-note-grid">
  <article class="research-note-card">
    <p class="research-note-card__tag">LLM Alignment</p>
    <h2>从人类反馈到可控助手</h2>
    <p><strong>代表论文：</strong> InstructGPT / RLHF, Constitutional AI, Direct Preference Optimization。</p>
    <p><strong>核心思想：</strong> 预训练提供广泛能力，而 alignment 方法把模型行为调整到更有帮助、更安全、更符合格式要求的方向。</p>
    <p><strong>我关注的问题：</strong> 奖励模型过拟合、prompt 敏感性、拒答边界，以及偏好优化是否真的改善产品行为，而不只是提升 benchmark。</p>
    <p><strong>和我的经历的关系：</strong> 腾讯 AI Arena 需要 LLM 输出结构化界面编辑命令，alignment 在这里是实际控制问题，而不是抽象聊天质量。</p>
  </article>

  <article class="research-note-card">
    <p class="research-note-card__tag">Multimodal Learning</p>
    <h2>文本、音频与视觉的联合学习</h2>
    <p><strong>代表论文：</strong> CLIP, Flamingo, BLIP-2, LLaVA 风格视觉指令微调。</p>
    <p><strong>核心思想：</strong> 多模态模型把不同输入空间对齐，使语言可以指导感知，感知也可以为语言提供 grounding。</p>
    <p><strong>我关注的问题：</strong> 融合发生的位置、缺失模态鲁棒性、视觉特征是否真正 grounded，以及语言捷径存在时如何评估。</p>
    <p><strong>和我的经历的关系：</strong> 我的讽刺识别项目使用文本、音频和视频，因为讽刺常常来自字面含义和表达方式之间的冲突。</p>
  </article>

  <article class="research-note-card">
    <p class="research-note-card__tag">Speech Models</p>
    <h2>作为实时界面的语音模型</h2>
    <p><strong>代表论文：</strong> wav2vec 2.0, Whisper, VALL-E 风格神经 codec 语言建模，流式 TTS 系统。</p>
    <p><strong>核心思想：</strong> 语音系统不只是识别或合成模型，它还是对延迟非常敏感的人机界面，需要处理噪声输入、轮次切换和部分输出。</p>
    <p><strong>我关注的问题：</strong> 首 token/首段音频延迟、口音和噪声鲁棒性、韵律控制，以及流式处理如何改变用户感知。</p>
    <p><strong>和我的经历的关系：</strong> AI 语音交互终端整合 OCR、LLM 回复规划和 fish-speech TTS，因此语音质量与延迟直接影响可用性。</p>
  </article>

  <article class="research-note-card">
    <p class="research-note-card__tag">Efficient Fine-tuning</p>
    <h2>不全量训练也能适配大模型</h2>
    <p><strong>代表论文：</strong> Prefix Tuning, Prompt Tuning, LoRA, QLoRA, adapter-based fine-tuning。</p>
    <p><strong>核心思想：</strong> 参数高效微调只训练一小部分参数，同时复用基础模型，使任务适配成本更低、更容易部署。</p>
    <p><strong>我关注的问题：</strong> rank 或 prefix 长度、灾难性遗忘、低资源表现、量化副作用，以及不全量微调时能获得多少任务控制能力。</p>
    <p><strong>和我的经历的关系：</strong> Prefix Tuning 出现在我的腾讯项目中，作品集里的 LoRA simulator 则用交互方式解释 adapter rank 的权衡。</p>
  </article>
</div>

## 阅读计划

- RAG：切块、rerank 和幻觉控制。
- 多模态指令微调：跨模态 grounding 何时失败。
- 流式语音：增量解码、音色一致性和打断处理。
- 轻量适配：LoRA rank 选择、adapter 组合和量化微调。

</section>
</div>
