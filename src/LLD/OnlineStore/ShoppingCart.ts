import Constants from "./Constants.js";
import { PaymentMethod } from "./enums.js";
import Address from "./Interfaces/Address.js";
import CartInterface, { CartItem } from "./Interfaces/Cart.js";
import Order from "./Order.js";
import Invoice from "./Invoice.js";

export default class ShoppingCart implements CartInterface {
  cartItems: CartItem[];
  totalValue: number;
  constructor() {
    this.cartItems = [];
    this.totalValue = 0;
  }
  addItem(item: CartItem): CartItem {
    this.cartItems.push(item);
    this.totalValue += item.price * item.quantity;
    return item;
  }
  incrementQuanity(productId: string): void {
    const selectedProduct = this.cartItems.find(
      (i) => i.productId === productId
    );
    selectedProduct.quantity++;
  }
  decrementQuanity(productId: string): void {
    const selectedProduct = this.cartItems.find(
      (i) => i.productId === productId
    );
    selectedProduct.quantity--;
  }
  removeItem(productId: string): void {
    const selectedProductIdx = this.cartItems.findIndex(
      (i) => i.productId === productId
    );
    if (selectedProductIdx > -1) {
      this.cartItems.splice(selectedProductIdx, 1);
    }
  }
  checkout(paymentMethod: PaymentMethod, shippingAddress: Address): Order {
    const invoice = this.createInvoice();
    this.processPayment(paymentMethod, invoice);
    const order = new Order(shippingAddress, invoice, paymentMethod);
    this.cartItems = [];
    this.totalValue = 0;
    return order;
  }
  processPayment(paymentMethod: PaymentMethod, invoice: Invoice) {
    // Process payment
  }
  createInvoice(): Invoice {
    const tax = (this.totalValue * Constants.TAX_PERCENTAGE) / 100;
    const deliveryFee = Constants.DELIVERY_FEE;
    return new Invoice(this.cartItems, deliveryFee, tax);
  }
}
