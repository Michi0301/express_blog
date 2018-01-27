module.exports = class Post {
  constructor(post) {
    this.id = post.id;
    this.title = post.title;
    this.author = post.author;
    this.body = post.body;
  }
}