// 服务器入口层
'use strict'

var Koa = require('koa');
var logger = require('koa-logger');
var session = require('koa-session');
var bodyParser = require('koa-bodyparser');
var app = new Koa();

app.keys = ['imooc'];
app.use(logger());
app.use(session(app));
app.use(bodyParser());

// 引入路由器
var router = require('./config/routes')();

app
	.use(router.routes())
	.use(router.allowedMethods())

app.listen(3000);
console.log('Listening: 3000');