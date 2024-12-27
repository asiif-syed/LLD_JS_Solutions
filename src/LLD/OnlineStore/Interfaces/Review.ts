import Member from "./Member.js";

export default interface Review {
  id: string;
  rating: number;
  review: string;
  author: Member;

  updateReview(rating: number, raview: string): Review;
}
