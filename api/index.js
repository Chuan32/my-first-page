// Vercel serverless function：Express + Neon PostgreSQL
// 本地开发还是用 server-express.js（SQLite）
// 这个文件只有在 Vercel 部署时才会运行

let express = require('express');
let { neon } = require('@neondatabase/serverless');

let app = express();
app.use(express.json());

// 连接 Neon PostgreSQL 数据库
let sql = neon(process.env.DATABASE_URL);

// 初始化数据库表（第一次请求时创建）
sql`
    CREATE TABLE IF NOT EXISTS todos (
        id SERIAL PRIMARY KEY,
        text TEXT NOT NULL,
        done INTEGER DEFAULT 0,
        createdAt TIMESTAMP DEFAULT NOW()
    )
`.then(() => console.log('✅ 数据库表已就绪'))
.catch(err => console.error('❌ 建表失败:', err));

// ========== Todo List API ==========

// 获取所有待办 (GET /api/todos)
app.get('/api/todos', async (req, res) => {
    try {
        let todos = await sql`SELECT * FROM todos ORDER BY id DESC`;
        res.json(todos);
    } catch (err) {
        res.status(500).json({ message: '查询失败', error: err.message });
    }
});

// 添加待办 (POST /api/todos)
app.post('/api/todos', async (req, res) => {
    try {
        let { text } = req.body;
        if (!text) {
            return res.status(400).json({ message: '请输入待办内容' });
        }
        // RETURNING * 是 PostgreSQL 的语法，插入后直接返回完整数据
        let [todo] = await sql`
            INSERT INTO todos (text) VALUES (${text}) RETURNING *
        `;
        res.json(todo);
    } catch (err) {
        res.status(500).json({ message: '添加失败', error: err.message });
    }
});

// 切换待办完成状态 (PUT /api/todos/:id)
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

// 删除待办 (DELETE /api/todos/:id)
app.delete('/api/todos/:id', async (req, res) => {
    try {
        let result = await sql`
            DELETE FROM todos WHERE id = ${req.params.id}
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
