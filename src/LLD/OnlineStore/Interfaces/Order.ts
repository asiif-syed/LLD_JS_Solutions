import { OrderStatus, PaymentMethod } from "../enums.js";
import Invoice from "./Invoice.js";
import Address from "./Address.js";
import { CartItem } from "./Cart.js";
import Refund from "./Refund.js";
import Shipping from "./Shipping.js";

export default interface Order {
  id: string;
  status: OrderStatus;
  address: Address;
  shipping: Shipping;
  refund: Refund | null;
  invoice: Invoice;
  paymentMethod: PaymentMethod;

  shipOrder(): void;
  trackOrder(): OrderStatus;
  cancelOrder(): Refund;
}
