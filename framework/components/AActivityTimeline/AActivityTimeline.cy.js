import React from "react";
import {
  AActivityTimeline,
  AActivityTimelineItem,
  AActivityTimelineItemBody,
  AActivityTimelineItemTitle
} from ".";

describe("<AActivityTimeline />", () => {
  it("should render a caret icon if the timeline item is expandable", () => {
    cy.mount(
      <AActivityTimeline>
        <AActivityTimelineItem isExpandable>
          <AActivityTimelineItemTitle>Mock Title</AActivityTimelineItemTitle>
        </AActivityTimelineItem>
      </AActivityTimeline>
    );

    cy.get(".a-icon--caret-down").should("be.visible");

    cy.get("button").click();

    cy.get(".a-icon--caret-down").should("not.exist");
    cy.get(".a-icon--caret-up").should("be.visible");
  });

  it("should not render a caret icon if the timeline item is not expandable", () => {
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

  it("should hide body content by default if the timeline item is expandable", () => {
    cy.mount(
      <AActivityTimeline>
        <AActivityTimelineItem isExpandable>
          <AActivityTimelineItemTitle>Mock Title</AActivityTimelineItemTitle>
          <AActivityTimelineItemBody>
            <div data-testid="mock-content">Mock content</div>
          </AActivityTimelineItemBody>
        </AActivityTimelineItem>
      </AActivityTimeline>
    );

    cy.getByDataTestId("mock-content").should("not.be.visible");
  });

  it("should always show body content if the timeline item is not expandable", () => {
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

  it("should allow body content to be initially expanded", () => {
    cy.mount(
      <AActivityTimeline>
        <AActivityTimelineItem isExpandable isInitExpanded>
          <AActivityTimelineItemTitle>Mock Title</AActivityTimelineItemTitle>
          <AActivityTimelineItemBody>
            <div data-testid="mock-content">Mock content</div>
          </AActivityTimelineItemBody>
        </AActivityTimelineItem>
      </AActivityTimeline>
    );

    cy.getByDataTestId("mock-content").should("be.visible");
  });

  it("should unhide body content when the timeline title is clicked", () => {
    cy.mount(
      <AActivityTimeline>
        <AActivityTimelineItem isExpandable>
          <AActivityTimelineItemTitle>Mock Title</AActivityTimelineItemTitle>
          <AActivityTimelineItemBody>
            <div data-testid="mock-content">Mock content</div>
          </AActivityTimelineItemBody>
        </AActivityTimelineItem>
      </AActivityTimeline>
    );

    cy.get("button").click();
    cy.getByDataTestId("mock-content").should("be.visible");
  });

  it("should unhide body content when the caret icon is clicked", () => {
    cy.mount(
      <AActivityTimeline>
        <AActivityTimelineItem isExpandable>
          <AActivityTimelineItemTitle>Mock Title</AActivityTimelineItemTitle>
          <AActivityTimelineItemBody>
            <div data-testid="mock-content">Mock content</div>
          </AActivityTimelineItemBody>
        </AActivityTimelineItem>
      </AActivityTimeline>
    );

    cy.get(".a-icon--caret-down").click();
    cy.getByDataTestId("mock-content").should("be.visible");
  });

  it("should render left borders for each inner timeline item", () => {
    cy.mount(
      <AActivityTimeline>
        {[...new Array(5).keys()]
          .map((num) => `Mock Title ${num}`)
          .map(({title, index}) => {
            return (
              <AActivityTimelineItem key={index}>
                <AActivityTimelineItemTitle>{title}</AActivityTimelineItemTitle>
              </AActivityTimelineItem>
            );
          })}
      </AActivityTimeline>
    );

    // https://stackoverflow.com/a/75887385
    cy.get(".a-activity-timeline__list-item").each(($el, index, $list) => {
      const subject = $el[0];
      const window = subject.ownerDocument.defaultView;
      const before = window.getComputedStyle(subject, "before");
      const borderValue = before.getPropertyValue("border-left");

      if (index < $list.length - 1) {
        expect(borderValue).contains("2px solid");
      } else {
        // Expect there to be no vertical border
        expect(borderValue).contains("none");
      }
    });
  });

  it("should render a left border if there is only one timeline item", () => {
    cy.mount(
      <AActivityTimeline>
        <AActivityTimelineItem>
          <AActivityTimelineItemTitle>Mock Title</AActivityTimelineItemTitle>
        </AActivityTimelineItem>
      </AActivityTimeline>
    );

    cy.get(".a-activity-timeline__list-item").then(($el) => {
      const subject = $el[0];
      const window = subject.ownerDocument.defaultView;
      const before = window.getComputedStyle(subject, "before");
      const borderValue = before.getPropertyValue("border-left");
      expect(borderValue).contains("2px solid");
    });
  });
});
