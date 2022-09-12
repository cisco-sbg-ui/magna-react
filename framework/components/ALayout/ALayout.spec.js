context("ALayout", () => {
  before(() => {
    cy.visitInLightTheme("http://localhost:3000/components/layout");
  });

  // TODO: Test accessibility

  it("supports themes", () => {
    if (Cypress.env("snapshots") === "off") return;

    cy.get("#usage + .playground .playground__preview").compareSnapshot(
      "Layout 1"
    );
  });
});
