context("ABreakpoint", () => {
  before(() => {
    cy.visitInLightTheme("/services/breakpoint");
  });

  it("works", () => {
    cy.get("#usage + .playground").contains("Extra Large");
  });
});
