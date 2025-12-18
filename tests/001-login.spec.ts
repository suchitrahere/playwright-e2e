import {test,expect} from "@playwright/test";

test('Test the login page ,creds entered should land to home page', async ({page}) =>{
await page.goto ("https://varisht-fe.netlify.app/")


await expect(page.locator("#username")).toBeVisible()
await page.locator("#username").fill("tester")

await expect(page.locator("#password")).toBeVisible()
await page.locator("#password").fill("tester@test123")

await expect(page.locator("#submitForm")).toBeVisible()
await page.locator("#submitForm").click()
  await page.pause(); 

})

