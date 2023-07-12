import { Locator, Page } from "@playwright/test";

export class saucedemoCheckoutCompleteLocator {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  access(websiteURL: string) {
    return this.page.goto(`${websiteURL}cart.html`);
  }

  backHome(): Locator {
    return this.page.getByRole("button", { name: "Back Home" });
  }

  completeHeader(): Locator {
    return this.page
      .locator("#checkout_complete_container")
      .locator(".complete-header");
  }

  completeText(): Locator {
    return this.page
      .locator("#checkout_complete_container")
      .locator(".complete-text");
  }
}
