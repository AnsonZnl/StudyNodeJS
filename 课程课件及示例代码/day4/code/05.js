/**
 Created by www.it666.com
 */
let http = require("http");
let url = require("url");
let  querystring = require("querystring");


http.createServer((req, res)=>{
    if(req.url === "/postmsg" && req.method.toLowerCase() === "post"){
        // 1. 变量
        let allData = "";

        // 2. 接收小段数据
        req.on("data", (buf)=>{
             allData += buf;
        });

        // 3. 所有的数据传递完毕
        req.once("end", ()=>{
            // console.log(allData);
            res.end("OK!");
            let dataObj = querystring.parse(allData);
            console.log(dataObj);
            console.log(dataObj.name);
            console.log(dataObj.age);
        });
    }

}).listen(80, "127.0.0.1");