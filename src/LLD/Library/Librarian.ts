import Address from "./Address";
import BookItem from "./BookItem";
import Constants from "./Constants";
import { BookingStatus, MembershipStatus, UserTypes } from "./enums";
import Fine from "./Fine";
import Member from "./Member";
import Membership from "./Membership";
import Notifications from "./Notifications";
import User from "./User";

export default class Librarian extends User {
  employmentId: string;
  constructor(
    firstName: string,
    lastName: string,
    address: Address,
    email: string
  ) {
    super(firstName, lastName, address, UserTypes.LIBRARIAN, email);
    // Generate employemnt id
    this.employmentId = "employement id";
  }

  //   Manage memebers
  issueMembership(
    firstName: string,
    lastName: string,
    address: Address,
    email: string
  ): Membership {
    const member = new Member(firstName, lastName, address, email);
    return member.membership;
  }
  cancelMembership(membership: Membership) {
    membership.status = MembershipStatus.CANCELLED;
    membership.expiryDate = new Date();
  }
  blockMember(membership: Membership) {
    membership.status = MembershipStatus.BLOCKED;
    membership.expiryDate = new Date();
  }

  //   Manage book reservations
  checkoutBooks(books: BookItem[], membership: Membership) {
    // Check if the membership is active
    const isMembershipActive = membership.isActive();
    if (!isMembershipActive) {
      throw new Error("Membership is not active, contact librarian!");
    }
    // Check if the checkedout books are < allowed number
    if (
      membership.member.checkedoutBooks.length >= Constants.MAX_ALLOWED_BOOKS
    ) {
      throw new Error("User has already checked out max allowed books!");
    }
    // Check if the user can checkout all the books
    if (
      membership.member.checkedoutBooks.length + books.length >
      Constants.MAX_ALLOWED_BOOKS
    ) {
      const allowedBooks =
        Constants.MAX_ALLOWED_BOOKS - membership.member.checkedoutBooks.length;
      throw new Error(
        `User already has ${membership.member.checkedoutBooks.length} books checkedout, can checkout only ${allowedBooks} books now!`
      );
    }
    for (let book of books) {
      // Check if the book is available
      const isAvailable = book.isBookAvailable();
      if (isAvailable) {
        book.updateBookingStatus(membership.member, BookingStatus.LOANED);
        membership.member.checkedoutBooks.push(book);
      }
    }
  }
  returnBooks(books: BookItem[], membership: Membership) {
    Fine.calculateFine(books);
    for (let book of books) {
      book.updateBookingStatus(membership.member, BookingStatus.RETURNED);
      const checkoutIdx = membership.member.checkedoutBooks.findIndex(
        (checkedoutBook) => book.id === checkedoutBook.id
      );
      membership.member.checkedoutBooks.splice(checkoutIdx, 1);
      //   Can calculate fine
    }
  }
  reserveBooks(books: BookItem[], membership: Membership) {
    // Check if the membership is active
    const isMembershipActive = membership.isActive();
    if (!isMembershipActive) {
      throw new Error("Membership is not active, contact librarian!");
    }

    for (let book of books) {
      const isAvailable = book.isBookAvailable();
      if (isAvailable) {
        book.updateBookingStatus(membership.member, BookingStatus.RESERVED);
        console.log("Book is reserved!");
      } else {
        console.log(
          "Book is not available for reservations at this time, we will send you notificaiton when the books becomes available!"
        );
        // Register for notifications
        Notifications.subscribe(book.id, membership.member);
      }
    }
  }
}
