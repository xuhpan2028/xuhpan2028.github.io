---
title: "Artsy Artist Search Apps"
title_zh: "Artsy 艺术家搜索应用"
excerpt: "Web and Android artist-search applications using Artsy-style search flows, REST APIs, and mobile UI state management."
excerpt_zh: "基于 Artsy 搜索流程、REST API 和移动端状态管理的 Web 与 Android 艺术家搜索应用。"
collection: portfolio
permalink: /portfolio/artsy-artist-search/
---

<div class="bilingual-page" data-bilingual-root data-lang="en">
<section class="lang-panel lang-panel--en" lang="en" markdown="1">

This project was found in `~/Desktop/usc/y1/571-2` and `~/AndroidStudioProjects/artsy`. The web version used Flask and static frontend assets; the Android version used Kotlin files for search, artist detail, favorites, authentication, and user session handling.

## Product Flow

- Search for artists by name.
- Display artist cards with images and fallback assets.
- Fetch selected artist details.
- Preserve favorites and user-session state in the Android app.
- Deploy the web service through Google App Engine.

## Important Algorithms and Design Patterns

**REST query routing.** Search requests are encoded into API routes such as `/api/search/{query}`. This keeps the frontend decoupled from the backend implementation and makes the service testable from a browser.

**Asynchronous fetch and loading states.** The frontend shows loading feedback while waiting for network responses, then updates result cards or no-result states. This is important because search APIs have unpredictable latency.

**Result filtering.** Artsy search results can contain multiple entity types. The web frontend filters returned items to artist results before rendering cards.

**Fallback rendering.** Missing thumbnails are replaced with a local Artsy logo. This prevents broken UI states when upstream data is incomplete.

**Android repository pattern.** The Android project separates API/data access behavior from UI screens through repository and model files, making search, detail loading, favorites, and session state easier to reason about.

## Technical Stack

Flask, JavaScript, HTML/CSS, Google App Engine, Kotlin, Android, REST APIs, asynchronous UI state.

</section>
<section class="lang-panel lang-panel--zh" lang="zh" markdown="1">

这个项目来自 `~/Desktop/usc/y1/571-2` 和 `~/AndroidStudioProjects/artsy`。Web 版本使用 Flask 和静态前端资源，Android 版本使用 Kotlin 实现搜索、艺术家详情、收藏、认证和用户会话。

## 产品流程

- 按艺术家姓名搜索。
- 展示包含图片和兜底资源的艺术家卡片。
- 拉取选中艺术家的详情信息。
- 在 Android 应用中保存收藏和用户会话状态。
- 通过 Google App Engine 部署 Web 服务。

## 重要算法与设计模式

**REST 查询路由。** 搜索请求被编码成 `/api/search/{query}` 这样的 API 路径，使前端与后端实现解耦，也方便直接在浏览器或测试脚本中验证服务。

**异步请求与加载状态。** 前端在等待网络返回时展示 loading 状态，然后更新结果卡片或无结果提示。搜索 API 延迟不稳定，因此清晰的异步状态对用户体验很重要。

**结果过滤。** Artsy 搜索结果可能包含多种实体类型。Web 前端会在渲染前过滤出艺术家结果，避免把无关实体展示成艺术家卡片。

**兜底渲染。** 缺失缩略图时使用本地 Artsy logo，防止上游数据不完整导致界面破损。

**Android Repository 模式。** Android 项目把 API / 数据访问与 UI 页面分开，使搜索、详情加载、收藏和会话状态更容易维护。

## 技术栈

Flask, JavaScript, HTML/CSS, Google App Engine, Kotlin, Android, REST APIs, asynchronous UI state.

</section>
</div>
