export default interface VendingMachineState {
    insertMoney(amount: number) : void;
    selectProduct(code: string) : void;
    dispense() : void;
    cancel() : void;
    display(message: string | null) : void;
}