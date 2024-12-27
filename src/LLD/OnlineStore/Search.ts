import Product from "./Interfaces/Product.js";
import SearchInterface from "./Interfaces/Search.js";

export default class Search implements SearchInterface {
  searchByName(products: Product[], name: string): Product[] {
    return products.filter((p) =>
      p.name.toLowerCase().includes(name.toLowerCase())
    );
  }
  searchByCategory(products: Product[], category: string): Product[] {
    return products.filter((p) =>
      p.category.toLowerCase().includes(category.toLowerCase())
    );
  }
}
