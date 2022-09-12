context("APopover", () => {
  before(() => {
    cy.visitInLightTheme("http://localhost:3000/components/popover");
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
    cy.get("#onclose-handling + .playground .playground__preview").click(
      "left"
    );
    cy.get(".a-app .a-menu-base").should("not.exist");
  });

  it("has working keyboard events", () => {
    cy.get(".a-popover").should("not.exist");
    cy.get("#usage + .playground .a-button").eq(0).click();
    cy.get(".a-popover")
      .eq(0)
      .should("be.visible")
      .then(($el) => {
        Cypress.dom.isFocused($el);
      })
      .type("{esc}");
    cy.get(".a-popover").should("not.exist");
    cy.get("#usage + .playground .a-button")
      .eq(0)
      .then(($el) => {
        Cypress.dom.isFocused($el);
      });

    // TODO: test tab key functionality once cypress supports it.
  });

  it("supports themes", () => {
    if (Cypress.env("snapshots") === "off") return;

    cy.get("#position + .playground").scrollIntoView();
    cy.get("#position + .playground .a-button").eq(0).click({force: true});

    cy.get("#position + .playground .playground__preview").compareSnapshot(
      "Popover 1"
    );
    cy.get(".a-popover .a-button").eq(0).click({force: true});

    cy.get("#position + .playground .a-button").eq(1).click({force: true});
    cy.get("#position + .playground .playground__preview").compareSnapshot(
      "Popover 2"
    );
    cy.get(".a-popover .a-button").eq(0).click({force: true});

    cy.get("#position + .playground .a-button").eq(2).click({force: true});
    cy.get("#position + .playground .playground__preview").compareSnapshot(
      "Popover 3"
    );
    cy.get(".a-popover .a-button").eq(0).click({force: true});

    cy.get("#position + .playground .a-button").eq(3).click({force: true});
    cy.get("#position + .playground .playground__preview").compareSnapshot(
      "Popover 4"
    );
    cy.get(".a-popover .a-button").eq(0).click({force: true});

    cy.get("#position + .playground .a-button").eq(4).click({force: true});
    cy.get("#position + .playground .playground__preview").compareSnapshot(
      "Popover 5"
    );
    cy.get(".a-popover .a-button").eq(0).click({force: true});

    cy.get("#position + .playground .a-button").eq(5).click({force: true});
    cy.get("#position + .playground .playground__preview").compareSnapshot(
      "Popover 6"
    );
    cy.get(".a-popover .a-button").eq(0).click({force: true});

    cy.get("#position + .playground .a-button").eq(6).click({force: true});
    cy.get("#position + .playground .playground__preview").compareSnapshot(
      "Popover 7"
    );
    cy.get(".a-popover .a-button").eq(0).click({force: true});

    cy.get("#position + .playground .a-button").eq(7).click({force: true});
    cy.get("#position + .playground .playground__preview").compareSnapshot(
      "Popover 8"
    );
    cy.get(".a-popover .a-button").eq(0).click({force: true});

    cy.get("#position + .playground .a-button").eq(8).click({force: true});
    cy.get("#position + .playground .playground__preview").compareSnapshot(
      "Popover 9"
    );
    cy.get(".a-popover .a-button").eq(0).click({force: true});

    cy.get("#position + .playground .a-button").eq(9).click({force: true});
    cy.get("#position + .playground .playground__preview").compareSnapshot(
      "Popover 10"
    );
    cy.get(".a-popover .a-button").eq(0).click({force: true});

    cy.get("#position + .playground .a-button").eq(10).click({force: true});
    cy.get("#position + .playground .playground__preview").compareSnapshot(
      "Popover 11"
    );
    cy.get(".a-popover .a-button").eq(0).click({force: true});

    cy.get("#position + .playground .a-button").eq(11).click({force: true});
    cy.get("#position + .playground .playground__preview").compareSnapshot(
      "Popover 12"
    );
    cy.get(".a-popover .a-button").eq(0).click({force: true});

    cy.get("[data-testid='enable-dusk-theme']").eq(0).click();
    cy.get("#position + .playground").scrollIntoView();

    cy.get("#position + .playground .a-button").eq(0).click({force: true});
    cy.get("#position + .playground .playground__preview").compareSnapshot(
      "Popover 13"
    );
    cy.get(".a-popover .a-button").eq(0).click({force: true});

    cy.get("#position + .playground .a-button").eq(1).click({force: true});
    cy.wait(100); // eslint-disable-line cypress/no-unnecessary-waiting
    cy.get("#position + .playground .playground__preview").compareSnapshot(
      "Popover 14"
    );
    cy.get(".a-popover .a-button").eq(0).click({force: true});

    cy.get("#position + .playground .a-button").eq(2).click({force: true});
    cy.get("#position + .playground .playground__preview").compareSnapshot(
      "Popover 15"
    );
    cy.get(".a-popover .a-button").eq(0).click({force: true});

    cy.get("#position + .playground .a-button").eq(3).click({force: true});
    cy.get("#position + .playground .playground__preview").compareSnapshot(
      "Popover 16"
    );
    cy.get(".a-popover .a-button").eq(0).click({force: true});

    cy.get("#position + .playground .a-button").eq(4).click({force: true});
    cy.get("#position + .playground .playground__preview").compareSnapshot(
      "Popover 17"
    );
    cy.get(".a-popover .a-button").eq(0).click({force: true});

    cy.get("#position + .playground .a-button").eq(5).click({force: true});
    cy.get("#position + .playground .playground__preview").compareSnapshot(
      "Popover 18"
    );
    cy.get(".a-popover .a-button").eq(0).click({force: true});

    cy.get("#position + .playground .a-button").eq(6).click({force: true});
    cy.get("#position + .playground .playground__preview").compareSnapshot(
      "Popover 19"
    );
    cy.get(".a-popover .a-button").eq(0).click({force: true});

    cy.get("#position + .playground .a-button").eq(7).click({force: true});
    cy.get("#position + .playground .playground__preview").compareSnapshot(
      "Popover 20"
    );
    cy.get(".a-popover .a-button").eq(0).click({force: true});

    cy.get("#position + .playground .a-button").eq(8).click({force: true});
    cy.get("#position + .playground .playground__preview").compareSnapshot(
      "Popover 21"
    );
    cy.get(".a-popover .a-button").eq(0).click({force: true});

    cy.get("#position + .playground .a-button").eq(9).click({force: true});
    cy.get("#position + .playground .playground__preview").compareSnapshot(
      "Popover 22"
    );
    cy.get(".a-popover .a-button").eq(0).click({force: true});

    cy.get("#position + .playground .a-button").eq(10).click({force: true});
    cy.get("#position + .playground .playground__preview").compareSnapshot(
      "Popover 23"
    );
    cy.get(".a-popover .a-button").eq(0).click({force: true});

    cy.get("#position + .playground .a-button").eq(11).click({force: true});
    cy.get("#position + .playground .playground__preview").compareSnapshot(
      "Popover 24"
    );
    cy.get(".a-popover .a-button").eq(0).click({force: true});
  });
});
