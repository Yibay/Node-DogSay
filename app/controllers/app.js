// 控制层
'use strict'

exports.signature = async function (ctx, next){
	ctx.body = {
		success: true
	};
};