import { expect, type Page } from "@playwright/test"

export class FinanceDashboardPage {

    constructor(private page: Page) { }


    async goto() {
        await this.page.goto("https://varisht-fe.netlify.app/dashboard/finance")
    }

    async expectPageLoaded() {
        await expect(this.page).toHaveTitle(/Dashboard/)
    }

    async expectFinanceAccordianSummaryVisible() {
        const financeAccordianSummary = this.page.locator('[data-testid="dashboard-finance-accordion-summary"]')

        await expect(financeAccordianSummary).toBeVisible()
    }


    async expectFinanceOverviewText() {

        const financeOverviewText = this.page.locator('[data-testid="dashboard-finance-accordion-summary"]')

        await expect(financeOverviewText).toHaveText("Finance Overview")

    }

    async expectPaymentStatusBreakdownTitle() {

        const paymentStatusBreakdownTitle = this.page.locator('[data-testid="dashboard-finance-status-chart"]')

        await expect(paymentStatusBreakdownTitle).toContainText("Payment Status Breakdown")
    }

    async expectFinanceAccordianExpanded() {

        const financeAccordianToBeExpanded = this.page.locator('[data-testid="dashboard-finance-accordion-summary"]')
        await expect(financeAccordianToBeExpanded).toHaveAttribute('aria-expanded', 'true')
    }

    async expectHealthAccordianVisible() {

        const healthAccordinaToBeVisible = this.page.locator('[data-testid="dashboard-health-accordion-summary"]')

        await expect(healthAccordinaToBeVisible).toBeVisible()
    }

    async expectHealthOverviewAccordianText() {

        const healthOverviewAccordiantoHaveText = this.page.locator('[data-testid="dashboard-health-accordion-summary"]')
        await expect(healthOverviewAccordiantoHaveText).toHaveText("Health Overview")
    }

    async expectHealthOverviewAccordianExpanded() {

        const healthOverviewAccordianExpanded = this.page.locator('[data-testid="dashboard-health-accordion-summary"]')
        await expect(healthOverviewAccordianExpanded).toHaveAttribute('aria-expanded', 'true')
    }



}