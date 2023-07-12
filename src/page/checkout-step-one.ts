import { expect, Page } from "@playwright/test";
import { saucedemoCheckoutOneLocator } from "../element/checkout-step-one";

export class accessCheckoutOnePage {
  readonly page: Page;
  readonly checkoutOneLocator: saucedemoCheckoutOneLocator;
  readonly websiteURL: string;

  constructor(page: Page, websiteURL: string) {
    this.page = page;
    this.checkoutOneLocator = new saucedemoCheckoutOneLocator(page);
    this.websiteURL = websiteURL;
  }

  async accessCartPage(websiteURL: string) {
    await this.checkoutOneLocator.access(websiteURL);
  }

  async clickInContinue() {
    await expect(this.checkoutOneLocator.continue()).toBeVisible();
    await this.checkoutOneLocator.continue().click();
  }

  async clickInCancel() {
    await expect(this.checkoutOneLocator.cancel()).toBeVisible();
    await this.checkoutOneLocator.cancel().click();
  }

  async fillForm(firstName: string, lastName: string, postalCode: string) {
    await expect(this.checkoutOneLocator.firstName()).toBeVisible();
    await expect(this.checkoutOneLocator.lastName()).toBeVisible();
    await expect(this.checkoutOneLocator.postalCode()).toBeVisible();

    await this.checkoutOneLocator.firstName().fill(firstName);
    await this.checkoutOneLocator.lastName().fill(lastName);
    await this.checkoutOneLocator.postalCode().fill(postalCode);
  }
}
