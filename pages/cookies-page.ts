import {Page} from "@playwright/test";
import {BasePage} from "./base-page";

export class CookiesPage extends BasePage {
 constructor(page:Page) {
     super(page);
     this.page = page
 }
 get dialogWindow(){
        return this.page.locator('div').filter({ hasText: 'Môžeme, prosím, používať cookies?' }).first()
 }
 get dialogWindowText() {
     return this.page.getByRole('heading', { name: 'Môžeme, prosím, používať' })
 }
 get zobrazitDetaily(){
     return this.page.getByRole('button', { name: 'Zobraziť detaily' })
 }
 get spravaCookies(){
     return this.page.getByRole('heading', { name: 'Správa cookies' })
 }
 get povolitVsetko(){
        return this.page.locator('#cookies-simple').getByRole('button', { name: 'Povoliť všetko' })
 }
}