const express= require('express');
const app = express();
const path= require('path');

app.get('/',(req, res)=>{
    res.send('Hello world');
    console.log(res.hostname)
})
// 对/news 页面进行get请求
app.get('news', (req, res)=>{
    res.send('Hello news');
});
// 对/about 页面进行post请求
app.post('about', (req, res)=>{
    res.send('Hello about');
});
// 对/list* 可匹配 /list+任意字符
app.get('/list*', (req, res)=>{
    res.send('Hello list pages');
})
//静态目录
app.use(express.static('public'));
//设置静态目录的路由
//app.use('/static', express.static('public'));
//为了安全最好把静态目录设为绝对路径
app.use('/static', express.static(path.join(__dirname, 'public')))


app.listen(8084, ()=>{
    console.log('Server is running at http://localhost:8084')
})