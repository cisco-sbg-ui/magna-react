import React from "react";
import {AButton, AIcon, ABadge} from "../../framework";
import type {ABadgeProps} from "../../framework";
import {hexToRgb} from "./helpers";

const ABadgeTest = (props: ABadgeProps) => {
  return (
    <div style={{margin: "0 auto", padding: "200px"}}>
      <ABadge {...props}>
        <AButton icon onClick={() => {}}>
          <AIcon>bell</AIcon>
        </AButton>
      </ABadge>
    </div>
  );
};

describe("<ABadge />", () => {
  it("should render the notify variant defaults", () => {
    cy.mount(<ABadgeTest content="99+" />);

    cy.getByAriaLabel("badge").should("have.text", "99+");
    cy.getByAriaLabel("badge").should("have.class", "a-badge__badge--notify");
    cy.getByAriaLabel("badge").should(
      "have.css",
      "background-color",
      hexToRgb("cc2d37")
    );
    cy.getByAriaLabel("badge").should("have.class", "a-badge__badge--medium");
  });

  it("should render the counter variant small", () => {
    cy.mount(<ABadgeTest counter content="5" small label="counter-badge" />);

    cy.getByAriaLabel("counter-badge").should("have.text", "5");
    cy.getByAriaLabel("counter-badge").should(
      "have.class",
      "a-badge__badge--counter"
    );
    cy.getByAriaLabel("counter-badge").should(
      "have.css",
      "background-color",
      hexToRgb("e1e4e8")
    );
    cy.getByAriaLabel("counter-badge").should(
      "have.class",
      "a-badge__badge--small"
    );
  });

  it("should render the dot variant", () => {
    cy.mount(<ABadgeTest dot label="dot-badge" />);

    cy.getByAriaLabel("dot-badge").should("have.class", "a-badge__badge--dot");

    //Should be default of red in notify
    cy.getByAriaLabel("dot-badge").should(
      "have.class",
      "a-badge__badge--notify"
    );

    cy.getByAriaLabel("dot-badge").invoke("height").should("gte", 10);
    cy.getByAriaLabel("dot-badge").invoke("width").should("gte", 10);
  });

  it("dot variant should not be impacted by size classes", () => {
    cy.mount(<ABadgeTest dot label="dot-badge" large />);

    cy.getByAriaLabel("dot-badge").invoke("height").should("gte", 10);
    cy.getByAriaLabel("dot-badge").invoke("width").should("gte", 10);
  });

  it("should render the alert variant", () => {
    cy.mount(<ABadgeTest alertType="positive" label="alert-badge" />);

    cy.getByAriaLabel("alert-badge").should(
      "have.class",
      "a-badge__badge--alert-positive"
    );
  });

  it("alert variant should not be impacted by size classes", () => {
    cy.mount(<ABadgeTest alertType="warning" label="alert-badge" small />);

    cy.getByAriaLabel("alert-badge").should(
      "have.class",
      "a-badge__badge--alert-warning"
    );
    cy.get(".a-icon").should("have.class", "a-icon--warning");
    cy.get(".a-icon").invoke("height").should("gte", 24);
    cy.get(".a-icon").invoke("width").should("gte", 24);
  });
});
