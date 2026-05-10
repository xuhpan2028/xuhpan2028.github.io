---
title: "ISSIE Random Circuit Testing"
title_zh: "ISSIE 随机电路测试"
excerpt: "Random circuit generation and automated testing for ISSIE sheet beautification helpers."
excerpt_zh: "为 ISSIE 原理图美化辅助功能构建随机电路生成和自动化测试。"
collection: portfolio
permalink: /portfolio/issie-testing/
---

<div class="bilingual-page" data-bilingual-root data-lang="en">
<section class="lang-panel lang-panel--en" lang="en" markdown="1">

This Imperial College HLP project focused on testing and robustness for ISSIE, a schematic editor and simulator.

ISSIE includes layout and sheet-beautification behavior where many bugs only appear under unusual graph structures. The project focused on generating diverse circuits automatically so layout changes could be tested against more than a few hand-written examples.

## Testing Pipeline

- Developed `makeRandomCircuits` to generate varied test circuits.
- Created edge-case circuits to stress layout and routing behavior.
- Added automated failure highlighting for test results.
- Built original-vs-improved comparison tests using random seeds.

## Important Algorithms

**Random circuit generation.** The generator creates circuit graphs with varied components, wire connections, fan-in/fan-out patterns, and layout shapes. Random generation is useful here because schematic editors can fail on combinations that developers would not naturally hand-write.

**Seeded reproducibility.** Random tests are only useful if failures can be reproduced. The testing workflow used seeds so a failing circuit could be regenerated exactly, inspected, and compared before and after layout changes.

**Graph edge-case coverage.** Circuit sheets can be interpreted as graphs: components are nodes and wires are edges. The generated cases stressed graph layouts with branching, long routes, crossing-prone structures, and dense local connectivity. Those cases are important for detecting regressions in beautification helpers.

**Differential comparison.** The original and improved layout behavior were compared on the same generated circuit. This made the test output actionable: instead of just saying a circuit failed, the comparison highlighted how the new behavior differed from the baseline.

## Technical Stack

F#, automated testing, random test generation, circuit layout, ISSIE.

</section>
<section class="lang-panel lang-panel--zh" lang="zh" markdown="1">

这个帝国理工 HLP 项目关注 ISSIE 的测试与鲁棒性。ISSIE 是一个原理图编辑器和仿真器。

ISSIE 包含布局和原理图美化逻辑，很多 bug 只会在特殊图结构中出现。项目通过自动生成多样电路，让布局修改不只依赖少数手写样例进行测试。

## 测试流程

- 开发 `makeRandomCircuits` 生成多样测试电路。
- 构造边界案例，压力测试布局和走线行为。
- 为测试结果加入自动失败高亮。
- 使用随机种子构建原始版本和改进版本的对比测试。

## 重要算法

**随机电路生成。** 生成器创建包含不同组件、连线、扇入/扇出模式和布局形状的电路图。随机生成适合发现开发者不会自然手写的组合问题。

**种子可复现性。** 随机测试只有在失败可复现时才有价值。测试流程使用 seed，使失败电路可以完全重建、检查，并与修改前后行为对比。

**图结构边界覆盖。** 电路图可以看作图：组件是节点，导线是边。生成案例覆盖分支、长走线、易交叉结构和局部高密度连接，这些情况对发现美化逻辑回归很重要。

**差分对比。** 在同一随机电路上比较原始和改进布局行为，使测试输出更可操作：不仅报告失败，还高亮新旧行为差异。

## 技术栈

F#, automated testing, random test generation, circuit layout, ISSIE.

</section>
</div>
