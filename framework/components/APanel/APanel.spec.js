context("APanel", () => {
  before(() => {
    cy.visitInLightTheme("/components/panel");
  });

  // TODO: Test accessibility

  it("supports themes", () => {
    if (Cypress.env("snapshots") === "off") return;

    cy.get("#variants + .playground .playground__preview").compareSnapshot(
      "Panel 1"
    );

    cy.get("[data-testid='enable-dusk-theme']").eq(0).click();

    cy.get("#variants + .playground .playground__preview").compareSnapshot(
      "Panel 2"
    );
  });
});
