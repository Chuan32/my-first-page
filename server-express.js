let express = require('express');
let app = express();
app.use(express.json())
app.get('/', (req, res) => {
    res.send("<h1>首页</h1><p>这是我第一个Node.js服务器</p>");
})
app.get('/data', (req, res) => {
    let data = {name: "川", age: 20, goal: "全栈工程师"};
    res.json(data)
})
app.get('/hobby', (req, res) => {
    let hobby = ["打游戏", "打羽毛球", "跑步"];
    res.json(hobby)
})
app.get('/user/:id', (req, res) => {
    res.json({id: req.params.id, name: "川"})
})
app.post('/user', (req, res) => {
    console.log(req.body);
    res.json({message: "收到！" , data: req.body})
})
app.get('/form', (req, res) => {
    res.send(`
        <form onsubmit="return false">
            <input id="name" placeholder="输入名字">
            <input id="age" placeholder="输入年龄">
            <button onclick="submitData()">提交</button>
        </form>
        <div id="result"></div>
        <script>
            async function submitData() {
                let name = document.getElementById('name').value
                let age = document.getElementById('age').value
                let res = await fetch('/user', {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({name, age})
                })
                let data = await res.json()
                document.getElementById('result').innerText = JSON.stringify(data)
            }
        </script>
    `)
})

app.use(express.static('.'));
app.use((req, res) => {
    res.status(404).send("<h1>404 Not Found</h1>");
})
app.listen(3000);
