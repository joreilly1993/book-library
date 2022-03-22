let myLibrary = [];

function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
    this.info = function() {
        return `${title} by ${author} ${pages} pages, ${read}`;
    }
    this.sayTitle = function(){
        console.log(this.title);
    }
}


// maybe add some form validation.
// function addBookToLibrary(newBook) {
    
//     let newRow = document.createElement('tr');
//     let newCell = document.createElement('td');
//     newCell.setAttribute('data-value', myLibrary.length + 1);
//     let dataValue = newCell.dataset.value;
//     let delBookBtn = document.createElement('button');
//     delBookBtn.innerText = 'Remove Book';
//     table.appendChild(newCell);
//     table.appendChild(newRow);
//     table.appendChild(delBookBtn);

//     newCell.innerText = bookTitle.value + ' ' + bookAuthor.value + ' ' + bookStatus.value;

//     myLibrary.push(newBook);

//     console.log(dataValue);

//     delBookBtn.addEventListener('click', () => {
//         newCell.remove();
//         newRow.remove();
//         delBookBtn.remove();
//         myLibrary.splice(dataValue - 1, 1);

//     })
// }

//test new function. delete and uncomment one above if does not work
function addBookToLibrary(newBook) {
    
    let newRow = document.createElement('tr');
    let newCell = document.createElement('td');
    newCell.setAttribute('data-value', myLibrary.length + 1);
    let dataValue = newCell.dataset.value;
    let delBookBtn = document.createElement('button');
    delBookBtn.innerText = 'Remove Book';
    table.appendChild(newCell);
    table.appendChild(newRow);
    table.appendChild(delBookBtn);

    newRow.innerText = bookTitle.value + ' ' + bookAuthor.value + ' ' + bookStatus.value;

    myLibrary.push(newBook);

    console.log(dataValue);

    delBookBtn.addEventListener('click', () => {
        newCell.remove();
        newRow.remove();
        delBookBtn.remove();
        myLibrary.splice(dataValue - 1, 1);

    })
}






const addBookBtn = document.querySelector('#add-book-btn');
const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookStatus = document.querySelector('#status');
const table = document.querySelector('#table');

addBookBtn.addEventListener('click', (title, author, status) => {
    const newBook = new Book(bookTitle.value, bookAuthor.value, bookStatus.value);
    
    addBookToLibrary(newBook);
})


//to do

//write a function that loops the the myLibrary array and displays them on the page in a table.

//add a button on each books display to remove the book from the library.(Maybe add in some 'are you sure' functionality..)

//You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.

//add a button on each books display to change the read status 'To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.'



const Hobbit = new Book('The Hobbit','J.R.R Tolkien', '295', 'not read yet');

// const ReadyPlayerOne = new Book('Ready Player One', 'Ernest Cline', '332', 'Read');


const tr = document.querySelector('#tdTest');
const td = document.querySelector('#trTest');