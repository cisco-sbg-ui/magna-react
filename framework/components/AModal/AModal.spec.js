context("AModal", () => {
  before(() => {
    cy.visitInLightTheme("/components/modal");
  });

  const modalSelector = "[aria-modal='true']";

  const getFormModalTrigger = () =>
    cy.get("#form-example + .playground .a-button");
  const closeModal = (modal) =>
    cy.wrap(modal).trigger("keydown", {key: "Escape"});

  it("should set focus to the first focusable child", () => {
    getFormModalTrigger().click();
    cy.get("button[aria-label='Close form']")
      .should("have.focus")
      .then(closeModal);
  });

  it("should close when the escape key is pressed", () => {
    getFormModalTrigger().click();
    cy.get(modalSelector).last().then(closeModal);
    cy.get("[aria-label='Close form']").should("not.be.visible");
  });

  it("should close on outside click of the modal", () => {
    getFormModalTrigger().click();
    cy.get("body").click({force: true});
    cy.get("[aria-label='Close form']").should("not.be.visible");
  });

  it("should trap focus within the modal content", () => {
    getFormModalTrigger().click();
    cy.get("body").tab();
    // Spamming shift+tab still keeps focus within the modal content
    cy.get("body").tab({shift: true});
    cy.get("body").tab({shift: true});
    cy.get("body").tab({shift: true});
    cy.get("[aria-label='Close form']").should("have.focus");
  });
});
