import React, {useState} from "react";
import ASwitch from "./ASwitch";

describe("<ASwitch />", () => {
  it("should render", () => {
    cy.mount(<ASwitchTest />);
  });

  it("should have base class", () => {
    cy.mount(<ASwitchTest />);

    cy.get(".a-switch").should("exist");
  });

  it("should check on click", () => {
    cy.mount(<ASwitchTest />);

    cy.get(".a-switch").click();
    cy.get(".a-switch__input")
      .invoke("attr", "aria-checked")
      .should("equal", "true");

    cy.get(".a-switch").click();
    cy.get(".a-switch__input")
      .invoke("attr", "aria-checked")
      .should("equal", "false");
  });

  it("should check on keyboard enter", () => {
    cy.mount(<ASwitchTest />);

    // Toggle on
    cy.get(".a-switch__input").focus().type("{enter}");
    cy.get(".a-switch__input")
      .invoke("attr", "aria-checked")
      .should("equal", "true");

    // Toggle off
    cy.get(".a-switch__input").focus().type("{enter}");
    cy.get(".a-switch__input")
      .invoke("attr", "aria-checked")
      .should("equal", "false");
  });
});

const ASwitchTest = () => {
  const [checked, setChecked] = useState(false);

  return (
    <ASwitch
      checked={checked}
      onClick={() => {
        setChecked(!checked);
      }}
    >
      Test switch
    </ASwitch>
  );
};
