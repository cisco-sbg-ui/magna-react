/* eslint-disable cypress/no-unnecessary-waiting */
/**
 * We need to disable cypress/no-unnecessary-waiting because Cypress doesn't
 * know we have a timeout delay on our tooltip content.
 *
 * For example, after hovering a tooltip, we assert:
 * cy.getByDataTestId("tooltip-content").should("exist")
 *
 * Even though our tooltip content opens with a delay, this test still passes.
 *
 * This is because Cypress will keep trying our assertion for a short amount
 * of time until it passes in order to give us some wiggle room for scenarios
 * like ours where we have some asynchronous activity going on.
 *
 * However, this is not ideal because we cannot produce a failing test.
 *
 * If we instead assert after hovering:
 * cy.getByDataTestId("tooltip-content").should("not.exist")
 *
 * Our test still passes. This is because before the delay, our tooltip content
 * indeed does not exist, so the test runner resolves immediately immediately
 * in agreement, not giving us anytime for the delay to take place and remove
 * the tooltip off the screen.
 *
 * Adding the `wait` forces Cypress to wait on its assertions to ensure we are
 * getting reliable tests for our use-cases.
 */

import {useRef} from "react";
import AButton from "../AButton/AButton";
import ATriggerTooltip from "./ATriggerTooltip";

