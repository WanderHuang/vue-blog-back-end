const chalk = require('chalk')
const Router = require('koa-router')
const homeHandler = require('./handler/homeHandler')



// queryAll 返回一个promise 供中间件调用
const queryAllArticles = (ctx, next) => {
  return new Promise((resolve, reject) => {
    homeHandler.queryAllArticles(ctx.query.page).then(function(data) {
      ctx.body = data
      console.log(chalk.cyan('------------------ctx body--------------------'))
      console.log(chalk.cyan(data))
      console.log(chalk.cyan('---------------queryAllArticles---------------'))
      resolve(data)
      next()
    })
  })
}

// 建立路由表
const router = new Router();
router.get('/home/articles/queryAll', queryAllArticles, (ctx, next) => {
  console.log('another action should happen...')
})

exports.router = router;