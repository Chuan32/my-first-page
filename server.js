let http = require('http');

let server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.end("<h1>川</h1><p>这是我第一个Node.js服务器</p>");
});
server.listen(3000, () => {
    console.log("服务器已启动：http://localhost:3000")
});