describe("<ATriggerTooltip />", () => {
  describe("when rendered with the hover trigger (default)", () => {
    it("should show the tooltip when the mouse enters the children", () => {
      cy.mount(
        <ATriggerTooltip
          content={<span data-testid="tooltip-content">test content</span>}
        >
          <span data-testid="tooltip-trigger">test trigger</span>
        </ATriggerTooltip>
      );

      cy.getByDataTestId("tooltip-trigger")
        .trigger("mouseenter")
        .then(() => {
          cy.wait(500);
          cy.getByDataTestId("tooltip-content").should("exist");
        });
    });

    it("should hide the tooltip when the mouse leaves the children", () => {
      cy.mount(
        <ATriggerTooltip
          content={<span data-testid="tooltip-content">test content</span>}
        >
          <span data-testid="tooltip-trigger">test trigger</span>
        </ATriggerTooltip>
      );

      cy.getByDataTestId("tooltip-trigger")
        .trigger("mouseenter")
        .then(($children) => {
          cy.wait(500);
          cy.getByDataTestId("tooltip-content").should("exist");
          return cy.wrap($children).trigger("mouseleave");
        })
        .then(() => {
          cy.wait(500);
          cy.getByDataTestId("tooltip-content").should("not.exist");
        });
    });
  });

  describe("when rendered with the click trigger", () => {
    it("should show the tooltip when children are clicked", () => {
      cy.mount(
        <ATriggerTooltip
          trigger="click"
          content={<span data-testid="tooltip-content">test content</span>}
        >
          <span data-testid="tooltip-trigger">test trigger</span>
        </ATriggerTooltip>
      );

      // First ensure hover does not show tooltip,
      // then test click
      cy.getByDataTestId("tooltip-trigger")
        .trigger("mouseenter")
        .then(($children) => {
          cy.wait(500);
          // Should not show on hover
          cy.getByDataTestId("tooltip-content").should("not.exist");
          // Open with click
          return cy.wrap($children).click();
        })
        .then(() => {
          cy.wait(500);
          cy.getByDataTestId("tooltip-content").should("exist");
        });
    });

    it("should hide the tooltip when children are clicked after being opened", () => {
      cy.mount(
        <ATriggerTooltip
          trigger="click"
          content={<span data-testid="tooltip-content">test content</span>}
        >
          <span data-testid="tooltip-trigger">test trigger</span>
        </ATriggerTooltip>
      );

      cy.getByDataTestId("tooltip-trigger")
        .trigger("mouseenter")
        .then(($children) => {
          cy.wait(500);
          cy.getByDataTestId("tooltip-content").should("not.exist");
          // Open with click
          return cy.wrap($children).click();
        })
        .then(($children) => {
          cy.wait(500);
          cy.getByDataTestId("tooltip-content").should("exist");
          // Close with click
          return cy.wrap($children).click();
        })
        .then(() => {
          cy.wait(500);
          cy.getByDataTestId("tooltip-content").should("not.exist");
        });
    });
  });

  describe("when rendered with the hover trigger on a custom trigger element", () => {
    it("should show the tooltip when the mouse enters the trigger", () => {
      cy.mount(<CustomTriggerTest />);

      cy.getByDataTestId("custom-trigger")
        .trigger("mouseenter")
        .then(() => {
          cy.wait(500);
          cy.getByDataTestId("tooltip-content").should("exist");
        });
    });

    it("should hide the tooltip when the mouse leaves the trigger", () => {
      cy.mount(<CustomTriggerTest />);

      cy.getByDataTestId("custom-trigger")
        .trigger("mouseenter")
        .then(($triggerEl) => {
          cy.wait(500);
          cy.getByDataTestId("tooltip-content").should("exist");
          return cy.wrap($triggerEl).trigger("mouseleave");
        })
        .then(() => {
          cy.wait(500);
          cy.getByDataTestId("tooltip-content").should("not.exist");
        });
    });
  });

  describe("when rendered with the click trigger on a custom trigger element", () => {
    it("should show the tooltip when the trigger is clicked", () => {
      cy.mount(<CustomTriggerTest trigger="click" />);

      // First ensure hover does not show tooltip,
      // then test click
      cy.getByDataTestId("custom-trigger")
        .trigger("mouseenter")
        .then(($customTrigger) => {
          cy.wait(500);
          // Should not show on hover
          cy.getByDataTestId("tooltip-content").should("not.exist");
          // Open with click
          return cy.wrap($customTrigger).click();
        })
        .then(() => {
          cy.wait(500);
          cy.getByDataTestId("tooltip-content").should("exist");
        });
    });

    it("should hide the tooltip when the trigger is clicked after being opened", () => {
      cy.mount(<CustomTriggerTest trigger="click" />);

      // First ensure hover does not show tooltip,
      // then test click
      cy.getByDataTestId("custom-trigger")
        .trigger("mouseenter")
        .then(($customTrigger) => {
          cy.wait(500);
          // Should not show on hover
          cy.getByDataTestId("tooltip-content").should("not.exist");
          // Open with click
          return cy.wrap($customTrigger).click();
        })
        .then(($customTrigger) => {
          cy.wait(500);
          cy.getByDataTestId("tooltip-content").should("exist");
          return cy.wrap($customTrigger).click();
        })
        .then(() => {
          cy.wait(500);
          cy.getByDataTestId("tooltip-content").should("not.exist");
        });
    });

    it("should hide the tooltip on an outside click", () => {
      cy.mount(<CustomTriggerTest trigger="click" />);

      cy.getByDataTestId("custom-trigger")
        .trigger("mouseenter")
        .then(($customTrigger) => {
          cy.wait(500);
          cy.getByDataTestId("tooltip-content").should("not.exist");
          return cy.wrap($customTrigger).click();
        })
        .then(() => {
          cy.wait(500);
          cy.getByDataTestId("tooltip-content").should("exist");
          return cy.getByDataTestId("custom-trigger-container").click();
        })
        .then(() => {
          cy.wait(500);
          cy.getByDataTestId("tooltip-content").should("not.exist");
        });
    });
  });
});

function CustomTriggerTest(triggerTooltipProps) {
  const btnRef = useRef();

  return (
    <div data-testid="custom-trigger-container">
      <AButton data-testid="custom-trigger" ref={btnRef}>
        outer trigger
      </AButton>
      <ATriggerTooltip
        triggerRef={btnRef}
        content={<span data-testid="tooltip-content">test content</span>}
        {...triggerTooltipProps}
      >
        <span>test anchor</span>
      </ATriggerTooltip>
    </div>
  );
}
