import Address from "./Interfaces/Address.js";
import Product from "./Interfaces/Product.js";
import SellerInterface from "./Interfaces/Seller.js";

export default class Seller implements SellerInterface {
  company: string;
  gst: string;
  email: string;
  address: Address;
  password: string;
  products: Product[];

  constructor(
    company: string,
    gst: string,
    email: string,
    password: string,
    address: Address
  ) {
    this.company = company;
    this.gst = gst;
    this.email = email;
    this.password = password;
    this.address = address;
    this.products = [];
  }
  addProduct(product: Product): Product {
    this.products.push(product);
    return product;
  }
  resetPassword(newPassword: string): void {
    // Save encrypted password to db
    this.password = newPassword;
  }
}
