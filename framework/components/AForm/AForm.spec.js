context("AForm", () => {
  before(() => {
    cy.visitInLightTheme("/components/form");
  });

  it("validates", () => {
    cy.get("#usage + .playground .a-button").eq(1).click();
    cy.get("#usage + .playground .a-field-base__hint")
      .eq(0)
      .contains("Email is required");
    cy.get("#usage + .playground .a-field-base__hint")
      .eq(1)
      .contains("Role is required");
    cy.get("#usage + .playground .a-field-base__hint")
      .eq(2)
      .contains("Comments is required");

    cy.get("#usage + .playground .a-alert")
      .eq(0)
      .contains("There are 3 validation errors on the form.");
  });

  it("resets", () => {
    cy.get("#usage + .playground .a-button").eq(0).click();
    cy.get("#usage + .playground .a-field-base__hint")
      .eq(0)
      .contains("Please use a business email address");
    cy.get("#usage + .playground .a-select .a-field-base__hint").should(
      "not.exist"
    );
    cy.get("#usage + .playground .a-field-base__hint")
      .eq(1)
      .contains("Keep it short");
  });
});
