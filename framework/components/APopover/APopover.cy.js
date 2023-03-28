import {useRef, useState} from "react";
import AButton from "../AButton/AButton";
import APopover from "./APopover";

describe("<APopover />", () => {
  it("should focus on the panel when opening", () => {
    cy.mount(<PopoverTest />);

    // Open popover
    cy.getByDataTestId("popover-trigger").click();
    cy.getByDataTestId("popover").should("have.focus");
  });

  it("should call the close handler on escape keydowns", () => {
    const mockFn = cy.stub();
    cy.mount(<PopoverTest onClose={mockFn} />);
    // Open popover
    cy.getByDataTestId("popover-trigger").click();

    // Trigger escape keydown on popover component
    cy.getByDataTestId("popover")
      .escapeKeydown()
      .then(() => {
        expect(mockFn.callCount).to.eq(1);
      });
  });

  it("should call the close handler on tab keydowns", () => {
    const mockFn = cy.stub();
    cy.mount(<PopoverTest onClose={mockFn} />);
    // Open popover
    cy.getByDataTestId("popover-trigger").click();

    // Trigger escape keydown on popover component
    cy.getByDataTestId("popover")
      .tabKeydown()
      .then(() => {
        expect(mockFn.callCount).to.eq(1);
      });
  });

  it("should focus to the anchor element when closing with escape keydowns", () => {
    const mockFn = cy.stub();
    cy.mount(<PopoverTest onClose={mockFn} />);
    // Open popover
    cy.getByDataTestId("popover-trigger").click();

    // Trigger escape keydown on popover component
    cy.getByDataTestId("popover")
      .escapeKeydown()
      .then(() => {
        cy.getByDataTestId("popover-trigger").should("have.focus");
      });
  });

  it("should focus to the anchor element when closing with tab keydowns", () => {
    const mockFn = cy.stub();
    cy.mount(<PopoverTest onClose={mockFn} />);
    // Open popover
    cy.getByDataTestId("popover-trigger").click();

    // Trigger escape keydown on popover component
    cy.getByDataTestId("popover")
      .tabKeydown()
      .then(() => {
        cy.getByDataTestId("popover-trigger").should("have.focus");
      });
  });
});

function PopoverTest(popoverProps) {
  const [isOpen, setIsOpen] = useState(false);
  const btnRef = useRef();

  return (
    <div data-testid="test-container">
      <AButton
        ref={btnRef}
        data-testid="popover-trigger"
        onClick={() => setIsOpen(true)}
      >
        open
      </AButton>
      <APopover
        anchorRef={btnRef}
        data-testid="popover"
        open={isOpen}
        {...popoverProps}
      >
        <span data-testid="popover-content">test</span>
        <button
          onClick={() => setIsOpen(false)}
          data-tesetid="popover-close-trigger"
        >
          close
        </button>
      </APopover>
    </div>
  );
}
