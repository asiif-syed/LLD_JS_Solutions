import ProductInterface from "./Interfaces/Product.js";
import Review from "./Interfaces/Review.js";

export default class Product implements ProductInterface {
  id: string;
  name: string;
  category: string;
  price: number;
  availableQuality: number;
  reviews: Review[];
  sellerId: string;

  constructor(
    name: string,
    category: string,
    price: number,
    quantity: number,
    sellerId: string
  ) {
    this.id = "GeneratedProductID";
    this.name = name;
    this.category = category;
    this.price = price;
    this.availableQuality = quantity;
    this.sellerId = sellerId;
  }

  getAvailableQuanity(): number {
    return this.availableQuality;
  }
  isProductAvailable(): boolean {
    return this.availableQuality > 0;
  }
  markOutofStock(): void {
    this.availableQuality = 0;
  }
  updatePrice(newPrice: number): number {
    this.price = newPrice;
    return this.price;
  }
  addQuanity(additionalQuantity: number): number {
    this.availableQuality += additionalQuantity;
    return this.availableQuality;
  }
  decreaseQuanity(decreaseQuanity: number): void {
    this.availableQuality -= decreaseQuanity;
  }
  addReview(review: Review): Review {
    this.reviews.push(review);
    return review;
  }
  getReviews(): Review[] {
    return this.reviews;
  }
  deleteReview(id: string): void {
    const selectedReviewIdx = this.reviews.findIndex((r) => r.id === id);
    if (selectedReviewIdx > -1) {
      this.reviews.splice(selectedReviewIdx, 1);
    }
  }
}
