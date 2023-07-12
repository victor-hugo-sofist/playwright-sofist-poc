import { Locator, Page } from "@playwright/test";

export class saucedemoCheckoutTwoLocator {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  access(websiteURL: string) {
    return this.page.goto(`${websiteURL}checkout-step-two.html`);
  }

  finish(): Locator {
    return this.page.getByRole("button", { name: "Finish" });
  }

  cancel(): Locator {
    return this.page.getByRole("button", { name: "Go back Cancel" });
  }
}
