/**
 Created by www.it666.com
 */

// 1. 引入模块
let fs = require("fs");

// 2. 创建写入流
let ws = fs.createWriteStream("it666_3.txt");
console.log(ws);

// 3. 打开通道
ws.once("open", ()=>{
    console.log("通道已经打开!");
});

ws.once("close", ()=>{
    console.log("通道已经关闭");
});

// 4. 写入内容
ws.write("我再马路边");
ws.write("捡到一毛钱");
ws.write("去买了一把刀");
ws.write("杀死一头牛");

// 5. 关闭通道
ws.end();
