// Express + SQLite 数据库服务器
// 之前的数据存在内存里，重启就没了
// 现在数据存在 data.db 文件里，永久保存

let express = require('express');
let Database = require('better-sqlite3');

let app = express();
let dbPath = process.env.DB_PATH || 'data.db';
let db = new Database(dbPath);
console.log("📦 数据库文件: " + dbPath);

// 解析前端发来的 JSON
app.use(express.json());

// 建表：users 表（如果还没有的话）
// 每次启动服务器都确保表存在
db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        age INTEGER
    )
`);
db.exec(`
    CREATE TABLE IF NOT EXISTS hobbies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    hobby TEXT NOT NULL,
    userId INTEGER)`)

// 建表：todos 表
// id = 自动编号, text = 待办内容, done = 是否完成(0或1), createdAt = 创建时间
db.exec(`
    CREATE TABLE IF NOT EXISTS todos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        text TEXT NOT NULL,
        done INTEGER DEFAULT 0,
        createdAt TEXT DEFAULT (datetime('now', 'localtime'))
    )
`);

// 首页
app.get('/', (req, res) => {
    res.send("<h1>首页</h1><p>这是 Express + SQLite 服务器</p>");
});

// 获取所有用户 (GET /users)
// 从数据库里查，不是从内存里取
app.get('/users', (req, res) => {
    let users = db.prepare('SELECT * FROM users').all();
    res.json(users);
});

app.get('/hobbies', (req, res) => {
    let hobbies = db.prepare('SELECT * FROM hobbies').all();
    res.json(hobbies);
});

// 获取单个用户 (GET /user/:id)
app.get('/user/:id', (req, res) => {
    let user = db.prepare('SELECT * FROM users WHERE id = ?').get(req.params.id);
    if (user) {
        res.json(user);
    } else {
        res.status(404).json({ message: '用户不存在' });
    }
});

app.get('/hobby/:id', (req, res) => {
    let hobby = db.prepare('SELECT * FROM hobbies WHERE id = ?').get(req.params.id);
    if (hobby) {
        res.json(hobby);
    } else {
        res.status(404).json({ message: '爱好不存在' });
    }
});

// 添加用户 (POST /user)
app.post('/user', (req, res) => {
    let { name, age } = req.body;
    let result = db.prepare('INSERT INTO users (name, age) VALUES (?, ?)').run(name, age);
    // lastInsertRowid = 刚插入的那条数据的 id
    res.json({ id: result.lastInsertRowid, name, age, message: '添加成功！' });
});

app.post('/hobby', (req, res) => {
    let { hobby, userId } = req.body;
    let result = db.prepare('INSERT INTO hobbies (hobby, userId) VALUES (?, ?)').run(hobby, userId);
    // lastInsertRowid = 刚插入的那条数据的 id
    res.json({ id: result.lastInsertRowid,hobby , userId, message: '添加成功！' });
})

// ========== Todo List API ==========

// 获取所有待办 (GET /api/todos)
app.get('/api/todos', (req, res) => {
    let todos = db.prepare('SELECT * FROM todos ORDER BY id DESC').all();
    res.json(todos);
});

// 添加待办 (POST /api/todos)
app.post('/api/todos', (req, res) => {
    let { text } = req.body;
    if (!text) {
        return res.status(400).json({ message: '请输入待办内容' });
    }
    let result = db.prepare('INSERT INTO todos (text) VALUES (?)').run(text);
    // 把刚插入的数据查出来返回给前端
    let newTodo = db.prepare('SELECT * FROM todos WHERE id = ?').get(result.lastInsertRowid);
    res.json(newTodo);
});

// 删除用户 (DELETE /user/:id)
app.delete('/user/:id', (req, res) => {
    let result = db.prepare('DELETE FROM users WHERE id = ?').run(req.params.id);
    if (result.changes > 0) {
        res.json({ message: '删除成功' });
    } else {
        res.status(404).json({ message: '用户不存在' });
    }
});

app.delete('/hobby/:id', (req, res) => {
    let result = db.prepare('DELETE FROM hobbies WHERE id = ?').run(req.params.id);
    if (result.changes > 0) {
        res.json({ message: '删除成功' });
    } else {
        res.status(404).json({ message: '爱好不存在' });
    }
});

// 切换待办完成状态 (PUT /api/todos/:id)
// PUT 通常用来"更新"数据
app.put('/api/todos/:id', (req, res) => {
    let todo = db.prepare('SELECT * FROM todos WHERE id = ?').get(req.params.id);
    if (!todo) {
        return res.status(404).json({ message: '待办不存在' });
    }
    // 把 done 取反：0变1，1变0
    let newDone = todo.done ? 0 : 1;
    db.prepare('UPDATE todos SET done = ? WHERE id = ?').run(newDone, req.params.id);
    let updatedTodo = db.prepare('SELECT * FROM todos WHERE id = ?').get(req.params.id);
    res.json(updatedTodo);
});

// 删除待办 (DELETE /api/todos/:id)
app.delete('/api/todos/:id', (req, res) => {
    let result = db.prepare('DELETE FROM todos WHERE id = ?').run(req.params.id);
    if (result.changes > 0) {
        res.json({ message: '删除成功' });
    } else {
        res.status(404).json({ message: '待办不存在' });
    }
});

// 静态文件服务（让浏览器能访问 HTML/CSS/JS）
app.use(express.static('.'));

// 404 处理
app.use((req, res) => {
    res.status(404).send("<h1>404 Not Found</h1>");
});

let PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("🚀 服务器已启动: http://localhost:" + PORT);
});
