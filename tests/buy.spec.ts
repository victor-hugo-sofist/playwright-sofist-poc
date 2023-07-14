import { test, expect } from "@playwright/test";
import { accessLoginPage } from "../src/page/login";
import { accessInventoryPage } from "../src/page/inventory";
import { accessCartPage } from "../src/page/cart";
import { accessCheckoutOnePage } from "../src/page/checkout-step-one";
import { accessCheckoutTwoPage } from "../src/page/checkout-step-two";
import { accessCheckoutCompletePage } from "../src/page/checkout-complete";
import "dotenv/config";
import { website } from "../src/utils/website";
import { user } from "../src/utils/user";
import { person } from "../src/fixture/person";
import { message } from "../src/fixture/messages";
import { productList } from "../src/fixture/product-list";
import { selectARandomProduct } from "../src/utils/product";

test.describe("Testes de compra na página Saucedemo", () => {
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

  test("o usuário padrão deve conseguir fazer uma compra com sucesso", async ({
    page,
  }) => {
    const customer = new user(
      process.env.USERNAME_STANDART_USER,
      process.env.PASSWORD,
      person.firstName.woman,
      person.lastName,
    );

    await test.step("Passo 2: Inserir o Username e a Password", async () => {
      await saucedemoLoginPage.login(customer.username, customer.password);
    });

    await test.step(`Validação 1: A URL deve mudar para: ${websiteURL}inventory.html`, async () => {
      await expect(page).toHaveURL(`${websiteURL}inventory.html`);
    });

    await test.step(`Validação 2: A URL deve mudar para: ${websiteURL}inventory.html`, async () => {
      await expect(page).toHaveURL(`${websiteURL}inventory.html`);
    });

    await test.step("Passo 3: Escolher um produto aleatóriamente", async () => {
      saucedemoInventoryPage = new accessInventoryPage(page, websiteURL);
      await saucedemoInventoryPage.selectProduct(
        selectARandomProduct(productList),
      );
      await saucedemoInventoryPage.clickInCart();
    });

    await test.step("Passo 4: No carrinho: Ir para checkout", async () => {
      saucedemoCartPage = new accessCartPage(page, websiteURL);
      await saucedemoCartPage.clickInCheckout();
    });

    await test.step("Passo 5: Na primeira página de checkout: Preencher os dados", async () => {
      saucedemoCheckoutOnePage = new accessCheckoutOnePage(page, websiteURL);
      await saucedemoCheckoutOnePage.fillForm(
        customer.firstName,
        customer.lastName,
        customer.zipCode,
      );
      await saucedemoCheckoutOnePage.clickInContinue();
    });

    await test.step("Passo 6: Na segunda página de checkout: Clicar em finalizar", async () => {
      saucedemoCheckoutTwoPage = new accessCheckoutTwoPage(page, websiteURL);
      await saucedemoCheckoutTwoPage.clickInFinish();
    });

    await test.step("Passo 7: Na terceira página de checkout: Clicar em finalizar", async () => {
      saucedemoCheckoutCompletePage = new accessCheckoutCompletePage(
        page,
        websiteURL,
      );
      const header = await saucedemoCheckoutCompletePage.getHeader();
      const completeText =
        await saucedemoCheckoutCompletePage.getCompleteText();
      expect(header).toEqual(message.buy.thanksForBuy);
      expect(completeText).toEqual(message.buy.ordersDispatched);
    });
  });
});
