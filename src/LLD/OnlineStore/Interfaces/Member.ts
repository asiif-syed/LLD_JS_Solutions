import { OrderStatus, PaymentMethod, UserTypes } from "../enums.js";
import Address from "./Address.js";
import Order from "./Order.js";
import User from "./User.js";

export default interface Member extends User {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  orders: Order[];
  shippingAddresses: Address[];

  getUserType(): UserTypes;
  addShippingAddress(address: Address): void;
  resetPassword(): void;
  proceedToBuy(): void;
  selectShippingAddress(): Address;
  selectPaymentMethod(): PaymentMethod;
  getMyOrders(): Order[];
  getOrderStatus(orderId: string): OrderStatus;
}
