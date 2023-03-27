import {useState, useRef} from "react";
import AButton from "../AButton/AButton";
import AMenuBase from "./AMenuBase";

const getAnchor = () => cy.getByDataTestId("open-menu-btn");
const openMenu = () => cy.getByDataTestId("open-menu-btn").click();
const getMenuContent = () => cy.get(".a-menu-base");

const getAnchorAndMenu = () => {
  return new Cypress.Promise((resolve) => {
    getAnchor().then(($anchorEl) => {
      openMenu()
        .then(getMenuContent)
        .then(($menuEl) => {
          resolve([$anchorEl[0], $menuEl[0]]);
        });
    });
  });
};

const getAnchorAndMenuPositions = () => {
  return getAnchorAndMenu().then((els) => {
    const [anchorEl, menuEl] = els;
    return [anchorEl.getBoundingClientRect(), menuEl.getBoundingClientRect()];
  });
};

describe("<AMenuBase />", () => {
  it("should close on an escape keydown event", () => {
    cy.mount(<MenuTest />);

    // Open menu
    openMenu();
    cy.get(".a-menu-base").should("exist");

    // Close menu
    cy.getByDataTestId("container").click();
    cy.get(".a-menu-base").should("not.exist");
  });

  it("should render to the bottom-left by default", () => {
    cy.mount(<MenuTest />);

    openMenu();
    cy.get(".a-menu-base--bottom-left").should("exist");
  });

  it("should render `top*` placements above the anchor", () => {
    ["top", "top-left", "top-right"].forEach((placement) => {
      cy.mount(<MenuTest placement={placement} />);

      getAnchorAndMenuPositions().then(([anchorPos, menuPos]) => {
        expect(menuPos.top < anchorPos.top).to.equal(true);
      });
    });
  });

  it("should render `bottom*` placements below the anchor", () => {
    ["bottom", "bottom-left", "bottom-right"].forEach((placement) => {
      cy.mount(<MenuTest placement={placement} />);

      getAnchorAndMenuPositions().then(([anchorPos, menuPos]) => {
        expect(menuPos.top > anchorPos.top).to.equal(true);
      });
    });
  });

  it("should render `left*` placements to the left of the anchor", () => {
    ["left", "left-top", "left-bottom"].forEach((placement) => {
      cy.mount(<MenuTest placement={placement} />);

      getAnchorAndMenuPositions().then(([anchorPos, menuPos]) => {
        expect(menuPos.left < anchorPos.left).to.equal(true);
      });
    });
  });
  it("should render `right*` placements to the right of the anchor", () => {
    ["right", "right-top", "right-bottom"].forEach((placement) => {
      cy.mount(<MenuTest placement={placement} />);

      // DOMRect positions are coordinate based, meaning that something
      // more to the right of the screen will have a larger x-value
      // than something to the left
      getAnchorAndMenuPositions().then(([anchorPos, menuPos]) => {
        expect(menuPos.right > anchorPos.right).to.equal(true);
      });
    });
  });
});

function MenuTest(menuBaseProps) {
  const btnRef = useRef();
  const [isOpen, setIsOpen] = useState(menuBaseProps?.open);
  return (
    <div
      className="d-flex justify-center align-center"
      data-testid="container"
      style={{height: "100vh", width: "100vw"}}
    >
      <AButton
        data-testid="open-menu-btn"
        ref={btnRef}
        onClick={() => setIsOpen((state) => !state)}
      >
        {isOpen ? "close" : "open"}
      </AButton>
      <AMenuBase
        {...menuBaseProps}
        onClose={() => setIsOpen(false)}
        anchorRef={btnRef}
        open={isOpen}
      >
        <p>test</p>
      </AMenuBase>
    </div>
  );
}
