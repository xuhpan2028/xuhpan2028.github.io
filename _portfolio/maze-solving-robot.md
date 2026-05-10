---
title: "Maze-Solving Balancing Robot"
title_zh: "迷宫求解平衡机器人"
excerpt: "Second-year engineering design project for a two-wheel balancing robot that maps and navigates a maze."
excerpt_zh: "二年级工程设计项目：构建能够建图并导航迷宫的两轮平衡机器人。"
collection: portfolio
permalink: /portfolio/maze-solving-robot/
badges:
  - en: "Hardware System"
    zh: "硬件系统"
  - en: "Control"
    zh: "控制"
  - en: "Path Planning"
    zh: "路径规划"
---

<div class="bilingual-page" data-bilingual-root data-lang="en">
<section class="lang-panel lang-panel--en" lang="en" markdown="1">

This project was found under `~/Group-16`. It was an Imperial College second-year engineering design project: build a two-wheel balancing robot that can autonomously survey a maze, avoid illuminated boundary lines, and show the discovered map and shortest path.

## System Scope

- Built around an ESP32 control platform, MPU6050 IMU, stepper motors, motor drivers, and FPGA-based camera input.
- Required two-wheel balancing, maze sensing, autonomous mapping, and navigation.
- Included beacon-related system design under energy constraints.

{% include architecture-flow.html title="Architecture Diagram" steps="IMU + camera sensing|Complementary attitude estimate|Balance controller|Line/beacon correction|Maze graph mapping|Shortest-path navigation" %}

## Important Algorithms

**Inverted-pendulum balancing.** A two-wheel balancing robot behaves like an inverted pendulum. The controller must estimate tilt from IMU readings and continuously adjust motor commands to keep the center of mass above the wheel axle.

**Sensor fusion for attitude estimation.** Accelerometer readings provide an absolute gravity direction but are noisy during motion; gyroscope readings capture angular velocity but drift over time. A complementary-filter style approach combines both signals: gyroscope integration gives fast short-term response, while accelerometer angle corrects long-term drift.

**Dead reckoning.** Maze localization can be estimated from wheel rotation, heading, and motion commands. Dead reckoning is simple and real-time, but error accumulates, so optical line detection and beacons are important for correction.

**Maze mapping and shortest path.** The robot must convert local sensing into a graph-like map of intersections and corridors. Once the graph exists, shortest-path planning can be done with BFS or Dijkstra-style traversal depending on whether all path costs are equal.

**Line and beacon detection.** The arena uses illuminated maze markings and up to three illuminated beacons. Visual detection provides external references that help the robot avoid crossing boundaries and reduce accumulated localization error.

## Technical Stack

ESP32, Arduino, MPU6050, stepper motors, A4988 motor drivers, FPGA camera system, autonomous navigation, control systems.

</section>
<section class="lang-panel lang-panel--zh" lang="zh" markdown="1">

这个项目来自 `~/Group-16`，是帝国理工二年级工程设计项目：构建一台两轮平衡机器人，使其能够自主探索迷宫、避开发光边界线，并展示已发现地图与最短路径。

## 系统范围

- 基于 ESP32 控制平台、MPU6050 IMU、步进电机、电机驱动和 FPGA 摄像头输入。
- 需要实现两轮平衡、迷宫感知、自主建图和导航。
- 包含能量约束下的信标相关系统设计。

{% include architecture-flow.html title="架构图" steps="IMU + 摄像头感知|互补姿态估计|平衡控制器|线/信标校正|迷宫图建模|最短路径导航" %}

## 重要算法

**倒立摆平衡。** 两轮平衡机器人类似倒立摆。控制器必须根据 IMU 估计倾角，并持续调整电机命令，使重心保持在轮轴上方。

**姿态估计传感器融合。** 加速度计提供重力方向但运动时噪声较大，陀螺仪提供角速度但会随时间漂移。互补滤波思想结合两者：陀螺仪积分提供快速短期响应，加速度计角度修正长期漂移。

**航位推算。** 迷宫定位可以由轮子转动、朝向和运动命令估计。航位推算实时且简单，但误差会积累，因此光学线检测和信标对校正很重要。

**迷宫建图与最短路径。** 机器人需要把局部感知转换成交叉口和走廊组成的图。一旦有图结构，就可以用 BFS 或 Dijkstra 风格方法做最短路径规划，取决于路径成本是否相等。

**线与信标检测。** 场地使用发光迷宫线和最多三个发光信标。视觉检测提供外部参考，帮助机器人避免越界并降低累计定位误差。

## 技术栈

ESP32, Arduino, MPU6050, stepper motors, A4988 motor drivers, FPGA camera system, autonomous navigation, control systems.

</section>
</div>
