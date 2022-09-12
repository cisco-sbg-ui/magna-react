import {mount} from "@cypress/react";

import AApp from "../AApp";
import APageLoader from "./APageLoader";

describe("APageLoader component tests", () => {
  it("should render small", () => {
    mount(
      <AApp>
        <APageLoader size="small" />
      </AApp>
    );
    cy.get(".a-page-loader--size-small").should("exist");
  });

  it("should render medium", () => {
    mount(
      <AApp>
        <APageLoader size="medium" />
      </AApp>
    );
    cy.get(".a-page-loader--size-medium").should("exist");
  });

  it("should render large", () => {
    mount(
      <AApp>
        <APageLoader size="large" />
      </AApp>
    );
    cy.get(".a-page-loader--size-large").should("exist");
  });

  it("allows custom styling", () => {
    mount(
      <AApp>
        <APageLoader className="custom-class" />
      </AApp>
    );
    cy.get(".custom-class").should("exist");
  });
});
