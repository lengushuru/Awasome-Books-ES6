const addBook = (book, bookNumber) => {
  book.index = bookNumber;
  const bookHtml = document.createElement('div');
  bookHtml.className = 'book';
  if (bookNumber % 2 === 0) {
    bookHtml.classList.add('gray-background');
  }
  bookHtml.innerHTML = `<p class = "book-title"> ${book.title} By ${book.author} </p>
 <button class="book-remove" data-book-index=${bookNumber}> remove</button>  `;
  return bookHtml;
};

export default addBook;