const myLibrary = {};

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    return (
      this.title +
      ' by ' +
      this.author +
      ', ' +
      this.pages +
      ' pages, ' +
      this.read
    );
  };
}

const Book1 = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'not read yet');
const Book2 = new Book(
  'The Lord of the Rings',
  'J.R.R. Tolkien',
  1178,
  'not read yet'
);
addBookToLibrary(Book1.title, Book1.author, Book1.pages, Book1.read);
addBookToLibrary(Book2.title, Book2.author, Book2.pages, Book2.read);

function addBookToLibrary(title, author, pages, read) {
  const newBook = new Book(title, author, pages, read);
  myLibrary[title] = newBook;
}

function bookDisplay() {
  const booksContainer = document.getElementById('book-display');
  booksContainer.innerHTML = '';
  const books = Object.values(myLibrary);
  books.forEach((book) => {
    const bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p>Author: ${book.author}</p>
      <p>Pages: ${book.pages}</p>
      <p>Read: ${book.read}</p>
      <button class="remove-button">Remove</button>
    `;
    bookCard.querySelector('.remove-button').addEventListener('click', () => {
      delete myLibrary[book.title];
      bookDisplay();
    });
    booksContainer.appendChild(bookCard);
  });
}

document.getElementById('submit').addEventListener('click', (event) => {
  event.preventDefault(); // Standard verhalten des submit buttons unterdrücken
  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const pages = document.getElementById('pages').value;
  const read = document.getElementById('read').value;
  addBookToLibrary(title, author, pages, read);
  bookDisplay();
});
