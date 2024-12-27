import Review from "./Review.js";
import Seller from "./Seller.js";

export default interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  availableQuality: number;
  reviews: Review[];
  sellerId: string;

  getAvailableQuanity(): number;
  isProductAvailable(): boolean;
  markOutofStock(): void;
  updatePrice(newPrice: number): number;
  addQuanity(additionalQuantity: number): number;
  decreaseQuanity(decreaseQuanity: number): void;
  addReview(review: Review): Review;
  getReviews(): Review[];
  deleteReview(id: string): void;
}
