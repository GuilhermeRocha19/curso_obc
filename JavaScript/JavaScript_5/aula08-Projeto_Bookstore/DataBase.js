module.exports = class DataBase{
    #storage = {
        books:[],
        posters:[],
        orders: [],
        users: [],
        authors: []
    }
    
    find(key){
        return this.#storage[key]
    }

    saveAuthor(author){
        this.#storage.authors.push(author)
    }

    findBookByName(bookName){
        const book = this.#storage.books.find(b => b.name === bookName)
        return book
    }
    saveBook(book){
        const bookExists = this.findBookByName(book.name)
        if(!bookExists){
            this.#storage.books.push(book)
        }
    }

    addBookToStock(bookName,quantity){
        const book = this.findBookByName(bookName)
        book?.addtoStock(quantity)
    }

    removeBooksFromStock(bookName,quantity){
        const book = this.findBookByName(bookName)
        book?.removeFromStock(quantity)
    }


    findPosterByName(posterName){
        const poster = this.#storage.posters.find(p => p.name === posterName)
        return poster
    }
    savePoster(poster){
        const posterExists = this.findPosterByName(poster.name)
        if(!posterExists){
            this.#storage.posters.push(poster)
        }
    }

    addPosterToStock(posterName,quantity){
        const poster = this.findPosterByName(posterName)
        poster?.addtoStock(quantity)
    }

    removePostersFromStock(posterName,quantity){
        const poster = this.findPosterByName(posterName)
        poster?.removeFromStock(quantity)
    }

    saveUser(user){
        const userExists = this.#storage.users.find(u => u.email === user.email);
        if(!userExists){
            this.#storage.users.push(user)
        }
    }

    saveOrder(order){
        this.#storage.orders.push(order)
    }

    showStorage(){
        console.table(this.#storage.authors)
        console.table(this.#storage.books)
        console.table(this.#storage.posters)
        console.table(this.#storage.users)
        console.table(this.#storage.orders.map(order => order.data))
    }
}