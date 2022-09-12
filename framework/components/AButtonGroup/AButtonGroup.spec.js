context("AButtonGroup", () => {
  before(() => {
    cy.visitInLightTheme("http://localhost:3000/components/button-group");
  });

  it("validates", () => {
    cy.get("#validation + .playground .a-button").contains("One").click();
    cy.get("#validation + .playground .a-button").contains("Three").click();
    cy.get("#validation + .playground .playground__preview").contains(
      "Whatever you do"
    );

    cy.get("#validation + .playground .a-button").contains("One").click();
    cy.get("#validation + .playground .a-button").contains("Two").click();
    cy.get("#validation + .playground .a-button").contains("Three").click();
    cy.get("#validation + .playground .playground__preview").contains(
      "required"
    );
  });

  it("supports themes", () => {
    if (Cypress.env("snapshots") === "off") return;

    cy.get("#usage + .playground .playground__preview").compareSnapshot(
      "Button Group 1"
    );

    cy.get("[data-testid='enable-dusk-theme']").eq(0).click();

    cy.get("#usage + .playground .playground__preview").compareSnapshot(
      "Button Group 2"
    );
  });
});
