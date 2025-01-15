/* eslint-disable jsx-a11y/no-autofocus */

import React, {useState, useRef} from "react";
import {
  APanel,
  APanelHeader,
  APanelBody,
  APanelFooter,
  APanelTitle
} from "../APanel";
import {
  AAccordion,
  AAccordionPanel,
  AAccordionHeader,
  AAccordionHeaderTitle,
  AAccordionBody
} from "../AAccordion";
import AIcon from "../AIcon";
import AButton from "../AButton";
import AModal from "./AModal";
import AMenu from "../AMenu/AMenu";
import AMount from "../AMount/AMount";
import AListItem from "../AList/AListItem";
import usePopupQuickExit from "../../hooks/usePopupQuickExit/usePopupQuickExit";
import useAToaster from "../AToaster/useAToaster";
import ATextarea from "../ATextarea";

const getModalContent = () => cy.getByDataTestId("modal-content");
const openModal = () => cy.getByDataTestId("modal-trigger").click();

/* -------------------------------------------------------------------------- */
/*                                 Test suites                                */
/* -------------------------------------------------------------------------- */

/**
 * Tests core modal functionality assuming the component to be tested contains the following `data-testids`:
 *    `modal-trigger` - the element that opens the modal
 *
 *    `close-modal-trigger` - the element that closes the modal
 *
 *    `focusable-child-1` - the first child of the modal that can receive focus
 *
 *    `focusable-child-2` - the second child of the modal that can receive focus
 *
 *    `focusable-child-3` - the third child of the modal that can receive focus
 *
 * @param {React.Component} TestComponent
 * @param {Object} props?
 */
function testCoreFunctionality(TestComponent, props = {}) {
  it("focuses on the root element by default", () => {
    cy.mount(<TestComponent {...props} />);

    // Open modal; root modal element gets the focus
    cy.getByDataTestId("modal-trigger").focus();
    cy.getByDataTestId("modal-trigger").click();
    cy.get("[role='dialog']").should("have.focus");
  });

  it("should return focus to element which opened the modal after its closed", () => {
    cy.mount(<TestComponent {...props} />);

    // Open modal
    openModal();

    // Close modal
    cy.getByDataTestId("close-modal-trigger").click();
    cy.getByDataTestId("modal-trigger").should("have.focus");
  });

  it("should close the modal on escape key press", () => {
    cy.mount(<TestComponent {...props} />);

    // Open modal
    openModal();

    // Escape key press
    cy.escapeKeydown().then(() => {
      getModalContent().should("not.exist");
    });
  });

  it("should trap focus within the modal", () => {
    cy.mount(<TestComponent {...props} />);

    // Open modal
    cy.getByDataTestId("modal-trigger").click();

    // Tab focus
    cy.get("body").tab();
    cy.getByDataTestId("close-modal-trigger").should("have.focus");
    cy.get("body").tab();
    cy.getByDataTestId("focusable-child-1").should("have.focus");
    cy.get("body").tab();
    cy.getByDataTestId("focusable-child-2").should("have.focus");
    cy.get("body").tab();
    cy.getByDataTestId("focusable-child-3").should("have.focus");

    // Rove back around to the beginning
    cy.get("body").tab();
    cy.getByDataTestId("close-modal-trigger").should("have.focus");
  });

  it("opts-out from the auto focus while still trapping the focus", () => {
    cy.mount(<TestComponent {...props} autoFocusElementRef={null} />);

    // Open modal; the opening trigger keeps the focus
    cy.getByDataTestId("modal-trigger").focus();
    cy.getByDataTestId("modal-trigger").click();
    cy.getByDataTestId("modal-trigger").should("have.focus");

    // Tab focus
    cy.get("body").tab();
    cy.getByDataTestId("close-modal-trigger").should("have.focus");
    cy.get("body").tab();
    cy.getByDataTestId("focusable-child-1").should("have.focus");
    cy.get("body").tab();
    cy.getByDataTestId("focusable-child-2").should("have.focus");
    cy.get("body").tab();
    cy.getByDataTestId("focusable-child-3").should("have.focus");

    // Rove back around to the beginning
    cy.get("body").tab();
    cy.getByDataTestId("close-modal-trigger").should("have.focus");
  });

  it("opts-out from the auto focus and allows an inner element to autofocus itself", () => {
    cy.mount(
      <TestComponent {...props} autoFocusElementRef={null}>
        <ATextarea autoFocus />
      </TestComponent>
    );

    // Open modal; the opening trigger keeps the focus
    cy.getByDataTestId("modal-trigger").focus();
    cy.getByDataTestId("modal-trigger").click();
    cy.get("textarea").should("have.focus");
  });
}

