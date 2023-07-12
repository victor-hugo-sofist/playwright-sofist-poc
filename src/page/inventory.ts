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
    await expect(this.inventoryLocator.getCart()).toBeVisible();
    await this.inventoryLocator.getCart().click();
  }

  async selectProduct(product: string) {
    await expect(this.inventoryLocator.getProduct(product)).toBeVisible();
    await this.inventoryLocator.getProduct(product).click();
    await expect(
      this.inventoryLocator.buttonChangeToRemove(product)
    ).toHaveText("Remove");
  }
}
