import { clone } from "lodash";
import Address from "./Address";
import BookItem from "./BookItem";
import Constants from "./Constants";
import { BookingStatus, BookStatus, UserTypes } from "./enums";
import Membership from "./Membership";
import Notifications from "./Notifications";
import User from "./User";
import Fine from "./Fine";

export default class Member extends User {
  membership: Membership;
  checkedoutBooks: BookItem[] = [];

  constructor(
    firstName: string,
    lastName: string,
    address: Address,
    email: string
  ) {
    super(firstName, lastName, address, UserTypes.MEMBER, email);
    this.membership = new Membership(this);
  }

  checkoutBooks(books: BookItem[]) {
    // Check if the membership is active
    const isMembershipActive = this.membership.isActive();
    if (!isMembershipActive) {
      throw new Error("Membership is not active, contact librarian!");
    }
    // Check if the checkedout books are < allowed number
    if (this.checkedoutBooks.length >= Constants.MAX_ALLOWED_BOOKS) {
      throw new Error("User has already checked out max allowed books!");
    }
    // Check if the user can checkout all the books
    if (
      this.checkedoutBooks.length + books.length >
      Constants.MAX_ALLOWED_BOOKS
    ) {
      const allowedBooks =
        Constants.MAX_ALLOWED_BOOKS - this.checkedoutBooks.length;
      throw new Error(
        `User already has ${this.checkedoutBooks.length} books checkedout, can checkout only ${allowedBooks} books now!`
      );
    }
    for (let book of books) {
      // Check if the book is available
      const isAvailable = book.isBookAvailable();
      if (isAvailable) {
        book.updateBookingStatus(this, BookingStatus.LOANED);
        this.checkedoutBooks.push(book);
      }
    }
  }
  returnBooks(books: BookItem[]) {
    // Calculate fine
    Fine.calculateFine(books);
    for (let book of books) {
      // Handle return
      book.updateBookingStatus(this, BookingStatus.RETURNED);
      const checkoutIdx = this.checkedoutBooks.findIndex(
        (checkedoutBook) => book.id === checkedoutBook.id
      );
      this.checkedoutBooks.splice(checkoutIdx, 1);
    }
  }
  reserveBooks(books: BookItem[]) {
    // Check if the membership is active
    const isMembershipActive = this.membership.isActive();
    if (!isMembershipActive) {
      throw new Error("Membership is not active, contact librarian!");
    }

    for (let book of books) {
      const isAvailable = book.isBookAvailable();
      if (isAvailable) {
        book.updateBookingStatus(this, BookingStatus.RESERVED);
        console.log("Book is reserved!");
      } else {
        console.log(
          "Book is not available for reservations at this time, we will send you notificaiton when the books becomes available!"
        );
        // Register for notifications
        Notifications.subscribe(book.id, this);
      }
    }
  }
  unsubscribeForNotification(bookId: string) {
    Notifications.unsubscribe(bookId, this);
  }
}
