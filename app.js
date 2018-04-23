//基本配置初始化
const config = require('./config/app.json')

// 工具类插件
const chalk = require('chalk')
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')

// 数据库初始化
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')
console.log(chalk.cyan('App is connecting ...' + config.dbUrl))
mongoose.connect(config.dbUrl, function (err) {
  if (!err) {
    console.log(chalk.cyan('mongo connected at ' + config.dbUrl))
  } else {
    console.log(err)
  }
})  

//启用koa
const koa = require('koa')
const {cors} = require('./server/cors')
const {router} = require('./server/router')

//开启服务器
const app = new koa()
//跨域
console.log(cors)
app.use(cors)
//日志
app.use(logger())
//报文转换
app.use(bodyParser())
//路由
app.use(router.routes())
app.use(router.allowedMethods())
//启动
app.listen(config.appPort)

console.log(chalk.cyan('----------------------------------------'))
console.log(chalk.cyan('---------app is running on '+ config.appPort +'---------'))
console.log(chalk.cyan('----------------------------------------'))