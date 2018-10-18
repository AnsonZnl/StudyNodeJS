/**
 Created by www.it666.com
 */
// 1. 引入模块
let mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/m_data');

// 2. 监听各种状态
let db = mongoose.connection;
db.on('error', ()=>{
    console.log("连接失败!");
});

db.once('open', function() {
    console.log("连接成功!");
});

db.once('close', function() {
    console.log("数据库断开成功!");
});

