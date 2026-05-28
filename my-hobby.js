/*
  ==========================================
  文件名：my-hobby.js
  作用：给 my-hobby.html 添加交互功能
  语法：JavaScript（简称 JS）
  ==========================================
*/

/*
  声明变量（variable）：用 let 关键字
  变量就像"盒子"，可以往里放数据
  变量名区分大小写，myName 和 myname 是两个不同的变量
*/

// 字符串（string）：用双引号或单引号包起来的文字
let myName = "川";            // 我的名字
let myGoal = "全栈工程师";    // 我的目标
let myAge = 20;               // 数字（number），不需要引号

/* ===================================
   函数1：greet() — 打招呼
   ===================================
   function 函数名() { ... }
   函数是一段可以重复使用的代码
   调用函数时，才会执行里面的代码
*/

function greet() {
    /*
      alert() 是浏览器弹窗函数
      字符串拼接：用 + 把文字和变量连起来
    */
    alert("你好，我是" + myName + ",我的年龄:" + myAge + "，我的目标是成为" + myGoal);
}

/* ===================================
   函数2：toggleDark() — 切换深色/浅色模式
   ===================================
   toggle 的意思是"切换"
*/

function toggleDark() {
    // document.body 表示网页的 <body> 标签
    let body = document.body;

    // if...else 条件判断
    // === 是"严格等于"，判断左右两边是否完全一样
    if (body.style.backgroundColor === "black") {
        // 如果当前背景是黑色 → 变回白色
        body.style.backgroundColor = "white";   // 设置背景色为白色
        body.style.color = "black";             // 设置文字色为黑色
    } else {
        // 否则（当前不是黑色）→ 变成黑色
        body.style.backgroundColor = "black";   // 设置背景色为黑色
        body.style.color = "white";             // 设置文字色为白色
    }
}

/* ===================================
   函数3：changeTitle() — 修改标题
   ===================================
*/

function changeTitle() {
    /*
      document.getElementById("title")：
      通过 id 找到 HTML 中的 <h1 id="title"> 标签

      .innerText = "..." ：
      修改标签里显示的文字
    */
    document.getElementById("title").innerText = "欢迎" + myName + "来到我的主页！";
}

/* ===================================
   函数4：showMessage() — 显示消息
   ===================================
*/

function showMessage(text) {
    // 把文字写入 id="message" 的 <p> 标签中
    // document.getElementById("message").innerText = "你学会了操作页面内容！🎉";
    document.getElementById("message").innerText = text;
}

/* ===================================
   函数5：changeState() — 修改状态
   ===================================
*/

function changeState() {
    document.getElementById("state").innerText = "你已进入深色模式！";
}

/* ===================================
   函数6：countClicks() — 点击计数
   ===================================
*/

// 声明一个变量来记录点击次数，初始值是 0
let clickCount = 0;

function countClicks() {
    // 每调用一次，clickCount 加 1
    // = 是赋值，把右边的结果赋给左边的变量
    clickCount = clickCount + 1;   // 也可以写成 clickCount++
    alert("你点了 " + clickCount + " 次了");
}

/* ===================================
   第2次课内容：数组
   ===================================

   数组（array）：一组数据的集合
   用方括号 [] 表示，里面的数据用逗号分隔
   数组的编号（下标）从 0 开始：
   hobbies[0] = "打游戏"
   hobbies[1] = "打羽毛球"
   hobbies[2] = "跑步"
*/

// 声明一个数组，存放多个爱好
let hobbies = ["打游戏", "打羽毛球", "跑步"];

/*
  函数7：showHobbies() — 遍历数组，显示所有爱好
*/

function showHobbies() {
    let text = "我的爱好有：";

    /*
      for 循环：重复执行一段代码
      语法：for (初始值; 条件; 每次执行后做什么)

      流程：
      第1步：let i = 0（从 0 开始）
      第2步：判断 i < hobbies.length（是否小于数组长度）
      第3步：如果条件成立，执行 { } 里的代码
      第4步：i++（i 加 1）
      第5步：回到第2步，继续判断
    */

    // for (let i = 0; i < hobbies.length; i++) {
    //     // 把每个爱好拼接到 text 后面
    //     // hobbies[i] 表示数组中第 i 个元素
    //     text = text + hobbies[i] + " ";
    // }
    hobbies.forEach(hobby => {
        text = text + hobby + " ";
    })

    // 把拼接好的文字显示到页面上
    document.getElementById("display").innerText = text;
}

