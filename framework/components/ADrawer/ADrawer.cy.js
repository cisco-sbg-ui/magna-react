import React, {useState} from "react";
import AButton from "../AButton";
import AIcon from "../AIcon";
import ADrawer from "./ADrawer";
import ADrawerContent from "./ADrawerContent";

const openDrawer = () => {
  cy.getByDataTestId("open-btn").click();
};

describe("<AModal />", () => {
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
      // Assert on drawer content since the drawer itself takes up the
      // entire width after rendering the page overlay from `AModal`
      cy.getByDataTestId("drawer").invoke("outerWidth").should("eq", 800);
    });
  });
});

function DrawerTest({asModal = true, slideIn = "right", openWidth}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <AButton data-testid="open-btn" onClick={() => setIsOpen(true)}>
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
          <h3 data-testid="drawer-content">drawer content</h3>
        </ADrawerContent>
      </ADrawer>
    </>
  );
}
