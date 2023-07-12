export class user {
  readonly username: string;
  readonly password: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly zipCode: string;

  constructor(
    username: string | undefined,
    password: string | undefined,
    firstName: string,
    lastName: string,
  ) {
    if (username == undefined) {
      throw new Error("customer: A variável username não foi definida");
    }

    if (password == undefined) {
      throw new Error("customer: A variável password não foi definida");
    }

    if (firstName.length == 0) {
      throw new Error(
        "customer: A variável firstName deve ter ao menos um caractere",
      );
    }

    if (lastName.length == 0) {
      throw new Error(
        "customer: A variável password deve ter ao menos um caractere",
      );
    }

    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.zipCode = getRandomZipCode();
  }
}

function getRandomZipCode(): string {
  let randomNumber: number;
  const a = 100000000;

  do {
    randomNumber = parseInt((Math.random() * a).toPrecision(8), 10);
  } while (randomNumber.toString().length < 8);

  return randomNumber.toString();
}
