import Address from "./Address.js";
import Product from "./Product.js";

export default interface Seller {
  company: string;
  gst: string;
  email: string;
  address: Address;
  password: string;
  products: Product[];

  addProduct(product: Product): Product;
  resetPassword(newPassword: string): void;
}
