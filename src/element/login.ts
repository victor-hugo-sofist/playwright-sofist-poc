import { Locator, Page } from "@playwright/test";

export class saucedemoLoginLocator {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  saucedemo(websiteURL: string) {
    return this.page.goto(websiteURL);
  }

  userNameTextBox(): Locator {
    return this.page.getByRole("textbox", { name: "Username" });
  }

  passwordTextBox(): Locator {
    return this.page.getByRole("textbox", { name: "Password" });
  }

  loginButton(): Locator {
    return this.page.getByRole("button", { name: "Login" });
  }
}