/* ===================================
   第2次课内容：对象
   ===================================

   对象（object）：用键值对存储相关数据
   用花括号 {} 表示
   格式：{ 属性名: 属性值, 属性名: 属性值 }
   通过"对象名.属性名"来访问
*/

// 声明一个对象，存储个人信息
let me = {
    name: "川",       // "name" 是属性名，"川" 是属性值
    age: 20,          // 数字类型
    goal: "全栈工程师",
    city: "中国",
    hobby: "打羽毛球"
};

/*
  函数8：showMe() — 显示对象中的个人信息
*/

function showMe() {
    // me.name 访问对象的 name 属性（点号表示法）
    document.getElementById("object-demo").innerText =
        // "我叫" + me.name + "，今年" + me.age + "岁，来自" + me.city + "，目标是" + me.goal + "，爱好是" + me.hobby;
        `我叫${me.name}，今年${me.age}岁，来自${me.city}，目标是${me.goal}，爱好是${me.hobby}`
}
let friend= {
    name:"徐阳",
    age:20,
    goal:"前端工程师",
    city:"中国",
    hobby:"打篮球，打羽毛球"
};
function showFriend() {
    let {name,age,goal,city,hobby} = friend;
    document.getElementById("object-demo").innerText =
        // "我的朋友叫" + friend.name + "，今年" + friend.age + "岁，来自" + friend.city + "，目标是" + friend.goal + "，爱好是" + friend.hobby;
        `我的朋友叫${name}，今年${age}岁，来自${city}，目标是${goal}，爱好是${hobby}`
}
let book = {
    title: "JavaScript高级程序设计",
    author: "马特·弗里斯比",
    year: 2020,
    pages: 748,
    done: false
};

function showBook() {
    let text = "我正在读的图书是《" + book.title + "》，作者是" + book.author + "，" + book.year + "年出版，共" + book.pages + "页，";

    if (book.done) {
        text = text + "已读完";
    } else {
        text = text + "还没读完";
    }

    document.getElementById("object-demo").innerText = text;
}

let userInfo = {name: "川", age: 20}
let userExtra = {city: "中国", goal: "全栈工程师"};

function showUserInfo(){
    let dullInfo = {...userInfo, ...userExtra};
    document.getElementById("object-demo").innerText =
        `我叫${dullInfo.name}，今年${dullInfo.age}岁，来自${dullInfo.city}，目标是${dullInfo.goal}`;
}

let skills = [
    { name: "HTML", status: "已完成" },
    { name: "CSS", status: "已完成" },
    { name: "JavaScript", status: "已完成" },
    { name: "Flexbox", status: "已完成" },
    { name: "数组", status: "学习中" },
    { name: "对象", status: "学习中" },
    { name: "Node.js", status: "未开始" }
];

function showSkills() {                             // 先建一个空数组，用来存每一段文字

        let result = skills.map(skill => {
            let icon = "";
            if (skill.status === "已完成") {
                icon = "✅";
            } else if (skill.status === "学习中") {
                icon = "📖";
            } else {
                icon = "⬜";
            }

            return "<p>" + icon + skill.name + "</p>";
        });

    document.getElementById("display").innerText =
        "我目前掌握的技能有：" + result.join(" | ");  // 最后用 join 连起来
}

