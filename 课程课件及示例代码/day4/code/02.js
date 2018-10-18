/**
 Created by www.it666.com
 */

let http = require("http");
let fs = require("fs");

// 创建服务器
let server = http.createServer((req, res)=>{
   if(req.url === "/page1"){
      fs.readFile("./test1.html", (err, data)=>{
          if(!err){
              res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
              res.end(data);
          }
      });
   } else if(req.url === "/page2"){
       fs.readFile("./test2.html", (err, data)=>{
           if(!err){
               res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
               res.end(data);
           }
       });
   } else if(req.url === "/"){ // 根目录
       res.writeHead(200, {"Content-Type": "text/html;charset=UTF-8"});
       res.end("Hello World!");
   }else if(req.url === "/css/index.css"){ // css
       fs.readFile("./css/index.css", (err, data)=>{
           if(!err){
               res.writeHead(200, {"Content-Type": "text/css"});
               res.end(data);
           }
       });
   }else if(req.url === "/img/xzh.jpg"){ // css
       fs.readFile("./img/xzh.jpg", (err, data)=>{
           if(!err){
               res.writeHead(200, {"Content-Type": "image/jpg"});
               res.end(data);
           }
       });
   }else if(req.url === "/source/01.mp4"){ // 视频
       fs.readFile("./source/01.mp4", (err, data)=>{
           if(!err){
               res.writeHead(200, {"Content-Type": "video/mpeg4"});
               res.end(data);
           }
       });
   }else {
       res.writeHead(404, {"Content-Type": "text/html;charset=UTF-8"});
       res.end("访问的页面不存在!");
   }
});

// 监听
server.listen(80, "127.0.0.1");