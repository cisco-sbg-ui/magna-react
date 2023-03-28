import React, {useState, useRef} from "react";
import AButton from "../AButton";
import ADrawer from "./ADrawer";
import ADrawerContent from "./ADrawerContent";
import AListItem from "../AList/AListItem";
import AMenu from "../AMenu/AMenu";
import usePopupQuickExit from "../../hooks/usePopupQuickExit/usePopupQuickExit";

const openDrawer = () => cy.getByDataTestId("drawer-trigger").click();

describe("<ADrawer />", () => {
  it("renders", () => {
    cy.mount(<DrawerTest />);
  });

  describe("when rendered as a modal", () => {
    it("should open", () => {
      cy.mount(<DrawerTest />);

      openDrawer();
      cy.getByDataTestId("drawer-content").should("exist");
    });
    it("should slide-in from the left", () => {
      cy.mount(<DrawerTest slideIn="left" />);

      openDrawer();
      cy.getByDataTestId("drawer").should(($el) => {
        expect($el).to.have.css("left", "0px");
        expect($el).to.have.css("top", "0px");
      });
    });

    it("should slide-in from the right", () => {
      cy.mount(<DrawerTest slideIn="right" />);

      openDrawer();
      cy.getByDataTestId("drawer").should(($el) => {
        expect($el).to.have.css("right", "0px");
        expect($el).to.have.css("top", "0px");
      });
    });

    it("should slide-in from the bottom", () => {
      cy.mount(<DrawerTest slideIn="bottom" />);

      openDrawer();
      cy.getByDataTestId("drawer").should(($el) => {
        expect($el).to.have.css("bottom", "0px");
      });
    });

    it("should prioritize the width passed in as a prop", () => {
      cy.mount(<DrawerTest openWidth="800px" />);

      openDrawer();
      // Assert on drawer content since the drawer itself takes up the
      // entire width after rendering the page overlay from `AModal`
      cy.getByDataTestId("drawer-content")
        .invoke("outerWidth")
        .should("eq", 800);
    });
  });

  describe("when not rendered as a modal", () => {
    it("should open", () => {
      cy.mount(<DrawerTest asModal={false} />);

      openDrawer();
      cy.getByDataTestId("drawer-content").should("exist");
    });
    it("should slide-in from the left", () => {
      cy.mount(<DrawerTest asModal={false} slideIn="left" />);

      openDrawer();
      cy.getByDataTestId("drawer").should(($el) => {
        expect($el).to.have.css("left", "0px");
        expect($el).to.have.css("top", "0px");
      });
    });

    it("should slide-in from the right", () => {
      cy.mount(<DrawerTest asModal={false} slideIn="right" />);

      openDrawer();
      cy.getByDataTestId("drawer").should(($el) => {
        expect($el).to.have.css("right", "0px");
        expect($el).to.have.css("top", "0px");
      });
    });

    it("should slide-in from the bottom", () => {
      cy.mount(<DrawerTest asModal={false} slideIn="bottom" />);

      openDrawer();
      cy.getByDataTestId("drawer").should(($el) => {
        expect($el).to.have.css("bottom", "0px");
      });
    });

    it("should prioritize the width passed in as a prop", () => {
      cy.mount(<DrawerTest asModal={false} openWidth="800px" />);

      openDrawer();
      cy.getByDataTestId("drawer").invoke("outerWidth").should("eq", 800);
    });
  });

  describe("when integrating with usePopupQuickExit", () => {
    beforeEach(() => {
      cy.mount(<DrawerTriggeredByMenuTest />);
    });

    const openDrawerFromWithinMenu = () => {
      return cy
        .getByDataTestId("open-menu-btn")
        .click()
        .then(() => {
          return cy.getByDataTestId("drawer-trigger").click();
        });
    };

    it("should close the drawer on an escape keydown event", () => {
      openDrawerFromWithinMenu()
        .then(() => {
          cy.getByDataTestId("drawer-content-btn").should("exist");
          return cy.escapeKeydown();
        })
        .then(() => {
          /**
           * @todo this should become "not.exist" if PR #319 is merged
           * @see https://github.com/cisco-sbg-ui/magna-react/pull/319
           */
          cy.getByDataTestId("drawer-content-btn").should("not.be.visible");
        });
    });

    it("should close the drawer on an outside click", () => {
      openDrawerFromWithinMenu()
        .then(() => {
          cy.getByDataTestId("drawer-content-btn").should("exist");
          return cy.get("body").click();
        })
        .then(() => {
          /**
           * @todo this should become "not.exist" if PR #319 is merged
           * @see https://github.com/cisco-sbg-ui/magna-react/pull/319
           */
          cy.getByDataTestId("drawer-content-btn").should("not.be.visible");
        });
    });

    /**
     * @see https://github.com/cisco-sbg-ui/magna-react/issues/143#issuecomment-1412172046
     */
    it("should not close the drawer when clicking a button inside the drawer", () => {
      openDrawerFromWithinMenu()
        .then(() => {
          return cy.getByDataTestId("drawer-content-btn").click();
        })
        .then(() => {
          cy.getByDataTestId("drawer-content-btn").should("be.visible");
        });
    });
  });
});

function DrawerTest({asModal = true, slideIn = "right", openWidth}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <AButton data-testid="drawer-trigger" onClick={() => setIsOpen(true)}>
        Open
      </AButton>
      <ADrawer
        asModal={asModal}
        data-testid="drawer"
        aria-label="drawer test"
        isOpen={isOpen}
        openWidth={openWidth}
        slideIn={slideIn}
        closeBtnOnClick={() => setIsOpen(false)}
      >
        <ADrawerContent data-testid="drawer-content">
          <h3>drawer content</h3>
        </ADrawerContent>
      </ADrawer>
    </>
  );
}

/**
 *
 * @see https://github.com/cisco-sbg-ui/magna-react/issues/143
 */
function DrawerTriggeredByMenuTest() {
  const triggerRef = useRef(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const popupRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  usePopupQuickExit({
    popupRef,
    isEnabled: isModalOpen,
    onExit: () => setIsModalOpen(false)
  });

  return (
    <>
      <AButton
        data-testid="open-menu-btn"
        ref={triggerRef}
        onClick={() => setIsMenuOpen(true)}
      >
        open menu
      </AButton>
      <AMenu
        anchorRef={triggerRef}
        open={isMenuOpen}
        placement="bottom-left"
        onClose={() => setIsMenuOpen(false)}
        style={{borderRadius: 0}}
      >
        <AListItem
          data-testid="drawer-trigger"
          onClick={() => setIsModalOpen(true)}
        >
          open drawer
        </AListItem>
      </AMenu>
      <ADrawer
        ref={popupRef}
        asModal={false}
        isOpen={isModalOpen}
        slideIn="right"
      >
        drawer content
        <AButton data-testid="drawer-content-btn">
          drawer content button
        </AButton>
      </ADrawer>
    </>
  );
}
