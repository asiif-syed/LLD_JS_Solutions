import IdleState from "./IdleState.js"
import Rack from "./Rack.js"
import VendingMachineState from "./VendingMachineState.js"



export default class VendingMachine {
  private state: VendingMachineState;
  private inventory: Rack[];
  private selectedProduct: Rack | null;
  private insertedAmount: number;

  constructor() {
    this.selectedProduct = null;
    this.insertedAmount = 0;
    this.inventory = this.initializeInventory();
    this.state = new IdleState(this);
  }

  //   Filling up inventory
  private initializeInventory() {
    return [
      new Rack("R1", "Soda", 5, 10),
      new Rack("R2", "Chips", 3, 10),
      new Rack("R3", "Candy", 2, 10),
      new Rack("R4", "Juice", 4, 10),
      new Rack("R5", "Water", 10, 10),
      new Rack("R6", "Gum", 0, 10), // Out of stock
      new Rack("R7", "Cookies", 5, 10),
      new Rack("R8", "Chocolate", 2, 10),
      new Rack("R9", "Energy Drink", 6, 10),
      new Rack("R10", "Tea", 1, 10),
    ];
  }

  public setState(state: VendingMachineState): void {
    this.state = state;
  }

  public setMoneyInserted(amount: number): void {
    this.insertedAmount += amount;
  }

  public setSelectedProduct(code: Rack | null): void {
    this.selectedProduct = code;
  }
  public refundMoney(): void {
    this.insertedAmount = 0;
  }

  public getMoneyInserted(): number {
    return this.insertedAmount;
  }

  public getInventory(): Rack[] {
    return this.inventory;
  }

  public getSelectedProduct(): Rack | null {
    if (!this.selectedProduct) {
      return null;
    }
    return this.selectedProduct;
  }

  public insertMoney(amount: number) {
    this.state.insertMoney(amount);
  }

  public selectProduct(code: string): void {
    this.state.selectProduct(code);
  }

  public display(message: string | null): void {
    this.state.display(message);
  }

  public cancel(): void {
    this.state.cancel();
  }

  public dispense(): void {
    this.state.dispense();
  }
}
