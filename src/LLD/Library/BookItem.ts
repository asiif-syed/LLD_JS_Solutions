import Book from "./Book";
import BookReservationHistory from "./BookReservationHistory";
import { BookFormat, BookingStatus, BookStatus } from "./enums";
import Member from "./Member";
import Notifications from "./Notifications";

export default class BookItem {
  book: Book;
  format: BookFormat;
  pages: number;
  price: number;
  bookStatus: BookStatus;
  reservationStatus: BookingStatus;
  id: string;
  reservationHistory: BookReservationHistory[];

  constructor(book: Book, format: BookFormat, pages: number, price: number) {
    this.id = "Generated book item id";
    this.book = book;
    this.format = format;
    this.pages = pages;
    this.price = price;
    this.bookStatus = BookStatus.AVAILABLE;
    this.reservationHistory = [];
    this.reservationStatus = BookingStatus.AVAILABLE;
  }

  getBookingStatus() {
    return this.reservationStatus;
  }

  isBookAvailable(): boolean {
    if (this.bookStatus === BookStatus.DAMAGED) {
      console.log("Book is damaged, not availble for checkouts!");
      return false;
    }
    if (
      [
        BookingStatus.LOANED,
        BookingStatus.RESERVED,
        BookingStatus.RENEWED,
      ].includes(this.reservationStatus)
    ) {
      console.log(
        `Book is ${this.reservationStatus
          .toLocaleString()
          .toLocaleLowerCase()} by another user, not availble for checkouts!`
      );
      return false;
    }
    return true;
  }

  updateBookingStatus(member: Member, status: BookingStatus) {
    const history = new BookReservationHistory(member, status);
    this.reservationHistory.push(history);
    if (status === BookingStatus.RETURNED) {
      // Make the book available
      this.reservationStatus = BookingStatus.AVAILABLE;
      //   Send notifications to the subscribers
      Notifications.sendNotificationForBook(this.id, this.book.title);
    } else {
      this.reservationStatus = status;
    }
  }

  //   In case book is damaged
  updateBookStatus(newStatus: BookStatus): BookStatus {
    this.bookStatus = newStatus;
    return this.bookStatus;
  }

  getBookStatus(): BookStatus {
    return this.bookStatus;
  }
}
