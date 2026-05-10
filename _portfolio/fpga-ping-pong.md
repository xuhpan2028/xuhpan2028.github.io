---
title: "FPGA Multiplayer Ping-Pong Game"
title_zh: "FPGA 多人乒乓游戏"
excerpt: "Real-time game system across Verilog FPGA logic, TCP/IP networking, AWS EC2, and Unity."
excerpt_zh: "跨 Verilog FPGA 逻辑、TCP/IP 网络、AWS EC2 和 Unity 的实时游戏系统。"
collection: portfolio
permalink: /portfolio/fpga-ping-pong/
badges:
  - en: "Hardware System"
    zh: "硬件系统"
  - en: "Cloud Sync"
    zh: "云端同步"
  - en: "Unity"
    zh: "Unity"
---

<div class="bilingual-page" data-bilingual-root data-lang="en">
<section class="lang-panel lang-panel--en" lang="en" markdown="1">

This Imperial College team project built a two-player ping-pong game with hardware logic, cloud networking, and a 3D interface.

The project connected three very different execution environments: deterministic FPGA logic, networked state exchange through a cloud server, and a Unity front end. The main challenge was keeping game state consistent while each layer had different timing behavior.

## System Architecture

- Implemented timing-sensitive game-state behavior on FPGA hardware.
- Used TCP/IP and AWS EC2 to transmit player state for real-time interaction.
- Built a Unity 3D interface and sound effects for gameplay presentation.

{% include architecture-flow.html title="Architecture Diagram" steps="Player input|FPGA finite-state logic|Collision and score state|TCP/IP state sync|AWS EC2 relay|Unity 3D rendering" %}

## Important Algorithms and Logic

**Finite-state game control.** The FPGA side used explicit state transitions for serve, active rally, score update, reset, and game-over behavior. A finite-state machine is a good fit for this type of hardware game because every output can be tied to a clocked state and a small set of input events.

**Clocked collision logic.** Ball movement, paddle position, boundary checks, and scoring events must be evaluated in a stable order. The hardware implementation treats collision detection as synchronous logic, avoiding frame-rate-dependent behavior that would be common in a pure software game loop.

**Network state synchronization.** The TCP/IP path sent player state through AWS EC2 so two clients could interact. The important design issue was deciding which state needed to be authoritative and which could be rendered locally. That separation keeps the visual Unity layer responsive while the game logic remains consistent.

**Unity rendering loop.** Unity handled presentation, 3D objects, and audio feedback. The front end consumed game-state updates and translated them into visible movement rather than owning the core hardware timing logic.

## Technical Stack

Verilog, Quartus Prime, FPGA, TCP/IP, AWS EC2, Unity, C#.

</section>
<section class="lang-panel lang-panel--zh" lang="zh" markdown="1">

这个帝国理工团队项目构建了一个双人乒乓游戏，系统包含硬件逻辑、云端网络和 3D 界面。

项目连接了三个执行环境：确定性 FPGA 逻辑、通过云服务器交换状态的网络层，以及 Unity 前端。主要挑战是每层时序不同，但游戏状态仍要保持一致。

## 系统架构

- 在 FPGA 硬件上实现对时序敏感的游戏状态逻辑。
- 使用 TCP/IP 和 AWS EC2 传输玩家状态，实现实时交互。
- 使用 Unity 构建 3D 界面和音效反馈。

{% include architecture-flow.html title="架构图" steps="玩家输入|FPGA 有限状态机|碰撞与得分状态|TCP/IP 状态同步|AWS EC2 转发|Unity 3D 渲染" %}

## 重要算法与逻辑

**有限状态机游戏控制。** FPGA 侧使用明确状态转换处理发球、回合、得分、重置和结束。有限状态机适合硬件游戏，因为每个输出都能绑定到时钟状态和少量输入事件。

**时钟同步碰撞逻辑。** 球移动、挡板位置、边界检查和得分事件必须按稳定顺序求值。硬件实现把碰撞检测作为同步逻辑，避免纯软件帧循环中可能出现的帧率依赖行为。

**网络状态同步。** TCP/IP 路径通过 AWS EC2 发送玩家状态，让两个客户端交互。关键设计是区分权威状态和本地可渲染状态，使 Unity 视觉层保持响应，同时游戏逻辑保持一致。

**Unity 渲染循环。** Unity 负责展示、3D 对象和音频反馈；前端消费游戏状态更新并转成可见运动，而不是拥有核心硬件时序逻辑。

## 技术栈

Verilog, Quartus Prime, FPGA, TCP/IP, AWS EC2, Unity, C#.

</section>
</div>
