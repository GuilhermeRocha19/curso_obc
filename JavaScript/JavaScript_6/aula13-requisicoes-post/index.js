function renderArticle(articleData) {
    const article = document.createElement('article')
    article.classList.add('article')
    article.id = `article-${articleData.id}`
  
    const title = document.createElement('h3')
    title.classList.add('article-title')
    title.textContent = articleData.title

    const id = document.createElement('h4')
    id.classList.add('article-id')
    id.textContent = articleData.id
  
    const content = document.createElement('div')
    content.classList.add('article-content')
    content.innerHTML = articleData.content
  
    const author = document.createElement('div')
    author.classList.add('article-author')
    author.textContent = articleData.author
  
    article.append(id,title, author, content)
    document.querySelector('#articles').appendChild(article)
  }
  


async function fetchArticles(){
    const articles = await fetch('http://localhost:3000/articles').then(res => res.json())
    articles.forEach(renderArticle)
}

document.addEventListener("DOMContentLoaded",()=>{
    fetchArticles()
})