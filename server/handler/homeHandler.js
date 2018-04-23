const chalk = require('chalk')
const {model} = require('../../models/HomeArticle')

const queryAll = function(page) {
  return new Promise(function(resolve, reject) {
    model.find({page: page},function (err, data) {
      if(!err) {
        resolve(data)
      }else {
        reject(err)
      }
    })
  }) 
}

exports.queryAllArticles = queryAll
