import { Locator, Page } from "@playwright/test";

export class saucedemoCartLocator {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  access(websiteURL: string) {
    return this.page.goto(`${websiteURL}cart.html`);
  }

  checkout(): Locator {
    return this.page.getByRole("button", { name: "Checkout" });
  }

  continueShopping(): Locator {
    return this.page.getByRole("button", { name: "Go back Continue Shopping" });
  }

  removeProduct(product: string): Locator {
    return this.page
      .locator(".cart_item")
      .filter({ hasText: product })
      .getByRole("button", { name: "Remove" });
  }
}
