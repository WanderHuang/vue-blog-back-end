//工具类
const chalk = require('chalk')
const fileManager = require('./file/FileManager')
//路由器
const homeRouter = require('./routes/home')
const blogRouter = require('./routes/blog')



// 建立路由表
const Router = require('koa-router')
const router = new Router();

//home
router.get('/home/articles/queryAll', homeRouter.queryAllArticles, (ctx, next) => {
  console.log('another action should happen...')
})

//blog
router.get('/blog/articles/get', blogRouter.queryByLocation, async (ctx, next) => {
  console.log('ready for getting file > ' + ctx._data_file._location)
  if(!ctx._data_file.location) {
    ctx.body = 'Nothing found(404) - TODO redirect to 404'
  }else {
    const file = await fileManager.readFileByPath(ctx._data_file.location)
    ctx.body = file
  }
})

exports.router = router;