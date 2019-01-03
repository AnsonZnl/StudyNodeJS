var express = require('express');
var router = express.Router();
//引入util.js
let util= require('./../util/util');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '小乐主页', name: name});
});
name= "小乐"
//register时的post请求 
router.post('/', function(req, res, next) {
  //1. 获取提交的数据
  name= req.body.name;
  let pwd= req.body.pwd;
  //2. 处理数据
  //2.1 生成用户注册对象
  let regUser = {
    userName : name,
    loginPwd : pwd
  }
  //2.2 验证用户是否注册
   let user= util.isReg(regUser, util.users);
   if(user === null || user === undefined){
     //没有注册
     util.users.push(regUser);
     //重定向
     res.redirect('/')
   }else{
     //已经注册
     res.send("用户名已经注册，<a href='/'> 返回主页</a>")
   }
});

module.exports = router;
