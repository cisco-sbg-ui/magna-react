context("AStepper", () => {
  before(() => {
    cy.visitInLightTheme("/components/stepper");
  });

  it("has appropriate default state", () => {
    cy.get("#horizontal-stepper + .playground .a-steps").should(
      "not.have.class",
      "a-steps--orientation-vertical"
    );
    cy.get("#horizontal-stepper + .playground .a-step")
      .should("have.attr", "class")
      .and("equal", "a-step a-step__visited");
    cy.get("#horizontal-stepper + .playground .a-step")
      .should("have.attr", "class")
      .and("equal", "a-step a-step__visited");
    cy.get("#horizontal-stepper + .playground .a-step")
      .eq(1)
      .should("have.attr", "class")
      .and("equal", "a-step a-step__disabled");
    cy.get("#horizontal-stepper + .playground .a-step")
      .eq(2)
      .should("have.attr", "class")
      .and("equal", "a-step a-step__active");
    cy.get("#horizontal-stepper + .playground .a-step")
      .eq(3)
      .should("have.attr", "class")
      .and("equal", "a-step");
  });

  //stepper-used-with-json-data
  it("should add optional class", () => {
    cy.get("#stepper-used-with-json-data + .playground .a-steps").should(
      "have.class",
      "AStepper"
    );
    cy.get("#stepper-used-with-json-data + .playground .a-step").should(
      "have.class",
      "AStep"
    );
    cy.get("#stepper-used-with-json-data + .playground .a-step__label").should(
      "have.class",
      "AStepTitle"
    );
    cy.get("#stepper-used-with-json-data + .playground .a-step__hint").should(
      "have.class",
      "AStepDescription"
    );
  });

  //vertical-stepper-with-icon
  it("should display vertical stepper with icon", () => {
    cy.get("#vertical-stepper-with-icon + .playground .a-steps").should(
      "have.class",
      "a-steps--orientation-vertical"
    );
    cy.get(
      "#vertical-stepper-with-icon + .playground .a-steps--orientation-vertical"
    )
      .get(".a-step")
      .eq(0)
      .get(".a-step__icon__checkmark")
      .should("be.visible");
  });

  it("supports themes", () => {
    if (Cypress.env("snapshots") === "off") return;

    cy.get("#horizontal-stepper + .playground .a-steps").compareSnapshot(
      "Horizontal_stepper"
    );

    cy.get(
      "#vertical-stepper-with-icon + .playground .a-steps--orientation-vertical"
    ).compareSnapshot("Vertical_stepper_with_icon");

    cy.get("[data-testid='enable-dusk-theme']").eq(0).click();

    cy.get("#horizontal-stepper + .playground .a-steps").compareSnapshot(
      "Horizontal_stepper_dusk"
    );

    cy.get(
      "#vertical-stepper-with-icon + .playground .a-steps--orientation-vertical"
    ).compareSnapshot("Vertical_stepper_with_icon_dusk");
  });
});
