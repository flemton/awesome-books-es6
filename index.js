import Book from './modules/Book.js';
import { DateTime } from './modules/luxon.js';

window.addEventListener('DOMContentLoaded', () => {
  const booksLink = document.querySelector('.list');
  const formsLink = document.querySelector('.add-new');
  const contactsLink = document.querySelector('.contact-link');
  const booksPage = document.querySelector('.book-list');
  const formsPage = document.querySelector('.form');
  const contactsPage = document.querySelector('.contact');
  const booksTitle = document.querySelector('.books-head');
  formsPage.classList.add('hide');
  contactsPage.classList.add('hide');

  booksLink.addEventListener('click', () => {
    formsPage.classList.add('hide');
    contactsPage.classList.add('hide');
    booksPage.classList.remove('hide');
    booksTitle.classList.remove('hide');
  });

  contactsLink.addEventListener('click', () => {
    booksPage.classList.add('hide');
    formsPage.classList.add('hide');
    booksTitle.classList.add('hide');
    contactsPage.classList.remove('hide');
  });
  formsLink.addEventListener('click', () => {
    booksPage.classList.add('hide');
    contactsPage.classList.add('hide');
    booksTitle.classList.add('hide');
    formsPage.classList.remove('hide');
  });
});

const dt = DateTime.now();
document.getElementById('date').innerHTML = dt.toLocaleString(DateTime.DATETIME_FULL);

const addButton = document.querySelector('#add-book');
const removeButton = document.querySelectorAll('.remove');

addButton.addEventListener('click', Book.addBook);
removeButton.forEach((element) => element.addEventListener('click', Book.removeBook));
