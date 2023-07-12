import { Locator, Page } from "@playwright/test";

export class saucedemoCheckoutOneLocator {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  access(websiteURL: string) {
    return this.page.goto(`${websiteURL}checkout-step-one.html`);
  }

  getContinue(): Locator {
    return this.page.getByRole("button", { name: "Continue" });
  }

  getCancel(): Locator {
    return this.page.getByRole("button", { name: "Go back Cancel" });
  }

  getFirstName(): Locator {
    return this.page.getByRole("textbox", { name: "First Name" });
  }

  getLastName(): Locator {
    return this.page.getByRole("textbox", { name: "Last Name" });
  }

  getPostalCode(): Locator {
    return this.page.getByRole("textbox", { name: "Zip/Postal Code" });
  }
}
