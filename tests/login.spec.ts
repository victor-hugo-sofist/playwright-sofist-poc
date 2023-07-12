import { test, expect } from "@playwright/test";
import { accessLoginPage } from "../src/page/login.js";
import { accessInventoryPage } from "../src/page/inventory.js";
import { accessCartPage } from "../src/page/cart.js";
import { accessCheckoutOnePage } from "../src/page/checkout-step-one.js";
import { accessCheckoutTwoPage } from "../src/page/checkout-step-two.js";
import { accessCheckoutCompletePage } from "../src/page/checkout-complete.js";
import 'dotenv/config'
import { website } from "../src/utils/website.js";
import { user } from "../src/utils/user.js";
import { person } from "../src/fixture/person.js";

test.describe("Testes de login na página Saucedemo", () => {

  const websiteURL = new website(process.env.URL).homepage();

  let saucedemoLoginPage: accessLoginPage;
  let saucedemoInventoryPage: accessInventoryPage;
  let saucedemoCartPage: accessCartPage;
  let saucedemoCheckoutOnePage: accessCheckoutOnePage;
  let saucedemoCheckoutTwoPage: accessCheckoutTwoPage;
  let saucedemoCheckoutCompletePage: accessCheckoutCompletePage;

  test.beforeEach(async ({ page }) => {
    await test.step(`Passo 1: Navegar para a página: ${websiteURL}`, async () => {
      saucedemoLoginPage = new accessLoginPage(page, websiteURL);
      await saucedemoLoginPage.accessPage();
    });
  });

  test("o usuário padrão deve fazer login com sucesso", async ({ page }) => {
    await test.step("Passo 2: Inserir o Username e a Password", async () => {
      const customer = new user (process.env.USERNAME_STANDART_USER,process.env.PASSWORD,person.firstName.woman,person.lastName);
      console.log(customer.username,customer.password)
      await saucedemoLoginPage.login(customer.username,customer.password);
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
      await saucedemoLoginPage.login("problem_user", "secret_sauce");
    });

    await test.step(`Validação 1: A URL deve mudar para: ${websiteURL}inventory.html`, async () => {
      await expect(page).toHaveURL(`${websiteURL}inventory.html`);
    });

    await test.step("Validação 2: Devemos entrar na página de Produtos", async () => {
      await expect(page.getByText("Products")).toHaveText("Products");
    });
  });

  test("o usuário padrão deve conseguir fazer uma compra com sucesso", async ({
    page,
  }) => {
    await test.step("Passo 2: Inserir o Username e a Password", async () => {
      await saucedemoLoginPage.login("standard_user", "secret_sauce");
    });

    await test.step(`Validação 1: A URL deve mudar para: ${websiteURL}inventory.html`, async () => {
      await expect(page).toHaveURL(`${websiteURL}inventory.html`);
    });

    await test.step(`Validação 2: A URL deve mudar para: ${websiteURL}inventory.html`, async () => {
      await expect(page).toHaveURL(`${websiteURL}inventory.html`);
    });

    await test.step("Passo 3: Escolher um produto aleatóriamente", async () => {
      saucedemoInventoryPage = new accessInventoryPage(page, websiteURL);
      const products = [
        "Sauce Labs Onesie",
        "Sauce Labs Backpack",
        "Sauce Labs Bike Light",
        "Sauce Labs Bolt T-Shirt",
        "Sauce Labs Fleece Jacket",
      ];
      const randonProduct: number = Math.ceil(Math.random() * 4);
      // await console.log(`comprando o item: ${products[randonProduct]}`);
      await saucedemoInventoryPage.selectProduct(products[randonProduct]);
      await saucedemoInventoryPage.clickInCart();
    });

    await test.step("Passo 4: No carrinho: Ir para checkout", async () => {
      saucedemoCartPage = new accessCartPage(page, websiteURL);
      await saucedemoCartPage.clickInCheckout();
    });

    await test.step("Passo 5: Na primeira página de checkout: Preencher os dados", async () => {
      saucedemoCheckoutOnePage = new accessCheckoutOnePage(page, websiteURL);
      await saucedemoCheckoutOnePage.fillForm("Thereza", "Izargui", "1236765");
      await saucedemoCheckoutOnePage.clickInContinue();
    });

    await test.step("Passo 6: Na segunda página de checkout: Clicar em finalizar", async () => {
      saucedemoCheckoutTwoPage = new accessCheckoutTwoPage(page, websiteURL);
      await saucedemoCheckoutTwoPage.clickInFinish();
    });

    await test.step("Passo 7: Na segunda página de checkout: Clicar em finalizar", async () => {
      saucedemoCheckoutCompletePage = new accessCheckoutCompletePage(
        page,
        websiteURL
      );
      await saucedemoCheckoutCompletePage.goHome();
      // await expect("abc").toEqual("bac");
    });
  });
});
