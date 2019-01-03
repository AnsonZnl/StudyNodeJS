const express= require('express');
const fs= require('fs');
const app = express();

//设置模板文件的目录,并且新建一个viwes的目录
app.set('views', './views');
//注册模板引擎
app.set('view engine', 'ejs');
//使用res.render()来渲染一个视图并将呈现的HTML字符串发送给客户端；
app.get('/', function(req, res,) {
    getDataJson((dataJson)=>{
        console.log(dataJson);
        res.render('index', dataJson);
    })
});
//访问data.json 拿到数据解析并返回
const getDataJson=(callBack)=>{
    fs.readFile('./data.json', (err, data)=>{
        if(!err){
            let jsonData= JSON.parse(data);
            callBack(jsonData);
        }else{
            throw err;
        }
    })
}
//监听8083端口
app.listen(8083, ()=>{
    console.log('Server is running at http://localhost:8083')
})
