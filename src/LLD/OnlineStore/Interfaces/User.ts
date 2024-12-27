import Cart from "./Cart.js";
import { UserTypes } from "../enums.js";

export default interface User {
  id: string;
  userType: UserTypes;
  shoppingCart: Cart;

  getUserType(): UserTypes;
}
