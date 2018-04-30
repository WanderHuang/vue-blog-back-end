//工具类
const chalk = require('chalk')
const fileManager = require('./file/FileManager')
const map = require('../config/router-map.json')
//路由器
const loginRouter = require('./routes/login')
const homeRouter = require('./routes/home')
const blogRouter = require('./routes/blog')
const imageRouter = require('./routes/image')



// 建立路由表
const Router = require('koa-router')
const router = new Router();

// login
router.get(map.login.checkUser, loginRouter.checkUser, (ctx, next) => {
  console.log('login check finished, another action should happen')
})

// home
router.get(map.home.queryAllArticles, homeRouter.queryAllArticles, (ctx, next) => {
  console.log('query all articles finished, another action should happen...')
})

// blog
router.get(map.blog.queryArticle, blogRouter.queryByLocation, async (ctx, next) => {
  console.log('ready for getting file > ' + ctx._data_file._location)
  if(!ctx._data_file.location) {
    ctx.body = 'Nothing found(404) - TODO redirect to 404'
  }else {
    const file = await fileManager.readFileByPath(ctx._data_file.location)
    ctx.body = file
  }
})

// static resources
router.get(map.image.getImage, imageRouter.getImage, (ctx, next) => {
  console.log('query image finished, another action should happen...')
})

exports.router = router;