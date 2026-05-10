---
title: "Cloud Art Search Web Service"
title_zh: "云端艺术搜索服务"
excerpt: "USC web technology assignments deployed on Google App Engine with REST-style search endpoints."
excerpt_zh: "部署在 Google App Engine 上的 USC Web 技术项目，包含 REST 风格搜索接口。"
collection: portfolio
permalink: /portfolio/cloud-art-search/
---

<div class="bilingual-page" data-bilingual-root data-lang="en">
<section class="lang-panel lang-panel--en" lang="en" markdown="1">

This project was found from the older root `table_of_assignments/index.html` and the source folder `~/Desktop/usc/y1/571-2`. It was a USC web-technology assignment deployed on Google App Engine with a Flask backend and static frontend.

## Project Scope

The assignment exposed a home page and cloud API endpoint for artwork search queries such as `picasso`. The core idea was to deploy a web service that accepts a search term, calls a backend route, and returns structured results through an API path.

## Important System Concepts

**REST-style routing.** The API shape `/api/search/{query}` maps a user query to a deterministic backend endpoint. This keeps the frontend simple and makes the cloud service testable from a browser or command-line request.

**Query normalization.** Search services usually need to normalize user input before sending it downstream: trim whitespace, encode URL characters, handle case differences, and reject invalid empty queries. Even a small assignment benefits from this because the API must behave predictably for arbitrary input.

**Cloud deployment.** Google App Engine abstracts server provisioning and exposes the app through a stable URL. For coursework projects, this is useful because grading and testing can hit the deployed endpoint directly.

**Response shaping.** A search endpoint should return a consistent response format regardless of upstream result quality. The important engineering task is to separate external data retrieval from the JSON structure consumed by the frontend.

**Frontend state management.** The frontend tracks search input, loading state, result-card rendering, no-result messages, and selected-artist details. It also filters search results to artist entities before rendering.

## Preserved Links

- [Assignment #2 home page](https://xuhpan-2027.wl.r.appspot.com)
- [Assignment #2 cloud service](https://xuhpan-2027.wl.r.appspot.com/api/search/picasso)
- [Assignment #3 home page](https://xuhpan-2026.wl.r.appspot.com/)
- [Assignment #3/#4 cloud service](https://xuhpan-2026.wl.r.appspot.com/api/search/picasso)

## Technical Stack

Flask, JavaScript, HTML/CSS, Google App Engine, REST API design, cloud deployment, frontend/backend integration.

</section>
<section class="lang-panel lang-panel--zh" lang="zh" markdown="1">

这个项目来自旧入口 `table_of_assignments/index.html` 和源码目录 `~/Desktop/usc/y1/571-2`。它是 USC Web 技术课程项目，使用 Flask 后端和静态前端，并部署到 Google App Engine。

## 项目范围

项目提供主页和云端 API 搜索接口，例如查询 `picasso`。核心是部署一个 Web 服务：接收搜索词，调用后端路由，并通过 API 路径返回结构化结果。

## 重要系统概念

**REST 风格路由。** `/api/search/{query}` 将用户查询映射到确定的后端接口，让前端保持简单，也方便用浏览器或命令行测试。

**查询规范化。** 搜索服务需要处理空白、URL 编码、大小写和空查询等输入问题，使 API 对任意用户输入都能有稳定行为。

**云部署。** Google App Engine 抽象了服务器配置并提供稳定 URL，适合课程项目的在线测试和评分。

**响应结构化。** 搜索接口需要在上游结果质量不稳定时仍返回一致 JSON 结构。关键工程任务是把外部数据获取与前端消费的数据格式分离。

**前端状态管理。** 前端维护搜索输入、加载状态、结果卡片、无结果提示和选中艺术家详情，并在渲染前过滤艺术家实体。

## 保留链接

- [Assignment #2 home page](https://xuhpan-2027.wl.r.appspot.com)
- [Assignment #2 cloud service](https://xuhpan-2027.wl.r.appspot.com/api/search/picasso)
- [Assignment #3 home page](https://xuhpan-2026.wl.r.appspot.com/)
- [Assignment #3/#4 cloud service](https://xuhpan-2026.wl.r.appspot.com/api/search/picasso)

## 技术栈

Flask, JavaScript, HTML/CSS, Google App Engine, REST API design, cloud deployment, frontend/backend integration.

</section>
</div>
