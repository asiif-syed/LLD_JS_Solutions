import IdleState from "./IdleState.js"
import VendingMachine from "./VendingMachine.js"
import VendingMachineState from "./VendingMachineState.js"


export default class DispenseProductState implements VendingMachineState {
  private vendingMachine: VendingMachine;

  constructor(vendingMachine: VendingMachine) {
    this.vendingMachine = vendingMachine;
  }

  insertMoney(amount: number): void {
    this.vendingMachine.display(
      "Cannot insert money now, dispensing in process!"
    );
  }
  selectProduct(code: string): void {
    this.vendingMachine.display(
      "Cannot select products now, dispensing in process!"
    );
  }
  dispense(): void {
    const selectedProduct = this.vendingMachine.getSelectedProduct();
    this.vendingMachine.display(
      `Dispensing product, ${selectedProduct?.productName}`
    );
    setTimeout(() => {
      this.vendingMachine.display("Please collect your product.");
      selectedProduct?.dispenseProduct();
      this.vendingMachine.setState(new IdleState(this.vendingMachine));
    }, 2000);
  }
  cancel(): void {
    this.vendingMachine.display("Cannot cancel now, dispensing in process!");
  }
  display(message: string | null): void {
    message = message ?? "Select a product code!";
    console.log(message);
  }
}
