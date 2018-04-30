//工具类
const chalk = require('chalk')
const config = require('../../config/app.json')
const fs = require('fs')

// 查询image是否存在 存在则返回base64
const getImage = (ctx, next) => {
  // TODO这里用的是测试路径 上线后要修改为用户上传的路径
  const res = fs.readFileSync('./static/test/image/' + ctx.query.path + '.png')
  ctx.body = res
}

exports.getImage = getImage