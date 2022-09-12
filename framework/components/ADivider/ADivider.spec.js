context("ADivider", () => {
  before(() => {
    cy.visitInLightTheme("http://localhost:3000/components/divider");
  });

  // TODO: Test accessibility

  it("supports themes", () => {
    if (Cypress.env("snapshots") === "off") return;

    cy.get("#usage + .playground .playground__preview").compareSnapshot(
      "Divider 1"
    );

    cy.get("[data-testid='enable-dusk-theme']").eq(0).click();

    cy.get("#usage + .playground .playground__preview").compareSnapshot(
      "Divider 2"
    );
  });
});
