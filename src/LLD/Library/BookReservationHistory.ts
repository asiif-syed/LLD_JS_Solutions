import { BookingStatus } from "./enums";
import Member from "./Member";

export default class BookReservationHistory {
  id: string;
  member: Member;
  status: BookingStatus;
  date: Date;

  constructor(member: Member, status: BookingStatus) {
    this.member = member;
    this.status = status;
    this.id = "Generated history id";
    this.date = new Date();
  }
}
