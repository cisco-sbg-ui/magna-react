import {useState} from "react";
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
    cy.get(".a-floating-menu").should("exist");
  });

  it("should open from external source", () => {
    cy.mount(
      <ADropdown isOpen secondary title="dropdown">
        <p>test</p>
      </ADropdown>
    );

    cy.get(".a-floating-menu").should("exist");
  });

  it("should open from external source", () => {
    cy.mount(
      <ADropdown isOpen secondary title="dropdown">
        <p>test</p>
      </ADropdown>
    );

    cy.get(".a-floating-menu").should("exist");
  });

  it("should be closable by escape when manually controlled", () => {
    cy.mount(
      <ManualDropdown secondary title="dropdown">
        <p>test</p>
      </ManualDropdown>
    );

    cy.get(".a-floating-menu").should("exist");

    cy.escapeKeydown();

    cy.get(".a-floating-menu").should("not.exist");
  });

  it("should be closable by clicking the anchor when manually controlled", () => {
    cy.mount(
      <ManualDropdown secondary title="dropdown">
        <p>test</p>
      </ManualDropdown>
    );

    cy.get(".a-floating-menu").should("exist");

    cy.get(".a-button").click();

    cy.get(".a-floating-menu").should("not.exist");
  });
});

const ManualDropdown = ({...props}) => {
  const [open, setOpen] = useState(true);

  return (
    <ADropdown
      isOpen={open}
      title="dropdown"
      onClick={() => setOpen(!open)}
      onClose={() => {
        setOpen(false);
      }}
      {...props}
    >
      <p>test</p>
    </ADropdown>
  );
};
