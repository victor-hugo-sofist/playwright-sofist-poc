export class website {
  readonly home: string;

  constructor(home: string | undefined) {
    if (home == undefined) {
      throw new Error("website: A variável home não foi definida");
    }
    this.home = home;
  }

  homepage(): string {
    return this.home;
  }
}
