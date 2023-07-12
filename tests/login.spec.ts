import { test, expect } from "@playwright/test";
import { accessLoginPage } from "../src/page/login.js";
import "dotenv/config";
import { website } from "../src/utils/website.js";
import { user } from "../src/utils/user.js";
import { person } from "../src/fixture/person.js";

test.describe("Testes de login na página Saucedemo", () => {
  const websiteURL = new website(process.env.URL).homepage();
  let saucedemoLoginPage: accessLoginPage;

  test.beforeEach(async ({ page }) => {
    await test.step(`Passo 1: Navegar para a página: ${websiteURL}`, async () => {
      saucedemoLoginPage = new accessLoginPage(page, websiteURL);
      await saucedemoLoginPage.accessPage();
    });
  });

  test("o usuário padrão deve fazer login com sucesso", async ({ page }) => {
    await test.step("Passo 2: Inserir o Username e a Password", async () => {
      const customer = new user(
        process.env.USERNAME_STANDART_USER,
        process.env.PASSWORD,
        person.firstName.woman,
        person.lastName,
      );
      await saucedemoLoginPage.login(customer.username, customer.password);
    });

    await test.step(`Validação 1: A URL deve mudar para: ${websiteURL}inventory.html`, async () => {
      await expect(page).toHaveURL(`${websiteURL}inventory.html`);
    });

    await test.step("Validação 2: Devemos entrar na página de Produtos", async () => {
      await expect(page.getByText("Products")).toHaveText("Products");
    });
  });

  test("o usuário com problema deve fazer login com sucesso", async ({
    page,
  }) => {
    await test.step("Passo 2: Inserir o Username e a Password", async () => {
      const customer = new user(
        process.env.USERNAME_PROBLEM_USER,
        process.env.PASSWORD,
        person.firstName.woman,
        person.lastName,
      );
      await saucedemoLoginPage.login(customer.username, customer.password);
    });

    await test.step(`Validação 1: A URL deve mudar para: ${websiteURL}inventory.html`, async () => {
      await expect(page).toHaveURL(`${websiteURL}inventory.html`);
    });

    await test.step("Validação 2: Devemos entrar na página de Produtos", async () => {
      await expect(page.getByText("Products")).toHaveText("Products");
    });
  });
});
