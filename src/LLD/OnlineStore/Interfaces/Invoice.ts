import { CartItem } from "./Cart.js";

export default interface Invoice {
  id: string;
  products: CartItem[];
  tax: number;
  deliveryFee: number;
  totalValue: number;
  date: Date;
}
