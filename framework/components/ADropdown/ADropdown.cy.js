import ADropdown from "./ADropdown";
import AIcon from "../AIcon";

describe("<Dropdown/>", () => {
  it("should render", () => {
    cy.mount(<ADropdown title="dropdown" />);
  });

  it("should have title icon", () => {
    cy.mount(<ADropdown title={<AIcon>users</AIcon>} />);
    cy.get(".a-button .a-icon--users").should("be.visible");
  });

  it("should change variant", () => {
    cy.mount(<ADropdown secondary title="dropdown" />);
    cy.get(".a-button--secondary").should("exist");
  });

  it("should show loading icon", () => {
    cy.mount(<ADropdown secondary title="dropdown" loading />);
    cy.get(".a-button .a-spinner").should("be.visible");
  });

  it("should expand on click", () => {
    cy.mount(
      <ADropdown secondary title="dropdown">
        <p>test</p>
      </ADropdown>
    );
    cy.get(".a-button").click();
    cy.get(".a-menu").should("exist");
  });
});
