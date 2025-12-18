import { test, expect } from "@playwright/test"

test('test the finance dashbaord for content visbility and functional features', async ({ page }) => {

    // verify the URL loads
    await page.goto("https://varisht-fe.netlify.app/dashboard/finance")
    // verify the page has a title
    await expect(page).toHaveTitle(/Dashboard/)
    //Verify accordian finance overview is visible
    await expect(page.locator('[data-testid="dashboard-finance-accordion-summary"]')).toBeVisible()
    //Verify accordian finance overview to have text "finance overview"
    await expect(page.locator('[data-testid="dashboard-finance-accordion-summary"]')).toHaveText("Finance Overview")
    await expect(page.locator('[data-testid="dashboard-finance-status-chart"]')).toContainText("Payment Status Breakdown")
    //Verify accordian finance overview state to be expanded by default
    await expect(page.locator('[data-testid="dashboard-finance-accordion-summary"]')).toHaveAttribute('aria-expanded', 'true')
    //Verify accordian Health overview is visible
    await expect(page.locator('[data-testid="dashboard-health-accordion-summary"]')).toBeVisible()
    //Verify accordian finance overview to have text "Health overview"
    await expect(page.locator('[data-testid=dashboard-health-accordion-summary"]')).toHaveText("Health Overview")
    // verify the page Finance has a section Healthoverview expanded
    await expect(page.locator('[data-testid="dashboard-health-accordion-summary"]')).toHaveAttribute('aria-expanded', 'true')

})