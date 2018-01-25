// 链式查询
var mongoose = require('mongoose');
// 创建并连接test数据库
mongoose.connect('mongodb://localhost/test');
var Schema = mongoose.Schema;
var animalSchema = new Schema({
  name: String,
  type: String,
  tags: { type: [String], index: true } // field level
});
var Animal = mongoose.model('animal2', animalSchema )
var animal = new Animal({
  name: '1212',
  type: '1112'
})
// animalSchema.index({ name: 1, type: -1 });
animal.save(function(err, data){
  if (err) {
    return console.error(err)
  }
  console.log('data')
  console.log(data)
})
