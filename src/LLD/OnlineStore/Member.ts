import { OrderStatus, PaymentMethod, UserTypes } from "./enums.js";
import Address from "./Interfaces/Address.js";
import Cart from "./Interfaces/Cart.js";
import MemberInterface from "./Interfaces/Member.js";
import Order from "./Interfaces/Order.js";
import ShoppingCart from "./ShoppingCart.js";

export default class Member implements MemberInterface {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  userType: UserTypes;
  shoppingCart: Cart;
  orders: Order[];
  shippingAddresses: Address[];

  constructor(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ) {
    this.id = "GeneratedGuestId";
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    const cart = new ShoppingCart();
    this.userType = UserTypes.MEMBER;
    this.orders = [];
    this.shippingAddresses = [];
  }

  getUserType(): UserTypes {
    return this.userType;
  }

  addShippingAddress(address: Address): void {
    this.shippingAddresses.push(address);
  }
  resetPassword(): void {
    // Reset user password
  }
  proceedToBuy(): void {
    // See if the address is selected
    const address = this.selectShippingAddress();
    const paymentMethod = this.selectPaymentMethod();
    // Checkout
    this.shoppingCart.checkout(paymentMethod, address);
  }

  selectShippingAddress(): Address {
    // Option to add address and select address
    return this.shippingAddresses[0];
  }
  selectPaymentMethod(): PaymentMethod {
    // Option to select payment method
    return PaymentMethod.CARD;
  }

  getMyOrders(): Order[] {
    return this.orders;
  }

  getOrderStatus(orderId: string): OrderStatus {
    const selectedOrder = this.orders.find((o) => o.id === orderId);
    return selectedOrder.trackOrder();
  }
}
