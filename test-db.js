// 第20课：SQLite 数据库入门
// 这个文件是练习文件，用来学习数据库基本操作

// 1. 引入 better-sqlite3 包
let Database = require('better-sqlite3');

// 2. 连接数据库（如果 data.db 不存在，会自动创建）
let db = new Database('data.db');

// 3. 建表：创建 users 表
//    IF NOT EXISTS = 如果表不存在才创建，防止重复创建报错
//    id INTEGER PRIMARY KEY AUTOINCREMENT = id 是主键，自动增长（1,2,3...）
//    name TEXT = name 列存文字
//    age INTEGER = age 列存整数
db.exec(`
    CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        age INTEGER
    )
`);

console.log("✅ 数据库连接成功，users 表已就绪！");

// 4. 插入数据（INSERT）
//    ? 是占位符，防止 SQL 注入（安全写法）
let insertStmt = db.prepare('INSERT INTO users (name, age) VALUES (?, ?)');
insertStmt.run('川', 20);
insertStmt.run('小明', 22);
insertStmt.run('小红', 19);

console.log("✅ 插入了 3 条用户数据");

// 5. 查询数据（SELECT）
//    .all() = 返回所有匹配的行，结果是一个数组
let users = db.prepare('SELECT * FROM users').all();
console.log("📋 所有用户：", users);

// 6. 条件查询：查找年龄大于等于20的人
//    .all() 也可以传参给 ?
let adultUsers = db.prepare('SELECT * FROM users WHERE age >= ?').all(20);
console.log("📋 年龄≥20的用户：", adultUsers);

// 7. 查询单条数据：.get() 只返回第一条
let user = db.prepare('SELECT * FROM users WHERE id = ?').get(1);
console.log("📋 id=1 的用户：", user);

// 8. 更新数据（UPDATE）
db.prepare('UPDATE users SET age = ? WHERE name = ?').run(21, '川');
console.log("✅ 已更新川的年龄为 21");

// 9. 验证更新结果
let updatedUser = db.prepare('SELECT * FROM users WHERE name = ?').get('川');
console.log("📋 更新后的川：", updatedUser);

// 10. 删除数据（DELETE）
db.prepare('DELETE FROM users WHERE name = ?').run('小明');
console.log("✅ 已删除小明");

// 11. 查看最终结果
let finalUsers = db.prepare('SELECT * FROM users').all();
console.log("📋 最终用户列表：", finalUsers);

db.exec(`
    CREATE TABLE IF NOT EXISTS hobbies (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        hobby TEXT NOT NULL,
        userId INTEGER
    )
    `);
console.log("✅ 创建了 hobbies 表");

let insertHobby = db.prepare('INSERT INTO hobbies (hobby, userId) VALUES (?, ?)');
insertHobby.run('看电影', 1);
insertHobby.run('打游戏', 2);
insertHobby.run('听音乐', 3);

console.log("✅ 插入了 3 条爱好数据");

let hobbies = db.prepare('SELECT * FROM hobbies').all();
console.log("📋 所有爱好：", hobbies);

let firstHobby = db.prepare('SELECT * FROM hobbies WHERE id = ?').get(1);
console.log("📋 id=1 的爱好：", firstHobby);

// 12. 关闭数据库连接
db.close();
console.log("👋 数据库连接已关闭");
