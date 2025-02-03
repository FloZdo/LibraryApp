const myLibrary = {};

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return `${title} by ${author}, ${pages} pages, ${read}`;
  };
}

const Book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');

function addBookToLibrary() {}

console.log(Book1.info());
