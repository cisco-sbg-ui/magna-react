context("ATextInput", () => {
  before(() => {
    cy.visitInLightTheme("/components/text-input");
  });

  it("has a working auto-focus", () => {
    cy.get("#usage + .playground .a-text-input__input").then(($el) => {
      Cypress.dom.isFocused($el);
    });
  });

  it("is clearable", () => {
    cy.get("#usage + .playground .a-text-input__input").then(($el) => {
      const value = $el.attr("value");
      expect(value.length).to.be.gt(0);
      cy.get("#usage + .playground .a-input-base__clear").click();
      cy.get("#usage + .playground .a-text-input__input").should(
        "have.value",
        ""
      );
    });
  });

  it("has a working non-interactable prepend icon", () => {
    cy.get("#states + .playground")
      .find(".a-text-input__prepend-icon")
      .eq(3)
      .should("not.have.attr", "role", "button");
  });

  it("has a working non-interactable append icon", () => {
    cy.get("#states + .playground")
      .find(".a-text-input__append-icon")
      .eq(3)
      .should("not.have.attr", "role", "button");
  });

  it("has a working interactable prepend icon", () => {
    const stub = cy.stub();
    cy.on("window:alert", stub);

    cy.get("#states + .playground")
      .find(".a-text-input__prepend-icon")
      .eq(0)
      .should("have.attr", "role", "button")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Cisco Systems!");
      })
      .type("{enter}")
      .then(() => {
        expect(stub.getCall(1)).to.be.calledWith("Cisco Systems!");
      });
  });

  it("has a working interactable append icon", () => {
    const stub = cy.stub();
    cy.on("window:alert", stub);

    cy.get("#states + .playground")
      .find(".a-text-input__append-icon")
      .eq(0)
      .should("have.attr", "role", "button")
      .click()
      .then(() => {
        expect(stub.getCall(0)).to.be.calledWith("Information!");
      })
      .type("{enter}")
      .then(() => {
        expect(stub.getCall(1)).to.be.calledWith("Information!");
      });
  });

  it("tabs appropriately and focuses", () => {
    cy.get("#states + .playground")
      .find(".a-text-input__input")
      .eq(0)
      .focus()
      .tab();

    // Prepended icon with click handler is tab-focusable.
    cy.get("#states + .playground")
      .find(".a-text-input__prepend-icon")
      .eq(0)
      .then(($el) => {
        Cypress.dom.isFocused($el);
      })
      .tab()
      .tab();

    // Appended icon with click handler is tab-focusable.
    cy.get("#states + .playground")
      .find(".a-text-input__append-icon")
      .eq(0)
      .then(($el) => {
        Cypress.dom.isFocused($el);
      })
      .tab()
      .tab()
      .tab()
      .tab();

    // Cycle through disabled (not tab-focusable), readonly, to second warning example
    // (second warning example has prepended and appended icons without click handlers).
    // Prepended icon without click handler is not tab-focusable.
    cy.get("#states + .playground")
      .find(".a-text-input__input")
      .eq(7)
      .then(($el) => {
        Cypress.dom.isFocused($el);
      })
      .tab();

    // Appended icon without click handler is not tab-focusable.
    cy.get("#states + .playground")
      .find(".a-text-input__input")
      .eq(8)
      .then(($el) => {
        Cypress.dom.isFocused($el);
      });
  });

  it("accepts input", () => {
    cy.get("#usage + .playground")
      .find(".a-text-input__input")
      .clear()
      .type("elephant")
      .should("have.value", "elephant")
      .blur();
  });

  it("works as a number type", () => {
    cy.get("#numeric-input + .playground")
      .find(".a-text-input__input")
      .eq(0)
      .should("have.value", "1");
    cy.get("#numeric-input + .playground")
      .find(".a-text-input__spinner__up")
      .eq(0)
      .click();
    cy.get("#numeric-input + .playground")
      .find(".a-text-input__input")
      .eq(0)
      .should("have.value", "2");
    cy.get("#numeric-input + .playground")
      .find(".a-text-input__spinner__down")
      .eq(0)
      .click();
    cy.get("#numeric-input + .playground")
      .find(".a-text-input__input")
      .eq(0)
      .should("have.value", "1");

    cy.get("#numeric-input + .playground")
      .find(".a-text-input__input")
      .eq(1)
      .should("have.value", "");
    cy.get("#numeric-input + .playground")
      .find(".a-text-input__spinner__up")
      .eq(1)
      .click();
    cy.get("#numeric-input + .playground")
      .find(".a-text-input__input")
      .eq(1)
      .should("have.value", "1");
    cy.get("#numeric-input + .playground")
      .find(".a-input-base__clear")
      .eq(0)
      .click();
    cy.get("#numeric-input + .playground")
      .find(".a-text-input__input")
      .eq(1)
      .should("have.value", "");

    cy.get("#numeric-input + .playground")
      .find(".a-text-input__spinner")
      .should("have.length", 2);
  });

  it("validates on blur", () => {
    cy.get("#validation + .playground .a-text-input__input")
      .eq(0)
      .click()
      .tab();
    cy.get("#validation + .playground .a-field-base__hint")
      .eq(0)
      .contains("Name is required");
  });

  it("supports maxLength", () => {
    cy.get("#validation + .playground .a-text-input__input")
      .eq(0)
      .clear()
      .type("123456789012345678901234567890123456789012345678901")
      .should(
        "have.value",
        "12345678901234567890123456789012345678901234567890"
      );
  });

  it("validates", () => {
    cy.get("#validation + .playground .a-text-input__input").eq(0).clear();
    cy.get("#validation + .playground .a-field-base__hint")
      .eq(0)
      .contains("Name is required");
    cy.get("#validation + .playground .a-text-input__input").eq(0).type("1");
    cy.get("#validation a").focus();
    cy.get("#validation + .playground .a-field-base__hint")
      .eq(0)
      .contains("Your name");

    cy.get("#validation + .playground .a-text-input__input").eq(2).type(1001);
    cy.get("#validation + .playground .a-field-base__hint")
      .eq(2)
      .contains("Favorite Number 0-1000 has a maximum value of 1000");

    cy.get("#validation + .playground .a-text-input__input")
      .eq(2)
      .clear()
      .type(-1);
    cy.get("#validation + .playground .a-field-base__hint")
      .eq(2)
      .contains("Favorite Number 0-1000 has a minimum value of 0");

    cy.get("#validation + .playground .a-text-input__input")
      .eq(2)
      .clear()
      .type("899");
    cy.get("#validation + .playground .a-text-input__spinner__up")
      .eq(0)
      .click();
    cy.get("#validation + .playground .a-text-input__input")
      .eq(2)
      .should("have.value", "900");
    cy.get("#validation + .playground .a-text-input__spinner__up")
      .eq(0)
      .click();
    cy.get("#validation + .playground .a-text-input__input")
      .eq(2)
      .should("have.value", "1000");

    cy.get("#validation + .playground .a-text-input__input")
      .eq(2)
      .clear()
      .type("199");
    cy.get("#validation + .playground .a-text-input__spinner__down")
      .eq(0)
      .click();
    cy.get("#validation + .playground .a-text-input__input")
      .eq(2)
      .should("have.value", "100");
    cy.get("#validation + .playground .a-text-input__spinner__down")
      .eq(0)
      .click();
    cy.get("#validation + .playground .a-text-input__input")
      .eq(2)
      .should("have.value", "0");

    cy.get("#validation + .playground .a-text-input__input")
      .eq(2)
      .clear()
      .type("5555");
    cy.get("#validation + .playground .a-text-input__spinner__up")
      .eq(0)
      .click();
    cy.get("#validation + .playground .a-text-input__input")
      .eq(2)
      .should("have.value", "5555");
    cy.get("#validation + .playground .a-text-input__spinner__down")
      .eq(0)
      .click();
    cy.get("#validation + .playground .a-text-input__input")
      .eq(2)
      .should("have.value", "1000");

    cy.get("#validation + .playground .a-text-input__input")
      .eq(2)
      .clear()
      .type("-5555");
    cy.get("#validation + .playground .a-text-input__spinner__down")
      .eq(0)
      .click();
    cy.get("#validation + .playground .a-text-input__input")
      .eq(2)
      .should("have.value", "-5555");
    cy.get("#validation + .playground .a-text-input__spinner__up")
      .eq(0)
      .click();
    cy.get("#validation + .playground .a-text-input__input")
      .eq(2)
      .should("have.value", "0");

    cy.get("#validation + .playground .a-text-input__input").eq(4).type("999");
    cy.get("#validation + .playground .a-text-input__spinner__up")
      .eq(2)
      .click();
    cy.get("#validation + .playground .a-text-input__input")
      .eq(4)
      .should("have.value", "999");

    cy.get("#validation + .playground .a-text-input__input").eq(3).type("0");
    cy.get("#validation + .playground .a-text-input__spinner__down")
      .eq(1)
      .click();
    cy.get("#validation + .playground .a-text-input__input")
      .eq(3)
      .should("have.value", "0");
  });

  it("supports themes", () => {
    if (Cypress.env("snapshots") === "off") return;

    cy.get("#states + .playground .playground__preview").compareSnapshot(
      "Text Input 1"
    );

    cy.get("#numeric-input + .playground .playground__preview").compareSnapshot(
      "Text Input 2"
    );

    cy.get("[data-testid='enable-dusk-theme']").eq(0).click();

    cy.get("#states + .playground .playground__preview").compareSnapshot(
      "Text Input 3"
    );
  });
});
