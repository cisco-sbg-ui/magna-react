import React, {useState} from "react";
import ATabGroup from "./ATabGroup";
import ATab from "./ATab";

describe("<ATabGroup />", () => {
  it("should render", () => {
    cy.mount(<ATagTest />);
  });

  it("should have visisble overflow tab", () => {
    cy.mount(<ATagTest />);
    cy.get(".menu-tab").should("be.visible");
  });

  it("overflow tab should be populated with remaining items", () => {
    cy.mount(<ATagTest />);
    cy.get(".menu-tab").click();
    cy.get(".a-list-item").first().should("be.visible").contains("Five");
  });

  it("should move more items into overflow menu after resize", () => {
    cy.mount(<ATagTest width={"12rem"} />);
    cy.get(".menu-tab").click();
    cy.get(".a-list-item").first().should("be.visible").contains("Three");
  });

  it("should move more items into overflow menu after resize", () => {
    cy.mount(<ATagTest width={"12rem"} />);
    cy.get(".menu-tab").click();
    cy.get(".a-list-item").first().should("be.visible").contains("Three");
  });

  it("should remove overflow menu tab if resized", () => {
    cy.mount(<ATagTest width={"100%"} />);
    cy.get(".menu-tab").should("not.be.visible");
  });

  it("should maintain highlighted state if overflow menu item is selected", () => {
    cy.mount(<ATagTest width={"12rem"} />);
    cy.get(".menu-tab").click();
    cy.get(".a-list-item")
      .last()
      .click()
      .get(".a-list-item--selected")
      .should("exist");
    cy.get("body").click(0, 0);
    cy.get(".a-tab-group__tab--selected").should("exist");
    cy.get(".menu-tab").click();
    cy.get(".a-list-item")
      .get(".a-list-item--selected")
      .should("exist")
      .contains("Seven");
  });

  it("should maintain highlighted state if overflow menu item is selected by keystroke", () => {
    cy.mount(<ATagTest width={"10rem"} />);
    cy.get(".a-tab-group__tab")
      .first()
      .tab({shift: true})
      .contains("More")
      .type("{enter}")
      .get(".a-tab-group__tab--selected")
      .should("exist");
    cy.get(".a-list-item").first().type("{downArrow}").type("{enter}");
    cy.get("body").click(0, 0);
    cy.get(".a-tab-group__tab--selected").should("exist");
    cy.get(".menu-tab").click();
    cy.get(".a-list-item")
      .get(".a-list-item--selected")
      .should("exist")
      .contains("Two");
  });

  it("should not render overflow tab if in vertical position", () => {
    cy.mount(<ATagTest width={"10rem"} vertical />);
    cy.get(".menu-tab").should("not.exist");
  });
});

const ATagTest = ({width = "20rem", vertical = false}) => {
  const tabs = ["One", "Two", "Three", "Four", "Five", "Six", "Seven"];
  const [activeTab, setActiveTab] = useState(tabs[2]);
  return (
    <div style={{width, border: "1px solid red"}}>
      <ATabGroup vertical={vertical}>
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
