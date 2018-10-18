/**
 Created by www.it666.com
 */
let http = require("http");
let url = require("url");


http.createServer((req, res)=>{
    let myUrl = url.parse(req.url, true); // 对象
    let queryObj = myUrl.query;
    console.log(queryObj);
    console.log(queryObj.name);
    console.log(queryObj.age);
    console.log(queryObj.sex);
    res.end("hello world!");
}).listen(80, "127.0.0.1");