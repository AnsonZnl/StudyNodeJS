var express = require('express');
var router = express.Router();
//引入util.js
let util= require('./../util/util');
/* GET login page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: '登陆' });
});

//login时的post请求 
router.post('/', function(req, res, next) {
  //1. 获取提交的数据
  let name= req.body.name;
  let pwd= req.body.pwd;
  //2. 处理数据
  //2.1 生成用户注册对象
  let loginUser = {
    userName : name,
    loginPwd : pwd
  }
  //2.2 验证用户是否注册
   console.log(loginUser)
   let user= util.isReg(loginUser, util.users);
   if(user !== null && user!== undefined){
     //用户存在
    if(user.loginPwd === loginPwd){
      res.send("登陆成功，欢迎" + user.userName + ",<a href='/'> 返回主页</a>")
      res.redirect('/');
    }else{
      res.send('密码错误')
    }
   }else{
     //用户不存在
      res.send("用户不存在，请<a href='/register'> 去注册</a>");
   }
});


module.exports = router;
