//工具类
const chalk = require('chalk')
const homeHandler = require('../handler/homeHandler')



// queryAll 返回一个promise 供中间件调用
const queryAllArticles = (ctx, next) => {
  return new Promise((resolve, reject) => {
    homeHandler.queryAllArticles(ctx.query.page)
      .then(function(data) {
        ctx.body = data
        console.log(chalk.cyan('------------------ctx body--------------------'))
        console.log(chalk.cyan(data))
        console.log(chalk.cyan('---------------queryAllArticles---------------'))
        resolve(data)
        next()
      })
  })
}

exports.queryAllArticles = queryAllArticles