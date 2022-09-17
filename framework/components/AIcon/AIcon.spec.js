context("AIcon", () => {
  before(() => {
    cy.visitInLightTheme("/components/icon");
  });

  // TODO: Test accessibility

  it("supports themes", () => {
    if (Cypress.env("snapshots") === "off") return;

    cy.get("#usage + .playground .playground__preview").compareSnapshot(
      "Icon 1"
    );
  });
});
