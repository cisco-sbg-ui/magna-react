context("ACheckbox", () => {
  before(() => {
    cy.visitInLightTheme("/components/checkbox");
  });

  // TODO: Test interactability

  // TODO: Test accessibility

  it("validates", () => {
    cy.get("#validation + .playground .a-checkbox__label").click();
    cy.get("#validation + .playground .a-hint").contains(
      "Your information is sold to third parties"
    );

    cy.get("#validation + .playground .a-checkbox__label").click();
    cy.get("#validation + .playground .a-hint").contains("Required");
  });

  it("supports themes", () => {
    if (Cypress.env("snapshots") === "off") return;

    cy.get("#states + .playground .playground__preview").compareSnapshot(
      "Checkbox 1"
    );

    cy.get("#label-wrap + .playground .playground__preview").compareSnapshot(
      "Checkbox 2"
    );

    cy.get("[data-testid='enable-dusk-theme']").eq(0).click();

    cy.get("#states + .playground .playground__preview").compareSnapshot(
      "Checkbox 3"
    );
  });
});
