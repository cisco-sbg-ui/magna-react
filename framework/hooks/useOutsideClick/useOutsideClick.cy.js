import {useRef} from "react";
import useOutsideClick from "./useOutsideClick";

describe("useOutsideClick()", async () => {
  it("should detect outside clicks given a rootRef", () => {
    const mockFn = cy.stub();
    cy.mount(<OutsideClickTest onOutsideClick={mockFn} />);

    cy.getByDataTestId("inside")
      .click()
      .then(() => {
        expect(mockFn).not.to.be.called;
      });

    cy.getByDataTestId("outside")
      .click()
      .then(() => {
        expect(mockFn).to.be.calledOnce;
      });
  });

  it("should limit outside click detection to the containerRef", () => {
    const mockFn = cy.stub();
    cy.mount(<OutsideClickWithBoundsTest onOutsideClick={mockFn} />);

    cy.getByDataTestId("inside")
      .click()
      .then(() => {
        expect(mockFn).not.to.be.called;
        expect(mockFn.callCount).to.eq(0);
      });

    cy.getByDataTestId("outside")
      .click()
      .then(() => {
        expect(mockFn).to.be.calledOnce;
        expect(mockFn.callCount).to.eq(1);
      });

    cy.getByDataTestId("out-of-bounds")
      .click()
      .then(() => {
        expect(mockFn.callCount).to.eq(1);
      });
  });
});

function OutsideClickTest({onOutsideClick}) {
  const rootRef = useRef();
  useOutsideClick({
    isEnabled: true,
    rootRef,
    onClick: onOutsideClick
  });

  return (
    <>
      <div
        data-testid="outside"
        style={{
          background: "red",
          height: "300px",
          width: "300px"
        }}
      >
        outside
      </div>
      <div
        data-testid="inside"
        ref={rootRef}
        style={{
          background: "green",
          height: "100px",
          width: "100px"
        }}
      >
        inside
      </div>
    </>
  );
}

function OutsideClickWithBoundsTest({onOutsideClick}) {
  const containerRef = useRef();
  const rootRef = useRef();
  useOutsideClick({
    isEnabled: true,
    rootRef,
    onClick: onOutsideClick,
    containerRef
  });
  return (
    <>
      <div
        data-testid="out-of-bounds"
        style={{
          background: "grey",
          height: "100px",
          width: "100px"
        }}
      >
        out of bounds
      </div>
      <div
        data-testid="outside"
        ref={containerRef}
        style={{
          background: "red",
          height: "300px",
          width: "300px"
        }}
      >
        outside
        <div
          data-testid="inside"
          ref={rootRef}
          style={{
            background: "green",
            height: "100px",
            width: "100px"
          }}
        >
          inside
        </div>
      </div>
    </>
  );
}