let savedTodos = localStorage.getItem("todos");
if(savedTodos){
    todos = JSON.parse(savedTodos);
} else{
    todos=[
    { task:"学完Flexbox", done: true },
    { task:"学完数组", done: true },
    { task:"学完对象", done: true },
    { task:"学完箭头函数", done: false }
    ]
}
// let todos = [
//     { task:"学完Flexbox", done: true },
//     { task:"学完数组", done: true },
//     { task:"学完对象", done: true },
//     { task:"学完箭头函数", done: false }
// ];
function showTodos() {
    let container = document.getElementById("todo-list");
    container.innerHTML = "";
        let title = document.createElement("h3");
        title.innerText = "我的待办事项有：";
        container.appendChild(title);
        todos.forEach((todo,index) => {
            let delBtn = document.createElement("button");
            delBtn.innerText = "❌";
            delBtn.addEventListener("click", () => {
                todos.splice(index, 1);
                localStorage.setItem("todos", JSON.stringify(todos));
                showTodos();
            });
            container.appendChild(delBtn);
            let p = document.createElement("p");
            p.innerText = (todo.done ? "✅" : "⬜") + " " + todo.task;
            container.appendChild(p);
            
        });
}
let addTodos = () => {
    let newTodo = prompt("输入一个待办事项：");
    if (newTodo) {
        todos.push({ task: newTodo, done: false });
        localStorage.setItem("todos", JSON.stringify(todos));
        showTodos();
    }else {
        alert("输入不能为空");
    }
};
let showUndoneTodos = () => {
    let result = [];
    let undoneTodos = todos.filter(todo => !todo.done);

    undoneTodos.forEach(todo => {
        let text = "<p>⬜ " + todo.task + "</p>";
        result.push(text);
    });

    document.getElementById("display").innerHTML =
        "<h3>我未完成的待办事项有</h3>" + result.join("");
    }


/* ===================================
   第2次课内容：箭头函数
   ===================================

   箭头函数（arrow function）是函数的简写形式
   普通函数：function 函数名() { ... }
   箭头函数：let 函数名 = () => { ... }

   => 像一支箭头，所以叫箭头函数
*/

/*
  函数9：addHobby() — 添加新爱好
  用箭头函数语法定义
*/

let addHobby = () => {
    /*
      prompt("提示文字") 是浏览器弹窗
      弹出一个输入框，让用户输入内容
      用户输入的内容会作为"返回值"赋给 newHobby
    */
    let newHobby = prompt("输入一个新爱好：");

    // if (newHobby) 的意思是：如果 newHobby 不是空值
    if (newHobby) {
        // .push() 是数组的方法，往数组末尾添加一个新元素
        hobbies.push(newHobby);

        // .join("、") 把数组的所有元素用"、"连接成一个字符串
        document.getElementById("display").innerText = "已添加！现在的爱好：" + hobbies.join("、");
    }
};

let goals = ["学习HTML", "掌握HTML", "学习CSS", "掌握CSS", "学习JS", "掌握JS"];

// 显示学习目标（用 join 方法）
function showGoals() {
    document.getElementById("display").innerText = "我的学习目标：" + goals.join(" → ");
}

// 添加学习目标（你自己加的）
let addGoals = () => {
    let newGoal = prompt("输入一个新目标：");
    if (newGoal) {
        goals.push(newGoal);
        document.getElementById("display").innerText = "已添加！现在的目标：" + goals.join("、");
    }
};

/*
  ===================================
  第3次课内容：addEventListener
  ===================================

  addEventListener 是"添加事件监听器"
  语法：元素.addEventListener("事件类型", 要执行的函数)

  常见事件类型：
  "click"    → 点击
  "mouseover" → 鼠标移入
  "mouseout"  → 鼠标移出

  和 onclick 的区别：
  - onclick 写在 HTML 标签里
  - addEventListener 写在 JS 里（更干净、更灵活）
  - 同一个元素可以绑定多个不同的函数
*/

// ========== 示例1：用 addEventListener 绑定点击事件 ==========

// 第1步：通过 id 找到 HTML 中的按钮，存到变量里
let eventBtn = document.getElementById("event-btn");

// 第2步：用 addEventListener 给按钮绑定"点击"事件
// 当按钮被点击时，执行后面的箭头函数
eventBtn.addEventListener("click", () => {
    /*
      每次点击，修改 id="event-display" 的 p 标签的文字
      innerText：修改纯文字内容
    */
    document.getElementById("event-display").innerText =
        "你点击了按钮！这是 addEventListener 绑定的效果 🎉";
});

