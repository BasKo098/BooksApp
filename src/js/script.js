/* global Handlebars, utils, dataSource */ // eslint-disable-line no-unused-vars


'use strict';
//Prepare references to template & .book-lis
const template = Handlebars.compile(document.querySelector('#template-book').innerHTML);
const bookList = document.querySelector('.books-list');
//Add render function
function render (){
    for (let book in dataSource.books) {
        const generatedHTML = template(dataSource.books[book]);
        const bookElement = utils.createDOMFromHTML(generatedHTML);
        bookList.appendChild(bookElement);
    }
}

render();


let favouriteBooks = [];


function initActions() {
    bookList.addEventListener('dblclick', function (event) {
        event.preventDefault();
        const clickedImage = event.target.offsetParent;

        if (clickedImage.classList.contains('book__image')) {
            const imageId = clickedImage.getAttribute('data-id');
            const isImageInFavourites = favouriteBooks.some(item => item.id === imageId);

            if (isImageInFavourites) {
                clickedImage.classList.remove('favourite');
                favouriteBooks = favouriteBooks.filter(item => item.id !== imageId);
                console.log('po usunięciu: ', favouriteBooks);
            } else {
                clickedImage.classList.add('favourite');
                favouriteBooks.push({ id: imageId });
                console.log('po dodaniu: ', favouriteBooks);
            }

            console.log('wynik tablicy: ', favouriteBooks);
        }
    });
}

initActions();