function testOutsideClick(TestComponent, props = {}) {
  it("should close the modal on outside click when closeOnOutsideClick prop is passed in", () => {
    cy.mount(<TestComponent {...props} />);

    // Open modal
    openModal();

    // Click outside modal content
    cy.get(".a-page-overlay").click(300, 300);
    getModalContent().should("not.exist");
  });
}

/**
 * Test modal propagation assuming the component to be tested contains the following `data-testids`:
 *    `modal-trigger` - the element that opens the modal
 *
 *    `toggle-accordion-btn` - an element that opens/closes an accordion
 *
 *    `accordion-content` - the element that is rendered with the accordion is opened
 *
 *    `focusable-child-1` - the first child of the modal that can receive focus
 *
 *    `focusable-child-2` - the second child of the modal that can receive focus
 *
 *    `focusable-child-3` - the third child of the modal that can receive focus
 *
 * @param {React.Component} TestComponent
 * @param {Object} props?
 */
function testPropagation(TestComponent, props) {
  it("should not propagate click events outside of the modal", () => {
    cy.mount(<TestComponent {...props} />);

    // Open accordion; make sure modal is not opened
    cy.getByDataTestId("toggle-accordion-btn").click(10, 10); // set click position to not also click modal button
    getModalContent().should("not.exist");
    cy.getByDataTestId("accordion-content").should("be.visible");

    // Close accordion
    cy.getByDataTestId("toggle-accordion-btn").click(10, 10); // set click position to not also click modal button

    // Open modal; should _not_ also open the accordion
    cy.getByDataTestId("modal-trigger").click();
    getModalContent().should("exist");
    cy.getByDataTestId("accordion-content").should("not.be.visible");
    cy.getByDataTestId("focusable-child-3").click();
    cy.getByDataTestId("accordion-content").should("not.be.visible");
  });

  it("should not propagate keydown events outside of the modal", () => {
    cy.mount(<TestComponent {...props} />);

    // Open accordion; make sure modal is not opened
    cy.getByDataTestId("toggle-accordion-btn").click(10, 10); // set click position to not also click modal button
    getModalContent().should("not.exist");
    cy.getByDataTestId("accordion-content").should("be.visible");

    // Close accordion
    cy.getByDataTestId("toggle-accordion-btn").click(10, 10); // set click position to not also click modal button

    // Open modal; should _not_ also open the accordion
    cy.getByDataTestId("modal-trigger").click();
    getModalContent().should("exist");
    cy.getByDataTestId("accordion-content").should("not.be.visible");
    cy.getByDataTestId("focusable-child-1").enterKeydown();
    cy.getByDataTestId("accordion-content").should("not.be.visible");
  });
}

/* -------------------------------------------------------------------------- */
/*                               Test assertions                              */
/* -------------------------------------------------------------------------- */

