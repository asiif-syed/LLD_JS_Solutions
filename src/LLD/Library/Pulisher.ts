import Address from "./Address";

export default class Publisher {
  name: string;
  address: Address;
  email: string;

  constructor(name: string, address: Address, email: string) {
    this.name = name;
    this.address = address;
    this.email = email;
  }
}
