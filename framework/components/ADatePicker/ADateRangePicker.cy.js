import React, {useState} from "react";
import ADateRangePicker from "./ADateRangePicker";
import useGetADateRange from "./useGetADateRange";

const DateRangePickerTest = () => {
  const {getDateRange} = useGetADateRange();

  return <ADateRangePicker getDateRange={getDateRange} />;
};

describe("<ADateRangePicker />", () => {
  it("should render", () => {
    cy.mount(<DateRangePickerTest />);
  });

  it("should open calendar after click on start input", () => {
    cy.mount(<DateRangePickerTest />);
    cy.get(".a-date-picker__inputs--start").click();
    cy.get(".a-date-picker").should("be.visible");
  });

  it("should open calendar after click on end input", () => {
    cy.mount(<DateRangePickerTest />);
    cy.get(".a-date-picker__inputs--end").click();
    cy.get(".a-date-picker").should("be.visible");
  });

  it("should pick date on calendar after date input", () => {
    cy.mount(<DateRangePickerTest />);
    cy.get("input").first().click().type("7/23/2023");
    cy.get(".selected").should("exist").contains("23");
  });

  it("should fill in dates to fields after calendar selection", () => {
    cy.mount(<DateRangePickerTest />);
    cy.get(".a-date-picker__inputs--start").click();

    cy.get(".a-date-picker__day__label").contains("15").click();
    cy.get(".a-date-picker__inputs--start .a-text-input__input")
      .should("have.prop", "value")
      .should("not.be.empty");
    cy.get(".a-date-picker__day__label").contains("20").click();
    cy.get(".a-date-picker__inputs--end .a-text-input__input")
      .should("have.prop", "value")
      .should("not.be.empty");
  });

  it("should fill end date in field after calendar selection", () => {
    cy.mount(<DateRangePickerTest />);
    cy.get(".a-date-picker__inputs--start").click();

    cy.get(".a-date-picker__day__label").contains("15").click();
    cy.get(".a-date-picker__inputs--start .a-text-input__input")
      .should("have.prop", "value")
      .should("not.be.empty");
  });

  it("should close on outside click", () => {
    cy.mount(<DateRangePickerTest />);
    cy.get(".a-date-picker__inputs--start").click();
    cy.get("body").click(0, 0, {force: true});
    cy.get(".a-date-picker").should("not.exist");
  });
});
