import { PaymentMethod } from "../enums.js";
import Address from "./Address.js";
import Order from "./Order.js";

export interface CartItem {
  productId: string;
  quantity: number;
  price: number;
}

export default interface Cart {
  cartItems: CartItem[];
  totalValue: number;

  addItem(item: CartItem): CartItem;
  incrementQuanity(productId: string): void;
  decrementQuanity(productId: string): void;
  removeItem(productId: string): void;
  checkout(paymentMethod: PaymentMethod, shippingAddress: Address): Order;
}
