// 控制层
'use strict'
var http = require('http');

// 控制层 处理异步请求
exports.signup = async function (ctx, next){
	var result = 'ab'
	var url = 'http://www.baidu.com/';
	// 举例：构建一个 Promise
	var get_method = new Promise(function(resolve, reject){
		http.get(url, function(res){
			var res_data = '';
			res.on('data', function(data){
				res_data += data;
			});
			res.on('end', function(){
				result = res_data;
				resolve();
			});
		});
	});
	// await 后接 Promise时，会等待 异步处理完，Promise状态为resolve时，再继续执行
	await get_method;
	ctx.body = {
		success: result
	};
};

exports.verify = async function (ctx, next){
	ctx.body = {
		success: true
	};
};

exports.update = async function (ctx, next){
	ctx.body = {
		success: true
	};
};