let myLibrary = [
  { author: 'author1', title: 'Title1', description: 'description1', num_of_pages: 100, book_id: 1, is_read: false },
  { author: 'author2', title: 'Title2', description: 'description1', num_of_pages: 100, book_id: 1, is_read: false },
  { author: 'author3', title: 'Title3', description: 'description1', num_of_pages: 100, book_id: 1, is_read: false },
  { author: 'author4', title: 'Title4', description: 'description1', num_of_pages: 100, book_id: 1, is_read: false },
  { author: 'author5', title: 'Title5', description: 'description1', num_of_pages: 100, book_id: 1, is_read: false },
]

function Book(author, title, description, num_of_pages, book_id, is_read) {
  // the constructor...
  this.author = author
  this.title = title
  this.description = description
  this.num_of_pages = num_of_pages
  this.book_id = book_id
  this.is_read = is_read
}

function addBookToLibrary() {
  // do stuff here
}

function ShowBooks() {
  const cardContainer = document.querySelector('.card-container')
  // loop through array and show all the books
  for (let book of myLibrary) {
    const card = document.createElement('div')
    const title = document.createElement('div')
    const author = document.createElement('div')
    const description = document.createElement('div')
    const num_of_pages = document.createElement('div')
    const btn_container = document.createElement('div')
    const btn_read = document.createElement('button')
    const btn_remove = document.createElement('button')
    card.classList.add('card')
    title.classList.add('title')
    author.classList.add('author')
    description.classList.add('description')
    num_of_pages.classList.add('pages')
    btn_container.classList.add('button-container')
    btn_read.classList.add('read')
    btn_read.addEventListener('click', () => {
      if (book.is_read === false) {
        book.is_read = true
        btn_read.classList.add('read-true')
      } else {
        book.is_read = false
        btn_read.classList.remove('read-true')
      }
    })
    btn_remove.classList.add('remove')
    btn_remove.addEventListener('click', () => {
      btn_remove.parentElement.parentElement.animate([
        // keyframes
        { transform: 'translateY(0)' },
        { transform: 'translateY(-100%)', opacity: 0 }
      ], {
        // timing options
        duration: 600,
        iterations: 1,
      })
      setTimeout(() => {
      btn_remove.parentElement.parentElement.remove()
      myLibrary.splice(myLibrary.indexOf(book), 1)
      }, 500)
    })
    cardContainer.appendChild(card)
    for (let property in book) {
      card.appendChild(title)
      card.appendChild(author)
      card.appendChild(description)
      card.appendChild(num_of_pages)
      card.appendChild(btn_container)
      title.innerHTML = `${book.title}`;
      author.innerHTML = `${book.author}`;
      description.innerHTML = `${book.description}`;
      num_of_pages.innerHTML = `${book.num_of_pages}`;
      btn_container.appendChild(btn_read)
      btn_container.appendChild(btn_remove)
      btn_read.innerHTML = 'Read'
      btn_remove.innerHTML = 'Remove'
    }
  }
  
}

ShowBooks()
