var mongoose = require('mongoose');
// 创建并连接test数据库
mongoose.connect('mongodb://localhost/test');
var Schema = mongoose.Schema;
var animalSchema = new Schema({ name: String, type: String });
animalSchema.methods.findSimilarTypes = function(cb) {
  console.log(this.type)
  return this.model('Animal').find({ type: this.type }, cb);
};
var Animal = mongoose.model('Animal', animalSchema);
var dog = new Animal({ type: 'dog' });
// dog.save(function(err, data){
//   if (err) {
//     return console.error(err)
//   }
// })

dog.findSimilarTypes(function(err, dogs) {
  console.log(dogs); // woof
});
