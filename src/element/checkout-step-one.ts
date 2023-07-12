import { Locator, Page } from "@playwright/test";

export class saucedemoCheckoutOneLocator {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  access(websiteURL: string) {
    return this.page.goto(`${websiteURL}checkout-step-one.html`);
  }

  continue(): Locator {
    return this.page.getByRole("button", { name: "Continue" });
  }

  cancel(): Locator {
    return this.page.getByRole("button", { name: "Go back Cancel" });
  }

  firstName(): Locator {
    return this.page.getByRole("textbox", { name: "First Name" });
  }

  lastName(): Locator {
    return this.page.getByRole("textbox", { name: "Last Name" });
  }

  postalCode(): Locator {
    return this.page.getByRole("textbox", { name: "Zip/Postal Code" });
  }
}
