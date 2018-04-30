const bcrypt = require('bcryptjs')
const hash = bcrypt.hashSync("huangjunjie", bcrypt.genSaltSync(10))
console.log('> '+ hash)

console.log('--------------------')

console.log(bcrypt.compareSync("huangjunjie", hash))