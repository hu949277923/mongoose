var mongoose = require('mongoose');
// 创建并连接test数据库
mongoose.connect('mongodb://localhost/test');
var Schema = mongoose.Schema;

var blogSchema = new Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});
var Blog = mongoose.model('Blog', blogSchema);
// var animalSchema = new Schema({ name: String, type: String });
var blog = new Blog({
  title: '标题',
  author: 'bill',
  body: 'body主体',
  hidden: true,
  comments: [
    {body:'comments body', date: new Date() }, 
    {body:'comments body2', date: new Date() },
    {body:'comments body3', date: new Date() },
    {body:'comments body4', date: new Date() }
  ],
  meta: {
    votes: 1,
    favs: 2
  }
})
blog.save(function(err, data){
  if (err) {
    return console.error(err)
  }
  console.log('data')
  console.log(data)
})
