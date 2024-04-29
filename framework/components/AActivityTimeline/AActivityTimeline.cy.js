import React, {useState} from "react";
import {
  AActivityTimeline,
  AActivityTimelineItem,
  AActivityTimelineItemBody,
  AActivityTimelineItemTitle
} from ".";

describe("<AActivityTimeline />", () => {
  it("should render left borders for each inner timeline item", () => {
    cy.mount(<UncontrolledTimelineTest itemCount={5} />);

    cy.get(".a-activity-timeline__list-item").each(($el, index, $list) => {
      // https://stackoverflow.com/a/75887385
      const subject = $el[0];
      const window = subject.ownerDocument.defaultView;
      const before = window.getComputedStyle(subject, "before");
      const borderValue = before.getPropertyValue("border-left");

      if (index < $list.length - 1) {
        expect(borderValue).contains("2px solid");
      } else {
        // The very last item should not have a left border
        expect(borderValue).contains("none");
      }
    });
  });

  it("should render a left border if there is only one timeline item", () => {
    cy.mount(<UncontrolledTimelineTest itemCount={1} />);

    cy.get(".a-activity-timeline__list-item").then(($el) => {
      // https://stackoverflow.com/a/75887385
      const subject = $el[0];
      const window = subject.ownerDocument.defaultView;
      const before = window.getComputedStyle(subject, "before");
      const borderValue = before.getPropertyValue("border-left");
      expect(borderValue).contains("2px solid");
    });
  });

  describe("when the item is not collapsible", () => {
    it("should not render a caret icon", () => {
      cy.mount(
        <AActivityTimeline>
          <AActivityTimelineItem>
            <AActivityTimelineItemTitle>Mock Title</AActivityTimelineItemTitle>
          </AActivityTimelineItem>
        </AActivityTimeline>
      );

      cy.get(".a-icon--caret-down").should("not.exist");
      cy.get(".a-icon--caret-up").should("not.exist");
    });

    it("should never hide body content", () => {
      cy.mount(
        <AActivityTimeline>
          <AActivityTimelineItem>
            <AActivityTimelineItemTitle>Mock Title</AActivityTimelineItemTitle>
            <AActivityTimelineItemBody>
              <div data-testid="mock-content">Mock content</div>
            </AActivityTimelineItemBody>
          </AActivityTimelineItem>
        </AActivityTimeline>
      );

      cy.getByDataTestId("mock-content").should("be.visible");
    });
  });

  describe("when the item's collapsed state is uncontrolled", () => {
    it("should render a caret icon ", () => {
      cy.mount(<UncontrolledTimelineTest />);

      cy.get(".a-icon--caret-down").should("be.visible");
    });

    it("should hide the body content by default", () => {
      cy.mount(<UncontrolledTimelineTest />);

      cy.getByDataTestId("mock-content-0").should("not.be.visible");
    });

    it("should allow the initial collapsed state to be overridden", () => {
      cy.mount(
        <UncontrolledTimelineTest>
          <AActivityTimelineItem defaultCollapsed={false}>
            <AActivityTimelineItemTitle>Mock title</AActivityTimelineItemTitle>
            <AActivityTimelineItemBody>
              <div data-testid="mock-content">Mock body content</div>
            </AActivityTimelineItemBody>
          </AActivityTimelineItem>
        </UncontrolledTimelineTest>
      );

      cy.getByDataTestId("mock-content").should("be.visible");
    });

    it("should toggle the body content", () => {
      cy.mount(<UncontrolledTimelineTest />);

      cy.getByDataTestId("mock-content-0").should("not.be.visible");
      cy.get("button").click();
      cy.getByDataTestId("mock-content-0").should("be.visible");
      cy.get("button").click();
      cy.getByDataTestId("mock-content-0").should("not.be.visible");
    });

    it("should toggle the caret icon", () => {
      cy.mount(<UncontrolledTimelineTest />);

      cy.get(".a-icon--caret-down").should("be.visible");
      cy.get("button").click();
      cy.get(".a-icon--caret-down").should("not.exist");
      cy.get(".a-icon--caret-up").should("be.visible");
    });

    it("should toggle the aria expanded attribute", () => {
      cy.mount(<UncontrolledTimelineTest />);

      cy.get("button")
        .should("have.attr", "aria-expanded", "false")
        .click()
        .should("have.attr", "aria-expanded", "true");
    });

    it("should allow collapsible content to be toggled by clicking the caret icons", () => {
      cy.mount(<UncontrolledTimelineTest />);

      cy.getByDataTestId("mock-content-0").should("not.be.visible");
      cy.get(".a-icon--caret-down").click();
      cy.getByDataTestId("mock-content-0").should("be.visible");
      cy.get(".a-icon--caret-up").click();
      cy.getByDataTestId("mock-content-0").should("not.be.visible");
    });
  });

  describe("when the item's collapsed state is controlled", () => {
    it("should render a caret icon ", () => {
      cy.mount(<UncontrolledTimelineTest />);

      cy.get(".a-icon--caret-down").should("be.visible");
    });

    it("should allow the initial state to be entirely controlled", () => {
      cy.mount(
        <ControlledTimelineTest>
          <AActivityTimelineItem isCollapsed={false}>
            <AActivityTimelineItemTitle>Mock title</AActivityTimelineItemTitle>
            <AActivityTimelineItemBody>
              <div data-testid="mock-content">Mock body content</div>
            </AActivityTimelineItemBody>
          </AActivityTimelineItem>
        </ControlledTimelineTest>
      );

      cy.getByDataTestId("mock-content").should("be.visible");
    });

    it("should toggle the body content", () => {
      cy.mount(<ControlledTimelineTest />);

      cy.getByDataTestId("mock-content-0").should("not.be.visible");
      cy.get("button").click();
      cy.getByDataTestId("mock-content-0").should("be.visible");
      cy.get("button").click();
      cy.getByDataTestId("mock-content-0").should("not.be.visible");
    });

    it("should toggle the caret icon", () => {
      cy.mount(<ControlledTimelineTest />);

      cy.get(".a-icon--caret-down").should("be.visible");
      cy.get("button").click();
      cy.get(".a-icon--caret-down").should("not.exist");
      cy.get(".a-icon--caret-up").should("be.visible");
    });

    it("should allow collapsible content to be toggled by clicking the caret icons", () => {
      cy.mount(<ControlledTimelineTest />);

      cy.getByDataTestId("mock-content-0").should("not.be.visible");
      cy.get(".a-icon--caret-down").click();
      cy.getByDataTestId("mock-content-0").should("be.visible");
      cy.get(".a-icon--caret-up").click();
      cy.getByDataTestId("mock-content-0").should("not.be.visible");
    });
  });
});

