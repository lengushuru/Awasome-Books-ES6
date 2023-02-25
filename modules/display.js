import addBook from './addBook.js';

const books = document.querySelector('.books');

const removeBook = (book) => {
  book.remove();
};

const displayLibrary = (library) => {
  books.innerHTML = '';
  for (let i = 0; i < library.length; i += 1) {
    books.appendChild(addBook(library[i], i));
  }
  const removeButtons = document.querySelectorAll('.book-remove');
  removeButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      const index = event.target.dataset.bookIndex;
      removeBook(library[index]);
      displayLibrary(library);
    });
  });
};

export default displayLibrary;