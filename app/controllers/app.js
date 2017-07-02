// 控制层
'use strict'

exports.signature = function (ctx, next){
	ctx.body = {
		success: true
	};
};