const chalk = require('chalk')
const error = chalk.bold.red
const {model} = require('../../models/User')

const checkUser = function(user) {
  return new Promise(function(resolve, reject) {
    console.log(chalk.cyan('query, param = %s'), JSON.stringify(user))
    model.find({name: user.name},function (err, data) {
      if(!err) {
        console.log(chalk.cyan('query user by name, got = %s'), JSON.stringify(data))
        resolve(data)
      }else {
        console.log(error(err))
        reject(false)
      }
    })
  }) 
}

exports.checkUser = checkUser
