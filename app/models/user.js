'use strict'

var mongoose = require('mongoose');

// 构建 表结构
var UserSchema = new mongoose.Schema({
	phoneNumber: {
		unique: true,
		type: String
	},
	areaCode: String,
	verifyCode: String,
	accessToken: String,
	nickName: String,
	gender: String,
	breed: String,
	age: String,
	avatar: String,
	meta: {
		createAt: {
			type: Date,
			default: Date.now()
		},
		updateAt: {
			type: Date,
			default: Date.now()
		}
	}
});

// 存储表前，勾子
// UserSchema.pre('save', function(next){
// 	if(this.isNew){
// 		this.meta.createAt = this. meta.updateAt = Date.now();
// 	}
// 	else {
// 		this.meta.updateAt = Date.now();
// 	}
// });


// 在database中，实例化 表

// 注意：用 mongoose.connect 连接数据库时，mongoose.model 可实例化表
//      用 var conn = mongoose.createConnecttion 连接数据库时，用 conn.model 实例化表

module.exports = mongoose.model('User', UserSchema);
