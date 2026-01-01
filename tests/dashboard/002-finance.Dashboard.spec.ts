import { test } from "@playwright/test"
import { FinanceDashboardPage } from "../pages/financeDashboard.page"

test('test the finance dashbaord loads and shows key sections', async ({ page }) => {

   
   
    const finance = new FinanceDashboardPage(page)

    await finance.goto();
    await finance.expectPageLoaded();

    await finance.expectFinanceAccordianSummaryVisible();
    await finance.expectFinanceOverviewText();
    await finance.expectPaymentStatusBreakdownTitle();
    await finance.expectFinanceAccordianExpanded();

    await finance.expectHealthAccordianVisible();
    await finance.expectHealthOverviewAccordianText();
    await finance.expectHealthOverviewAccordianExpanded();
})

//TODO: Test the mouse over the different sections shows the data on mouse over

test ('mouse over the different s3ctions shows the data on mouse over', async ({ page }) => {})