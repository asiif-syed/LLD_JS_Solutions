import { PaymentMethod, RefundStatus } from "../enums.js";

export default interface Refund {
  id: string;
  amount: number;
  refundStatus: RefundStatus;
  paymentMethod: PaymentMethod;

  updateRefundStatus(newStatus: RefundStatus): RefundStatus;
}
