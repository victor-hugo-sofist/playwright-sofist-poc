import { Locator, Page } from "@playwright/test";

export class saucedemoLoginLocator {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  accessSaucedemo(websiteURL: string) {
    return this.page.goto(websiteURL);
  }

  getUserNameTextBox(): Locator {
    return this.page.getByRole("textbox", { name: "Username" });
  }

  getPasswordTextBox(): Locator {
    return this.page.getByRole("textbox", { name: "Password" });
  }

  getLoginButton(): Locator {
    return this.page.getByRole("button", { name: "Login" });
  }
}
