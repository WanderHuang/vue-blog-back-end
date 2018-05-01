const chalk = require('chalk')
const {model} = require('../../models/HomeArticle')

const queryAll = function(page) {
  return new Promise(function(resolve, reject) {
    // mongoose-paginate 分页
    model.paginate({}, {page: page, limit: 10}, function(err, data) {
      // {docs 文档, total 总数, limit 每页文档输, page 当前第几页, pages 总页数}
      console.log(chalk.cyan('paginate result: %s'), JSON.stringify(data))
      if(!err) {
        resolve(data)
      }else {
        reject(err)
      }
    })
  }) 
}

exports.queryAllArticles = queryAll
