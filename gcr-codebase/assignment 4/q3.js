// Q3: Library Management System (Classes + Objects)

class Book {
  constructor(title, author, ISBN, isIssued = false) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.isIssued = isIssued;
  }

  issueBook() {
    if (this.isIssued) {
      return `"${this.title}" is already issued.`;
    }
    this.isIssued = true;
    return `"${this.title}" has been issued.`;
  }

  returnBook() {
    if (!this.isIssued) {
      return `"${this.title}" was not issued.`;
    }
    this.isIssued = false;
    return `"${this.title}" has been returned.`;
  }
}

const books = [
  new Book("Clean Code", "Robert C. Martin", "9780132350884"),
  new Book("The Pragmatic Programmer", "Andrew Hunt", "9780201616224"),
  new Book("You Don't Know JS", "Kyle Simpson", "9781491904244"),
  new Book("Eloquent JavaScript", "Marijn Haverbeke", "9781593279509"),
];

// Display all books that are not issued
function showAvailableBooks() {
  console.log("Available books:");
  books
    .filter((b) => !b.isIssued)
    .forEach((b) => console.log(`- ${b.title} by ${b.author} (ISBN: ${b.ISBN})`));
}

// Search by ISBN and issue the book
function issueByISBN(isbn) {
  const book = books.find((b) => b.ISBN === isbn);
  if (!book) {
    console.log(`No book found with ISBN ${isbn}.`);
    return;
  }
  console.log(book.issueBook());
}

// ---- Demo ----
showAvailableBooks();
console.log();
issueByISBN("9780132350884");   // issue Clean Code
issueByISBN("9780132350884");   // try again -> already issued
issueByISBN("0000000000");      // not found
console.log();
showAvailableBooks();
console.log();
console.log(books[0].returnBook());

// To take ISBN from the user in Node.js, uncomment:
// const readline = require("readline").createInterface({ input: process.stdin, output: process.stdout });
// readline.question("Enter ISBN to issue: ", (isbn) => { issueByISBN(isbn.trim()); readline.close(); });