// Express + SQLite 数据库服务器
// 之前的数据存在内存里，重启就没了
// 现在数据存在 data.db 文件里，永久保存

let express = require('express');
let Database = require('better-sqlite3');

let app = express();
let db = new Database('data.db');

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

// 静态文件服务（让浏览器能访问 HTML/CSS/JS）
app.use(express.static('.'));

// 404 处理
app.use((req, res) => {
    res.status(404).send("<h1>404 Not Found</h1>");
});

app.listen(3000, () => {
    console.log("🚀 服务器已启动: http://localhost:3000");
});
