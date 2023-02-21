import displayLibrary from "./modules/display.js";
import {time} from "./modules/timer.js"

const books = document.querySelector('.books');
const addBookButton = document.getElementById('submit');
const bookTitle = document.getElementById('title');
const bookAuthor = document.getElementById('author');
const listLink = document.getElementById('list-link');
const addLink = document.getElementById('add-link');
const contactLink = document.getElementById('contact-link');
const list = document.getElementById('list');
const addForm = document.getElementById('add-form');
const contact = document.getElementById('contact');

let library = [];
class Book {
  constructor(title, author, index = null) {
    this.title = title;
    this.author = author;
    this.index = index;
  }

  add() {
    library.push(this);
    localStorage.setItem('booksData', JSON.stringify(library));
  }

  remove() {
    library.splice(this.index, 1);
    localStorage.setItem('booksData', JSON.stringify(library));
  }
}

const turnLibraryDataIntoBooks = (library) => {
  const newLibrary = [];
  for (let i = 0; i < library.length; i += 1) {
    const { title } = library[i];
    const { author } = library[i];
    const { index } = library[i];
    newLibrary.push(new Book(title, author, index));
  }
  return newLibrary;
};

if (localStorage.getItem('booksData')) {
  library = JSON.parse(localStorage.getItem('booksData'));
  library = turnLibraryDataIntoBooks(library);
  displayLibrary(library);
}

addBookButton.addEventListener('click', () => {
  if (bookTitle.value !== '' && bookAuthor.value !== '') {
    const book = new Book(bookTitle.value, bookAuthor.value);
    book.add();
    displayLibrary(library);
    bookTitle.value = '';
    bookAuthor.value = '';
  }
});

listLink.addEventListener('click', () => {
  list.classList.remove('hide');
  addForm.classList.add('hide');
  contact.classList.add('hide');
  listLink.classList.add('active');
  addLink.classList.remove('active');
  contactLink.classList.remove('active');
});

addLink.addEventListener('click', () => {
  list.classList.add('hide');
  addForm.classList.remove('hide');
  contact.classList.add('hide');
  listLink.classList.remove('active');
  addLink.classList.add('active');
  contactLink.classList.remove('active');
});

contactLink.addEventListener('click', () => {
  list.classList.add('hide');
  addForm.classList.add('hide');
  contact.classList.remove('hide');
  listLink.classList.remove('active');
  addLink.classList.remove('active');
  contactLink.classList.add('active');
});


setInterval(time, 1000);