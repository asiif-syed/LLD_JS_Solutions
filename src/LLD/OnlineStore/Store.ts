import Member from "./Interfaces/Member.js";
import Product from "./Interfaces/Product.js";
import Seller from "./Interfaces/Seller.js";
import Search from "./Search.js";

export default class Store {
  id: string;
  name: string;
  search: Search;
  products: Product[];

  constructor() {
    this.id = "store_id";
    this.name = "My Coffee Store";
    this.search = new Search();
    this.products = [];
  }

  addProduct(product: Product, seller: Seller) {
    seller.addProduct(product);
    this.products.push(product);
  }
  searchByName(name: string) {
    return this.search.searchByName(this.products, name);
  }
  searchByCategory(name: string) {
    return this.search.searchByCategory(this.products, name);
  }
}
