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
    await expect(this.checkoutOneLocator.getContinue()).toBeVisible();
    await this.checkoutOneLocator.getContinue().click();
  }

  async clickInCancel() {
    await expect(this.checkoutOneLocator.getCancel()).toBeVisible();
    await this.checkoutOneLocator.getCancel().click();
  }

  async fillForm(firstName: string, lastName: string, postalCode: string) {
    await expect(this.checkoutOneLocator.getFirstName()).toBeVisible();
    await expect(this.checkoutOneLocator.getLastName()).toBeVisible();
    await expect(this.checkoutOneLocator.getPostalCode()).toBeVisible();

    await this.checkoutOneLocator.getFirstName().fill(firstName);
    await this.checkoutOneLocator.getLastName().fill(lastName);
    await this.checkoutOneLocator.getPostalCode().fill(postalCode);
  }
}
