import {useRef} from "react";

import useFocusTrap from "./useFocusTrap";

describe("useFocusTrap()", () => {
  it("should trap focus when tabbing forward", () => {
    cy.mount(<FocusTrapTest />);

    cy.getByDataTestId("trapped-item-1").should("have.focus");
    cy.get("body").tab();
    cy.getByDataTestId("trapped-item-2").should("have.focus");
    cy.get("body").tab();
    cy.getByDataTestId("trapped-item-3").should("have.focus");
    cy.get("body").tab();
    cy.getByDataTestId("trapped-item-1").should("have.focus");
  });

  it("should trap focus when tabbing backwards", () => {
    cy.mount(<FocusTrapTest />);

    cy.getByDataTestId("trapped-item-1").should("have.focus");
    cy.get("body").tab({shift: true});
    cy.getByDataTestId("trapped-item-3").should("have.focus");
    cy.get("body").tab({shift: true});
    cy.getByDataTestId("trapped-item-2").should("have.focus");
    cy.get("body").tab({shift: true});
    cy.getByDataTestId("trapped-item-1").should("have.focus");
  });
});

function FocusTrapTest() {
  const trapRef = useRef();
  useFocusTrap({
    rootRef: trapRef,
    isEnabled: true
  });
  return (
    <>
      <div>
        {[...new Array(3).keys()].map((num) => (
          <a
            key={num}
            data-testid={`inaccessible-item-${num}`}
            href={`#link-${num}`}
          >
            link {num}
          </a>
        ))}
      </div>

      <div id="trap" ref={trapRef}>
        <form>
          <label htmlFor="username">Username</label>
          <input data-testid="trapped-item-1" id="username" type="text" />
          <br />
          <label htmlFor="password">Password</label>
          <input data-testid="trapped-item-2" type="password" />
          <br />
          <button data-testid="trapped-item-3">Submit</button>
        </form>
      </div>

      <div>
        {[...new Array(3).keys()]
          .map((num) => num + 3)
          .map((num) => (
            <a
              key={num}
              data-testid={`inaccessible-item-${num}`}
              href={`#link-${num}`}
            >
              link {num}
            </a>
          ))}
      </div>
    </>
  );
}
