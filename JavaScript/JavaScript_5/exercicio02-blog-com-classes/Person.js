const Post = require("./Post");

class Person {
  constructor(name) {
    this.name = name;
    this.posts = [];
  }

  newPost(tittle, description) {
    const post = new Post(tittle, description, this)
    this.posts.push(post);
    return post
  }
}

module.exports = Person;
