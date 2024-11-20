export default class Address {
  private streetNumber: string | null;
  private streetName: string | null;
  private unit: string | null;
  private building: string;
  private city: string;
  private state: string;
  private country: string;
  private postalcode: string;

  constructor(address: Address) {
    const {
      streetNumber,
      streetName,
      unit,
      building,
      city,
      state,
      country,
      postalcode,
    } = address;
    this.streetNumber = streetNumber;
    this.streetName = streetName;
    this.unit = unit;
    this.building = building;
    this.city = city;
    this.state = state;
    this.country = country;
    this.postalcode = postalcode;
  }

  getAddress(): string {
    let address = "";
    if (this.streetNumber) {
      address = this.streetNumber;
    }
    if (this.streetName) {
      address = address + " " + this.streetName;
    }
    if (this.unit) {
      address = address + " " + this.unit;
    }
    address = `${address} ${this.building} ${this.city} ${this.state} ${this.country} ${this.postalcode}`;
    return address;
  }
}
