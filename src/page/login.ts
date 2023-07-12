import { expect, Page } from "@playwright/test";
import { saucedemoLoginLocator } from "../element/login";

export class accessLoginPage {
  readonly page: Page;
  readonly loginLocator: saucedemoLoginLocator;
  readonly websiteURL: string;

  constructor(page: Page, websiteURL: string) {
    this.page = page;
    this.loginLocator = new saucedemoLoginLocator(page);
    this.websiteURL = websiteURL;
  }

  async accessPage() {
    await this.loginLocator.accessSaucedemo(this.websiteURL);
  }

  async login(username: string, password: string) {
    await expect(this.loginLocator.getUserNameTextBox()).toBeVisible();
    await this.loginLocator.getUserNameTextBox().fill(username);

    await expect(this.loginLocator.getPasswordTextBox()).toBeVisible();
    await this.loginLocator.getPasswordTextBox().fill(password);

    await expect(this.loginLocator.getLoginButton()).toBeVisible();
    await this.loginLocator.getLoginButton().click();
  }

}
