import User from "./User.js";

export default interface Guest extends User {
  login(username: string, password: string): void;
  register(
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): void;
}
