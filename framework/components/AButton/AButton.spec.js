context("AButton", () => {
  before(() => {
    cy.visitInLightTheme("http://localhost:3000/components/button");
  });

  // TODO: Test interactability

  // TODO: Test accessibility

  it("supports themes", () => {
    if (Cypress.env("snapshots") === "off") return;

    cy.get("#variants + .playground .playground__preview").compareSnapshot(
      "Button 1"
    );

    cy.get("[data-testid='enable-dusk-theme']").eq(0).click();

    cy.get("#variants + .playground .playground__preview").compareSnapshot(
      "Button 2"
    );
  });
});
