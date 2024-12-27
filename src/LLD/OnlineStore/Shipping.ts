import { ShippingStatus } from "./enums.js";
import Address from "./Interfaces/Address.js";
import ShippingInterface from "./Interfaces/Shipping.js";

export default class Shipping implements ShippingInterface {
  id: string;
  address: Address;
  status: ShippingStatus;
  deliveryBy: string;
  shippingDate: Date;
  updatedOn: Date;

  constructor(address: Address, deliveryBy: string) {
    this.address = address;
    this.deliveryBy = deliveryBy;
    this.shippingDate = new Date();
    this.updatedOn = null;
    this.status = ShippingStatus.IN_TRANSIT;
  }

  updateStatus(newStatus: ShippingStatus): void {
    this.status = newStatus;
    this.updatedOn = new Date();
  }
  getShippingStatus(): ShippingStatus {
    return this.status;
  }
}
