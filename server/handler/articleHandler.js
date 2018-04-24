const chalk = require('chalk')
const {model} = require('../../models/Article')

const queryByLocation = function(location) {
  return new Promise(function(resolve, reject) {
    model.find({ location: location },function (err, data) {
      if(!err) {
        console.log(chalk.cyan('db get: '+ data))
        resolve(data)
      }else {
        reject(err)
      }
    })
  }) 
}

exports.queryByLocation = queryByLocation
