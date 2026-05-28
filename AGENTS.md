# 学习者档案

## 基本信息
- 称呼：川
- 水平：新手小白，从零开始学全栈
- 年龄：20岁
- 目标：成为全栈工程师
- 语言：中文（简体）

## 学习进度

### 第1次课（2026-05-20）✅ 已完成
- HTML 基础：页面结构、标题、段落、列表、链接、图片、属性
- CSS 基础：语法、颜色、文字样式、边框圆角、背景、内外边距、hover
- JavaScript 基础：函数、事件、alert、变量、字符串拼接、if...else、DOM操作

### 第2次课（2026-05-21）✅ 已完成
- Flexbox 布局：display:flex、justify-content、gap、flex:1、flex-wrap
  - 做的作业：导航栏（水平居中 + hover变色）
- 数组：创建、访问、for循环、push、join
- 对象：创建、点号访问属性、数组里套对象
- 箭头函数：let fn = () => {}
- innerHTML vs innerText
- 综合项目：待办清单 Todo List（数组+对象+箭头函数+for循环+if判断）

### 第3次课（2026-05-22）✅ 已完成
- CSS Grid 布局：display:grid、grid-template-columns、1fr、gap
  - 做的作业：日常安排（2列网格）
- addEventListener 事件监听：click、mouseover、mouseout
  - vs onclick 的区别：写在 JS 里，可绑多个函数
- document.querySelector：通过 class 查找元素

### 第4次课（2026-05-23）✅ 已完成
- setInterval 定时器：每隔指定毫秒数重复执行代码
- clearInterval：停止定时器
- 综合项目：番茄钟（Pomodoro Timer）
  - 开始/暂停/重置三个按钮
  - 倒计时逻辑：timeLeft-- 每秒减1
  - timerId 变量控制定时器状态
  - Math.floor() 和 % 取余转换时间格式
  - 练习：自己写了开始、暂停、重置三个功能的 JS 代码

### 第5次课（2026-05-24）✅ 已完成
- 函数参数 + 返回值 + localStorage

### 第6次课（2026-05-24）✅ 已完成
- 数组进阶：forEach / filter / map

### 第7次课（2026-05-25）✅ 已完成
- DOM 进阶：createElement / appendChild / splice

### 第8次课（2026-05-25）✅ 已完成
- 表单 Form + 事件对象 event

### 第9次课（2026-05-25）✅ 已完成
- CSS 过渡和动画：transition / transform / animation

### 第10次课（2026-05-25）✅ 已完成
- CSS 定位：relative / absolute / fixed / z-index

### 第11次课（2026-05-25）✅ 已完成
- 响应式设计：media query

### 第12次课（2026-05-25）✅ 已完成
- ES6 语法进阶：模板字符串 / 解构赋值 / 展开运算符

### 第13次课（2026-05-26）✅ 已完成
- Git 版本控制入门

### 第14次课（2026-05-28）✅ 已完成
- Git 分支（branch）

### 第15次课（2026-05-28）✅ 已完成
- fetch API 入门

### 第16次课（2026-05-28）✅ 已完成
- async / await

### 第17次课（2026-05-28）✅ 已完成
- Node.js 入门（HTTP 服务器）

### 第18次课（2026-05-28）✅ 已完成
- Node.js 路由 + JSON
- 练习：自己加 /hobby 路由（独立返回爱好 JSON 数组）

### 下次课待学

## 教学风格偏好（重要）
1. 以老师身份教导，把我当完全零基础的新手
2. 每学完一个知识点，布置练习巩固
3. 我做完练习后，帮我检查代码并指出错误
4. 指出错误时，**不要直接改代码**，要一步步引导我自己去改
5. 每步改完要问我"改完了告诉我"，确认后再进行下一步
6. 每天结束时，把当天所学总结写入 `学习进度.html`
7. 用简单易懂的语言解释，多用类比和举例
8. **所有代码都要有详细注释和解释**，每行或每段代码旁边都要写清楚"这行代码是干什么的"

## 项目文件说明
- `my-first-page.html`：第一个网页（第1次课）
- `script.html`：JavaScript 入门练习（第1次课）
- `my-hobby.html`：个人主页（主项目，持续更新）
- `my-hobby.css`：样式文件
- `my-hobby.js`：交互功能文件
- `学习进度.html`：学习进度和总结文档
- `server.js`：Node.js 服务器文件
- `img/`：图片资源目录
- `AGENTS.md`：本文件（AI 记忆文件）

## 常犯错误（需特别注意提醒）
1. 函数调用忘记加 ()：`onclick="fn"` 应为 `onclick="fn()"`
2. 函数名拼写不一致：HTML 和 JS 的函数名必须完全一致
3. 对象调用了数组方法：`.join()` 只能用在数组上
4. if...else 写在函数外面：逻辑要放在 function {} 里面
5. 布尔值 true 写成字符串 "true"：直接写 `if (done)` 即可
6. innerText vs innerHTML 混用：显示 HTML 标签用 innerHTML
7. id 和 onclick 搞混：按钮用 onclick 绑定函数，不是用 id
8. oncilck 拼写错误：应为 onclick
9. if 的 } 后面加分号：if...else if 中间不能加分号
