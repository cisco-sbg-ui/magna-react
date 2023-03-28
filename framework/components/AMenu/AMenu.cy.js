import {useRef, useState} from "react";
import AButton from "../AButton/AButton";
import {AListItem, AListItemTitle} from "../AList";
import AMenu from "./AMenu";

const getAnchor = () => cy.getByDataTestId("open-menu-btn");
const openMenu = () => cy.getByDataTestId("open-menu-btn").click();
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

  it("should call the onClose callback when the tab key is pressed", () => {
    const mockFn = cy.stub();
    cy.mount(<MenuTest onClose={mockFn} />);

    openMenu();
    getMenuContent()
      .tabKeydown()
      .then(() => {
        expect(mockFn.callCount).to.eq(1);
      });
  });
});

function MenuTest(menuProps) {
  const btnRef = useRef();
  const [isOpen, setIsOpen] = useState(menuProps?.open);
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
