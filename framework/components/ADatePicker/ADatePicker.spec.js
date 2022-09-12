context("ADatePicker", () => {
  before(() => {
    cy.visitInLightTheme("http://localhost:3000/components/date-picker");
  });

  it("navigates properly", () => {
    cy.get("#usage + .playground .a-date-picker").contains("January");
    cy.get("#usage + .playground .a-date-picker__day").eq(5).contains("1");
    cy.get("#usage + .playground .a-date-picker__next").click();
    cy.get("#usage + .playground .a-date-picker").contains("February");
    cy.get("#usage + .playground .a-date-picker__prev").click();
    cy.get("#usage + .playground .a-date-picker").contains("January");
    cy.get("#usage + .playground .a-date-picker__day.selected").contains("14");
    cy.get("#usage + .playground .a-date-picker__day").eq(7).click();
    cy.get("#usage + .playground .a-date-picker__day").contains("3");
  });

  it("supports themes", () => {
    if (Cypress.env("snapshots") === "off") return;

    cy.get("#usage + .playground .playground__preview").compareSnapshot(
      "DatePicker 1"
    );

    cy.get("[data-testid='enable-dusk-theme']").eq(0).click();

    cy.get("#usage + .playground .playground__preview").compareSnapshot(
      "DatePicker 2"
    );
  });

  const rangeSelector = "#date-range-with-initial-range + .playground .a-date-picker";

  it("selects the two outer bounds of a date range", () => {
    cy.get(`${rangeSelector} .a-date-picker__day`).eq(7).click();
    cy.get(`${rangeSelector} .a-date-picker__day`).eq(10).click();
    cy.get(`${rangeSelector} .a-date-picker__day.selected`).contains("3");
    cy.get(`${rangeSelector} .a-date-picker__day.selected`).contains("6");
  });

  it("selects inner bounds between a date range", () => {
    cy.get(`${rangeSelector} .a-date-picker__day`).eq(25).click();
    cy.get(`${rangeSelector} .a-date-picker__day`).eq(28).click();
    cy.get(`${rangeSelector} .a-date-picker__day.between`).eq(0).contains("22");
    cy.get(`${rangeSelector} .a-date-picker__day.between`).eq(1).contains("23");
  });

  it("selects a range between two months", () => {
    // Pick a month in current calendar selection UI
    cy.get(`${rangeSelector} .a-date-picker__day`).eq(30).click();

    // Navigate to next calendar month, pick a date, and ensure
    // the range has now been set
    cy.get(`${rangeSelector} .a-date-picker__next`).click();
    cy.get(`${rangeSelector} .a-date-picker__day`).eq(10).click();
    cy.get(`${rangeSelector} .a-date-picker__day.between:not(.disabled)`).should("have.length", 10);

    // Navigate back to previous month and ensure range is still set
    cy.get(`${rangeSelector} .a-date-picker__prev`).click();
    cy.get(`${rangeSelector} .a-date-picker__day.between:not(.disabled)`).should("have.length", 4);
  });

  it("displays the upper range bound when an initial range is supplied", () => {
    // Revisit to reset state of calendar
    cy.visitInLightTheme("http://localhost:3000/components/date-picker");
    cy.get(rangeSelector).contains("April");
    cy.get(`${rangeSelector} .a-date-picker__day.selected`).contains("5");
  });

  const minAndMaxDateSelector = "#with-minimum-and-maximum-dates + .playground .a-date-picker";

  it("restricts date day selections", () => {
    cy.get(`${minAndMaxDateSelector} .a-date-picker__day:not(.disabled)`).should("have.length", 14);
  });

  const maxDaysSelector = "#date-range-with-maximum-days + .playground .a-date-picker";

  it("only allows a maximum number of days to be selected in a range", () => {
    // Select March 14, 2022
    cy.get(`${maxDaysSelector} .a-date-picker__day`).eq(15).click();

    // Two days before and after March 14 should be enabled
    cy.get(`${maxDaysSelector} .a-date-picker__day:not(.disabled)`).should("have.length", 5);
  });

  it("only allows a maximum number of days to be selected in a range", () => {
    // Select March 16, 2022
    cy.get(`${maxDaysSelector} .a-date-picker__day`).eq(17).click();

    // All days in March should go back to being selectable
    cy.get(`${maxDaysSelector} .a-date-picker__day:not(.disabled)`).should("have.length", 31);
  });
  
  it("allows a maximum number of days to be selected in previous subsequent months", () => {
    // Select January 14, 2022
    cy.get(`${maxDaysSelector} .a-date-picker__prev`).click();
    cy.get(`${maxDaysSelector} .a-date-picker__prev`).click();
    cy.get(`${maxDaysSelector} .a-date-picker__day`).eq(20).click();

    // Two days before and after January 14 should be enabled
    cy.get(`${maxDaysSelector} .a-date-picker__day:not(.disabled)`).should("have.length", 5);    
  });

});
