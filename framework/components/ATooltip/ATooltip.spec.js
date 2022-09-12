context("ATooltip", () => {
  before(() => {
    cy.visitInLightTheme("http://localhost:3000/components/tooltip");
  });

  it("handles onClose", () => {
    cy.get("#onclose-handling + .playground .a-button").click();
    cy.get(".a-app .a-menu-base").should("exist");
    cy.get(".a-app .a-menu-base").first().click();
    cy.get(".a-app .a-menu-base").should("exist");
    cy.get("#onclose-handling + .playground .a-button").click();
    cy.get(".a-app .a-menu-base").should("not.exist");

    cy.get("#onclose-handling + .playground .a-button").click();
    cy.get(".a-app .a-menu-base").should("exist");
    cy.get("#onclose-handling + .playground .onclose-1__instruction").click();
    cy.get(".a-app .a-menu-base").should("not.exist");
  });

  it("supports themes", () => {
    if (Cypress.env("snapshots") === "off") return;

    cy.get("#pointer + .playground .a-button").eq(0).click();

    cy.get("#pointer + .playground .a-button").eq(1).click();

    cy.get("#pointer + .playground .playground__preview").compareSnapshot(
      "Tooltip 1"
    );

    cy.get("#position + .playground .a-button").eq(0).click({force: true});
    cy.get("#position + .playground .a-button").eq(1).click({force: true});
    cy.get("#position + .playground .a-button").eq(2).click({force: true});
    cy.get("#position + .playground .a-button").eq(3).click({force: true});
    cy.get("#position + .playground .a-button").eq(4).click({force: true});
    cy.get("#position + .playground .a-button").eq(5).click({force: true});
    cy.get("#position + .playground .a-button").eq(6).click({force: true});
    cy.get("#position + .playground .a-button").eq(7).click({force: true});
    cy.get("#position + .playground .a-button").eq(8).click({force: true});
    cy.get("#position + .playground .a-button").eq(9).click({force: true});
    cy.get("#position + .playground .a-button").eq(10).click({force: true});
    cy.get("#position + .playground .a-button").eq(11).click({force: true});

    cy.get("#position + .playground .playground__preview").compareSnapshot(
      "Tooltip 2"
    );

    cy.get("[data-testid='enable-dusk-theme']").eq(0).click();

    cy.get("#pointer + .playground .playground__preview").compareSnapshot(
      "Tooltip 3"
    );

    cy.get("#position + .playground .playground__preview").compareSnapshot(
      "Tooltip 4"
    );
  });
});
