// 服务器入口层
'use strict'

// 1-1 mongoo数据库
var mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
	// 将options.useMongoClient 设置为true，用新的mongoose connecttion
mongoose.connect('mongodb://127.0.0.1:12345/rn-dogSay-dbs',{useMongoClient: true}); 

// 1-2 构建数据库 实例化表
var fs = require('fs');
var path = require('path');
var models_path = path.join(__dirname, '/app/models');

// 2-1 后端服务器
var Koa = require('koa');
var logger = require('koa-logger');
var session = require('koa-session');
var bodyParser = require('koa-bodyparser');
var app = new Koa();

app.keys = ['imooc'];
app.use(logger());
app.use(session(app));
app.use(bodyParser());

// 2-2 引入路由器(引入路由层)
var router = require('./config/routes')();

app
	.use(router.routes())
	.use(router.allowedMethods())

// 2-3 监听端口
app.listen(3000);
console.log('Listening: 3000');