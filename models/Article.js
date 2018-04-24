const mongoose = require('mongoose')
// promise
mongoose.Promise = require('bluebird')

const ARTICLES = 'articles'

const sche = new mongoose.Schema({
  title: String,
  author: String,
  date: Number,
  tags: [Object],
  location: String,
  content: String
})
const model = mongoose.model(ARTICLES, sche)

exports.model = model