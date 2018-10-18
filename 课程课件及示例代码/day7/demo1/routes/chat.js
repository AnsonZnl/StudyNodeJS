/**
 Made By 旋之华(yejh9522)
 */
let express = require('express');
let router = express.Router({});

router.get('/', function(req, res, next) {
    res.render('chat', { title: '聊天' });
});

module.exports = router;