import { clone } from "lodash";
import BookItem from "./BookItem";
import BookReservationHistory from "./BookReservationHistory";
import Constants from "./Constants";
import { BookingStatus } from "./enums";
import { calculateDaysPassed } from "./utils";

export default class Fine {
  static calculateFine(books: BookItem[]) {
    let fine = 0;
    const finePerBook: { [key: string]: number } = {};
    for (let book of books) {
      const history = clone(book.reservationHistory).pop();
      // Calculate only if the books was loaned or renewed
      if (
        history &&
        [(BookingStatus.LOANED, BookingStatus.RENEWED)].includes(history.status)
      ) {
        const daysPassed = calculateDaysPassed(history.date);
        if (daysPassed > Constants.MAX_ALLOWED_DAYS) {
          const diff = daysPassed - Constants.MAX_ALLOWED_DAYS;
          const fineForThisBook = Constants.FINE_PER_DAY * diff;
          finePerBook[book.book.title] = fineForThisBook;
          fine += fineForThisBook;
        }
      }
    }
    if (fine > 0) {
      console.log(
        `You need to pay a fine of $${fine} for returning books late`
      );
      for (let key of Object(finePerBook).keys()) {
        console.log(`For ${key} - ${finePerBook[key]}`);
      }
      this.processPayment(fine);
    }
  }

  static processPayment(amount: number) {
    // Process payament
  }
}
