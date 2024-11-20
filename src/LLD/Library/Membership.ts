import { MembershipStatus } from "./enums";
import Member from "./Member";

export default class Membership {
  id: string;
  barcode: string;
  issueDate: Date;
  expiryDate: Date;
  status: MembershipStatus;
  member: Member;

  constructor(member: Member) {
    this.id = "Random membershipt id";
    this.barcode = "Generated barcode";
    this.status = MembershipStatus.ACTIVE;
    // Issue date and expiry date
    this.issueDate = new Date();
    const nextYearDate = new Date(this.issueDate); // Create a copy of the current date
    nextYearDate.setFullYear(this.issueDate.getFullYear() + 1); // Add one year
    this.expiryDate = nextYearDate;
    this.member = member;
  }
  getMembershipStatus(): MembershipStatus {
    return this.status;
  }
  isActive(): boolean {
    // Check if the status is active
    if (
      [
        MembershipStatus.BLOCKED,
        MembershipStatus.CANCELLED,
        MembershipStatus.EXPIRED,
      ].includes(this.status)
    ) {
      console.log("Membership status: ", this.status);
      return false;
    }
    // Check if the membership is expired
    if (new Date() <= this.expiryDate) {
      this.status = MembershipStatus.EXPIRED;
      return false;
    }
    return true;
  }

  renewMembership(years: number): Membership {
    const currentDate = new Date();
    const nextYearDate = new Date(currentDate); // Create a copy of the current date
    nextYearDate.setFullYear(this.issueDate.getFullYear() + years); // Add one year
    this.expiryDate = nextYearDate;
    this.status = MembershipStatus.ACTIVE;
    return this;
  }
}
