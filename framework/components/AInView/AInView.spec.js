context("AInView", () => {
    before(() => {
        cy.visitInLightTheme("/components/inview");
    });

    const basicUsageSelector = "#basic + .playground";
    const asyncUsageSelector = "#asynchronous-actions + .playground";

    it("should alert when an observed element toggles from being in and out of the view", () => {
        cy.get(`${basicUsageSelector}`).get(`${basicUsageSelector} *[aria-live]`).contains("On Screen");
        cy.get(`${basicUsageSelector} *[data-testid="scroll-container"]`).scrollTo("bottom");
        cy.get(`${basicUsageSelector}`).get(`${basicUsageSelector} *[aria-live]`).contains("Off Screen");
    });

    it("should allow the toggler callback to run only once after first being in the view", () => {
        cy.get(`${asyncUsageSelector}`).scrollIntoView();
        cy.get(`${asyncUsageSelector} *[role="progressbar"]`).should("not.exist");
        cy.get(`${asyncUsageSelector} *[data-testid="scroll-container"]`).scrollTo("bottom");
        cy.get(`${asyncUsageSelector} *[role="progressbar"]`).should("be.visible");
        // Disable this eslint rule since the demo uses an arbitrary delay
        // to mimic a delay from an HTTP request
        cy.wait(1000); // eslint-disable-line cypress/no-unnecessary-waiting
        cy.get(`${asyncUsageSelector} *[aria-live]`).contains("Success");

        // Scroll back to top and test if the async action will only trigger once
        cy.get(`${asyncUsageSelector} *[data-testid="scroll-container"]`).scrollTo("top");
        cy.get(`${asyncUsageSelector} *[data-testid="scroll-container"]`).scrollTo("bottom");
        cy.get(`${asyncUsageSelector} div[role="progressbar"]`).should("not.exist");
        cy.get(`${asyncUsageSelector} *[aria-live]`).contains("Success");
    });
});
