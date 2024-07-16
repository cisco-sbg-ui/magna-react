/* eslint-disable jsx-a11y/no-autofocus */
import React, {useRef} from "react";
import {ATextarea, useFocusTrap} from "../../framework";

describe("useFocusTrap()", () => {
  it("should trap focus when tabbing forward", () => {
    cy.mount(<FocusTrapTest />);

    cy.get("#trap").should("have.focus");
    cy.get("body").tab();
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

    cy.get("#trap").should("have.focus");
    cy.get("body").tab({shift: true});
    cy.getByDataTestId("trapped-item-1").should("have.focus");
    cy.get("body").tab({shift: true});
    cy.getByDataTestId("trapped-item-3").should("have.focus");
    cy.get("body").tab({shift: true});
    cy.getByDataTestId("trapped-item-2").should("have.focus");
    cy.get("body").tab({shift: true});
    cy.getByDataTestId("trapped-item-1").should("have.focus");
  });

  it("allows inner element to autofocus itself", () => {
    cy.mount(
      <FocusTrapTest enableAutofocus={false}>
        {/** @todo remove this ts-expect-error */}
        {/** @ts-expect-error `ATextArea` not yet converted to TypeScript */}
        <ATextarea autoFocus />
      </FocusTrapTest>
    );

    cy.get("textarea").should("have.focus");
  });

  it("should preserve tab order when an element within the focus trap is explicitly clicked", () => {
    cy.mount(<FocusTrapTest />);

    cy.get("#trap").should("have.focus");

    cy.getByDataTestId("trapped-item-2").click();
    cy.getByDataTestId("trapped-item-2").should("have.focus");

    cy.get("body").tab();
    cy.getByDataTestId("trapped-item-3").should("have.focus");

    cy.get("body").tab();
    cy.getByDataTestId("trapped-item-1").should("have.focus");

    cy.getByDataTestId("trapped-item-3").click();
    cy.get("body").tab({shift: true});
    cy.getByDataTestId("trapped-item-2").should("have.focus");
  });

  it("should preserve tab order when the inner element receives auto focus", () => {
    cy.mount(<AutoInitialFocusTest />);

    cy.get("textarea").should("have.focus");
    cy.get("body").tab();
    cy.getByDataTestId("trapped-item-3").should("have.focus");
  });

  it("should preserve tab order when another element is passed to set initial focus to", () => {
    cy.mount(<CustomInitialFocusTest />);

    cy.getByDataTestId("trapped-item-2").should("have.focus");
    cy.get("body").tab();
    cy.getByDataTestId("trapped-item-3").should("have.focus");
  });

  it("should reset the tab order when a non-focusable element within the focus trap is explicitly clicked", () => {
    cy.mount(<FocusTrapTest />);

    cy.get("#trap").should("have.focus");

    cy.getByDataTestId("trapped-item-2").click();
    cy.getByDataTestId("trapped-item-2").should("have.focus");

    cy.get("label").eq(1).click();
    cy.getByDataTestId("trapped-item-2").should("not.have.focus");

    cy.get("body").tab();
    cy.getByDataTestId("trapped-item-1").should("have.focus");
  });
});

const FocusTrapTest = ({
  children,
  enableAutofocus = true
}: {
  children?: React.ReactNode;
  enableAutofocus?: boolean;
}) => {
  const trapRef = useRef<HTMLDivElement>(null);
  useFocusTrap({
    rootRef: trapRef,
    isEnabled: true,
    autoFocusElementRef: enableAutofocus ? trapRef : undefined
  });
  return (
    <>
      <div>
        {[...new Array(3).keys()].map((num) => (
          <a
            key={num}
            data-testid={`inaccessible-item-${num}`}
            href={`#link-${num}`}>
            link {num}
          </a>
        ))}
      </div>

      <div id="trap" tabIndex={-1} ref={trapRef}>
        <form>
          <label htmlFor="username">Username</label>
          <input data-testid="trapped-item-1" id="username" type="text" />
          <br />
          <label htmlFor="password">Password</label>
          <input data-testid="trapped-item-2" type="password" />
          <br />
          <button data-testid="trapped-item-3" type="button">
            Submit
          </button>
        </form>

        {children}
      </div>

      <div>
        {[...new Array(3).keys()]
          .map((num) => num + 3)
          .map((num) => (
            <a
              key={num}
              data-testid={`inaccessible-item-${num}`}
              href={`#link-${num}`}>
              link {num}
            </a>
          ))}
      </div>
    </>
  );
};

const CustomInitialFocusTest = () => {
  const trapContainerRef = useRef<HTMLDivElement>(null);
  const initialFocusElRef = useRef<HTMLInputElement>(null);
  useFocusTrap({
    rootRef: trapContainerRef,
    isEnabled: true,
    autoFocusElementRef: initialFocusElRef
  });
  return (
    <>
      <div>
        {[...new Array(3).keys()].map((num) => (
          <a
            key={num}
            data-testid={`inaccessible-item-${num}`}
            href={`#link-${num}`}>
            link {num}
          </a>
        ))}
      </div>

      <div id="trap" tabIndex={-1} ref={trapContainerRef}>
        <form>
          <label htmlFor="username">Username</label>
          <input data-testid="trapped-item-1" id="username" type="text" />
          <br />
          <label htmlFor="password">Password</label>
          <input
            ref={initialFocusElRef}
            data-testid="trapped-item-2"
            type="password"
          />
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
              href={`#link-${num}`}>
              link {num}
            </a>
          ))}
      </div>
    </>
  );
};

const AutoInitialFocusTest = () => {
  const trapContainerRef = useRef<HTMLDivElement>(null);
  useFocusTrap({
    rootRef: trapContainerRef,
    isEnabled: true
  });
  return (
    <>
      <div>
        {[...new Array(3).keys()].map((num) => (
          <a
            key={num}
            data-testid={`inaccessible-item-${num}`}
            href={`#link-${num}`}>
            link {num}
          </a>
        ))}
      </div>

      <div id="trap" tabIndex={-1} ref={trapContainerRef}>
        <form>
          <label htmlFor="username">Username</label>
          <input data-testid="trapped-item-1" id="username" type="text" />
          <br />
          <label htmlFor="password">Password</label>
          {/** @todo remove this ts-expect-error */}
          {/** @ts-expect-error `ATextArea` not yet converted to TypeScript */}
          <ATextarea autoFocus />
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
              href={`#link-${num}`}>
              link {num}
            </a>
          ))}
      </div>
    </>
  );
};
