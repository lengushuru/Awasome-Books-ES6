export let library = [];

export class Book {
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