describe("<AModal />", () => {
  it("renders", () => {
    cy.mount(<ModalTest />);
  });

  testCoreFunctionality(ModalTest);
  testPropagation(WithAccordionTest);

  describe("when rendered with closeOnOutsideClick", () => {
    testOutsideClick(ModalTest, {closeOnOutsideClick: true});
  });

  describe("when rendered without <APageOverlay />", () => {
    testCoreFunctionality(ModalTest, {withOverlay: false});
    testPropagation(WithAccordionTest, {withOverlay: false});
  });

  describe("when rendered without transitions", () => {
    testCoreFunctionality(ModalTest, {withTransitions: false});
    testPropagation(WithAccordionTest, {withTransitions: false});
  });

  describe("when rendered within another <AMount /> component", () => {
    testCoreFunctionality((props) => (
      <AMount>
        <ModalTest {...props} />
      </AMount>
    ));
    testCoreFunctionality((props) => (
      <AMount>
        <ModalTest {...props} withOverlay={false} />
      </AMount>
    ));
    testPropagation((props) => (
      <AMount>
        <WithAccordionTest {...props} />
      </AMount>
    ));
    testPropagation((props) => (
      <AMount>
        <WithAccordionTest {...props} withOverlay={false} />
      </AMount>
    ));
  });

  describe("when rendered within another <AMount /> component that has experimental wrapping", () => {
    testCoreFunctionality((props) => (
      <AMount withNewWrappingContext={true}>
        <ModalTest {...props} />
      </AMount>
    ));
    testCoreFunctionality((props) => (
      <AMount withNewWrappingContext={true}>
        <ModalTest {...props} withOverlay={false} />
      </AMount>
    ));
    testPropagation((props) => (
      <AMount withNewWrappingContext={true}>
        <WithAccordionTest {...props} />
      </AMount>
    ));
    testPropagation((props) => (
      <AMount withNewWrappingContext={true}>
        <WithAccordionTest {...props} withOverlay={false} />
      </AMount>
    ));
  });

  describe("when triggering a toast from within the drawer", () => {
    beforeEach(() => {
      cy.mount(<WithToastTest />);
    });
    it("should not close the drawer when clicking toast content", () => {
      openModal();

      // Open toast
      cy.getByDataTestId("toast-trigger").click();
      cy.getByDataTestId("toast-content").should("exist");

      // Click toast and ensure drawer is not gone
      cy.getByDataTestId("toast-content").click();
      getModalContent().should("exist");
    });

    it("should not close the drawer when closing the toast", () => {
      openModal();

      // Open toast
      cy.getByDataTestId("toast-trigger").click();
      cy.getByDataTestId("toast-content").should("exist");

      // Close toast
      cy.get(".a-toast__close").click();

      // Ensure toast is gone, but drawer is not
      cy.getByDataTestId("toast-content").should("not.exist");
      getModalContent().should("exist");
    });
  });

  describe("when rendered with <AMenu /> as a child", () => {
    beforeEach(() => cy.mount(<WithMenuTest />));
    it("should not close the modal when opening <AMenu />", () => {
      openModal();

      // Open menu
      cy.getByDataTestId("menu-trigger").click();
      cy.getByDataTestId("menu-item-1").should("exist");
      // @todo: add screenshot test to ensure menu is not covered by overlay */
      cy.getByDataTestId("menu-item-1").should("be.visible");
      cy.getByDataTestId("menu-item-1").click();

      // Make sure
      getModalContent().should("exist");
    });

    it("should not close the modal when clicking clicking outside <AMenu /> while it is opened", () => {
      openModal();

      // Open menu an ensure modal does not close
      cy.getByDataTestId("menu-trigger").click();
      cy.getByDataTestId("menu-item-1").should("exist");

      // Click modal to close menu
      getModalContent().click("topRight", {force: true});
      cy.getByDataTestId("menu-item-1").should("not.exist");
      getModalContent().should("exist");
    });
  });
});

/* -------------------------------------------------------------------------- */
/*                             Components to test                             */
/* -------------------------------------------------------------------------- */

