/**
 Created by www.it666.com
 */

// 1. 引入模块
let fs = require("fs");

// 2. 打开文件
fs.open("it666_1.txt",  "a", (err, fd)=>{
    // 2.1 判断是否出错
    if(!err){
        // 2.2 写入文件
        fs.writeFile(fd, "这是一个神奇的网站: www.it666.com", (err)=>{
            // 2.2.1 写入成功
            if(!err){
                console.log("写入文件成功");
            }else {
                throw err;
            }

            // 2.3 关闭文件
            fs.close(fd, (err)=>{
               if(!err){
                   console.log("文件已经保存并关闭!");
               }
            });
        });
    }else {
        throw err;
    }
});


console.log("hhhhh");
