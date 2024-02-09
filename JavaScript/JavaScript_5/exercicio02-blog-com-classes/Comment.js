class Comment{
    constructor(author,comment){
        this.author = author
        this.comment = comment
        this.createdAt = new Date()
    }
}

module.exports = Comment