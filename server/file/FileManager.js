const fs = require('fs')
const chalk = require('chalk')
const path = require('path')

// 绝对路径头部
const PATH_HEAD = path.resolve('./') + '/static/'

/**
 * 读取相对路径下的某一篇文章
 * @param {String} filepath 相对路径
 */
const readFile = (filepath) => {
  return new Promise((resolve, reject) => {
    const truePath = PATH_HEAD + filepath;
    console.log(chalk.cyan(truePath+'---->' + fs.existsSync(truePath)));
    if(fs.existsSync(truePath)) {
      fs.readFile(truePath, (err, data) => {
        if (err){
          console.log(chalk.cyan(err));
          reject(err)
        }else{
          resolve(data)
        }
      });
    }
    
  })
}


/**
 * 读取相对路径下的文章数 不支持包含子目录情况 只支持路径下全为文件格式
 * @param {String} dirpath 
 */
const readDir = (dirpath) => {
  return new Promise((resolve, reject) => {
    const truePath = PATH_HEAD + dirpath;
    console.log(chalk.cyan(truePath));
    fs.readdir(truePath, (err, files) => {
      if(err) {
        console.log(chalk.cyan(err))
        reject(err)
      }else {
        const promises = [];
        for(let i = 0, len = files.length; i < len; i += 1) {
          promises.push(readFile(dirpath + '/' +files[i]))
        }
        Promise.all(promises)
          .then(data => {
            resolve(data)
          })
          .catch(err => {
            console.log(chalk.cyan(err));
            reject(err)
          })
      }
    })
  })
}


exports.readFileByPath = readFile
exports.readDirByPath = readDir

