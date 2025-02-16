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
addBookToLibrary(Book1.title, Book1.author, Book1.pages, Book1.read);

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary[title] = newBook;
}

function bookDisplay() {
  const books = Object.values(myLibrary);
  books.forEach((book) => {
    console.log(book.info());
  });
}

document.getElementById('submit').addEventListener('click', (event) => {
  event.preventDefault(); //Standard verhalten des submits unterdrücken
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').value;
  addBookToLibrary(title, author, pages, read);
  bookDisplay();
});
console.log(myLibrary);
