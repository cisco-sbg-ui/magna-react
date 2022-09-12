context("AMount", () => {
  before(() => {
    cy.visitInLightTheme("http://localhost:3000/components/mount");
  });

  it("works", () => {
    cy.get("#usage + .playground .a-button").eq(1).click();
  });
});
