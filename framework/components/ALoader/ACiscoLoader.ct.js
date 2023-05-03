import AApp from "../AApp";
import ACiscoLoader from "./ACiscoLoader";

describe("ACiscoLoader component tests", () => {
  it("should render a progress bar", () => {
    mount(
      <AApp>
        <ACiscoLoader />
      </AApp>
    );
    cy.get("div[role='progressbar']").should("exist");
  });

  it("allows custom styling", () => {
    mount(
      <AApp>
        <ACiscoLoader className="custom-class" />
      </AApp>
    );
    cy.get(".custom-class").should("exist");
  });
});
