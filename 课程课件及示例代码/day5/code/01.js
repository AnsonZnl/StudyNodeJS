/**
 Created by www.it666.com
 */

let http = require("http");
let fs = require("fs");
let path = require("path");
let url = require("url");


// 1. 创建服务器
http.createServer((req, res) => {
    // 1.1 获取url地址
    let pathUrl = url.parse(req.url);
    let pathName = pathUrl.pathname;

    // console.log(pathName);

    // ./static/css/index.css
    // ./static/images/1.jpg

    // 2. 处理路径
    if(pathName.lastIndexOf(".") === -1){
        pathName += "/index.html";
    }

    // http://127.0.0.1/js/index.js
    // 3. 拼接路径
    let fileUrl ="./" + path.normalize("./static/" + pathName);
    //console.log(fileUrl);
    // console.log(pathName);

    let extname = path.extname(fileUrl);

    // 4. 读取文件
    fs.readFile(fileUrl, (err, data)=>{
        // 4.1 没有找到
        if(err){
            res.writeHead(404, {"Content-Type": "text/html;charset=UTF-8"});
            res.end("<h1>404, 当前的页面不存在!</h1>");
        }

        // 4.2 找到
        getContentType(extname, (contentType)=>{
            res.writeHead(200, {"Content-Type": contentType});
            res.end(data);
        });

    });

}).listen(80, "127.0.0.1");


function getContentType(extName, callBack) {
    // 1. 读取文件
    fs.readFile("./mime.json", (err, data)=>{
        if(err){
           throw err;
           return;
        }

        let mimeJson = JSON.parse(data);
        let contentType = mimeJson[extName] || "text/plain";

        callBack(contentType);
    })
}
