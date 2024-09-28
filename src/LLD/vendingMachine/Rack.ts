export default class Rack {
  #rackCode: string;
  #productName: string;
  #quantity: number;
  #price: number;

  constructor(code: string, name: string, quantity: number, price: number) {
    this.#rackCode = code;
    this.#productName = name;
    this.#quantity = quantity;
    this.#price = price;
  }

  get rackCode(): string {
    return this.#rackCode;
  }
  get productName(): string {
    return this.#productName;
  }
  get price(): number {
    return this.#price;
  }

  get quantity(): number {
    return this.#quantity;
  }

  public dispenseProduct(): void {
    if (this.#quantity > 0) {
      this.#quantity--;
    }
  }

  public isProductAvailable() : boolean {
    return this.quantity > 0;
  }
}
