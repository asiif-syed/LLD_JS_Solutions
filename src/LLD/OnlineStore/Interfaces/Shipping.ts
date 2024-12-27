import { ShippingStatus } from "../enums.js";
import Address from "./Address.js";

export default interface Shipping {
  id: string;
  address: Address;
  status: ShippingStatus;
  deliveryBy: string;
  shippingDate: Date;
  updatedOn: Date;

  updateStatus(newStatus: ShippingStatus): void;
  getShippingStatus(): ShippingStatus;
}
