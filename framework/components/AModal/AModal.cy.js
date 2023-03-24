import React, {useState} from "react";
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

describe("<AModal />", () => {
  it("renders", () => {
    cy.mount(<ModalTest />);
  });

  it("focuses on the first element", () => {
    cy.mount(<ModalTest />);

    // Open modal
    cy.getByDataTestId("open-btn").click();
    cy.getByDataTestId("close-btn").should("have.focus");
  });

  it("should trap focus within the modal", () => {
    cy.mount(<ModalTest />);

    // Open accordion; make sure first focusable element receives the focus
    cy.getByDataTestId("open-btn").click();
    cy.getByDataTestId("close-btn").should("have.focus");

    // Tab focus
    cy.get("body").tab();
    cy.getByDataTestId("focusable-item-1").should("have.focus");
    cy.get("body").tab();
    cy.getByDataTestId("focusable-item-2").should("have.focus");
    cy.get("body").tab();
    cy.getByDataTestId("focusable-item-3").should("have.focus");

    // Rove back around to the beginning
    cy.get("body").tab();
    cy.getByDataTestId("close-btn").should("have.focus");
  });

  it("should not propagate click events outside of the modal", () => {
    cy.mount(<ModalWithAccordionTest />);

    // Open accordion; make sure modal is not opened
    cy.getByDataTestId("toggle-accordion-btn").click();
    cy.getByDataTestId("modal-title").should("not.exist");
    cy.getByDataTestId("accordion-content").should("be.visible");

    // Close accordion
    cy.getByDataTestId("toggle-accordion-btn").click();

    // Open modal; should _not_ also open the accordion
    cy.getByDataTestId("open-modal-btn").click();
    cy.getByDataTestId("modal-title").should("exist");
    cy.getByDataTestId("accordion-content").should("not.be.visible");
    //cy.getByDataTestId("focusable-item-3").trigger("keydown", {keyCode: 27});
    cy.getByDataTestId("focusable-item-3").click();
    cy.getByDataTestId("accordion-content").should("not.be.visible");
  });

  it("should not propagate keydown events outside of the modal", () => {
    cy.mount(<ModalWithAccordionTest />);

    // Open accordion; make sure modal is not opened
    cy.getByDataTestId("toggle-accordion-btn").click();
    cy.getByDataTestId("modal-title").should("not.exist");
    cy.getByDataTestId("accordion-content").should("be.visible");

    // Close accordion
    cy.getByDataTestId("toggle-accordion-btn").click();

    // Open modal; should _not_ also open the accordion
    cy.getByDataTestId("open-modal-btn").click();
    cy.getByDataTestId("modal-title").should("exist");
    cy.getByDataTestId("accordion-content").should("not.be.visible");
    cy.getByDataTestId("focusable-item-1").trigger("keydown", {keyCode: 13});
    cy.getByDataTestId("accordion-content").should("not.be.visible");
  });
});

function ContentSetup({onCloseBtnClick}) {
  return (
    <APanel style={{minWidth: "400px"}} type="dialog">
      <APanelHeader>
        <APanelTitle data-testid="modal-title" id="modal-title">
          Modal Demo
        </APanelTitle>
        <AButton
          data-testid="close-btn"
          onClick={onCloseBtnClick}
          tertiaryAlt
          icon
        >
          <AIcon>close</AIcon>
        </AButton>
      </APanelHeader>
      <APanelBody>
        <label htmlFor="username">Username</label>
        <input data-testid="focusable-item-1" id="username" type="text" />
        <br />
        <label htmlFor="password">Password</label>
        <input data-testid="focusable-item-2" type="password" />
      </APanelBody>
      <APanelFooter>
        <AButton data-testid="focusable-item-3">Action</AButton>
      </APanelFooter>
    </APanel>
  );
}

function ModalTest() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <AButton data-testid="open-btn" onClick={() => setIsOpen(true)}>
        Open
      </AButton>
      <AModal aria-label="standard modal demo" isOpen={isOpen}>
        <ContentSetup onCloseBtnClick={() => setIsOpen(false)} />
      </AModal>
    </>
  );
}

function ModalWithAccordionTest() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <AAccordion>
      <AAccordionPanel>
        <AAccordionHeader data-testid="toggle-accordion-btn">
          <AAccordionHeaderTitle>
            Accordion Title{" "}
            <AButton
              data-testid="open-modal-btn"
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(true);
              }}
            >
              Open Modal
            </AButton>{" "}
            <AModal aria-label="modal-accordion-setup" isOpen={isOpen}>
              <ContentSetup onCloseBtnClick={() => setIsOpen(false)} />
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
