---
title: "C90 to RISC-V Compiler"
title_zh: "C90 到 RISC-V 编译器"
excerpt: "Compiler coursework implementing lexical analysis, parsing, AST construction, and RISC-V assembly generation."
excerpt_zh: "编译器课程项目，实现词法分析、语法分析、AST 构建和 RISC-V 汇编生成。"
collection: portfolio
permalink: /portfolio/c90-riscv-compiler/
---

<div class="bilingual-page" data-bilingual-root data-lang="en">
<section class="lang-panel lang-panel--en" lang="en" markdown="1">

This project was found under `~/langproc-2022-cw-crazy_Thursday_v50`. The coursework target was a compiler that reads preprocessed ANSI C / C90 source code and emits RISC-V assembly.

## Compiler Pipeline

- Lexical analysis in Flex-style lexer files.
- Grammar parsing with a Bison/Yacc-style parser.
- AST node structure split across declarations, operators, branches, loops, functions, primitives, unary expressions, and program-level nodes.
- Code generation to RISC-V assembly that can be assembled, linked, and run under the provided toolchain.

## Important Algorithms

**Lexical analysis.** The lexer converts raw C source text into tokens such as identifiers, keywords, literals, operators, and punctuation. A correct lexer simplifies parsing by removing whitespace/comments and classifying source fragments.

**Context-free parsing.** The parser applies grammar rules to token streams and produces an AST. For C90, this includes nested statements, expressions, declarations, loops, functions, arrays, and control-flow constructs.

**AST-based code generation.** Each AST node emits assembly for its own semantic role. Expression nodes produce values, branch nodes emit labels and conditional jumps, loop nodes create control-flow labels, and function nodes manage prologue/epilogue behavior.

**Stack-frame and variable layout.** Local variables and temporaries require deterministic stack offsets. Function calls require argument passing, return-value handling, and preservation of relevant registers according to the target ABI.

**Control-flow lowering.** High-level constructs such as `if`, `while`, `for`, `break`, and `continue` are lowered into labels and conditional/unconditional branches in RISC-V assembly.

## Technical Stack

C++, Flex, Bison/Yacc, AST design, compiler construction, RISC-V assembly, Docker-based test environment.

</section>
<section class="lang-panel lang-panel--zh" lang="zh" markdown="1">

这个项目来自 `~/langproc-2022-cw-crazy_Thursday_v50`。课程目标是构建一个读取预处理后的 ANSI C / C90 源码并输出 RISC-V 汇编的编译器。

## 编译流程

- 使用 Flex 风格 lexer 做词法分析。
- 使用 Bison/Yacc 风格 parser 做语法分析。
- AST 节点覆盖声明、运算符、分支、循环、函数、基础类型、一元表达式和程序级结构。
- 生成可由工具链汇编、链接和运行的 RISC-V 汇编。

## 重要算法

**词法分析。** Lexer 将原始 C 源码转换成标识符、关键字、字面量、运算符和标点等 token。正确的词法分析可以移除空白和注释，并降低语法分析复杂度。

**上下文无关语法分析。** Parser 根据语法规则处理 token 流并生成 AST。对 C90 来说，这包括嵌套语句、表达式、声明、循环、函数、数组和控制流结构。

**基于 AST 的代码生成。** 每类 AST 节点负责生成自己的语义对应汇编：表达式产生值，分支节点生成标签和条件跳转，循环节点创建控制流标签，函数节点处理序言和尾声。

**栈帧与变量布局。** 局部变量和临时值需要确定的栈偏移；函数调用需要处理参数传递、返回值和目标 ABI 要求的寄存器保存。

**控制流降低。** `if`、`while`、`for`、`break`、`continue` 等高级结构被降低成 RISC-V 中的标签和条件/无条件分支。

## 技术栈

C++, Flex, Bison/Yacc, AST design, compiler construction, RISC-V assembly, Docker-based test environment.

</section>
</div>