function createTestData(count) {
  return [...new Array(count)].map((_, index) => ({
    title: `Mock title #${index}`,
    body: `Mock body content #${index}`
  }));
}

function UncontrolledTimelineTest({children, itemCount = 1}) {
  return (
    <AActivityTimeline>
      {React.isValidElement(children)
        ? children
        : createTestData(itemCount).map((item, index) => (
            <AActivityTimelineItem defaultCollapsed key={index}>
              <AActivityTimelineItemTitle>
                {item.title}
              </AActivityTimelineItemTitle>
              <AActivityTimelineItemBody>
                <div data-testid={`mock-content-${index}`}>{item.body}</div>
              </AActivityTimelineItemBody>
            </AActivityTimelineItem>
          ))}
    </AActivityTimeline>
  );
}

function ControlledTimelineTest({children, itemCount = 1}) {
  const [openedIndex, setOpenedIndex] = useState({});
  /**
   * Higher order function
   */
  const getItemToggler = (index) => {
    return () => {
      setOpenedIndex((currState) => ({
        ...currState,
        [index]: !currState[index]
      }));
    };
  };
  const getCollapsedState = (index) => {
    const isOpened = openedIndex[index];
    return !isOpened;
  };

  return (
    <AActivityTimeline>
      {React.isValidElement(children)
        ? children
        : createTestData(itemCount).map((item, index) => (
            <AActivityTimelineItem
              isCollapsed={getCollapsedState(index)}
              onCollapse={getItemToggler(index)}
              key={index}
            >
              <AActivityTimelineItemTitle>
                {item.title}
              </AActivityTimelineItemTitle>
              <AActivityTimelineItemBody>
                <div data-testid={`mock-content-${index}`}>{item.body}</div>
              </AActivityTimelineItemBody>
            </AActivityTimelineItem>
          ))}
    </AActivityTimeline>
  );
}
