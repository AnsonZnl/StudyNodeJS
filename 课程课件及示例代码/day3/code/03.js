/**
 Created by www.it666.com
 */
// 1. 连接数据库
let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/m_data");
mongoose.connection.once("open", () => {
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

// 4. 增删改查

// 4.1 增加
/*
personModel.create([
    {name: "胡可可", age: 18, chat: "可可公主", sex: "女"},
    {name: "刘德华", age: 58, chat: "华仔"},
    {name: "那英", age: 50, chat: "我是那英", sex: "女"},
    {name: "周杰伦", age: 38, chat: "jaychou"}
], (err) => {
    if (!err) {
        console.log("插入成功")
    } else {
        throw err;
    }
});
*/

// 4.2 查
/*personModel.find({}, (err, docs)=>{
    if(!err){
        console.log(docs);
        console.log(typeof docs);
    }
});*/

/*personModel.find({name: "周杰伦"}, (err, docs)=>{
    if(!err){
        console.log(docs);
        console.log(typeof docs);
    }
});*/

/*personModel.find({}, {name: 1, _id: 0, sex: 1}, (err, docs)=>{
    if(!err){
        console.log(docs);
        console.log(typeof docs);
    }else {
        throw err
    }
});*/

/*personModel.find({}, "-_id name sex chat", {skip: 5, limit:5}, (err, docs)=>{
    if(!err){
        console.log(docs);
        console.log(typeof docs);
    }else {
        throw err
    }
});*/

// 4.3 修改
/*personModel.update({name: "周杰伦"}, {$set: {age: 20}}, { multi: true }, (err)=>{
    if(!err){
        console.log("修改成功");
    }else {
        throw err
    }
});*/

// 4.4 删除
/*
  Model.deleteMany()
  Model.deleteOne()
  Model.remove()
*/

/*personModel.remove({name: "那英"}, (err)=>{
    if(!err){
        console.log("删除成功");
    }else {
        throw err
    }
});*/

// 4.5 统计文档的个数
/*
 Model.count()
*/
personModel.count({}, (err, count)=>{
    if(!err){
        console.log(count);
    }
});
