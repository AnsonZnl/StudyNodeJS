/**
 Created by www.it666.com
 */

// 1. 引入模块
let fs = require("fs");

// 2. 创建读入流
let rs = fs.createReadStream("C:/Users/dxuan/Desktop/sp.mp4");
let ws = fs.createWriteStream("sp.mp4");

// 3. 监听流的打开和关闭
ws.once("open", ()=>{
    console.log("读入通道已经打开!");
});

ws.once("close", ()=>{
    console.log("读入通道已经关闭");
});

rs.once("open", ()=>{
    console.log("写出通道已经打开!");
});

rs.once("close", ()=>{
    console.log("写出通道已经关闭");
});

/// 4. 绑定data
rs.on("data", (data)=>{
   //  console.log(data);
    ws.write(data);
});