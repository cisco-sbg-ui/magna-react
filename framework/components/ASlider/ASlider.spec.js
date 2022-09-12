context("ASlider", () => {
  before(() => {
    cy.visitInLightTheme("http://localhost:3000/components/slider");
  });

  it("has working keyboard controls", () => {
    cy.get("#usage + .playground").should("contain", "Value: 2");
    cy.get("#usage + .playground .a-slider__handle").click().type("{upArrow}");
    cy.get("#usage + .playground").should("contain", "Value: 3");
    cy.get("#usage + .playground .a-slider__handle")
      .click()
      .type("{downArrow}");
    cy.get("#usage + .playground").should("contain", "You must agree");
    cy.get("#usage + .playground .a-slider__handle").click().type("{pageUp}");
    cy.get("#usage + .playground .a-slider__handle")
      .click()
      .type("{leftArrow}");
    cy.get("#usage + .playground").should("contain", "Value: 4");
    cy.get("#usage + .playground .a-slider__handle").click().type("{pageDown}");
    cy.get("#usage + .playground .a-slider__handle")
      .click()
      .type("{rightArrow}");
    cy.get("#usage + .playground .a-slider__handle")
      .click()
      .type("{rightArrow}");
    cy.get("#usage + .playground .a-slider__handle")
      .click()
      .type("{rightArrow}");
    cy.get("#usage + .playground").should("contain", "Value: 3");
    cy.get("#usage + .playground .a-slider__handle")
      .click()
      .type("{end}{leftArrow}");
    cy.get("#usage + .playground").should("contain", "Value: 4");
    cy.get("#usage + .playground .a-slider__handle").click().type("{home}");
    cy.get("#usage + .playground").should("contain", "You must agree");

    cy.get("#range + .playground").should("contain", "Value: 0,1000");
    cy.get("#range + .playground .a-slider__handle")
      .eq(0)
      .click()
      .type("{upArrow}");
    cy.get("#range + .playground").should("contain", "Value: 15,1000");
    cy.get("#range + .playground .a-slider__handle")
      .eq(0)
      .click()
      .type("{downArrow}");
    cy.get("#range + .playground").should("contain", "Value: 0,1000");
    cy.get("#range + .playground .a-slider__handle")
      .eq(0)
      .click()
      .type("{pageUp}");
    cy.get("#range + .playground").should("contain", "Value: 150,1000");
    cy.get("#range + .playground .a-slider__handle")
      .eq(0)
      .click()
      .type("{leftArrow}");
    cy.get("#range + .playground").should("contain", "Value: 135,1000");
    cy.get("#range + .playground .a-slider__handle")
      .eq(0)
      .click()
      .type("{pageDown}");
    cy.get("#range + .playground").should("contain", "Value: 0,1000");
    cy.get("#range + .playground .a-slider__handle")
      .eq(0)
      .click()
      .type("{rightArrow}");
    cy.get("#range + .playground").should("contain", "Value: 15,1000");
    cy.get("#range + .playground .a-slider__handle")
      .eq(0)
      .click()
      .type("{end}");
    cy.get("#range + .playground").should("contain", "Value: 1000,1000");
    cy.get("#range + .playground .a-slider__handle").eq(0).type("{home}");
    cy.get("#range + .playground").should("contain", "Value: 0,1000");
  });

  it("supports themes", () => {
    if (Cypress.env("snapshots") === "off") return;

    cy.get("#states + .playground .playground__preview").compareSnapshot(
      "Slider 1"
    );

    cy.get("[data-testid='enable-dusk-theme']").eq(0).click();

    cy.get("#states + .playground .playground__preview").compareSnapshot(
      "Slider 2"
    );
  });
});
