import { expect, Page } from "@playwright/test";
import { saucedemoInventoryLocator } from "../element/inventory";

export class accessInventoryPage {
  readonly page: Page;
  readonly inventoryLocator: saucedemoInventoryLocator;
  readonly websiteURL: string;

  constructor(page: Page, websiteURL: string) {
    this.page = page;
    this.inventoryLocator = new saucedemoInventoryLocator(page);
    this.websiteURL = websiteURL;
  }

  async accessInvetoryPage(websiteURL: string) {
    await this.inventoryLocator.access(websiteURL);
  }

  async clickInCart() {
    await expect(this.inventoryLocator.cart()).toBeVisible();
    await this.inventoryLocator.cart().click();
  }

  async selectProduct(product: string) {
    await expect(this.inventoryLocator.product(product)).toBeVisible();
    await this.inventoryLocator.product(product).click();
    await expect(
      this.inventoryLocator.buttonChangeToRemove(product)
    ).toHaveText("Remove");
  }
}
