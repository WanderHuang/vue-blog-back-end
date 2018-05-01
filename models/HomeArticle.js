const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')
// promise
mongoose.Promise = require('bluebird')

const ARTICLES = 'prearticles'

const sche = new mongoose.Schema({
  page: Number,
  total: Number,
  totalPage: Number,
  items: []
})

sche.plugin(mongoosePaginate)

const model = mongoose.model(ARTICLES, sche)

exports.model = model