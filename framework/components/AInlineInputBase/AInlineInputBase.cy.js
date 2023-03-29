import React, {useRef, useState} from "react";
import {ADrawer, ADrawerContent} from "../ADrawer";
import AButton from "../AButton";
import AInlineInputBase from "./AInlineInputBase";
import usePopupQuickExit from "../../hooks/usePopupQuickExit/usePopupQuickExit";

const commonProps = {
  value: "test value"
};

const clickInput = () => cy.getByDataTestId("inline-input").click();

describe("<AInlineInputBase />", () => {
  it("renders", () => {
    cy.mount(<AInlineInputBase {...commonProps} />);
  });

  describe("Use inside a drawer", () => {
    it("should not close drawer on escape", () => {
      cy.mount(<InlineInDrawer />);

      cy.getByDataTestId("drawer-content").should("exist");

      clickInput();

      cy.get(".a-input-base").type("{esc}");

      cy.getByDataTestId("drawer-content").should("exist");
    });
  });

  describe("Functional tests", () => {
    it("Should set value on enter", () => {
      cy.mount(<StatefulInline />);
      clickInput();

      cy.get(".a-input-base").type("MODIFIED");
      cy.get(".a-input-base").type("{enter}");

      cy.get(".a-inline-input__display").should(
        "have.text",
        `${commonProps.value}MODIFIED`
      );

      cy.getByDataTestId("actual-value").should(
        "have.text",
        `${commonProps.value}MODIFIED`
      );
    });

    it("Should not change value on escape", () => {
      cy.mount(<StatefulInline />);
      clickInput();

      cy.get(".a-input-base").type("MODIFIED");
      cy.get(".a-input-base").type("{esc}");

      cy.get(".a-inline-input__display").should("have.text", commonProps.value);

      cy.getByDataTestId("actual-value").should("have.text", commonProps.value);
    });

    it("Should show alert when required and empty", () => {
      cy.mount(<StatefulInline required />);
      clickInput();

      cy.get(".a-input-base").type("{selectAll}{del}");
      cy.get(".a-input-base").type("{enter}");

      cy.get(".a-alert").should("exist");
    });

    it("Should not activate when disabled", () => {
      cy.mount(<StatefulInline disabled />);
      clickInput();

      cy.get(".a-input-base").should("not.exist");
    });

    it("Should clear when clear is clicked", () => {
      cy.mount(<StatefulInline clearable placeholder="PLACEHOLDER" />);

      cy.get(".a-inline-input__clearIcon").click();

      cy.get(".a-inline-input__display").should("have.text", "PLACEHOLDER");
      cy.getByDataTestId("actual-value").should("have.text", "");
    });
  });
});

const InlineInDrawer = () => {
  const drawerRef = useRef();
  const [isOpen, setIsOpen] = useState(true);

  usePopupQuickExit({
    popupRef: drawerRef,
    isEnabled: isOpen,
    onExit: () => setIsOpen(false)
  });

  return (
    <>
      <AButton data-testid="drawer-trigger" onClick={() => setIsOpen(true)}>
        Open
      </AButton>
      <ADrawer
        ref={drawerRef}
        asModal={false}
        isOpen={isOpen}
        slideIn="right"
        closeBtnOnClick={() => setIsOpen(false)}
      >
        <ADrawerContent data-testid="drawer-content">
          some inline input
          <br />
          <br />
          <StatefulInline />
        </ADrawerContent>
      </ADrawer>
    </>
  );
};

const StatefulInline = (props) => {
  const [value, setValue] = useState(commonProps.value);

  return (
    <>
      <AInlineInputBase
        value={value}
        data-testid="inline-input"
        onChange={setValue}
        {...props}
      />
      <br />
      <br />
      Acutal Value: <div data-testid="actual-value">{value}</div>
    </>
  );
};
