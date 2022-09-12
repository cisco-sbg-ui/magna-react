context("AHint", () => {
  before(() => {
    cy.visitInLightTheme("http://localhost:3000/extend/hint");
  });

  it("supports themes", () => {
    if (Cypress.env("snapshots") === "off") return;

    cy.get("#usage + .playground .playground__preview").compareSnapshot(
      "Hint 1"
    );

    cy.get("[data-testid='enable-dusk-theme']").eq(0).click();

    cy.get("#usage + .playground .playground__preview").compareSnapshot(
      "Hint 2"
    );
  });
});
