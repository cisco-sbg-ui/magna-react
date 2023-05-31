import AButton from "./AButton";
import AIcon from "../AIcon";

describe("<AButton/>", () => {
  it("should render", () => {
    cy.mount(<AButton />);
  });

  it("should not have icon when loading", () => {
    cy.mount(
      <AButton loading>
        <AIcon left>edit</AIcon>
        test
      </AButton>
    );
    cy.get(".a-button .a-icon").should("be.not.visible");
  });

  it("should have icon", () => {
    cy.mount(
      <AButton>
        <AIcon left>edit</AIcon>
        test
      </AButton>
    );

    cy.get(".a-button .a-icon").should("be.visible");
  });
});
