let bookMark = {
    title: "subtle art of not giving a fk",
    author: "mark manson"
}

let bookRobert ={
    title: "rich dad poor dada",
    author: "robert K"
}

console.log("The book " + bookMark.title + " is written by " + bookMark.author) // Using concatenation

console.log(`The book ${bookRobert.title} is written by ${bookRobert.author}`)  // Using template literals  ``


let books = function(book){

    return `From Function Books: The book ${book.title} is written by ${book.author}`;

}

let book1 = books(bookMark);
console.log(book1); // Using function to format output

let book2 = books(bookRobert);
console.log(book2);
