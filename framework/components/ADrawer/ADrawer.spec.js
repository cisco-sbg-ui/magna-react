context("ADrawer", () => {
  before(() => {
    cy.visitInLightTheme("/components/drawer");
  });

  it("should slide-in from multiple directions", () => {
    const getOpenBtn = (slideIn) =>
      cy.get(`[data-test-drawer-trigger-${slideIn}]`);
    const getCloseBtn = (slideIn) =>
      cy.get(`[data-test-drawer-close-${slideIn}]`);
    const getDrawerContent = (slideIn) =>
      cy.get(`[data-test-drawer-${slideIn}]`);

    // Open left drawer
    getOpenBtn("left").click();
    getDrawerContent("left").should(($el) => {
      expect($el).to.have.css("left", "0px");
      expect($el).to.have.css("top", "0px");
    });

    // Close left drawer
    getCloseBtn("left").click();

    // Open right drawer
    getOpenBtn("right").click();
    getDrawerContent("right").should(($el) => {
      expect($el).to.have.css("right", "0px");
      expect($el).to.have.css("top", "0px");
    });

    // Close right drawer
    getCloseBtn("right").click();

    // Open bottom drawer
    getOpenBtn("bottom").click();
    getDrawerContent("bottom").should(($el) => {
      expect($el).to.have.css("bottom", "0px");
    });

    // Close bottom drawer
    getCloseBtn("bottom").click();
  });

  it("should render as an absolutely positioned element", () => {
    const getNavBar = () =>
      cy.get("[data-test-positioning-strategies-nav-bar]");
    const getToggleBtn = () => cy.get("[data-test-drawer-trigger-absolute]");
    const getDrawerContent = () => cy.get("[data-test-drawer-absolute]");

    // Drawer initially closed
    getNavBar().should("be.visible");
    getDrawerContent().should("not.be.visible");

    // Open drawer
    getToggleBtn().click();

    // Even when drawer open, navbar should still be visible
    getDrawerContent().should("be.visible");
    getNavBar().should("be.visible");

    // Close drawer
    getToggleBtn().click();
  });

  it("should prioritize the width passed as a prop", () => {
    const getToggleBtn = () => cy.get("[data-test-drawer-trigger-absolute]");
    const getDrawerContent = () => cy.get("[data-test-drawer-absolute]");

    // Open drawer
    getToggleBtn().click();

    // The default width of a drawer is specified in our CSS,
    // but we passed 150px as this width in the docs. Ensure
    // it's prioritized.
    getDrawerContent().invoke("outerWidth").should("eq", 150);

    // Close drawer
    getToggleBtn().click();
  });

  it("should respect the passed widths to drawers", () => {
    const getToggleBtn = () => cy.get("[data-test-drawer-trigger-relative]");
    const getDrawerContent = () => cy.get("[data-test-drawer-relative]");

    // Drawer is rendered as slim
    getDrawerContent().then(($el) => {
      expect($el).to.have.css("max-width", "50px");
      expect($el).to.have.css("width", "50px");
    });

    // Expand sidebar drawer
    getToggleBtn().click();

    // Drawer is now is rendered as full
    // Important note - we need to use "should" instead of
    // "then" because we depend on a transition in the CSS
    // finishing before we can assert. "should" tells Cypress
    // to keep retrying
    // @see https://stackoverflow.com/a/64995153
    getDrawerContent().should(($el) => {
      expect($el).to.have.css("max-width", "175px");
      expect($el).to.have.css("width", "175px");
    });
  });
});
