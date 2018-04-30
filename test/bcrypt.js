const bcrypt = require('bcryptjs')
const hash = bcrypt.hashSync("wander", bcrypt.genSaltSync(10))
console.log('> '+ hash)

console.log('--------------------')

console.log(bcrypt.compareSync("wander", hash))