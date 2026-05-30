// Vercel Express + Neon PostgreSQL
// 既托管前端静态文件，也提供 API

let express = require('express');
let path = require('path');
let { neon } = require('@neondatabase/serverless');

let app = express();
app.use(express.json());

// 托管 public/ 下的静态文件（HTML/CSS/JS/图片）
app.use(express.static(path.join(__dirname, 'public')));

let sql = neon(process.env.DATABASE_URL);

// 初始化数据库表
sql`
    CREATE TABLE IF NOT EXISTS todos (
        id SERIAL PRIMARY KEY,
        text TEXT NOT NULL,
        done INTEGER DEFAULT 0,
        "createdAt" TIMESTAMP DEFAULT NOW()
    )
`.catch(err => console.error('建表失败:', err.message));

// 获取所有待办
app.get('/api/todos', async (req, res) => {
    try {
        let todos = await sql`SELECT * FROM todos ORDER BY id DESC`;
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: '查询失败', error: err.message });
    }
});

// 添加待办
app.post('/api/todos', async (req, res) => {
    try {
        let { text } = req.body;
        if (!text) {
            return res.status(400).json({ message: '请输入待办内容' });
        }
        let [todo] = await sql`
            INSERT INTO todos (text) VALUES (${text}) RETURNING *
        `;
        res.json(todo);
    } catch (err) {
        res.status(500).json({ message: '添加失败', error: err.message });
    }
});

// 切换完成状态
app.put('/api/todos/:id', async (req, res) => {
    try {
        let [todo] = await sql`
            SELECT * FROM todos WHERE id = ${req.params.id}
        `;
        if (!todo) {
            return res.status(404).json({ message: '待办不存在' });
        }
        let newDone = todo.done ? 0 : 1;
        let [updated] = await sql`
            UPDATE todos SET done = ${newDone} WHERE id = ${req.params.id} RETURNING *
        `;
        res.json(updated);
    } catch (err) {
        res.status(500).json({ message: '更新失败', error: err.message });
    }
});

// 删除待办
app.delete('/api/todos/:id', async (req, res) => {
    try {
        let result = await sql`
            DELETE FROM todos WHERE id = ${req.params.id} RETURNING *
        `;
        if (result.length > 0) {
            res.json({ message: '删除成功' });
        } else {
            res.status(404).json({ message: '待办不存在' });
        }
    } catch (err) {
        res.status(500).json({ message: '删除失败', error: err.message });
    }
});

// 导出 Express app 给 Vercel
module.exports = app;
