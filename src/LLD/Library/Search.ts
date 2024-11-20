import BookItem from "./BookItem";

export default class Search {
  static searchByAuthor(books: BookItem[], author: string): BookItem[] {
    return books.filter((b) =>
      b.book.title.toLocaleLowerCase().includes(author.toLowerCase())
    );
  }
  static searchByTitle(books: BookItem[], title: string): BookItem[] {
    return books.filter((b) =>
      b.book.title.toLocaleLowerCase().includes(title.toLowerCase())
    );
  }
  static searchByDate(books: BookItem[], date: string): BookItem[] {
    return books.filter((b) => b.book.publishedDate === date);
  }
}
