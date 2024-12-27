import { OrderStatus, PaymentMethod } from "./enums.js";
import Address from "./Interfaces/Address.js";
import Invoice from "./Interfaces/Invoice.js";
import OrderInterface from "./Interfaces/Order.js";
import Shipping from "./Interfaces/Shipping.js";
import Refund from "./Refund.js";

export default class Order implements OrderInterface {
  id: string;
  status: OrderStatus;
  address: Address;
  shipping: Shipping;
  refund: Refund | null;
  invoice: Invoice;
  orderDate: Date;
  paymentMethod: PaymentMethod;

  constructor(
    address: Address,
    invoice: Invoice,
    paymentMethod: PaymentMethod
  ) {
    this.address = address;
    this.refund = null;
    this.invoice = invoice;
    this.paymentMethod = paymentMethod;
    this.orderDate = new Date();
  }
  shipOrder(): void {
    //TODO -> Ship order
  }
  trackOrder(): OrderStatus {
    return this.status;
  }
  cancelOrder(): Refund {
    if (this.status === OrderStatus.ORDRED) {
      this.status = OrderStatus.CANCELLED;
      console.log("Your order has been cancelled!");
      const refund = new Refund(this.invoice.totalValue, this.paymentMethod);
      return refund;
    } else {
      console.log(
        `Order is already ${this.status
          .toLocaleString()
          .toLowerCase()}, cannot cancel now!`
      );
    }
  }
}
