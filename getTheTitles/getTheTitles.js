const getTheTitles = function(books) {

    // Figured out how to access the objects

    // We need to access the first and second index of books to get the title and add them to an array

    let booksArr = [];
    let currentBook;

    for(i=0; i < books.length; i++){
        currentBook = books[i].title;

        booksArr.push(currentBook);
    }

    return booksArr;
}

module.exports = getTheTitles;
