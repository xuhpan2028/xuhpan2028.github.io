---
title: "Multimodal Sarcasm Recognition"
title_zh: "多模态讽刺识别"
excerpt: "MUStARD-based text, audio, and video modeling with Transformer fine-tuning and LLM-assisted analysis."
excerpt_zh: "基于 MUStARD 的文本、音频和视频建模，结合 Transformer 微调与 LLM 辅助分析。"
collection: portfolio
permalink: /portfolio/multimodal-sarcasm/
---

<div class="bilingual-page" data-bilingual-root data-lang="en">
<section class="lang-panel lang-panel--en" lang="en" markdown="1">

This USC project explored multimodal sarcasm recognition using the MUStARD dataset. Sarcasm often depends on the mismatch between semantic content and delivery, so the project compared text, audio, video, and fusion methods.

Sarcasm is a useful multimodal problem because the literal text can conflict with voice tone, facial expression, or conversational context. The project treated sarcasm as a classification task and compared whether fusion improved beyond text-only baselines.

## Modeling Pipeline

- Built text, audio, and video feature pipelines for multimodal sarcasm recognition.
- Fine-tuned Transformer models with conversation context.
- Compared BERT, RoBERTa, MPNet, Whisper, Qwen, Gemini, and GPT-style analysis paths.
- Evaluated unimodal baselines and multimodal fusion strategies using macro-F1.
- Improved accuracy by **5%** through cross-modal signal integration.

## Important Algorithms

**Context-aware Transformer encoding.** Text models such as BERT, RoBERTa, and MPNet encode utterances into contextual embeddings. For sarcasm, the surrounding dialogue matters because a sarcastic sentence often reverses or contradicts prior context. Fine-tuning with context helps the classifier learn that relationship.

**Audio feature modeling.** Audio carries prosody, pauses, emphasis, and delivery style. Whisper-style transcription and audio-aware features were compared against text-only paths to test whether speech cues added information beyond lexical content.

**Multimodal fusion.** The project compared unimodal predictions with fused representations. Fusion helps when one modality is ambiguous but another modality supplies a corrective signal, such as positive words spoken with negative tone. The final gain came from using cross-modal information rather than treating every modality independently.

**Macro-F1 evaluation.** Macro-F1 was used because sarcasm datasets can be imbalanced. It averages class-level F1 scores, so performance on the minority class matters instead of being hidden by majority-class accuracy.

**LLM-assisted analysis.** Qwen, Gemini, and GPT-style analysis paths were used as comparison points for reasoning over dialogue context. They helped expose cases where explicit commonsense or conversational interpretation mattered.

## Technical Stack

Transformers, BERT, RoBERTa, MPNet, Whisper, Qwen, Gemini, GPT, PyTorch, macro-F1 evaluation.

</section>
<section class="lang-panel lang-panel--zh" lang="zh" markdown="1">

这个 USC 项目使用 MUStARD 数据集研究多模态讽刺识别。讽刺经常依赖语义内容和表达方式之间的不一致，因此项目比较了文本、音频、视频和融合方法。

讽刺是一个典型多模态问题，因为字面文本可能与语气、表情或对话上下文冲突。项目把讽刺识别建模为分类任务，并比较融合方法是否能超过文本基线。

## 建模流程

- 构建文本、音频和视频特征流程，用于多模态讽刺识别。
- 使用对话上下文微调 Transformer 模型。
- 比较 BERT、RoBERTa、MPNet、Whisper、Qwen、Gemini 和 GPT 风格分析路径。
- 使用 macro-F1 评估单模态基线和多模态融合策略。
- 通过跨模态信号整合将准确率提升 **5%**。

## 重要算法

**上下文感知 Transformer 编码。** BERT、RoBERTa 和 MPNet 等文本模型把话语编码成上下文表示。讽刺常常反转或违背前文语境，因此加入上下文微调能帮助分类器学习这种关系。

**音频特征建模。** 音频包含韵律、停顿、重音和表达风格。项目比较了 Whisper 风格转写和音频感知特征，判断语音线索是否能提供超出文本的信息。

**多模态融合。** 项目比较单模态预测和融合表示。当某个模态模糊而另一个模态提供修正信号时，融合会有价值，例如正面词语配负面语气。最终提升来自跨模态信息，而不是独立看每个模态。

**Macro-F1 评估。** 讽刺数据集可能类别不均衡，因此使用 macro-F1，让少数类表现不会被多数类准确率掩盖。

**LLM 辅助分析。** Qwen、Gemini 和 GPT 风格路径用于对话上下文推理对比，帮助暴露需要常识或会话解释的案例。

## 技术栈

Transformers, BERT, RoBERTa, MPNet, Whisper, Qwen, Gemini, GPT, PyTorch, macro-F1 evaluation.

</section>
</div>
