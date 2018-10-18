/**
 Made By 旋之华(yejh9522)
 */
let express = require('express');
let router = express.Router({});

let util = require('./../util/util');

router.get('/', function(req, res, next) {
    res.render('register', { title: '注册' });
});


router.post('/', function(req, res, next) {
    // 1. 获取数据
    let userName = req.body.userName;
    let loginPwd = req.body.loginPwd;

    // 2. 处理数据
    // 2.1 生成用户注册对象
    let regUser = {
        userName: userName,
        loginPwd: loginPwd
    };

    // 2.2 验证用户是否已经注册
    let user = util.isReg(regUser, util.users);
    if(null === user || undefined === user){ // 没有注册
        util.users.push(regUser);
        // res.send("注册成功");
        res.redirect('/login');
    }else { // 已经注册
        res.send("当前的用户已经注册");
    }

});

module.exports = router;