/**
 Created by www.it666.com
 */
let http = require("http");
// let url = require("url");

let {URL} = require("url");

http.createServer((req, res)=>{
    // let myUrl = url.parse(req.url); // 对象
    let myURL = new URL("https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash");
    console.log(myURL);
    //  console.log(myUrl.search);
    // console.log(myUrl);
    res.end("hello world!");
}).listen(80, "127.0.0.1");