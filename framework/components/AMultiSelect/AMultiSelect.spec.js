context("AMultiSelect", () => {
  before(() => {
    cy.visitInLightTheme("/components/multiselect");
  });

  it("has a label that works", () => {
    cy.get("#usage + .playground .a-field-base__label")
      .eq(0)
      .click()
      .then(($el) => {
        const labelFor = $el.attr("for");
        cy.get("#usage + .playground .a-multiselect__input")
          .eq(0)
          .then(($el2) => {
            Cypress.dom.isFocused($el2);
            cy.wrap($el2).should("have.attr", "id", labelFor);
          });
      });
    cy.get("#usage + .playground .a-multiselect__chevron").eq(0).click();
  });

  it("opens and closes appropriately", () => {
    cy.get(".a-multiselect__menu-items").should("not.exist");
    cy.get("#usage + .playground .a-multiselect__chevron").eq(0).click();
    cy.get(".a-multiselect__menu-items")
      .eq(0)
      .should("be.visible")
      .prev()
      .then(($el) => {
        Cypress.dom.isFocused($el);
      });
    cy.get("#usage + .playground .a-multiselect__chevron").eq(0).click();
    cy.get(".a-multiselect__menu-items").should("not.exist");
    cy.get("#usage + .playground .a-multiselect__input")
      .eq(0)
      .type("{downArrow}");
    cy.get(".a-multiselect__menu-items").eq(0).should("be.visible");
    cy.get("#usage + .playground .a-multiselect__input").eq(0).type("mmmmm");
    cy.get("#usage + .playground .a-input-base__clear").click();
    cy.get(".a-multiselect__menu-items").should("not.exist");
    cy.get("#usage + .playground .a-multiselect__input")
      .eq(0)
      .type("{downArrow}");
  });

  it("tabs appropriately", () => {
    cy.get("#usage + .playground .a-multiselect__input").eq(0).click().tab();
    cy.get(".a-multiselect__menu-items")
      .eq(0)
      .find(".a-multiselect__menu-item")
      .first()
      .then(($el) => {
        Cypress.dom.isFocused($el);
      })
      .tab();
  });

  it("arrow-keys menus appropriately", () => {
    cy.get("#usage + .playground .a-multiselect__input")
      .eq(0)
      .type("{downArrow}");
    cy.get(".a-multiselect__menu-items")
      .eq(0)
      .find(".a-multiselect__menu-item")
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

    cy.get("#usage + .playground .a-multiselect__input")
      .eq(0)
      .type("{upArrow}");
    cy.get(".a-multiselect__menu-items")
      .eq(0)
      .find(".a-multiselect__menu-item")
      .last()
      .then(($el) => {
        Cypress.dom.isFocused($el);
      })
      .type("{upArrow}")
      .prev()
      .then(($el) => {
        Cypress.dom.isFocused($el);
      })
      .type("{esc}");
  });

  it("arrow-keys the surface appropriately", () => {
    cy.get("#usage + .playground .a-multiselect__input")
      .eq(0)
      .click()
      .type("{downArrow}{enter}")
      .should("have.value", "Bread, Cereal, Rice, and Pasta");
  });

  it("has appropriate role attributes", () => {
    cy.get("#usage + .playground .a-multiselect__input").eq(0).click();
    cy.get(".a-multiselect__menu-items")
      .eq(0)
      .should("have.attr", "role", "listbox")
      .find(".a-multiselect__menu-item")
      .first()
      .should("have.attr", "role", "option")
      .focus()
      .type("{esc}");
  });

  it("validates on blur", () => {
    cy.get("#validation + .playground .a-multiselect__input")
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
    cy.get("#validation + .playground .a-multiselect__input").eq(0).type("aaa");
    cy.get("#validation + .playground").click("top");
    cy.get("#validation + .playground .a-field-base__hint")
      .eq(0)
      .contains("Must have a capital letter");

    cy.get("#validation + .playground .a-multiselect__input").eq(0).clear();
    cy.get("#validation + .playground").click("top");
    cy.get("#validation + .playground .a-field-base__hint")
      .eq(0)
      .contains("Food Group is required");
  });

  it("supports themes", () => {
    if (Cypress.env("snapshots") === "off") return;

    cy.get("#states + .playground .a-multiselect__input")
      .first()
      .type("{downArrow}");

    cy.get("#states + .playground .playground__preview").compareSnapshot(
      "multiselect 1"
    );

    cy.get("[data-testid='enable-dusk-theme']").eq(0).click();

    cy.get("#states + .playground .a-multiselect__input")
      .first()
      .type("{downArrow}");

    cy.get("#states + .playground .playground__preview").compareSnapshot(
      "multiselect 2"
    );
  });
});
