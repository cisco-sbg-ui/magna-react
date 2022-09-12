context("ABreakpoint", () => {
  before(() => {
    cy.visitInLightTheme("http://localhost:3000/services/breakpoint");
  });

  it("works", () => {
    cy.get("#usage + .playground").contains("Extra Large");
  });
});
