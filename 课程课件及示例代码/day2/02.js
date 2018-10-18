/**
 Created by www.it666.com
 */

// 1. 引入模块
let fs = require("fs");

// 2. 打开文件
/*
 fs.openSync(path, flags[, mode])
*/
let fd = fs.openSync("it666.txt", "w");
// console.log(fd);

// 3. 写入内容
fs.writeFileSync(fd, "今天天气很好, 快来学习!hhhhhdewhjkferfbhjr");

// 4. 保存并退出
fs.closeSync(fd);

console.log("哈哈哈哈");