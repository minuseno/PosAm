import {test, type Page, expect} from '@playwright/test';
import {CookiesPage} from "../../pages/cookies-page";

let page: Page
let cookiePage: CookiesPage;


test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  cookiePage = new CookiesPage(page);
  await page.goto('/');
})

test.describe('Cookies dialogove okno', () => {
  test("Skontroluj funkcionalitu cookies dialogu", async () => {
    test.info().annotations.push({
      type: 'Ciel',
      description: 'Skontrolovat funkcnost cookies dialogoveho okna',
    })
    await test.step('Zobrazenie cookies dialogoveho okna', async () => {
      await cookiePage.dialogWindow.isVisible();
      await test.step('Skontroluj zobrazenie textu v dialogovom okne', async () => {
        await expect(cookiePage.dialogWindowText).toHaveText('Môžeme, prosím, používať cookies?');
      })
    })
    await test.step('Zobrazenie tlacidla "Zobrazit detaily"', async () => {
      await expect(cookiePage.zobrazitDetaily).toBeVisible();
    })
    await test.step('Kliknutie na tlacidlo "Zobrazit detaily"', async () => {
      await cookiePage.zobrazitDetaily.click();
    })
    await test.step('Skontroluj zobrazenie okna "Sprava cookies"', async () => {
      await expect(cookiePage.spravaCookies).toBeVisible();
    })
    await test.step('Zavri cookies dialogove okno', async () => {
      await cookiePage.povolitVsetko.click();
      await expect(cookiePage.dialogWindow).not.toBeVisible();
    })
  })

});


