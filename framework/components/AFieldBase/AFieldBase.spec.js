context("AFieldBase", () => {
  before(() => {
    cy.visitInLightTheme("/extend/field-base");
  });

  it("supports themes", () => {
    if (Cypress.env("snapshots") === "off") return;

    cy.get("#usage + .playground .playground__preview").compareSnapshot(
      "FieldBase 1"
    );

    cy.get("[data-testid='enable-dusk-theme']").eq(0).click();

    cy.get("#usage + .playground .playground__preview").compareSnapshot(
      "FieldBase 2"
    );
  });
});
