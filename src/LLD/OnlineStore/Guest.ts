import { UserTypes } from "./enums.js";
import Cart from "./Interfaces/Cart.js";
import GuestInterface from "./Interfaces/Guest.js";
import ShoppingCart from "./ShoppingCart.js";

export default class Guest implements GuestInterface {
  id: string;
  userType: UserTypes;
  shoppingCart: Cart;

  constructor() {
    this.id = "GeneratedGuestId";
    const cart = new ShoppingCart();
    this.userType = UserTypes.GUEST;
  }

  getUserType(): UserTypes {
    return this.userType;
  }
  
  login(username: string, password: string): void {
    // check user name and password and login
  }
  register(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): void {
    // Create user
  }
}