// ========== 示例2：同一个按钮可以绑多个函数 ==========

let eventBtn2 = document.getElementById("event-btn2");

// 第1个监听器：点击后显示消息
eventBtn2.addEventListener("click", () => {
    document.getElementById("event-display").innerText =
        "第一个监听器触发了！";
});

// 第2个监听器：点击后弹出弹窗
eventBtn2.addEventListener("click", () => {
    alert("这是第二个监听器！同一个按钮绑了两个函数");
});

document.getElementById("title");

document.addEventListener("click", () => {
    document.getElementById("title").innerText =
        "你点击了标题!";
});

// ========== 示例3：鼠标移入（mouseover）和移出（mouseout） ==========

// 找到那个蓝色的盒子
let hoverBox = document.getElementById("hover-box");

// 鼠标移入盒子时触发
hoverBox.addEventListener("mouseover", () => {
    // 修改盒子的背景色为橙色
    hoverBox.style.backgroundColor = "#e67e22";
    // 修改下方的提示文字
    document.getElementById("hover-display").innerText =
        "👆 鼠标移入了盒子！";
});

// 鼠标移出盒子时触发
hoverBox.addEventListener("mouseout", () => {
    // 恢复盒子的背景色为蓝色
    hoverBox.style.backgroundColor = "#3498db";
    // 修改下方的提示文字
    document.getElementById("hover-display").innerText =
        "👋 鼠标移出了盒子！";
});

let navHome = document.querySelector(".nav-item");

navHome.addEventListener("mouseover", () => {
    document.getElementById("title").innerText =
        "你正在看首页";
});
navHome.addEventListener("mouseout", () => {
    document.getElementById("title").innerText =
        "欢迎来到我的主页";
});

/*
  关键理解：
  - mouseover → 鼠标进入元素时触发
  - mouseout  → 鼠标离开元素时触发
  - 同一个元素可以同时绑 click、mouseover、mouseout ……
    互不干扰，各干各的事
*/

/*
  ===================================
  第4次课内容：setInterval 定时器
  ===================================


  setInterval(函数, 间隔毫秒数)
  每隔指定毫秒数，执行一次函数
  返回一个"定时器ID"，用来停止定时器

  clearInterval(定时器ID)
  停止定时器

  例子：每隔1秒显示当前时间
  setInterval(() => {
    document.getElementById("display").innerText = new Date().toString();
  }, 1000);
*/


// ↓ 你的练习1写在这里 ↓（每隔1秒，把当前时间显示到 id="display" 的元素上）

// let display = setInterval(() => {
//     document.getElementById("display").innerText =
//         new Date().toString();
// }, 1000);
/*
  ===================================
  第5次课内容：函数参数与返回值
  ===================================

  知识点回顾：
  - 函数参数 = 函数接收外部数据的"入口"
  - 多个参数用逗号隔开
  - 参数名自己取，在函数内部当变量用
*/

// ========== 练习1：写一个带参数的问候函数 ==========
// 要求：写一个函数 greetUser(name)
// 调用 greetUser("川") 时，弹出 "你好，川！欢迎来学习！"
// 调用 greetUser("小明") 时，弹出 "你好，小明！欢迎来学习！"
// 可以传入不同名字，弹出不同内容
//
// 你的代码写在这里 ↓
function greetUser(name){
    alert("你好，" + name + "！欢迎来学习！");
}


// ========== 练习2：用参数改进现有函数 ==========
// 把下面的 showMessage 函数改成带参数的版本
// 原来：showMessage() 永远显示 "你学会了操作页面内容！🎉"
// 改成：showMessage(text) 可以传入任何消息
// 调用 showMessage("你好啊") → 显示 "你好啊"

// ========== 练习3：写一个带参数 + 返回值的函数 ==========
// 要求：写一个函数 calcAge(birthYear)
// 接收出生年份，用 2026 - birthYear 算出年龄
// 用 return 返回结果
// 调用 calcAge(2006) 应该返回 20
//
// 你的代码写在这里 ↓
function calcAge(birthYear){
    return 2026 - birthYear;
}

