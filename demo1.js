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
// 生成表
var Kitten = mongoose.model('Kitten', kittySchema);
// 插入数据
var silence = new Kitten({ name: 'bill' });
console.log(silence.name); // 'Silence'

silence.save(function (err, fluffy) {
  if (err) return console.error(err);
  console.log('ok');
  // fluffy.speak();
});