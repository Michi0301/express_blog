const baseController = require('./base_controller');
const Post = require('../models/post');

module.exports = class homesController extends baseController {
  show() {
    let p1 = new Post({
      id: 1,
      title: "My first post",
      author: "Michael",
      body: "This is my first post, cool right?"
    });

    this.res.locals.post = p1;
    this.res.render('posts/show');
  }
}