/*
  补充知识（先了解，以后会学到）：
  - .push() 是数组的方法
  - .join() 是数组的方法
  - .length 是数组的属性（不是方法，没有括号）
  - 方法 = 属于某个数据的函数，用点号调用
*/

/*
  ==========================================
  第8次课内容：表单（Form）和事件对象（event）
  ==========================================
*/

// ===== 步骤1：获取表单和留言板元素 =====
let messageForm = document.getElementById("message-form");     // 📋 留言表单
let nameInput = document.getElementById("name-input");         // 👤 名字输入框
let msgInput = document.getElementById("msg-input");           // 💬 留言输入框
let messageBoard = document.getElementById("message-board");   // 📌 留言板容器

// ===== 步骤2：给表单绑定 submit 事件 =====
// 当用户点击"发布留言"按钮时，触发表的 submit 事件
messageForm.addEventListener("submit", (event) => {
    // ★ event 是"事件对象"，浏览器自动传进来
    // ★ event.preventDefault() 阻止表单的默认行为（页面刷新）
    event.preventDefault();

    // 获取输入框里的值（.value 就是输入框的内容）
    let name = nameInput.value;      // 👤 用户填的名字
    let text = msgInput.value;       // 💬 用户填的留言内容

    // 如果输入框是空的，就不处理
    if (name === "" || text === "") {
        return;
    }

    // ===== 步骤3：创建一条留言，显示在页面上 =====
    // 用 createElement 创建留言容器
    let messageItem = document.createElement("div");    // 📦 单条留言容器
    messageItem.className = "message-item";

    let messageButton = document.createElement("button");    // ❌ 删除按钮
    messageButton.className = "button";
    messageButton.innerText = "❌";

    // 创建"名字"部分
    let nameSpan = document.createElement("span");    // 👤 名字标签
    nameSpan.className = "name";
    nameSpan.innerText = name + "：";

    // 创建"留言内容"部分
    let textSpan = document.createElement("span");    // 💬 留言内容标签
    textSpan.className = "text";
    textSpan.innerText = text;

    // 把名字和内容拼到留言容器里
    messageItem.appendChild(nameSpan);
    messageItem.appendChild(textSpan);
    messageItem.appendChild(messageButton);

    // 把整条留言添加到留言板
    messageBoard.appendChild(messageItem);

    // ===== 步骤4：清空输入框，方便写下一条 =====
    nameInput.value = "";
    msgInput.value = "";
});

// ===== 第10课：回到顶部按钮 =====
document.getElementById("back-to-top").addEventListener("click", () => {
    // window.scrollTo 让页面滚动到指定位置
    // top: 0 表示滚动到页面顶部
    // behavior: "smooth" 表示平滑滚动（不是瞬间跳）
    window.scrollTo({ top: 0, behavior: "smooth" });
});

messageBoard.addEventListener("click", (event) => {
    // 获取点击的元素
    let target = event.target;    // 🎯 用户点的是哪个元素？
    if (target.classList.contains("name"))
        alert("你点击了名字：" +target.innerText);
    if (target.classList.contains("text"))
        alert("你点击了内容:" + target.innerText);
    if (target.className === "button")
        target.parentElement.remove();
    

});
let likeCount = 0;
document.getElementById("like-button").addEventListener("click", () => {
    likeCount++;
    document.getElementById("like-count").innerText = likeCount;
});

async function fetchTodo(){
    let res = await fetch("https://jsonplaceholder.typicode.com/todos/1")
    let data = await res.json();
        document.getElementById("display").innerText = "标题:" + data.title + "| 完成状态" + (data.completed ? "✅" : "⬜");
}

async function fetchTodo5(){
    let res = await fetch("https://jsonplaceholder.typicode.com/todos/5")
    let data = await res.json();
    document.getElementById("display").innerText = "标题:" + data.title + "| 完成状态" + (data.completed ? "✅" : "⬜");

}
