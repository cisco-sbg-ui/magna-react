import {useState} from "react";
import AButton from "../AButton/AButton";
import APopover from "./APopover";

describe("<APopover />", () => {
  it("should focus on the panel when opening", () => {
    cy.mount(<PopoverTest />);
  });
});

function PopoverTest(popoverProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div data-testid="test-container">
      <AButton data-testid="popover-trigger">open</AButton>
      <APopover open={isOpen} {...popoverProps}>
        <span data-testid="popover-content">test</span>
      </APopover>
    </div>
  );
}
