import {useRef, useState} from "react";
import AButton from "../AButton/AButton";
import {AListItem, AListItemTitle} from "../AList";
import AMenu from "./AMenu";

const getAnchor = () => cy.getByDataTestId("menu-trigger");
const openMenu = () => cy.getByDataTestId("menu-trigger").click();
const getMenuContent = () => cy.get(".a-menu-base");

const pressDownArrow = () => {
  return getMenuContent().downArrowKeydown();
};

const pressUpArrow = () => {
  return getMenuContent().upArrowKeydown();
};

describe("<AMenu />", () => {
  it("should render", () => {
    cy.mount(<MenuTest />);
  });

  it("should focus to the menu when it is opened", () => {
    cy.mount(<MenuTest />);
    openMenu();
    getMenuContent().should("have.focus");
  });

  it("should focus to the next menu item when the down arrow is pressed", () => {
    cy.mount(<MenuTest />);
    openMenu();
    pressDownArrow()
      .then(() => {
        cy.getByDataTestId("menu-item-1").should("have.focus");
        return pressDownArrow();
      })
      .then(() => {
        cy.getByDataTestId("menu-item-2").should("have.focus");
        return pressDownArrow();
      })
      .then(() => {
        cy.getByDataTestId("menu-item-3").should("have.focus");
        return pressDownArrow();
      })
      .then(() => {
        cy.getByDataTestId("menu-item-1").should("have.focus");
      });
  });

  it("should focus to the next menu item when the up arrow is pressed", () => {
    cy.mount(<MenuTest />);
    openMenu();
    pressUpArrow()
      .then(() => {
        cy.getByDataTestId("menu-item-3").should("have.focus");
        return pressUpArrow();
      })
      .then(() => {
        cy.getByDataTestId("menu-item-2").should("have.focus");
        return pressUpArrow();
      })
      .then(() => {
        cy.getByDataTestId("menu-item-1").should("have.focus");
        return pressUpArrow();
      })
      .then(() => {
        cy.getByDataTestId("menu-item-3").should("have.focus");
      });
  });

  it("should call the onClose callback when the escape key is pressed", () => {
    const mockFn = cy.stub();
    cy.mount(<MenuTest onClose={mockFn} />);

    openMenu();
    getMenuContent()
      .escapeKeydown()
      .then(() => {
        expect(mockFn.callCount).to.eq(1);
      });
  });

  it("should open submenu on hover", () => {
    cy.mount(<SubMenuTest />);
    openMenu();
    getMenuContent().get(".a-list-item--submenu").trigger("mouseover");
    cy.get(".a-menu--submenu").should("exist");
  });

  it("should close submenu after selection", () => {
    cy.mount(<SubMenuTest />);
    openMenu();
    getMenuContent().get(".a-list-item--submenu").trigger("mouseover");
    cy.getByDataTestId("submenu-item-1").click();
    cy.get(".a-menu--submenu").should("not.exist");
  });
});

function MenuTest(menuProps) {
  const btnRef = useRef();
  const [isOpen, setIsOpen] = useState(menuProps?.open);
  return (
    <div
      className="d-flex justify-center align-center"
      style={{height: "100vh", width: "100vw"}}
    >
      <AButton
        data-testid="menu-trigger"
        ref={btnRef}
        onClick={() => setIsOpen((state) => !state)}
      >
        {isOpen ? "close" : "open"}
      </AButton>
      <AMenu {...menuProps} open={isOpen} anchorRef={btnRef}>
        <AListItem data-testid="menu-item-1">
          <AListItemTitle>Bottom</AListItemTitle>
        </AListItem>
        <AListItem data-testid="menu-item-2">Example</AListItem>
        <AListItem data-testid="menu-item-3">Example</AListItem>
      </AMenu>
    </div>
  );
}

function SubMenuTest(menuProps) {
  const btnRef = useRef();
  const submenuRef = useRef();
  const [isOpen, setIsOpen] = useState(menuProps?.open);
  return (
    <div
      className="d-flex justify-center align-center"
      style={{height: "100vh", width: "100vw"}}
    >
      <AButton
        data-testid="menu-trigger"
        ref={btnRef}
        onClick={() => setIsOpen((state) => !state)}
      >
        {isOpen ? "close" : "open"}
      </AButton>
      <AMenu
        {...menuProps}
        open={isOpen}
        anchorRef={btnRef}
        onClose={() => setIsOpen(false)}
      >
        <AListItem ref={submenuRef} submenu data-testid="menu-item-1">
          <AListItemTitle>Bottom</AListItemTitle>
          <AMenu submenu anchorRef={submenuRef}>
            <AListItem data-testid="submenu-item-1">Example</AListItem>
            <AListItem data-testid="submenu-item-2">Example</AListItem>
          </AMenu>
        </AListItem>
        <AListItem data-testid="menu-item-2">Example</AListItem>
        <AListItem data-testid="menu-item-3">Example</AListItem>
      </AMenu>
    </div>
  );
}
