const Comment = require("./Comment");

class Post{
    constructor(tittle,description,author){
        this.tittle = tittle
        this.description = description
        this.author = author
        this.comments = []
    }

    addComment(username,comment){
        this.comments.push(new Comment(username,comment));
    }
    
}

module.exports = Post