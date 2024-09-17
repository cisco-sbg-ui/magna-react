context("AAutocomplete", () => {
  before(() => {
    cy.visitInLightTheme("/components/autocomplete");
  });

  it("has a label that works", () => {
    cy.get("#usage + .playground .a-field-base__label")
      .eq(0)
      .click()
      .then(($el) => {
        const labelFor = $el.attr("for");
        cy.get("#usage + .playground .a-autocomplete__input")
          .eq(0)
          .then(($el2) => {
            Cypress.dom.isFocused($el2);
            cy.wrap($el2).should("have.attr", "id", labelFor);
          });
      });
  });

  it("shows a no-data message", () => {
    cy.intercept("POST", "https://nut7b5fgkt*.*.*/**", {
      headers: {
        "access-control-allow-origin": window.location.origin,
        "Access-Control-Allow-Credentials": "true"
      },
      body: {
        hits: [],
        nbHits: 0,
        page: 0,
        nbPages: 1,
        hitsPerPage: 5,
        exhaustiveNbHits: true,
        query: "asdfadsfadsfasdf",
        params: "query=gi&hitsPerPage=5",
        processingTimeMS: 1
      }
    }).as("algolia");

    cy.get("#usage + .playground .a-autocomplete__input")
      .eq(0)
      .type("asdf")
      .wait("@algolia");
    cy.get(".a-autocomplete__menu-items").eq(0).should("be.visible");
    cy.get("#usage + .playground .a-autocomplete__input").eq(0).clear();
    cy.get(".a-autocomplete__menu-items .a-list-item").eq(0).type("{esc}");
  });

  it("tabs appropriately", () => {
    cy.get("#usage + .playground .a-autocomplete__input")
      .eq(0)
      .type("{downArrow}")
      .tab();
    cy.get(".a-autocomplete__menu-items .a-autocomplete__menu-item")
      .first()
      .then(($el) => {
        Cypress.dom.isFocused($el);
      })
      .tab();
    cy.get("#usage + .playground .a-input-base__clear")
      .eq(0)
      .then(($el) => {
        Cypress.dom.isFocused($el);
      });
  });

  it("arrow-keys menus appropriately", () => {
    cy.get("#usage + .playground .a-autocomplete__input")
      .eq(0)
      .type("{downArrow}")
      .type("{downArrow}");
    cy.get(".a-autocomplete__menu-items .a-autocomplete__menu-item")
      .first()
      .then(($el) => {
        Cypress.dom.isFocused($el);
      })
      .type("{downArrow}")
      .next()
      .then(($el) => {
        Cypress.dom.isFocused($el);
      })
      .type("{esc}");

    cy.get("#usage + .playground .a-autocomplete__input")
      .eq(0)
      .type("{upArrow}");
    cy.get(".a-autocomplete__menu-items .a-autocomplete__menu-item")
      .last()
      .then(($el) => {
        Cypress.dom.isFocused($el);
      })
      .focus()
      .type("{upArrow}")
      .prev()
      .then(($el) => {
        Cypress.dom.isFocused($el);
      })
      .focus()
      .type("{esc}");
  });

  it("has appropriate role attributes", () => {
    cy.get("#usage + .playground .a-autocomplete__input")
      .eq(0)
      .type("{downArrow}");
    cy.get(".a-autocomplete__menu-items")
      .eq(0)
      .should("have.attr", "role", "listbox")
      .find(".a-autocomplete__menu-item")
      .first()
      .should("have.attr", "role", "option")
      .focus()
      .type("{esc}");
  });

  it("validates on blur", () => {
    cy.get("#validation + .playground .a-autocomplete__input")
      .eq(0)
      .tab()
      .tab({shift: true})
      .tab();
    cy.get("#validation + .playground .a-field-base__hint")
      .eq(0)
      .contains("Food Group is required");
    cy.get("#validation + .playground .a-switch__box").click();
  });

  it("validates", () => {
    cy.get("#validation + .playground .a-autocomplete__input")
      .eq(0)
      .type("aaa");
    cy.get("#validation + .playground").click("top");
    cy.get("#validation + .playground .a-field-base__hint")
      .eq(0)
      .contains("Must have a capital letter");

    cy.get("#validation + .playground .a-autocomplete__input").eq(0).clear();
    cy.get("#validation + .playground").click("top");
    cy.get("#validation + .playground .a-field-base__hint")
      .eq(0)
      .contains("Food Group is required");

    cy.get("#validation + .playground .a-input-base__clear").click();
    cy.get("#validation + .playground .a-field-base__hint").should("not.exist");
  });

  it("supports themes", () => {
    if (Cypress.env("snapshots") === "off") return;
    cy.get('[data-testid="validation-testid"]').scrollIntoView();
    cy.get("#usage + .playground .a-autocomplete__input")
      .first()
      .type("{downArrow}")
      .type("{downArrow}");

    cy.get("#usage + .playground .playground__preview").compareSnapshot(
      "Autocomplete 1"
    );

    cy.get("#states + .playground .a-autocomplete__input")
      .first()
      .type("{downArrow}")
      .type("{downArrow}");

    cy.get("#states + .playground .playground__preview").compareSnapshot(
      "Autocomplete 2"
    );

    cy.get("[data-testid='enable-dusk-theme']").eq(0).click();

    cy.get("#states + .playground .a-autocomplete__input")
      .first()
      .type("{downArrow}")
      .type("{downArrow}");

    cy.get("#states + .playground .playground__preview").compareSnapshot(
      "Autocomplete 3"
    );
  });
});
