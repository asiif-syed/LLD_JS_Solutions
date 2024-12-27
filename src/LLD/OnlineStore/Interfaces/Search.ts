import Product from "./Product.js";

export default interface Search {
  searchByName(products: Product[], name: string): Product[];
  searchByCategory(products: Product[], category: string): Product[];
}
