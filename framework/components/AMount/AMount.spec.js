context("AMount", () => {
  before(() => {
    cy.visitInLightTheme("/components/mount");
  });

  it("works", () => {
    cy.get("#usage + .playground .a-button").eq(1).click();
  });
});
