let http = require('http');

let server = http.createServer((req, res) => {
//     res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
//     res.end("<h1>川</h1><p>这是我第一个Node.js服务器</p>");
// });
// server.listen(3000, () => {
//     console.log("服务器已启动：http://localhost:3000") 第一次
    if(req.url === '/'){
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.end("<h1>首页</h1><p>这是我第一个Node.js服务器</p>");
    }
    else if(req.url === "/data"){
        res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
        let data = {name: "川", age: 20, goal: "全栈工程师"};
        res.end(JSON.stringify(data));
    } else if(req.url === "/hobby"){ 
        res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
        let hobby = ["打游戏", "打羽毛球", "跑步"];
        res.end(JSON.stringify(hobby));
    }
     else{
        res.writeHead(404, {'Content-Type': 'text/html; charset=utf-8'});
        res.end("<h1>404</h1><p>找不到该页面</p>");
    }
});

server.listen(3000, () => {
    console.log("服务器已启动：http://localhost:3000")
});