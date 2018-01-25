var mongoose = require('mongoose');
// 创建并连接test数据库
mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;
// 监听数据库错误信息
db.on('error', console.error.bind(console, 'connection error:'));
// 监听数据库是否已连接
db.once('open', function() {
  // we're connected!
});
// 模态  创建表结构
var kittySchema = mongoose.Schema({
  name: String
});
// 给创建的表添加方法
kittySchema.methods.speak = function () {
  var greeting = this.name
    ? "Meow name is " + this.name
    : "I don't have a name";
  console.log(greeting);
}
var Kitten = mongoose.model('Kitten', kittySchema);
// 查找
// Kitten.find(function(err, Kittens) {
//   if (err) {
//     return console.error(err)
//   }
//   console.log(Kittens)
// })
Kitten.find({ name: /^fluff/ }, function(err, data){
  if (err) {
    return console.error(err)
  }
  console.log(data)
});