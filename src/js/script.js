/* global Handlebars, utils, dataSource */ // eslint-disable-line no-unused-vars

'use strict';

const template = Handlebars.compile(document.querySelector('#template-book').innerHTML);
console.log(template);
const bookList = document.querySelector('.books-list');
console.log(bookList);

function render (){
    for (let book in dataSource.books) {
        const generatedHTML = template(dataSource.books[book]);
        const bookElement = utils.createDOMFromHTML(generatedHTML);
        bookList.appendChild(bookElement);
    }
}
render();

