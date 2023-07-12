import { Locator, Page } from "@playwright/test";

export class saucedemoCheckoutCompleteLocator {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  access(websiteURL: string) {
    return this.page.goto(`${websiteURL}cart.html`);
  }

  getBackHome(): Locator {
    return this.page.getByRole("button", { name: "Back Home" });
  }
}
