import { Locator, Page } from "@playwright/test";

export class saucedemoInventoryLocator {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  access(websiteURL: string) {
    return this.page.goto(`${websiteURL}inventory.html`);
  }

  cart() {
    return this.page.locator(".shopping_cart_container");
  }

  invetoryItemDescription(): Locator {
    return this.page.locator(".inventory_item_description");
  }

  product(product: string): Locator {
    return this.page
      .locator(".inventory_item")
      .filter({ hasText: product })
      .getByRole("button", { name: "Add to cart" });
  }

  buttonChangeToRemove(product: string): Locator {
    return this.page
      .locator(".inventory_item")
      .filter({ hasText: product })
      .getByRole("button", { name: "Remove" });
  }
}
