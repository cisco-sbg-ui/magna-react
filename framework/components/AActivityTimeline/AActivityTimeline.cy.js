import React, {useState} from "react";
import AActivityTimeline from "./AActivityTimeline";
import AActivityTimelineItem from "./AActivityTimelineItem";

const DEFAULT_BORDER_STYLE = "2px solid rgb(225, 228, 232)";
const COMPLETE_STATUS_BORDER_STYLE = "2px solid rgb(29, 105, 204)";

describe("<AActivityTimeline />", () => {
  it("should render left borders for each inner timeline item", () => {
    cy.mount(<UncontrolledTimelineTest itemCount={5} />);

    cy.get(".a-activity-timeline__list-item").each(($el, index, $list) => {
      cy.getPseudoElementStyle($el, ":before", "border-left").then(
        (borderStyle) => {
          expect(borderStyle).contains(
            index < $list.length - 1 ? DEFAULT_BORDER_STYLE : "0"
          );
        }
      );
    });
  });

  it("should render a timeline item connector if there is only one timeline item", () => {
    cy.mount(<UncontrolledTimelineTest itemCount={1} />);

    cy.get(".a-activity-timeline__list-item")
      .then(($el) => cy.getPseudoElementStyle($el, ":before", "border-left"))
      .then((borderStyle) => {
        expect(borderStyle).contains(DEFAULT_BORDER_STYLE);
      });
  });

  it("should always render a timeline item connector if the prop for it is passed", () => {
    cy.mount(
      <UncontrolledTimelineTest>
        <AActivityTimelineItem time="Mock time" title="Mock title" />
        <AActivityTimelineItem time="Mock time" title="Mock title" />
        <AActivityTimelineItem
          time="Mock time"
          title="Mock title"
          withConnector={true} // If not passed, the timeline item connector would be hidden by default since this is the last item
        />
      </UncontrolledTimelineTest>
    );

    cy.get(".a-activity-timeline__list-item").each(($el) => {
      cy.getPseudoElementStyle($el, ":before", "border-left").then(
        (borderStyle) => {
          expect(borderStyle).contains(DEFAULT_BORDER_STYLE);
        }
      );
    });
  });

  it("should render a blue timeline item connector if the item is complete", () => {
    cy.mount(
      <UncontrolledTimelineTest>
        <AActivityTimelineItem
          status="complete"
          time="Mock time"
          title="Mock title"
        />
      </UncontrolledTimelineTest>
    );

    cy.get(".a-activity-timeline__list-item")
      .then(($el) => cy.getPseudoElementStyle($el, ":before", "border-left"))
      .then((borderStyle) => {
        expect(borderStyle).contains(COMPLETE_STATUS_BORDER_STYLE);
      });
  });

  it("should render the neutral icon if the variant cannot be resolved", () => {
    cy.mount(
      <UncontrolledTimelineTest>
        <AActivityTimelineItem
          variant="something-that-does-not-exist"
          title="Mock title"
        />
      </UncontrolledTimelineTest>
    );

    cy.getByDataTestId("AActivityTimelineItemIcon-Neutral").should(
      "be.visible"
    );
  });

  it("should render a divider for collapsible items by default", () => {
    cy.mount(<UncontrolledTimelineTest itemCount={5} />);

    cy.get(".a-activity-timeline__list-item__divider")
      .should("have.lengthOf", 5)
      .each(($el, index, list) => {
        if (index < list.length - 1) {
          cy.wrap($el).should("be.visible");
        } else {
          // The very last item's divider should not be visible
          cy.wrap($el).should("not.be.visible");
        }
      });
  });

  it("should allow the divider to be conditionally rendered for collapsible items", () => {
    cy.mount(
      <UncontrolledTimelineTest>
        {[...new Array(5).keys()].map((itemNum) => (
          <AActivityTimelineItem
            defaultCollapsed={false}
            withDivider={false}
            key={itemNum}
            title={`Mock title #${itemNum}`}
          >
            {`Mock body content #${itemNum}`}
          </AActivityTimelineItem>
        ))}
      </UncontrolledTimelineTest>
    );

    cy.get(".a-activity-timeline__list-item__divider")
      .should("have.lengthOf", 0)
      .each(($el) => {
        cy.wrap($el).should("not.be.visible");
      });
  });

  describe("when the item is not collapsible", () => {
    it("should not render a caret icon", () => {
      cy.mount(
        <AActivityTimeline>
          <AActivityTimelineItem title="Mock Title" />
        </AActivityTimeline>
      );

      cy.get(".a-icon--caret-down").should("not.exist");
      cy.get(".a-icon--caret-up").should("not.exist");
    });

    it("should never hide body content", () => {
      cy.mount(
        <AActivityTimeline>
          <AActivityTimelineItem title="Mock title">
            <div data-testid="mock-content">Mock content</div>
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
          <AActivityTimelineItem
            isCollapsible
            defaultCollapsed={false}
            title="Mock title"
          >
            <div data-testid="mock-content">Mock body content</div>
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
          <AActivityTimelineItem
            isCollapsible
            isCollapsed={false}
            title="Mock Title"
          >
            <div data-testid="mock-content">Mock body content</div>
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
      {children
        ? children
        : createTestData(itemCount).map((item, index) => (
            <AActivityTimelineItem
              key={index}
              isCollapsible
              defaultCollapsed
              title={item.title}
            >
              <div data-testid={`mock-content-${index}`}>{item.body}</div>
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
      {children
        ? children
        : createTestData(itemCount).map((item, index) => (
            <AActivityTimelineItem
              key={index}
              isCollapsible
              isCollapsed={getCollapsedState(index)}
              onToggle={getItemToggler(index)}
              title={item.title}
            >
              <div data-testid={`mock-content-${index}`}>{item.body}</div>
            </AActivityTimelineItem>
          ))}
    </AActivityTimeline>
  );
}
