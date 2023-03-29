import React, {useState, useRef} from "react";
import AButton from "../AButton";
import ADrawer from "./ADrawer";
import ADrawerContent from "./ADrawerContent";
import AListItem from "../AList/AListItem";
import AMenu from "../AMenu/AMenu";
import APopover from "../APopover/APopover";
import usePopupQuickExit from "../../hooks/usePopupQuickExit/usePopupQuickExit";
import useAToaster from "../AToaster/useAToaster";

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

  describe("when integrating with `usePopupQuickExit()`", () => {
    beforeEach(() => {
      cy.mount(<PopupQuickExitTest />);
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

  describe("when triggering a toast from within the drawer", () => {
    beforeEach(() => {
      cy.mount(<WithToastTest />);
    });
    it("should not close the drawer when clicking toast content", () => {
      openDrawer();

      // Open toast
      cy.getByDataTestId("toast-trigger").click();
      cy.getByDataTestId("toast-content").should("exist");

      // Click toast and ensure drawer is not gone
      cy.getByDataTestId("toast-content").click();
      cy.getByDataTestId("drawer").should("exist");
    });

    it("should not close the drawer when closing the toast", () => {
      openDrawer();

      // Open toast
      cy.getByDataTestId("toast-trigger").click();
      cy.getByDataTestId("toast-content").should("exist");

      // Close toast
      cy.get(".a-toast__close").click();

      // Ensure toast is gone, but drawer is not
      cy.getByDataTestId("toast-content").should("not.exist");
      cy.getByDataTestId("drawer").should("exist");
    });
  });

  describe("when rendered with <AMenu /> as a child", () => {
    beforeEach(() => {
      cy.mount(<WithMenuTest />);
    });
    it("should not close the drawer when opening <AMenu />", () => {
      openDrawer();

      // Open menu an ensure drawer does not close
      cy.getByDataTestId("menu-trigger").click();
      cy.getByDataTestId("drawer").should("exist");

      for (let i = 1; i <= 3; i++) {
        // Click menu items and ensure drawer does not close
        cy.getByDataTestId(`menu-item-${i}`).click();
        cy.getByDataTestId("menu-trigger").click();
        cy.getByDataTestId("drawer").should("exist");
      }
    });

    it("clicking outside the menu within the drawer should close the menu", () => {
      openDrawer();

      // Open menu an ensure drawer does not close
      cy.getByDataTestId("menu-trigger").click();
      cy.getByDataTestId("menu-item-1").should("exist");

      // Click drawer to close menu
      cy.getByDataTestId("drawer").click();
      cy.getByDataTestId("menu-item-1").should("not.exist");
      cy.getByDataTestId("drawer").should("exist");
    });
  });

  describe("when rendered with <APopover /> as a child", () => {
    beforeEach(() => {
      cy.mount(<WithPopoverTest />);
    });

    it("should not close the drawer when opening <APopover />", () => {
      openDrawer();

      // Open popover an ensure drawer does not close
      cy.getByDataTestId("popover-trigger").click();
      cy.getByDataTestId("drawer").should("exist");

      // Click popover items and ensure drawer does not close
      cy.getByDataTestId("popover-content").click();
      cy.getByDataTestId("popover-trigger").click();
      cy.getByDataTestId("drawer").should("exist");
    });

    it("clicking outside the popover within the drawer should close the popover", () => {
      openDrawer();

      // Open popover an ensure drawer does not close
      cy.getByDataTestId("popover-trigger").click();
      cy.getByDataTestId("popover-content").should("exist");

      // Click drawer to close popover
      cy.getByDataTestId("drawer").click();
      cy.getByDataTestId("popover-content").should("not.exist");
      cy.getByDataTestId("drawer").should("exist");
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
function PopupQuickExitTest() {
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

/**
 * @see https://github.com/cisco-sbg-ui/magna-react/issues/297
 */
function WithToastTest(drawerProps) {
  const {addToast} = useAToaster();
  const [isOpen, setIsOpen] = useState(false);
  const popupRef = useRef();

  usePopupQuickExit({
    popupRef,
    isEnabled: isOpen,
    onExit: () => setIsOpen(false)
  });

  return (
    <>
      <AButton data-testid="drawer-trigger" onClick={() => setIsOpen(true)}>
        open drawer
      </AButton>
      <ADrawer
        data-testid="drawer"
        ref={popupRef}
        asModal={false}
        isOpen={isOpen}
        slideIn="right"
        {...drawerProps}
      >
        test
        <AButton
          data-testid="toast-trigger"
          onClick={() => {
            addToast(
              {
                level: "danger",
                title: "Danger Toast",
                children: "test toast",
                dismissable: true,
                placement: "top",
                "data-testid": "toast-content"
              },
              -1
            );
          }}
        >
          Notify
        </AButton>
      </ADrawer>
    </>
  );
}

function WithMenuTest(drawerProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const btnRef = useRef(null);
  const drawerRef = useRef();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  usePopupQuickExit({
    popupRef: drawerRef,
    isEnabled: isDrawerOpen,
    onExit: () => setIsDrawerOpen(false)
  });

  return (
    <>
      <AButton
        data-testid="drawer-trigger"
        onClick={() => setIsDrawerOpen(true)}
      >
        open drawer
      </AButton>
      <ADrawer
        data-testid="drawer"
        ref={drawerRef}
        asModal={false}
        isOpen={isDrawerOpen}
        slideIn="right"
        {...drawerProps}
      >
        <AButton
          ref={btnRef}
          data-testid="menu-trigger"
          onClick={() => setIsMenuOpen(true)}
        >
          open menu
        </AButton>
        <AMenu
          anchorRef={btnRef}
          open={isMenuOpen}
          placement="bottom-left"
          onClose={() => setIsMenuOpen(false)}
          style={{borderRadius: 0}}
        >
          <AListItem data-testid="menu-item-1">test menu item</AListItem>
          <AListItem data-testid="menu-item-2">test menu item</AListItem>
          <AListItem data-testid="menu-item-3">test menu item</AListItem>
        </AMenu>
      </ADrawer>
    </>
  );
}

function WithPopoverTest(drawerProps) {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const btnRef = useRef(null);
  const drawerRef = useRef();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  usePopupQuickExit({
    popupRef: drawerRef,
    isEnabled: isDrawerOpen,
    onExit: () => setIsDrawerOpen(false)
  });

  return (
    <>
      <AButton
        data-testid="drawer-trigger"
        onClick={() => setIsDrawerOpen(true)}
      >
        open drawer
      </AButton>
      <ADrawer
        data-testid="drawer"
        ref={drawerRef}
        asModal={false}
        isOpen={isDrawerOpen}
        slideIn="right"
        {...drawerProps}
      >
        <AButton
          ref={btnRef}
          data-testid="popover-trigger"
          onClick={() => setIsPopoverOpen(true)}
        >
          open popover
        </AButton>
        <APopover
          anchorRef={btnRef}
          open={isPopoverOpen}
          placement="left-top"
          onClose={() => setIsPopoverOpen(false)}
        >
          <span data-testid="popover-content">test popover content</span>
        </APopover>
      </ADrawer>
    </>
  );
}
