import Address from "./Address";
import { UserTypes } from "./enums";

export default abstract class User {
  id: string;
  firstName: string;
  lastName: string;
  address: Address;
  userType: UserTypes;
  email: string;

  constructor(
    firstName: string,
    lastName: string,
    address: Address,
    userType: UserTypes,
    email: string
  ) {
    // Generate user id
    this.id = "Random user id";
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.userType = userType;
    this.email = email;
  }

  getName(): string {
    return `${this.firstName} ${this.lastName}`;
  }

  getUserType(): UserTypes {
    return this.userType;
  }

  getAddress(): string {
    return this.address.getAddress();
  }

  getEmail(): string {
    return this.email;
  }
}
