const mongoose = require('mongoose')
const {url} = require('../static/mongo.json')

// 数据库初始化
mongoose.connect(url, function (err) {
  if (!err) {
      console.log('open..');
  } else {
    throw err;
  }
});

// 文档结构
var ariticles = mongoose.Schema({
  page: Number,
  items: []
});
var model = mongoose.model('home_articles', ariticles);
model.find({}, function(err, data){
  console.log(data);
});



