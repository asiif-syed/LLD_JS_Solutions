import VendingMachine from "./LLD/vendingMachine/VendingMachine.js";

function runVendingMachine() {
  const vendingMachine = new VendingMachine();
  vendingMachine.insertMoney(10);
  vendingMachine.selectProduct("R5");
  vendingMachine.cancel();
}

runVendingMachine()
