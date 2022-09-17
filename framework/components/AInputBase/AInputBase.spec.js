context("AInputBase", () => {
  before(() => {
    cy.visitInLightTheme("/extend/input-base");
  });

  it("supports clearable", () => {
    const stub = cy.stub();
    cy.on("window:alert", stub);

    cy.get("#usage + .playground")
      .find(".a-input-base__clear")
      .eq(0)
      .should("have.attr", "role", "button")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("cleared");
      })
      .type("{enter}")
      .then(() => {
        expect(stub.getCall(1)).to.be.calledWith("cleared");
      })
      .type(" ")
      .then(() => {
        expect(stub.getCall(2)).to.be.calledWith("cleared");
      })
      .tab()
      .tab();

    cy.get("#usage + .playground")
      .find(".a-input-base--warning .a-input-base__clear")
      .then(($el) => {
        Cypress.dom.isFocused($el);
      });
  });

  it("supports themes", () => {
    if (Cypress.env("snapshots") === "off") return;

    cy.get("#usage + .playground .playground__preview").compareSnapshot(
      "InputBase 1"
    );

    cy.get("[data-testid='enable-dusk-theme']").eq(0).click();

    cy.get("#usage + .playground .playground__preview").compareSnapshot(
      "InputBase 2"
    );
  });
});
