context("AAutoTheme", () => {
  it("persists automatic themes", () => {
    if (Cypress.env("snapshots") === "off") return;

    cy.visitInLightTheme("http://localhost:3000");

    cy.get("body").compareSnapshot("AutoTheme 1");

    cy.get(".root-sidebar .a-switch__box").eq(0).click();

    cy.visitInDarkTheme("http://localhost:3000");

    cy.get("body").compareSnapshot("AutoTheme 2");

    // Turn auto theming off - when the automatic theming is disabled,
    // it should keep whatever theme the automatic theme was set to
    cy.get(".root-sidebar .a-switch__box").eq(0).click();
    cy.get("body").compareSnapshot("AutoTheme 3");

    // Switch back to light theme
    cy.get("[data-testid='enable-default-theme']").eq(0).click();
    cy.get("body").compareSnapshot("AutoTheme 4");

    // When re-enabling automatic theming, it should match the user agent
    // style sheet (in this cae it is dark mode);
    cy.get(".root-sidebar .a-switch__box").eq(0).click();
    cy.get("body").compareSnapshot("AutoTheme 5");
  });
});
