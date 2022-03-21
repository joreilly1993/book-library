let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author} ${pages} pages, ${read}`;
    }
    this.sayTitle = function(){
        console.log(this.title);
    }
}

function addBookToLibrary() {

}


//to do

//write a function that loops the the myLibrary array and displays them on the page in a table.

//add a button on each books display to remove the book from the library.(Maybe add in some 'are you sure' functionality..)

//You will need to associate your DOM elements with the actual book objects in some way. One easy solution is giving them a data-attribute that corresponds to the index of the library array.

//add a button on each books display to change the read status 'To facilitate this you will want to create the function that toggles a book’s read status on your Book prototype instance.'



// const Hobbit = new Book('The Hobbit','J.R.R Tolkien', '295', 'not read yet');

// const ReadyPlayerOne = new Book('Ready Player One', 'Ernest Cline', '332', 'Read');