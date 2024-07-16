import React, {useState} from "react";
import AAccordion from "./AAccordion";
import AAccordionPanel from "./AAccordionPanel";
import AAccordionHeader from "./AAccordionHeader";
import AAccordionHeaderTitle from "./AAccordionHeaderTitle";
import AAccordionBody from "./AAccordionBody";

describe("<AAccordion />", () => {
  it("should allow custom icons", () => {
    cy.mount(<CustomIconTest />);

    // Check for custom expand icon
    cy.getByAriaLabel("cube icon").should("be.visible");

    // Expand accordion
    cy.get("div[role='button']").eq(0).click();

    // Check for custom collapse icon
    cy.getByAriaLabel("chat-dots icon").should("be.visible");
  });
  describe("when used as an uncontrolled component", () => {
    beforeEach(() => {
      cy.mount(<UncontrolledAccordionTest />);
    });

    it("should not show collapsed content", () => {
      cy.getByDataTestId("panel-1-content").should("not.be.visible");
      cy.getByDataTestId("panel-2-content").should("not.be.visible");
      cy.getByDataTestId("panel-3-content").should("not.be.visible");
    });

    it("should show expanded content", () => {
      cy.getByDataTestId("panel-1-btn").click();
      cy.getByDataTestId("panel-1-content").should("be.visible");
    });

    it("should focus to the next accordion on tab presses", () => {
      // Focus to first accordion
      cy.get("div[role='button']").eq(0).click();
      cy.get("div[role='button']").eq(0).should("have.focus");

      // Tab to second accordion
      cy.get("div[role='button']").eq(0).tab();
      cy.get("div[role='button']").eq(1).should("have.focus");

      // Tab to third accordion
      cy.get("div[role='button']").eq(1).tab();
      cy.get("div[role='button']").eq(2).should("have.focus");
    });
  });

  describe("when used as a controlled component", () => {
    beforeEach(() => {
      cy.mount(<ControlledAccordionTest />);
    });

    it("should not show collapsed content", () => {
      cy.getByDataTestId("panel-1-content").should("not.be.visible");
      cy.getByDataTestId("panel-2-content").should("not.be.visible");
      cy.getByDataTestId("panel-3-content").should("not.be.visible");
    });

    it("should show expanded content", () => {
      cy.getByDataTestId("panel-1-btn").click();
      cy.getByDataTestId("panel-1-content").should("be.visible");
    });

    it("should focus to the next accordion on tab presses", () => {
      // Focus to first accordion
      cy.get("div[role='button']").eq(0).click();
      cy.get("div[role='button']").eq(0).should("have.focus");

      // Tab to second accordion
      cy.get("div[role='button']").eq(0).tab();
      cy.get("div[role='button']").eq(1).should("have.focus");

      // Tab to third accordion
      cy.get("div[role='button']").eq(1).tab();
      cy.get("div[role='button']").eq(2).should("have.focus");
    });
  });
});

const testPanels = [
  {
    name: "panel 1",
    content: "test panel",
    collapsed: true,
    testBtnId: "panel-1-btn",
    testContentId: "panel-1-content"
  },
  {
    name: "panel 2",
    content: "test panel",
    collapsed: true,
    testBtnId: "panel-2-btn",
    testContentId: "panel-2-content"
  },
  {
    name: "panel 3",
    content: "test panel",
    collapsed: true,
    testBtnId: "panel-3-btn",
    testContentId: "panel-3-content"
  }
];

function CustomIconTest() {
  return (
    <AAccordion>
      <AAccordionPanel>
        <AAccordionHeader>
          <AAccordionHeaderTitle expandIcon="cube" collapseIcon="chat-dots">
            accordion title
          </AAccordionHeaderTitle>
        </AAccordionHeader>
        <AAccordionBody>panel content</AAccordionBody>
      </AAccordionPanel>
    </AAccordion>
  );
}

function UncontrolledAccordionTest() {
  return (
    <AAccordion>
      {testPanels.map((panel, index) => (
        <AAccordionPanel key={index}>
          <AAccordionHeader data-testid={panel.testBtnId}>
            <AAccordionHeaderTitle>{panel.name}</AAccordionHeaderTitle>
          </AAccordionHeader>
          <AAccordionBody data-testid={panel.testContentId}>
            {panel.content}
          </AAccordionBody>
        </AAccordionPanel>
      ))}
    </AAccordion>
  );
}

function ControlledAccordionTest() {
  const [panels, setPanels] = useState(testPanels);
  return (
    <AAccordion>
      {panels.map((panel, index) => (
        <AAccordionPanel
          key={index}
          collapsed={panel.collapsed}
          panelKey={index.toString()}
          onToggle={(panelKey) =>
            setPanels(
              panels.map((panel, index) => {
                if (panelKey === index.toString()) {
                  panel.collapsed = !panel.collapsed;
                }
                return panel;
              })
            )
          }
        >
          <AAccordionHeader data-testid={panel.testBtnId}>
            <AAccordionHeaderTitle>{panel.name}</AAccordionHeaderTitle>
          </AAccordionHeader>
          <AAccordionBody data-testid={panel.testContentId}>
            {panel.content}
          </AAccordionBody>
        </AAccordionPanel>
      ))}
    </AAccordion>
  );
}
