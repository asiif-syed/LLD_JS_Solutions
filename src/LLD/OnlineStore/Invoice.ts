import { OrderStatus } from "./enums.js";
import Address from "./Interfaces/Address.js";
import { CartItem } from "./Interfaces/Cart.js";
import InvoiceInterface from "./Interfaces/Invoice.js";

export default class Invoice implements InvoiceInterface {
  id: string;
  products: CartItem[];
  tax: number;
  deliveryFee: number;
  totalValue: number;
  date: Date;

  constructor(products: CartItem[], deliveryFee: number, tax: number) {
    this.products = products;
    this.deliveryFee = deliveryFee;
    this.tax = this.tax;
    this.totalValue = deliveryFee + tax;
    for (let product of products) {
      this.totalValue += product.price * product.quantity;
    }
  }
}
