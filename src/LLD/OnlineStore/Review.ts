import ReviewInterface from "./Interfaces/Review.js";
import Member from "./Member.js";

export default class Review implements ReviewInterface {
  id: string;
  rating: number;
  review: string;
  author: Member;

  constructor(rating: number, review: string, author: Member) {
    this.id = "GeneratedReveiwID";
    this.rating = rating;
    this.review = review;
    this.author = author;
  }

  updateReview(rating: number, review: string): Review {
    this.rating = rating;
    this.review = review;
    return this;
  }
}
