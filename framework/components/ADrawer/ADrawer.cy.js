import React, {useState, useRef} from "react";
import AButton from "../AButton";
import ADrawer from "./ADrawer";
import ADrawerContent from "./ADrawerContent";
import ADrawerHeader from "./ADrawerHeader";
import ADrawerTitle from "./ADrawerTitle";
import ADrawerSubtitle from "./ADrawerSubtitle";
import ADrawerBody from "./ADrawerBody";
import ADrawerFooter from "./ADrawerFooter";
import {useDrawerToggle} from "./hooks";
import AListItem from "../AList/AListItem";
import AMenu from "../AMenu/AMenu";
import AMount from "../AMount/AMount";
import APopover from "../APopover/APopover";
import usePopupQuickExit from "../../hooks/usePopupQuickExit/usePopupQuickExit";
import useAToaster from "../AToaster/useAToaster";

const openDrawer = () => cy.getByDataTestId("drawer-trigger").click();
const getDrawer = () => cy.getByDataTestId("drawer");
const getDrawerContent = () => cy.getByDataTestId("drawer-content");

function testSlideDirections(testComponent) {
  it("should slide-in from the left", () => {
    const Decorated = React.cloneElement(testComponent, {
      slideIn: "left"
    });
    cy.mount(Decorated);

    openDrawer();
    getDrawer().should(($el) => {
      expect($el).to.have.css("left", "0px");
      expect($el).to.have.css("top", "0px");
    });
  });

  it("should slide-in from the right", () => {
    const Decorated = React.cloneElement(testComponent, {
      slideIn: "right"
    });
    cy.mount(Decorated);

    openDrawer();
    getDrawer().should(($el) => {
      expect($el).to.have.css("right", "0px");
      expect($el).to.have.css("top", "0px");
    });
  });

  it("should slide-in from the bottom", () => {
    const Decorated = React.cloneElement(testComponent, {
      slideIn: "bottom"
    });
    cy.mount(Decorated);

    openDrawer();
    getDrawer().should(($el) => {
      expect($el).to.have.css("bottom", "0px");
    });
  });
}

function testCoreFunctionality(testComponent) {
  it("should open", () => {
    cy.mount(testComponent);

    openDrawer();
    getDrawerContent().should("exist");
  });

  testSlideDirections(testComponent);

  it("should prioritize the width passed in as a prop", () => {
    const Decorated = React.cloneElement(testComponent, {
      openWidth: "800px"
    });
    cy.mount(Decorated);

    openDrawer();
    // Assert on drawer content since the drawer itself takes up the
    // entire width after rendering the page overlay from `AModal`
    getDrawerContent().invoke("outerWidth").should("eq", 800);
  });
}

describe("<ADrawer />", () => {
  it("renders", () => {
    cy.mount(<DrawerTest />);
  });

  describe("when rendered as a modal", () => {
    testCoreFunctionality(<DrawerTest />);
  });

  describe("when not rendered as a modal", () => {
    testCoreFunctionality(<DrawerTest asModal={false} />);
  });

  describe("when rendered as an absolutely positioned element", () => {
    testCoreFunctionality(<DrawerTest position="absolute" />);
  });

  describe("when rendered as an relatively positioned element", () => {
    testCoreFunctionality(<DrawerTest position="relative" />);
  });

  describe("when rendered within another <AMount /> component", () => {
    testCoreFunctionality(<MountTest />);
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
      getDrawerContent().should("exist");
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
      getDrawerContent().should("exist");
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
      getDrawerContent().should("exist");

      for (let i = 1; i <= 3; i++) {
        // Click menu items and ensure drawer does not close
        cy.getByDataTestId(`menu-item-${i}`).click();
        cy.getByDataTestId("menu-trigger").click();
        getDrawerContent().should("exist");
      }
    });

    it("should not close the drawer when clicking clicking outside <AMenu /> while it is opened", () => {
      openDrawer();

      // Open menu an ensure drawer does not close
      cy.getByDataTestId("menu-trigger").click();
      cy.getByDataTestId("menu-item-1").should("exist");

      // Click drawer to close menu
      getDrawer().click();
      cy.getByDataTestId("menu-item-1").should("not.exist");
      getDrawerContent().should("exist");
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
      getDrawerContent().should("exist");

      // Click popover items and ensure drawer does not close
      cy.getByDataTestId("popover-content").click();
      cy.getByDataTestId("popover-trigger").click();
      getDrawerContent().should("exist");
    });

    it("clicking outside the popover within the drawer should close the popover", () => {
      openDrawer();

      // Open popover an ensure drawer does not close
      cy.getByDataTestId("popover-trigger").click();
      cy.getByDataTestId("popover-content").should("exist");

      // Click drawer to close popover
      getDrawer().click();
      cy.getByDataTestId("popover-content").should("not.exist");
      getDrawerContent().should("exist");
    });
  });

  describe("when usesDrawerToggleHook", () => {
    it("handles focus returns correctly", () => {
      cy.mount(<DrawerHookTest />);

      // Open the first drawer
      cy.getByDataTestId("trigger-a").click();

      cy.getByDataTestId("drawer-trigger").should("exist");

      cy.getByDataTestId("drawer-trigger").contains("The wizard Merlin");

      // Close the drawer
      cy.get(".a-drawer__title-close").find(".a-button").click();

      // Check that the opening button has focus returned to it
      cy.getByDataTestId("trigger-a").should("have.focus");

      // Make sure drawer is closed
      cy.getByDataTestId("drawer-trigger").should("not.be.visible");

      // Open the second drawer
      cy.getByDataTestId("trigger-b").click();

      cy.getByDataTestId("drawer-trigger").should("exist");

      cy.getByDataTestId("drawer-trigger").contains(
        "Gertrude has lost her cat Fluffs and desperately"
      );

      // Close the drawer
      cy.get(".a-drawer__title-close").find(".a-button").click();

      // Check that the opening button has focus returned to it
      cy.getByDataTestId("trigger-b").should("have.focus");

      // Make sure drawer is closed
      cy.getByDataTestId("drawer-trigger").should("not.be.visible");

      // Click the first trigger, check, click second tigger, check
      cy.getByDataTestId("trigger-a").click();
      cy.getByDataTestId("drawer-trigger").contains("The wizard Merlin");

      // cy.wait(301);

      cy.getByDataTestId("trigger-b").click();
      cy.getByDataTestId("drawer-trigger").contains(
        "Gertrude has lost her cat Fluffs and desperately"
      );

      // Close the drawer
      cy.get(".a-drawer__title-close").find(".a-button").click();

      // Check that the opening button has focus returned to it
      cy.getByDataTestId("trigger-b").should("have.focus");
    });
  });
});

