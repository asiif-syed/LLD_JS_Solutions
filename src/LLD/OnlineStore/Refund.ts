import { PaymentMethod, RefundStatus } from "./enums.js";
import RefundInterface from "./Interfaces/Refund.js";
export default class Refund implements RefundInterface {
  id: string;
  amount: number;
  refundStatus: RefundStatus;
  paymentMethod: PaymentMethod;

  constructor(amount: number, paymentMethod: PaymentMethod) {
    this.id = "GeneratedRefundID";
    this.amount = amount;
    this.paymentMethod = paymentMethod;
    this.refundStatus = RefundStatus.IN_PROGRESS;
  }
  updateRefundStatus(newStatus: RefundStatus): RefundStatus {
    this.refundStatus = newStatus;
    return newStatus;
  }
}
