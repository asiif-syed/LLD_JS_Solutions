import MoneyInsertedState from "./MoneyInsertedState.js"
import VendingMachine from "./VendingMachine.js"
import VendingMachineState from "./VendingMachineState.js"

export default class IdleState implements VendingMachineState {
  private vendingMachine: VendingMachine;

  constructor(vendingMachine: VendingMachine) {
    this.vendingMachine = vendingMachine;
  }

  insertMoney(amount: number): void {
    this.vendingMachine.setMoneyInserted(amount);
    this.vendingMachine.display(
      `Amount available: ${this.vendingMachine.getMoneyInserted()}`
    );
    this.vendingMachine.setState(new MoneyInsertedState(this.vendingMachine));
  }
  selectProduct(code: string): void {
    this.vendingMachine.display("Please insert money first");
  }
  dispense(): void {
    this.vendingMachine.display("Please insert money first");
  }
  cancel(): void {
    this.vendingMachine.display("No trasaction to cancel");
  }
  display(message: string | null): void {
    message = message ?? "Insert money to purchase a product!";
    console.log(message);
  }
}
