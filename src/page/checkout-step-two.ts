import { expect, Page } from "@playwright/test";
import { saucedemoCheckoutTwoLocator } from "../element/checkout-step-two";

export class accessCheckoutTwoPage {
  readonly page: Page;
  readonly checkoutTwoLocator: saucedemoCheckoutTwoLocator;
  readonly websiteURL: string;

  constructor(page: Page, websiteURL: string) {
    this.page = page;
    this.checkoutTwoLocator = new saucedemoCheckoutTwoLocator(page);
    this.websiteURL = websiteURL;
  }

  async accessCartPage(websiteURL: string) {
    await this.checkoutTwoLocator.access(websiteURL);
  }

  async clickInFinish() {
    await expect(this.checkoutTwoLocator.finish()).toBeVisible();
    await this.checkoutTwoLocator.finish().click();
  }

  async clickInCancel() {
    await expect(this.checkoutTwoLocator.cancel()).toBeVisible();
    await this.checkoutTwoLocator.cancel().click();
  }
}