function ContentSetup({onCloseBtnClick, children}) {
  return (
    <APanel
      data-testid="modal-content"
      style={{minWidth: "400px"}}
      type="dialog"
    >
      <APanelHeader>
        <APanelTitle>Modal Demo</APanelTitle>
        <AButton
          data-testid="close-modal-trigger"
          onClick={onCloseBtnClick}
          tertiaryAlt
          icon
        >
          <AIcon>close</AIcon>
        </AButton>
      </APanelHeader>
      <APanelBody>
        <label htmlFor="username">Username</label>
        <input data-testid="focusable-child-1" id="username" type="text" />
        <br />
        <label htmlFor="password">Password</label>
        <input data-testid="focusable-child-2" type="password" />
        {children}
      </APanelBody>
      <APanelFooter>
        <AButton data-testid="focusable-child-3">Action</AButton>
      </APanelFooter>
    </APanel>
  );
}

function ModalTest({children, ...modalProps}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <AButton data-testid="modal-trigger" onClick={() => setIsOpen(true)}>
        Open
      </AButton>
      <AModal
        data-testid="modal"
        aria-label="modal test"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        {...modalProps}
      >
        <ContentSetup onCloseBtnClick={() => setIsOpen(false)}>
          {children}
        </ContentSetup>
      </AModal>
    </>
  );
}

function WithAccordionTest({children, ...modalProps}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AAccordion>
      <AAccordionPanel>
        <AAccordionHeader data-testid="toggle-accordion-btn">
          <AAccordionHeaderTitle>
            Accordion Title{" "}
            <AButton
              data-testid="modal-trigger"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(true);
              }}
            >
              Open Modal
            </AButton>{" "}
            <AModal
              aria-label="modal-accordion-setup"
              isOpen={isOpen}
              onClose={() => setIsOpen(false)}
              {...modalProps}
            >
              <ContentSetup onCloseBtnClick={() => setIsOpen(false)}>
                {children}
              </ContentSetup>
            </AModal>
          </AAccordionHeaderTitle>
        </AAccordionHeader>
        <AAccordionBody data-testid="accordion-content">
          Accordion content.
        </AAccordionBody>
      </AAccordionPanel>
    </AAccordion>
  );
}

function WithMenuTest(modalProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const btnRef = useRef(null);
  const modalContentRef = useRef();
  const [isModalOpen, setIsModalOpen] = useState(false);
  usePopupQuickExit({
    popupRef: modalContentRef,
    isEnabled: isModalOpen,
    onExit: () => setIsModalOpen(false)
  });

  return (
    <>
      <AButton data-testid="modal-trigger" onClick={() => setIsModalOpen(true)}>
        open modal
      </AButton>
      <AModal
        data-testid="modal"
        aria-label="modal with menu test"
        isOpen={isModalOpen}
        onClose={() => setIsMenuOpen(false)}
        {...modalProps}
      >
        <APanel ref={modalContentRef} data-testid="modal-content">
          <APanelBody>
            <AButton
              ref={btnRef}
              data-testid="menu-trigger"
              onClick={() => setIsMenuOpen(true)}
            >
              open menu
            </AButton>
            <AMenu
              data-testid="menu"
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
          </APanelBody>
        </APanel>
      </AModal>
    </>
  );
}

/**
 * @see https://github.com/cisco-sbg-ui/magna-react/issues/297
 */
function WithToastTest(modalProps) {
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
      <AButton data-testid="modal-trigger" onClick={() => setIsOpen(true)}>
        open modal
      </AButton>
      <AModal
        data-testid="modal"
        ref={popupRef}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        {...modalProps}
      >
        <APanel data-testid="modal-content">
          test
          <AButton
            data-testid="toast-trigger"
            onClick={() => {
              addToast(
                {
                  level: "danger",
                  title: "Danger Toast",
                  children: "test toast",
                  dismissible: true,
                  placement: "top",
                  "data-testid": "toast-content"
                },
                -1
              );
            }}
          >
            Notify
          </AButton>
        </APanel>
      </AModal>
    </>
  );
}
