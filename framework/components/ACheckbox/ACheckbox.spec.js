context("ACheckbox", () => {
  before(() => {
    cy.visitInLightTheme("/components/checkbox");
  });

  // TODO: Test interactability
  it("state checks - default checkbox", () => {
    const defaultColor = "rgb(73, 74, 74)";
    const checkedColor = "rgb(69, 128, 229)";
    cy.get('[data-testid="example-checkbox-test"]')
      .invoke('css', 'color')
      .then(color => {
        expect(color).to.equal(defaultColor, "Default checkbox wrong color");
      });

    cy.get('[data-testid="example-checkbox-test"] > .a-checkbox__wrap > .a-checkbox__box')
      .trigger('mouseover')
      .invoke('css', 'color')
      .then(color => {
        expect(color).to.equal(checkedColor, "Hover color incorrect");
      });

    cy.get('[data-testid="example-checkbox-test-check-it"]').click();

    cy.get('[data-testid="example-checkbox-test"] > .a-checkbox__wrap > .a-checkbox__box')
      .then($el => {
        cy.window().then((win) => {
          const styles = win.getComputedStyle($el[0])
          const transform = styles.getPropertyValue('color')
          expect(transform).to.eq(checkedColor)
        })
      })
  })

  it("state checks - set color checkbox", () => {
    const pinkColor = "rgb(255, 204, 224)";
    cy.get('[data-testid="example-checkbox-test-pink"] > .a-checkbox__wrap > .a-checkbox__box')
      .invoke('css', 'color')
      .then(color => {
        expect(color).to.equal(pinkColor, "Default checkbox wrong color - pink");
      });

    cy.get('[data-testid="example-checkbox-test-pink"] > .a-checkbox__wrap > .a-checkbox__box')
      .trigger('mouseover')
      .invoke('css', 'color')
      .then(color => {
        expect(color).to.equal(pinkColor, "Hover color incorrect - unchecked(pink)");
      });

    cy.get('[data-testid="example-checkbox-test-pink-checked"] > .a-checkbox__wrap > .a-checkbox__box')
      .trigger('mouseover')
      .invoke('css', 'color')
      .then(color => {
        expect(color).to.equal(pinkColor, "Hover color incorrect - checked (pink)");
      });


    cy.get('[data-testid="example-checkbox-test-pink-checked"] > .a-checkbox__wrap > .a-checkbox__box')
      .then($el => {
        cy.window().then((win) => {
          const styles = win.getComputedStyle($el[0])
          const transform = styles.getPropertyValue('color')
          expect(transform).to.eq(pinkColor)
        })
      })
  })

  // TODO: Test accessibility

  it("validates", () => {
    cy.get("#validation + .playground .a-checkbox__label").click();
    cy.get("#validation + .playground .a-hint").contains(
      "Your information is sold to third parties"
    );

    cy.get("#validation + .playground .a-checkbox__label").click();
    cy.get("#validation + .playground .a-hint").contains("Required");
  });

  it("supports themes", () => {
    if (Cypress.env("snapshots") === "off") return;

    cy.get("#states + .playground .playground__preview").compareSnapshot(
      "Checkbox 1"
    );

    cy.get("#label-wrap + .playground .playground__preview").compareSnapshot(
      "Checkbox 2"
    );

    cy.get("[data-testid='enable-dusk-theme']").eq(0).click();

    cy.get("#states + .playground .playground__preview").compareSnapshot(
      "Checkbox 3"
    );
  });
});
