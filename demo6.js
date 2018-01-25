var mongoose = require('mongoose');
// 创建并连接test数据库
mongoose.connect('mongodb://localhost/test');
var Schema = mongoose.Schema;
var animalSchema = new Schema({ name: String, type: String });
animalSchema.statics.findByName = function(name, cb) {
  return this.find({ name: new RegExp(name, 'i') }, cb); // i 修饰符用于执行对大小写不敏感的匹配。
};

var Animal = mongoose.model('Animal', animalSchema);
Animal.findByName('fido', function(err, animals) {
  console.log(animals);
});

// Methods 和 Statics 的区别
// statics是给model添加方法，methods是给实例（instance）添加方法。