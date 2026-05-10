---
layout: archive
title: "Personal AI Assistant"
title_zh: "个人 AI 助手"
permalink: /assistant/
author_profile: true
---

<div class="bilingual-page assistant-page" data-bilingual-root data-lang="en">
  <section class="lang-panel lang-panel--en" lang="en">
    <p>This assistant answers only from Xuhan's resume, project pages, research notes, and timeline. It runs fully in the browser with static retrieval, so it does not call an API and cannot expose an API key.</p>
  </section>
  <section class="lang-panel lang-panel--zh" lang="zh">
    <p>这个助手只基于叙涵的简历、项目页面、研究笔记和时间线回答问题。它完全在浏览器中使用静态检索运行，不调用 API，也不会暴露 API key。</p>
  </section>

  <section class="assistant-panel" data-profile-assistant>
    <div class="assistant-panel__header">
      <h2><span data-i18n-en="Ask about Xuhan's background" data-i18n-zh="询问叙涵的背景">Ask about Xuhan's background</span></h2>
      <p data-i18n-en="Try questions about computer vision, Imperial College, LLM projects, speech systems, internships, or research interests." data-i18n-zh="可以询问计算机视觉、帝国理工、LLM 项目、语音系统、实习经历或研究兴趣。">Try questions about computer vision, Imperial College, LLM projects, speech systems, internships, or research interests.</p>
    </div>

    <div class="assistant-suggestions" aria-label="Suggested questions">
      <button type="button" data-assistant-question="What projects has Xuhan done in computer vision?">Computer vision projects</button>
      <button type="button" data-assistant-question="What is his Imperial College experience?">Imperial College</button>
      <button type="button" data-assistant-question="Which projects involve LLMs?">LLM projects</button>
      <button type="button" data-assistant-question="What speech models or TTS work has he done?">Speech / TTS</button>
    </div>

    <form class="assistant-form" data-assistant-form>
      <label for="assistant-question" class="screen-reader-text">Question</label>
      <input id="assistant-question" data-assistant-input type="text" autocomplete="off" placeholder="Ask a question about Xuhan's resume or projects">
      <button type="submit"><span data-i18n-en="Ask" data-i18n-zh="提问">Ask</span></button>
    </form>

    <div class="assistant-answer" data-assistant-answer aria-live="polite">
      <p data-i18n-en="Ask a question or choose one of the examples above." data-i18n-zh="输入问题，或点击上面的示例问题。">Ask a question or choose one of the examples above.</p>
    </div>
  </section>
</div>
