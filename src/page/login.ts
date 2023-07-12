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
    await this.loginLocator.saucedemo(this.websiteURL);
  }

  async login(username: string, password: string) {
    await expect(this.loginLocator.userNameTextBox()).toBeVisible();
    await this.loginLocator.userNameTextBox().fill(username);

    await expect(this.loginLocator.passwordTextBox()).toBeVisible();
    await this.loginLocator.passwordTextBox().fill(password);

    await expect(this.loginLocator.loginButton()).toBeVisible();
    await this.loginLocator.loginButton().click();
  }

}
