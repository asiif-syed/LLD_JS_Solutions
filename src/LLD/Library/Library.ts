import Address from "./Address";
import BookItem from "./BookItem";
import Librarian from "./Librarian";
import Book from "./Book";
import { BookFormat } from "./enums";
import Search from "./Search";

export default class Library {
  id: string;
  name: string;
  address: Address;
  books: BookItem[];
  librarian: Librarian;

  constructor(name: string, address: Address, librarian: Librarian) {
    this.id = "Library id";
    this.name = name;
    this.address = address;
    this.books = [];
    this.librarian = librarian;
  }

  updateLibrarian(
    firstName: string,
    lastName: string,
    address: Address,
    email: string
  ) {
    const librarian = new Librarian(firstName, lastName, address, email);
    this.librarian = librarian;
  }

  addBookItem(book: Book, format: BookFormat, pages: number, price: number) {
    const bookItem = new BookItem(book, format, pages, price);
    this.books.push(bookItem);
  }

  searchByTitle(title: string): BookItem[] {
    return Search.searchByTitle(this.books, title);
  }
  searchByAuthor(author: string): BookItem[] {
    return Search.searchByAuthor(this.books, author);
  }
  searchByDate(date: string): BookItem[] {
    return Search.searchByDate(this.books, date);
  }
}
