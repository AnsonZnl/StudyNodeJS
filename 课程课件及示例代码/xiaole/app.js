//引入需要的模块
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
//引入路由
var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
//实例化Express
var app = express();

// view engine setup 设置模板引擎
app.set('views', path.join(__dirname, 'views'));//设置视图目录
app.set('view engine', 'ejs');//设置模板引擎为ejs
// 使用一些express的功能
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//设施用户访问的路径
app.use('/', indexRouter);
app.use('/register', registerRouter);
app.use('/login', loginRouter);
//中间件 发生404错误时的处理
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
//把这个app暴露出去
module.exports = app;
