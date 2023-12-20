import React, {useState} from "react";
import ATabGroup from "./ATabGroup";
import ATab from "./ATab";

describe("<ATabGroup />", () => {
  it("should render", () => {
    cy.mount(<ATabTest />);
  });

  it("should have primary style", () => {
    cy.mount(<ATabTest />);
    cy.get(".a-tab-group__tab--selected").should(
      "have.css",
      "color",
      "rgb(35, 40, 46)"
    );
    cy.get(".a-tab-group__tab--selected").should(
      "have.css",
      "box-shadow",
      "rgb(69, 153, 31) 0px -4px 0px -1px inset"
    );
  });

  it("should have secondary style", () => {
    cy.mount(<ATabTest secondary />);
    cy.get(".a-tab-group__tab--secondary").should("exist");
    cy.get(".a-tab-group__tab--selected").should(
      "have.css",
      "color",
      "rgb(29, 105, 204)"
    );
    cy.get(".a-tab-group__tab--selected").should(
      "have.css",
      "box-shadow",
      "rgb(29, 105, 204) 0px -4px 0px -1px inset"
    );
  });

  it("should have visible overflow tab", () => {
    cy.mount(<ATabTest />);
    cy.get(".menu-tab").should("be.visible");
  });

  it("overflow tab should be populated with remaining items", () => {
    cy.mount(<ATabTest />);
    cy.get(".menu-tab").click();
    cy.get(".a-list-item").first().should("be.visible").contains("Six");
  });

  it("should move more items into overflow menu after resize", () => {
    cy.mount(<ATabTest width={"20rem"} />);
    cy.get(".menu-tab").click();
    cy.get(".a-list-item").first().should("be.visible").contains("Four");
  });

  it("should move even more items into overflow menu after resize", () => {
    cy.mount(<ATabTest width={"15rem"} />);
    cy.get(".menu-tab").click();
    cy.get(".a-list-item").first().should("be.visible").contains("Three");
  });

  it("should remove overflow menu tab if resized", () => {
    cy.mount(<ATabTest width={"100%"} />);
    cy.get(".menu-tab").should("not.be.visible");
  });

  it("should maintain highlighted state if overflow menu item is selected", () => {
    cy.mount(<ATabTest width={"15rem"} />);
    cy.get(".menu-tab").click();
    cy.get(".a-list-item")
      .last()
      .click()
      .get(".menu-tab")
      .click()
      .get(".a-menu-base")
      .get(".a-list-item--selected")
      .contains("Seven");
  });

  it("should maintain highlighted state if overflow menu item is selected by keystroke", () => {
    cy.mount(<ATabTest width={"15rem"} />);
    cy.get(".a-tab-group__tab")
      .first()
      .tab({shift: true})
      .contains("More")
      .type("{enter}")
      .get(".a-tab-group__tab--selected")
      .should("exist");
    cy.get(".a-list-item").first().next().type("{enter}");
    cy.get("body").click(0, 0);
    cy.get(".a-tab-group__tab--selected").should("exist");
    cy.get(".menu-tab").click();
    cy.get(".a-list-item")
      .get(".a-list-item--selected")
      .should("exist")
      .contains("Four");
  });

  it("should not render overflow tab if in vertical position", () => {
    cy.mount(<ATabTest width={"15rem"} vertical />);
    cy.get(".menu-tab").should("not.exist");
  });
});

const ATabTest = ({width = "30rem", vertical = false, secondary = false}) => {
  const tabs = ["One", "Two", "Three", "Four", "Five", "Six", "Seven"];
  const [activeTab, setActiveTab] = useState(tabs[2]);
  return (
    <div style={{width, border: "1px solid red"}}>
      <ATabGroup vertical={vertical} secondary={secondary}>
        {tabs.map((x) => (
          <ATab
            key={x}
            tabKey={x}
            onClick={() => setActiveTab(x)}
            selected={x === activeTab}
          >
            {x}
          </ATab>
        ))}
      </ATabGroup>
      ;
    </div>
  );
};
