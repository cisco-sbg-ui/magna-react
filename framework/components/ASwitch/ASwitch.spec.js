context("ASwitch", () => {
  before(() => {
    cy.visitInLightTheme("http://localhost:3000/components/switch");
  });

  // TODO: Test interactability

  // TODO: Test accessibility

  it("validates", () => {
    cy.get("#validation + .playground .a-switch__label").click();
    cy.get("#validation + .playground .a-hint").contains(
      "This feature is potentially unsafe"
    );

    cy.get("#validation + .playground .a-switch__label").click();
    cy.get("#validation + .playground .a-hint").contains("Required");
  });

  it("supports themes", () => {
    if (Cypress.env("snapshots") === "off") return;

    cy.get("#states + .playground .playground__preview").compareSnapshot(
      "Switch 1"
    );

    cy.get("[data-testid='enable-dusk-theme']").eq(0).click();

    cy.get("#states + .playground .playground__preview").compareSnapshot(
      "Switch 2"
    );
  });
});
