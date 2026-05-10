---
title: "BOSS Multi-Way Join Engine"
title_zh: "BOSS 多路 Join 引擎"
excerpt: "C++ data-processing coursework implementing hash join and sort-merge join operators for a composable query engine."
excerpt_zh: "C++ 数据处理课程项目，为可组合查询引擎实现 Hash Join 和 Sort-Merge Join 算子。"
collection: portfolio
permalink: /portfolio/boss-join-engine/
badges:
  - en: "Systems Project"
    zh: "系统项目"
  - en: "C++"
    zh: "C++"
  - en: "Query Processing"
    zh: "查询处理"
---

<div class="bilingual-page" data-bilingual-root data-lang="en">
<section class="lang-panel lang-panel--en" lang="en" markdown="1">

This project was found under `~/Analytical_Data_Processing_hp921` and `~/Analytical_Data_Processing_jw3621`. It implemented join algorithms inside BOSS, a composable research prototype for data processing systems.

## System Context

BOSS represents query plans and intermediate data as homoiconic expressions. The coursework isolated chains of equi-joins from larger query plans and passed them to a JoinOnly engine. The remaining operators, such as selection, projection, and top-N, were handled by a Volcano-style engine.

{% include architecture-flow.html title="Architecture Diagram" steps="BOSS query expression|Join chain extraction|JoinOnly engine|Hash or sort-merge join|Intermediate bindings|Volcano engine continuation" %}

## Important Algorithms

**Hash join.** Hash join builds a hash structure over join keys from one input and probes it with keys from another input. It is usually efficient for equi-joins because average lookup is close to constant time. The implementation had to handle non-unique keys, which means one key can map to multiple matching rows.

**Sort-merge join.** Sort-merge join sorts both inputs by join key and then scans them in order. When equal-key regions are found, matching rows are emitted. This can scale well for ordered data and avoids the nested-loop explosion, but sorting introduces an `n log n` cost.

**Multi-way join planning.** The coursework focused on chains of joins over graph-like data such as cycle-counting queries. A multi-way join must preserve intermediate bindings across multiple tables rather than only joining two tables once.

**Partial query evaluation.** The JoinOnly engine evaluates the join portion of a larger expression and leaves the rest of the query plan for another engine. This is a clean example of execution-pipeline composition.

**Performance interpretation.** The discussion notes compared scaling behavior: sort-merge benefits from ordered traversal after sorting, while hash join can degrade if the hash function creates many conflicts.

## Technical Stack

C++, CMake, BOSS expressions, hash join, sort-merge join, Volcano execution model, query processing.

</section>
<section class="lang-panel lang-panel--zh" lang="zh" markdown="1">

这个项目来自 `~/Analytical_Data_Processing_hp921` 和 `~/Analytical_Data_Processing_jw3621`。项目在 BOSS 中实现 Join 算法，BOSS 是一个面向数据处理系统的可组合研究原型。

## 系统背景

BOSS 用同像表达式表示查询计划和中间数据。课程项目从更大的查询计划中隔离等值连接链，并交给 JoinOnly 引擎执行；选择、投影、Top-N 等其他算子由 Volcano 风格引擎处理。

{% include architecture-flow.html title="架构图" steps="BOSS 查询表达式|Join 链提取|JoinOnly 引擎|Hash 或 Sort-Merge Join|中间绑定结果|Volcano 引擎继续执行" %}

## 重要算法

**Hash Join。** Hash Join 先根据一侧输入的连接键构建哈希结构，再用另一侧输入探测。等值连接中平均查询接近常数时间，但实现必须处理非唯一键，也就是一个键可能对应多行匹配结果。

**Sort-Merge Join。** Sort-Merge Join 先按连接键排序两侧输入，再按顺序扫描并输出相等键区域的组合。它适合有序数据并避免嵌套循环爆炸，但排序本身会带来 `n log n` 成本。

**多路 Join 规划。** 项目重点是图状数据上的连接链，例如 cycle-counting 查询。多路 Join 必须在多个表之间保留中间绑定，而不是只做一次二元连接。

**部分查询求值。** JoinOnly 引擎只执行大表达式中的 Join 部分，并把剩余查询计划留给其他引擎，这是执行管线组合的清晰例子。

**性能解释。** 讨论中比较了扩展行为：Sort-Merge 在排序后受益于有序扫描，而 Hash Join 在哈希冲突多时可能退化。

## 技术栈

C++, CMake, BOSS expressions, hash join, sort-merge join, Volcano execution model, query processing.

</section>
</div>
