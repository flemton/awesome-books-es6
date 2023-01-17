import bookList from './bookList.js';

const Books = JSON.parse(localStorage.getItem('Books')) || [];

let bookIndex = 0;

Books.forEach((Books) => {
  let bookClass = 'bookContainer';
  if (bookIndex % 2 === 1) {
    bookClass = 'bookContainer1';
  }
  const book = `
      <div class="${bookClass}">
          <p>
          ${Books.title} by ${Books.author}
          </p>
          <button class="remove">Remove</button>
      </div>`;
  bookList.innerHTML += book;
  bookIndex += 1;
});

document.body.insertBefore(bookList, document.body.children[3]);

export default Books;
