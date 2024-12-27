export default interface Address {
  streetNumber: string | null;
  streetName: string | null;
  unit: string | null;
  building: string;
  city: string;
  state: string;
  country: string;
  postalcode: string;
}
