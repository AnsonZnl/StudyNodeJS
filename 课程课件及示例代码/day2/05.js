/**
 Created by www.it666.com
 */

// 1. 引入模块
let fs = require("fs");

// 2. 读取文件
/*
fs.readFile("it666_3.txt", (err, data)=>{
    // 2.1 判断
    if(!err){
        console.log(data);
        console.log(data.toString());
    }else {
        throw err;
    }
});
*/


fs.readFile("C:/Users/dxuan/Desktop/ewm.jpg", (err, data)=>{
    // 2.1 判断
    if(!err){
       // 2.2 写入图片文件
       fs.writeFile("img.jpg", data, (err)=>{
           if(!err){
               console.log("写入成功")
           }else {
               throw err;
           }
       });
    }else{
        throw err;
    }
});

fs.readFile("C:/Users/dxuan/Desktop/sp.mp4", (err, data)=>{
    // 2.1 判断
    if(!err){
        console.log(data);
        // 2.2 写入图片文件
        fs.writeFile("sp.mp4", data, (err)=>{
            if(!err){
                console.log("写入成功")
            }else {
                throw err;
            }
        });
    }else{
        throw err;
    }
});
