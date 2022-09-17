context("ABreadcrumb", () => {
  before(() => {
    cy.visitInLightTheme("/components/breadcrumb");
  });

  it("supports themes", () => {
    if (Cypress.env("snapshots") === "off") return;

    cy.get("#usage + .playground .playground__preview").compareSnapshot(
      "Breadcrumb 1"
    );

    cy.get("[data-testid='enable-dusk-theme']").eq(0).click();

    cy.get("#usage + .playground .playground__preview").compareSnapshot(
      "Breadcrumb 2"
    );
  });
});
