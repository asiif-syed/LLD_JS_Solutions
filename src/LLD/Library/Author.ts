export default class Author {
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  email: string;

  constructor(
    firstName: string,
    lastName: string,
    dateOfBirth: string,
    email: string
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.email = email;
  }
}
