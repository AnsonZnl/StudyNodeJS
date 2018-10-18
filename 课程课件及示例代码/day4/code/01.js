/**
 Created by www.it666.com
 */
let http = require("http");

// 创建服务器
let server = http.createServer((req, res)=>{
    console.log(req.url);
    res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
    res.write("Hello, IT666.com");
    res.write("<h1>哈哈哈哈</h1>");
    res.end("Hello!!!, 旋之华");
});

// 监听
server.listen(80, "127.0.0.1");