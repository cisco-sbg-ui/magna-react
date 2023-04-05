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

const getModalContent = () => cy.getByDataTestId("modal-content");
const openModal = () => cy.getByDataTestId("modal-trigger").click();

function testCoreFunctionality(testComponent) {
  it("focuses on the first element", () => {
    cy.mount(testComponent);

    // Open modal
    cy.getByDataTestId("modal-trigger").click();
    cy.getByDataTestId("close-modal-trigger").should("have.focus");
  });

  it("should trap focus within the modal", () => {
    cy.mount(testComponent);

    // Open accordion; make sure first focusable element receives the focus
    cy.getByDataTestId("modal-trigger").click();
    cy.getByDataTestId("close-modal-trigger").should("have.focus");

    // Tab focus
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
}

function testPropagation(testComponent) {
  it("should not propagate click events outside of the modal", () => {
    cy.mount(testComponent);

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
    cy.mount(testComponent);

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

describe("<AModal />", () => {
  it("renders", () => {
    cy.mount(<ModalTest />);
  });

  testCoreFunctionality(<ModalTest />);
  testPropagation(<WithAccordionTest />);

  describe("when rendered without <APageOverlay />", () => {
    testCoreFunctionality(<ModalTest withOverlay={false} />);
    testPropagation(<WithAccordionTest withOverlay={false} />);
  });

  describe("when rendered without transitions", () => {
    testCoreFunctionality(<ModalTest withTransitions={false} />);
    testPropagation(<WithAccordionTest withTransitions={false} />);
  });

  describe("when rendered within another <AMount /> component", () => {
    testCoreFunctionality(
      <AMount>
        <ModalTest />
      </AMount>
    );
    testPropagation(
      <AMount>
        <WithAccordionTest />
      </AMount>
    );
  });

  describe("when rendered within another <AMount /> component that has experimental wrapping", () => {
    testCoreFunctionality(
      <AMount withNewWrappingContext={true}>
        <ModalTest />
      </AMount>
    );
    testPropagation(
      <AMount withNewWrappingContext={true}>
        <WithAccordionTest />
      </AMount>
    );
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

function ContentSetup({onCloseBtnClick}) {
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
      </APanelBody>
      <APanelFooter>
        <AButton data-testid="focusable-child-3">Action</AButton>
      </APanelFooter>
    </APanel>
  );
}

function ModalTest(modalProps) {
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
        {...modalProps}
      >
        <ContentSetup onCloseBtnClick={() => setIsOpen(false)} />
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
            {children || (
              <AModal
                aria-label="modal-accordion-setup"
                isOpen={isOpen}
                {...modalProps}
              >
                <ContentSetup onCloseBtnClick={() => setIsOpen(false)} />
              </AModal>
            )}
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
        </APanel>
      </AModal>
    </>
  );
}
