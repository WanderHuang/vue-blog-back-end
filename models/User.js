const mongoose = require('mongoose')
// promise
mongoose.Promise = require('bluebird')

const USER = 'users'

/**
 * $name 用户名
 * $password 密码
 * $type 用户类型
 * $email 用户邮箱
 */
const sche = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  type: {
    type: Number,
    required: true
  },
  email: {
    type: String
  }

})
const model = mongoose.model(USER, sche)

exports.model = model