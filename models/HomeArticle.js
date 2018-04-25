const mongoose = require('mongoose')
// promise
mongoose.Promise = require('bluebird')

const ARTICLES = 'home_articles'

const sche = new mongoose.Schema({
  page: Number,
  total: Number,
  totalPage: Number,
  items: []
})
const model = mongoose.model(ARTICLES, sche)

exports.model = model