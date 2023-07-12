import { expect, Page } from "@playwright/test";
import { saucedemoCheckoutCompleteLocator } from "../element/checkout-complete";

export class accessCheckoutCompletePage {
  readonly page: Page;
  readonly checkoutCompleteLocator: saucedemoCheckoutCompleteLocator;
  readonly websiteURL: string;

  constructor(page: Page, websiteURL: string) {
    this.page = page;
    this.checkoutCompleteLocator = new saucedemoCheckoutCompleteLocator(page);
    this.websiteURL = websiteURL;
  }

  async accessCartPage(websiteURL: string) {
    await this.checkoutCompleteLocator.access(websiteURL);
  }

  async goHome() {
    await expect(this.checkoutCompleteLocator.getBackHome()).toBeVisible();
    await this.checkoutCompleteLocator.getBackHome().click();
  }
}
