//工具类
const chalk = require('chalk')
const bcrypt = require('bcryptjs')
const loginHandler = require('../handler/loginHandler')
const jwt = require('jsonwebtoken')
const config = require('../../config/app.json')

let success =  {
  message: '获取token成功',
  code: 0,
}
let fail = {
  message: '验证失败',
  code: 401
}

const _checkUser = async (user, isPassed) => {
  if(user && user.name) {
    const dbUsers = await loginHandler.checkUser(user)
    if(dbUsers.length === 1) {
      const dbUser = dbUsers[0]
      if(user.password && dbUser.password && bcrypt.compareSync(user.password, dbUser.password)) {
        let userToken = {
          name: dbUser.name,
          password: dbUser.password
        }
        //token签名 有效期为1小时
        const token = jwt.sign(userToken, config.secret, {expiresIn: '1h'})
        isPassed = true
        success.token = token
        success.avatar = dbUser.avatar
      } else {
        fail.message = 'wrong password'
      }
    } else {
      fail.message = 'has no user or exist multi users, can\'t login'
    }
  }else {
    fail.message = 'params.user is null'
  }
  return isPassed
}

// 检查用户是否存在
const checkUser = async (ctx, next) => {
  const user = ctx.query
  console.log(chalk.cyan('Got login request: request = %s'), JSON.stringify(user))
  let isPassed = false
  isPassed = await _checkUser(user, isPassed)
  ctx.body = isPassed ? success : fail
  ctx.cookies.set('token', success.token)
  await next()
}

exports.checkUser = checkUser