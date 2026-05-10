---
title: "AI Voice-Interaction Terminal"
title_zh: "AI 语音交互终端"
excerpt: "OCR, hand tracking, streaming TTS, Docker, and ESP32-CAM integration for an AI companion and learning terminal."
excerpt_zh: "面向 AI 陪伴和学习终端的 OCR、手部追踪、流式 TTS、Docker 与 ESP32-CAM 集成。"
collection: portfolio
permalink: /portfolio/ai-companion-terminal/
---

<div class="bilingual-page" data-bilingual-root data-lang="en">
<section class="lang-panel lang-panel--en" lang="en" markdown="1">

This project came from my large language model algorithm internship at Shenzhen Banying Suixing Technology. I worked on an AI terminal for emotional companionship and learning support.

The product goal was not only to answer user questions, but to react to the physical learning scene: a user points at text, the camera captures the region, OCR extracts the content, and the voice model responds with natural speech. That made latency and reliability as important as model accuracy.

## System Pipeline

- **Visual input:** ESP32-CAM streams frames from the device to the recognition service.
- **Hand localization:** MediaPipe detects hand landmarks and estimates the fingertip point used for reading guidance.
- **Region selection:** The fingertip position is used to prioritize nearby text regions instead of running OCR over every possible area with equal weight.
- **Text recognition:** PaddleOCR extracts text from the selected region and sends structured text to the conversation layer.
- **Speech response:** fish-speech generates streaming audio so the user hears partial responses without waiting for a full utterance to finish.

## Important Algorithms

**Hand landmark tracking.** MediaPipe returns a fixed set of hand keypoints. The project used fingertip landmarks as a spatial prior: once the fingertip coordinate is known, OCR can focus on the most relevant local text region. This reduces wasted OCR calls and makes the interaction feel closer to real-time pointing.

**OCR region prioritization.** PaddleOCR performs text detection and recognition, but camera frames often contain background objects, hands, and irrelevant text. The key engineering choice was to combine geometric distance from the fingertip with OCR candidate regions, so the system ranks text boxes by likely user intent instead of only by detection confidence.

**Streaming speech synthesis.** A normal TTS service waits for full text generation before speaking. The optimized service used streaming processing so chunks could be synthesized and returned earlier. This improved speech-service concurrency by **70%** because long responses no longer blocked the entire request lifecycle.

## Engineering Work

- Built low-latency finger-reading with MediaPipe hand landmarks and PaddleOCR.
- Integrated ESP32-CAM camera streaming with server-side recognition.
- Tuned fish-speech TTS for more natural intonation and emotional expression.
- Containerized perception services with Docker for repeatable deployment.
- Balanced model quality, hardware limits, and deployment repeatability for an interactive AI terminal.

## Technical Stack

MediaPipe, PaddleOCR, fish-speech, Docker, ESP32-CAM, Python, streaming services.

</section>
<section class="lang-panel lang-panel--zh" lang="zh" markdown="1">

这个项目来自我在深圳伴影随行科技的大语言模型算法实习。我参与的是面向情感陪伴和学习辅助的 AI 终端。

产品目标不只是回答问题，而是理解用户所在的物理学习场景：用户指向文字，摄像头捕获画面，OCR 提取文本，语音模型再用自然语音回应。因此延迟、可靠性和模型效果同样重要。

## 系统流程

- **视觉输入：** ESP32-CAM 将设备端画面流式传给识别服务。
- **手部定位：** MediaPipe 检测手部关键点，并估计用于指读的指尖位置。
- **区域选择：** 使用指尖坐标优先选择附近文本区域，避免对所有区域做等权 OCR。
- **文本识别：** PaddleOCR 从候选区域提取文本，并把结构化文本传给对话层。
- **语音响应：** fish-speech 生成流式音频，让用户不用等待整句文本全部生成完才听到回复。

## 重要算法

**手部关键点追踪。** MediaPipe 返回固定结构的手部关键点。项目把指尖关键点作为空间先验，一旦知道指尖坐标，OCR 就可以聚焦在最相关的局部文本区域，从而减少无效识别并提升实时指读体验。

**OCR 区域优先级。** PaddleOCR 负责文本检测和识别，但摄像头画面中会有背景、手部和无关文字。核心工程选择是把候选文本框与指尖距离结合起来排序，使系统根据用户意图而不是单纯检测置信度选择文本。

**流式语音合成。** 普通 TTS 往往等待完整文本后才开始说话。优化后的服务按片段合成和返回音频，使长回复不会阻塞整个请求生命周期，并将语音服务并发性能提升 **70%**。

## 工程工作

- 使用 MediaPipe 手部关键点和 PaddleOCR 构建低延迟指读。
- 将 ESP32-CAM 摄像头流接入服务端识别。
- 调整 fish-speech TTS 的语调和情绪表达。
- 使用 Docker 容器化感知服务，保证部署可复现。
- 在互动式 AI 终端中平衡模型质量、硬件限制和部署可靠性。

## 技术栈

MediaPipe, PaddleOCR, fish-speech, Docker, ESP32-CAM, Python, streaming services.

</section>
</div>
