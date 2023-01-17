import Books from './Books.js';
import bookList from './bookList.js';

export default class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }

  static addBook() {
    const formTitle = document.querySelector('#title');

    const formAuthor = document.querySelector('#author');
    const bbook = new Book(formTitle.value, formAuthor.value);
    Books.push(bbook);
    bookList.innerHTML += `
        <div class="bookContainer">
        <p>
        ${formTitle.value} by ${formAuthor.value}
        </p>
        <button class="remove">Remove</button>
        </div>`;
    formAuthor.value = '';
    formTitle.value = '';
    localStorage.setItem('Books', JSON.stringify(Books));
  }

  static removeBook() {
    for (let i = 0; i < Books.length; i += 1) {
      Books.splice(i, 1);
      localStorage.setItem('Books', JSON.stringify(Books));
      window.location.reload();
      break;
    }
  }
}