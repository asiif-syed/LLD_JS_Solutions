import DispenseProductState from "./DispenseProductState.js";
import IdleState from "./IdleState.js";
import VendingMachine from "./VendingMachine.js";
import VendingMachineState from "./VendingMachineState.js";

export default class MoneyInsertedState implements VendingMachineState {
  private vendingMachine: VendingMachine;
  private availableBalance: number;
  constructor(vendingMachine: VendingMachine) {
    this.vendingMachine = vendingMachine;
    this.availableBalance = vendingMachine.getMoneyInserted();
  }

  insertMoney(amount: number): void {
    this.vendingMachine.setMoneyInserted(amount);
    this.availableBalance += amount;
    this.vendingMachine.display(`Amount available: ${this.availableBalance}`);
    //   this.vendingMachine.setState(new )
  }
  selectProduct(code: string): void {
    const selectedProduct = this.vendingMachine
      .getInventory()
      .find((r) => r.rackCode === code);

    // Invalid product code case
    if (!selectedProduct) {
      this.display("Invalid product code!");
    } else if (selectedProduct.price > this.availableBalance) {
      // Insufficient balance
      const requiredAmount = selectedProduct.price - this.availableBalance;
      this.display(
        `Insufficient balance, you need to insert ${requiredAmount}`
      );
    } else if (!selectedProduct.isProductAvailable()) {
      // Product out of stock
      this.display("Product is out of stock, please select another product!");
    } else {
      // Dispense product
      this.vendingMachine.setSelectedProduct(selectedProduct);
      this.vendingMachine.setState(
        new DispenseProductState(this.vendingMachine)
      );
      this.vendingMachine.dispense()
    }
  }
  dispense(): void {
    this.vendingMachine.display("Please select the product first");
  }
  cancel(): void {
    this.vendingMachine.display(
      "Transaction is cancelled, refunding the amount!"
    );
    this.vendingMachine.refundMoney();
    this.vendingMachine.setState(new IdleState(this.vendingMachine));
  }
  display(message: string | null): void {
    message = message ?? "Select a product code!";
    console.log(message);
  }
}
