context("ALoader", () => {
  before(() => {
    cy.visitInLightTheme("http://localhost:3000/components/loader");
  });

  // TODO: Test accessibility

  // Screenshots aren't going to work for always-animating things.
});
