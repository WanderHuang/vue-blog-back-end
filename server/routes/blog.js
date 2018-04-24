//工具类
const chalk = require('chalk')
const articleHandler = require('../handler/articleHandler')



// queryAll 返回一个promise 供中间件调用
const queryByLocation = async (ctx, next) => {
  const  res = await articleHandler.queryByLocation(ctx.query.location)
  ctx._data_file = res.length === 0 ? {} : res[0]
  console.log(chalk.cyan('------------------ctx body--------------------'))
  console.log(chalk.cyan(ctx._data_file))
  console.log(chalk.cyan('---------------queryByLocation---------------'))
  await next()
}

exports.queryByLocation = queryByLocation