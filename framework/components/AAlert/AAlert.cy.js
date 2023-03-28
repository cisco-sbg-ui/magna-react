import React from "react";
import AAlert from "./AAlert";

describe("<AAlert />", () => {
  it("renders", () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<AAlert />);
  });

  it("renders with text", () => {
    cy.mount(<AAlert>Text content</AAlert>);
  });

  it("renders a success level", () => {
    cy.mount(<AAlert level="success">Success</AAlert>);
  });

  it("renders a warning level", () => {
    cy.mount(<AAlert level="warning">Warning</AAlert>);
  });

  it("renders a danger level", () => {
    cy.mount(<AAlert level="danger">Danger</AAlert>);
  });
});
