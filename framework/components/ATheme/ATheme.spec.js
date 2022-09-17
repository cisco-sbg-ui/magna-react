context("ATheme", () => {
  before(() => {
    cy.visitInLightTheme("/components/theme");
  });

  // TODO: Test interactability

  // TODO: Test accessibility

  it("supports themes", () => {
    if (Cypress.env("snapshots") === "off") return;

    cy.get("#usage ~ .playground .playground__preview").eq(0).compareSnapshot(
      "Theme 1"
    );

    cy.get("#usage ~ .playground .playground__preview .a-button").eq(1).click();

    cy.get("#usage ~ .playground .playground__preview").eq(0).compareSnapshot(
      "Theme 2"
    );
  });
});
