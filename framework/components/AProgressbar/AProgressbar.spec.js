context("AProgressbar", () => {
  before(() => {
    cy.visitInLightTheme("/components/progressbar");
  });

  // TODO: Test accessibility
  it("is accessible", () => {
    cy.get("#states + .playground .a-progressbar")
      .eq(0)
      .should("have.attr", "aria-valuemin", "0")
      .should("have.attr", "aria-valuemax", "100")
      .should("have.attr", "aria-valuenow", "50")
      .should("have.attr", "role", "progressbar");
  });

  it("supports themes", () => {
    if (Cypress.env("snapshots") === "off") return;

    cy.get(".a-app").invoke("removeClass", ".a-app--animated");

    cy.get("#states + .playground .playground__preview").compareSnapshot(
      "Progressbar 1"
    );

    cy.get("[data-testid='enable-dusk-theme']").eq(0).click();

    cy.get("#states + .playground .playground__preview").compareSnapshot(
      "Progressbar 2"
    );
  });
});
