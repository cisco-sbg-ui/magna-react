context("AButton", () => {
  before(() => {
    cy.visitInLightTheme("http://localhost:3000/components/button");
  });

  // TODO: Test interactability
  it("Test button click", () => {
    cy.get('[data-testid="click-test-text"]').contains("0 times")
    cy.get('[data-testid="click-test-button"]').click()
    cy.get('[data-testid="click-test-text"]').contains("1 times")
    cy.get('[data-testid="click-test-button"]').click()
    cy.get('[data-testid="click-test-button"]').click()
    cy.get('[data-testid="click-test-text"]').contains("3 times")
  })

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
