const chalk = require('chalk')
const cors = async (ctx, next) => {
    console.log(chalk.cyan('receive request'))
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set("Access-Control-Max-Age", "86400");
    ctx.set("Access-Control-Allow-Credentials", "true");
    ctx.set("Access-Control-Allow-Headers", "*");
    ctx.set("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    await next(); // 不加next的话 直接跑后面内容了 就不是先后执行了
}
exports.cors = cors