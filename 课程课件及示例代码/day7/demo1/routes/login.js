/**
 Made By 旋之华(yejh9522)
 */

let express = require('express');
let router = express.Router({});
let util = require('./../util/util');

router.get('/', function(req, res, next) {
    res.render('login', { title: '登录' });
});

router.post('/', function(req, res, next) {
    // 1. 获取数据
    let userName = req.body.userName;
    let loginPwd = req.body.loginPwd;

    // 2. 处理数据
    // 2.1 生成用户注册对象
    let loginUser = {
        userName: userName,
        loginPwd: loginPwd
    };

    // console.log(regUser);

    // 2.2 验证用户是否已经注册
    let user = util.isReg(loginUser, util.users);
    if(null !== user && undefined !== user){ // 匹配到用户
        // console.log(user);
        // 验证密码
        if(user.loginPwd === loginPwd){
            res.redirect('/chat');
        }else {
            res.send("密码错误！");
        }
    }else {
       res.send("当前的用户不存在");
    }

});

module.exports = router;