function MountTest(props) {
  return (
    <AMount>
      <DrawerTest {...props} />
    </AMount>
  );
}

function DrawerTest({asModal = true, slideIn = "right", openWidth, ...rest}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
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
        {...rest}
      >
        <ADrawerContent data-testid="drawer-content">
          <h3>drawer content</h3>
        </ADrawerContent>
      </ADrawer>
    </div>
  );
}

/**
 *
 * @see https://github.com/cisco-sbg-ui/magna-react/issues/143
 */
function PopupQuickExitTest(drawerProps) {
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
        {...drawerProps}
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
        <ADrawerContent data-testid="drawer-content">
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
        </ADrawerContent>
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
        <ADrawerContent data-testid="drawer-content">
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
        </ADrawerContent>
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
        <ADrawerContent data-testid="drawer-content">
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
        </ADrawerContent>
      </ADrawer>
    </>
  );
}

const DrawerHookTest = ({}) => {
  const list = {
    a: {
      title: "Merlin's Crystal",
      subtitle: "Short",
      body: "The wizard Merlin has been trapped in a magical crystal by the witch Morgan Le Faye. So far, King Arthur hasn't been able to figure out how to free his mentor from his crystal prison. Can you help?"
    },
    b: {
      title: "Gertrude's Cat",
      subtitle: "Very Short",
      body: "Gertrude has lost her cat Fluffs and desperately wants to find her. Can you help bring her home?"
    }
  };

  const drawerRef = useRef();
  const {setDrawerOpen, isDrawerOpen} = useDrawerToggle(drawerRef);
  const [contentId, setContentId] = useState();

  const setDrawerContent = (newContent, open = true) => {
    if (newContent === contentId && isDrawerOpen) {
      return;
    }

    setContentId(newContent);
    setDrawerOpen(open);
  };

  const content = list[contentId];

  return (
    <>
      <AButton
        onClick={() => {
          setDrawerContent("a");
        }}
        data-testid="trigger-a"
      >
        {"Merlin's Crystal"}
      </AButton>
      <br />
      <br />
      <AButton
        onClick={() => {
          setDrawerContent("b");
        }}
        data-testid="trigger-b"
      >
        {"Gertrude's Cat"}
      </AButton>
      <ADrawer
        ref={drawerRef}
        style={{display: "flex", flexDirection: "column"}}
        aria-labelledby="drawer-title"
        slideIn="right"
        isOpen={isDrawerOpen}
        usesDrawerToggleHook
        asModal={false}
        onClose={() => {
          setDrawerOpen(false);
        }}
        data-testid="drawer-trigger"
      >
        <ADrawerHeader>
          <ADrawerTitle>
            <h1>{content?.title}</h1>
          </ADrawerTitle>
          <ADrawerSubtitle>{content?.subtitle}</ADrawerSubtitle>
        </ADrawerHeader>
        <ADrawerBody>{content?.body}</ADrawerBody>
        <ADrawerFooter>
          <AButton onClick={() => setDrawerOpen(false)} data-test-drawer-close>
            Close
          </AButton>
        </ADrawerFooter>
      </ADrawer>
    </>
  );
};
