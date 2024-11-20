import Author from "./Author";
import Publisher from "./Pulisher";

export default class Book {
  id: string;
  isbn: string;
  title: string;
  authors: Author[];
  publisher: Publisher;
  publishedDate: string;

  constructor(
    title: string,
    isbn: string,
    authors: Author[],
    publisher: Publisher,
    publishedDate: string
  ) {
    this.id = "Book id";
    this.isbn = isbn;
    this.title = title;
    this.authors = authors;
    this.publisher = publisher;
    this.publishedDate = publishedDate;
  }
}
