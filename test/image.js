/**
 * jimp 操作图片的库 API:https://github.com/oliver-moran/jimp
 *  - 可实现图像压缩、旋转、色彩变化等等
 * imagemin 图片压缩 imagemin-jpegtran imagemin-pngquant
 */

const chalk = require('chalk')
const Jimp = require('jimp')
const GLOBAL_WIDTH = 400
const GLOBAL_HEIGHT = 300

console.log(chalk.cyan('--------------- starting ---------------'))
 
//test 
// resizeAndCompress('./resource/0.jpg')
//   .then(function(data) {
//     console.log(chalk.cyan('--------------- data ---------------'))
//     console.log(chalk.yellow('success'))
//   })
//   .catch(function(err) {
//     console.log(chalk.cyan('--------------- err ---------------'))
//     console.log(chalk.red(err))
//   })

for(let i = 0, len = 2; i < len; i++) {
  resizeAndCompress('./test/image_in/' + i + '.jpg', './test/image_out/' + i + '.jpg')
    .then(data => {
      console.log(chalk.yellow('success: '), i)
    })
    .catch(err => {
      console.log(chalk.red('err: '), i)
    })
}

async function resizeAndCompress(path, output) {
  const file = await Jimp.read(path)
  return file
          .resize(GLOBAL_WIDTH, GLOBAL_HEIGHT, Jimp.RESIZE_BEZIER)     // resize
          .quality(60)                 // set JPEG quality
          .write(output);             // save
}
