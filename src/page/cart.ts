import { expect, Page } from "@playwright/test";
import { saucedemoCartLocator } from "../element/cart";

export class accessCartPage {
  readonly page: Page;
  readonly cartLocator: saucedemoCartLocator;
  readonly websiteURL: string;

  constructor(page: Page, websiteURL: string) {
    this.page = page;
    this.cartLocator = new saucedemoCartLocator(page);
    this.websiteURL = websiteURL;
  }

  async accessCartPage(websiteURL: string) {
    await this.cartLocator.access(websiteURL);
  }

  async clickInCheckout() {
    await expect(this.cartLocator.checkout()).toBeVisible();
    await this.cartLocator.checkout().click();
  }

  async clickInRemove(product: string) {
    await expect(this.cartLocator.removeProduct(product)).toBeVisible();
    await this.cartLocator.removeProduct(product).click();
  }

  async clickInContinueShopping() {
    await expect(this.cartLocator.continueShopping()).toBeVisible();
    await this.cartLocator.continueShopping().click();
  }
}
