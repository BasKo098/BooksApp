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
    const bookImages = bookList.querySelectorAll('.book__image');
   
    for (let image of bookImages) { 
        const imageId = image.getAttribute('data-id');
        const imageObject = {id:imageId, element: image};

        image.addEventListener('dblclick', function(event){
            event.preventDefault();

            const isImageinFavourites = favouriteBooks.some(item => item.id == imageId);

            if(isImageinFavourites){
            image.classList.remove('favourite');
            favouriteBooks = favouriteBooks.filter(item => item.id !== imageId);
            console.log('po usunięcu :' + favouriteBooks);
            } else {
            image.classList.add('favourite');
            favouriteBooks.push(imageObject);
            console.log('po dodaniu ' + favouriteBooks);
            }
        });   
        console.log('wynik tablicy: ' + favouriteBooks);
    }
}

initActions();



