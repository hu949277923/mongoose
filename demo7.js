// 链式查询
var mongoose = require('mongoose');
// 创建并连接test数据库
mongoose.connect('mongodb://localhost/test');
var Schema = mongoose.Schema;
var animalSchema = new Schema({ name: String, type: String });
animalSchema.query.byName = function(name, cb) {
  return this.find({ name: new RegExp(name, 'i') }, cb); // i 修饰符用于执行对大小写不敏感的匹配。
};

var Animal = mongoose.model('Animal', animalSchema);
Animal.find().byName('fido3').exec(function(err, data){
  console.log(data)
})