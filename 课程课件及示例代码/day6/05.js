/**
 Created by www.it666.com
 */
let express = require("express");
let app = express();
let fs = require("fs");

// 指定视图所在的位置
app.set('views', './views');
// 注册模板引擎
app.set('view engine', 'ejs');

app.get("/",(req, res)=>{
    // 1. 读取数据文件
    getDataJson((dataJson)=>{
        res.render("list", dataJson);
    });
});

app.listen(80);

const getDataJson = (callBack)=>{
    fs.readFile("./model/data.json", (err, data)=>{
       if(!err){
           // 转化json数据
           let jsonData = JSON.parse(data);
           callBack(jsonData);
       }else {
           throw err;
       }
    });
};
