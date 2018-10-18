/**
 Created by www.it666.com
 */
// 1. 连接数据库
let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/m_data");
mongoose.connection.once("open", ()=>{
    console.log("数据库连接成功")
});

// 2. 创建Schema(模式对象)
let Schema = mongoose.Schema;
let personSchema = new Schema({
    name: String,
    age: Number,
    sex: {
        type: String,
        default: "男"
    },
    chat: String
});

// 3. 创建Model对象
let personModel = mongoose.model("person", personSchema);

// 4. 插入文档
personModel.create({
    name: "谢霆锋",
    age: 40,
    chat: "1990哈哈哈"
}, (err)=>{
    if(!err){
        console.log("插入成功")
    }else {
        throw err;
    }
});

personModel.create({
    name: "王菲",
    age: 48,
    chat: "我爱谢霆锋",
    sex: "女"
}, (err)=>{
    if(!err){
        console.log("插入成功")
    }else {
        throw err;
    }
});



