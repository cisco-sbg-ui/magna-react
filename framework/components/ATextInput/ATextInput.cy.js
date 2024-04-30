import AButton from "../AButton";
import ATextInput from "./ATextInput";

const commonProps = {
  labelId: "test",
  labelFor: "test",
  label: "test label"
};

describe("<ATextInput />", () => {
  it("should render", () => {
    cy.mount(<ATextInput {...commonProps} />);
  });

  it("should automatically focus if specified", () => {
    /* eslint-disable jsx-a11y/no-autofocus */
    cy.mount(<ATextInput autoFocus {...commonProps} />);

    cy.get(".a-text-input__input").should("have.focus");
  });

  it("should clear input text if specified", () => {
    cy.mount(<ATextInput {...commonProps} clearable />);

    // Type text
    cy.get(".a-text-input__input").type("test input");
    cy.get(".a-text-input__input").should("have.value", "test input");

    // Clear text
    cy.get(".a-input-base__clear").click();
    cy.get(".a-text-input__input").should("have.value", "");
  });

  describe("when rendered with a prepend icon", () => {
    let mockFn;
    let prependProps;

    beforeEach(() => {
      mockFn = cy.stub();
      prependProps = {
        prependIcon: "star",
        onClickPrepend: mockFn
      };
    });

    it("should handle clicks to the icon", () => {
      cy.mount(<ATextInput {...commonProps} {...prependProps} />);
      cy.get(".a-text-input__prepend-icon")
        .click()
        .then(() => {
          expect(mockFn.callCount).to.eq(1);
        });
    });

    it("should not handle clicks to the icon when input is disabled", () => {
      cy.mount(<ATextInput {...commonProps} {...prependProps} disabled />);
      cy.get(".a-text-input__prepend-icon")
        .click({force: true})
        .then(() => {
          expect(mockFn.callCount).to.eq(0);
        });
    });

    it("should not handle clicks to the icon when input is readonly", () => {
      cy.mount(<ATextInput {...commonProps} {...prependProps} readOnly />);
      cy.get(".a-text-input__prepend-icon")
        .click({force: true})
        .then(() => {
          expect(mockFn.callCount).to.eq(0);
        });
    });
  });

  describe("when rendered with an append icon", () => {
    let mockFn;
    let appendProps;

    beforeEach(() => {
      mockFn = cy.stub();
      appendProps = {
        appendIcon: "star",
        onClickAppend: mockFn
      };
    });

    it("should handle clicks to the icon", () => {
      cy.mount(<ATextInput {...commonProps} {...appendProps} />);
      cy.get(".a-text-input__append-icon")
        .click()
        .then(() => {
          expect(mockFn.callCount).to.eq(1);
        });
    });

    it("should not handle clicks to the icon when input is disabled", () => {
      cy.mount(<ATextInput {...commonProps} {...appendProps} disabled />);
      cy.get(".a-text-input__append-icon")
        .click({force: true})
        .then(() => {
          expect(mockFn.callCount).to.eq(0);
        });
    });

    it("should not handle clicks to the icon when input is readonly", () => {
      cy.mount(<ATextInput {...commonProps} {...appendProps} readOnly />);
      cy.get(".a-text-input__append-icon")
        .click({force: true})
        .then(() => {
          expect(mockFn.callCount).to.eq(0);
        });
    });

    it("should only show clear when the input has text", () => {
      const textualInput = "clearable text";
      cy.mount(<ATextInput {...commonProps} clearable />);
      cy.get(".a-input-base__clear").should("not.exist");

      // shows clear icon for input
      cy.get(".a-text-input__input").type(textualInput);
      cy.get(".a-input-base__clear").should("exist");

      // hides clear icon when input is manually deleted
      cy.get(".a-text-input__input").type(
        "{backspace}".repeat(textualInput.length)
      );
      cy.get(".a-input-base__clear").should("not.exist");

      // hides clear icon after click
      cy.get(".a-text-input__input").type("clearable text");
      cy.get(".a-input-base__clear").should("exist");
      cy.get(".a-input-base__clear").click();
      cy.get(".a-input-base__clear").should("not.exist");
    });

    it("should not show clear when not clearable (default)", () => {
      cy.mount(<ATextInput {...commonProps} />);
      cy.get(".a-input-base__clear").should("not.exist");

      cy.get(".a-text-input__input").type("clearable text");

      cy.get(".a-input-base__clear").should("not.exist");
    });
  });

  describe("when rendered with an append icon", () => {
    let mockFn;
    let appendProps;

    beforeEach(() => {
      mockFn = cy.stub();
      appendProps = {
        appendIcon: "star",
        onClickAppend: mockFn
      };
    });
  });

  describe("when rendered with append content", () => {
    let mockFn;

    beforeEach(() => {
      mockFn = cy.stub();
    });

    it("should handle clicks to the button", () => {
      cy.mount(
        <ATextInput
          {...commonProps}
          append={<AButton onClick={mockFn}>Show</AButton>}
        />
      );
      cy.get(".a-button")
        .click()
        .then(() => {
          expect(mockFn.callCount).to.eq(1);
        });
    });
  });

  describe("when rendered with validation", () => {
    let validationRules = {
      rules: [
        {
          // Always returns error for sake of unit testing
          test: () => "test validation error",
          level: "warning"
        }
      ]
    };

    it("should accept validation rules as props", () => {
      cy.mount(<ATextInput {...commonProps} {...validationRules} />);

      // Type and check for validation
      cy.get(".a-text-input__input").type("a");
      cy.get(".a-alert").should("exist");
    });

    it("should add validation rule props to internal validation rules", () => {
      cy.mount(<ATextInput {...commonProps} {...validationRules} min={2} />);

      // First check for built-in min validation rule
      cy.get(".a-text-input__input").type("1");
      cy.get(".a-alert--state-danger").should("exist");

      // Resolve min value rule, then check for the custom validation rule
      cy.get(".a-text-input__input").type("5");
      cy.get(".a-alert--state-warning").should("exist");
    });

    it("should delay validation error messages if specified for blur", () => {
      cy.mount(
        <>
          <ATextInput {...commonProps} {...validationRules} validateOnBlur />
          <button onClick={() => {}}>focusable</button>
        </>
      );

      // Type and ensure validation is delayed
      cy.get(".a-text-input__input").type("a");
      cy.get(".a-alert").should("not.exist");

      // Tab out of input to trigger blur
      cy.tab();
      cy.get(".a-alert").should("exist");
    });

    it("should support automatic required value validation", () => {
      cy.mount(
        <>
          <ATextInput {...commonProps} required />
          <button tabIndex={0} />
        </>
      );

      // Focus to input and immediately tab out
      // to make input dirty
      cy.get(".a-text-input__input").focus();
      cy.tab();
      cy.get(".a-alert--state-danger").should("exist");
    });

    it("should support automatic min value validation", () => {
      cy.mount(<ATextInput {...commonProps} min={5} />);

      cy.get(".a-text-input__input").type("1");
      cy.get(".a-alert").should("exist");
    });

    it("should support automatic max value validation", () => {
      cy.mount(<ATextInput {...commonProps} max={5} />);

      cy.get(".a-text-input__input").type("10");
      cy.get(".a-alert").should("exist");
    });

    it("should clear validation messages when the clear button is clicked", () => {
      cy.mount(<ATextInput {...commonProps} max={5} clearable />);

      // Type into input to trigger error
      cy.get(".a-text-input__input").type("10");
      cy.get(".a-alert").should("exist");

      // Clear entered value
      cy.get(".a-input-base__clear").click();
      cy.get(".a-alert").should("not.exist");
    });

    it("should override internal rule for min", () => {
      const min = 5;
      cy.mount(
        <ATextInput
          type="number"
          {...commonProps}
          min={min}
          rules={[
            {
              key: "min",
              test: (v) => v >= min || "TEST WARNING",
              level: "warning"
            }
          ]}
        />
      );

      cy.get(".a-text-input__input").type("1");

      cy.get(".a-alert").should("exist");
      cy.get(".a-alert--state-warning").should("exist");
      cy.get(".a-alert__message").should("have.text", "TEST WARNING");
    });

    it("should override internal rule for max", () => {
      const max = 5;
      cy.mount(
        <ATextInput
          type="number"
          {...commonProps}
          max={max}
          rules={[
            {
              key: "max",
              test: (v) => v <= max || "TEST WARNING",
              level: "warning"
            }
          ]}
        />
      );

      cy.get(".a-text-input__input").type("10");

      cy.get(".a-alert").should("exist");
      cy.get(".a-alert--state-warning").should("exist");
      cy.get(".a-alert__message").should("have.text", "TEST WARNING");
    });

    it("should override internal rule for required", () => {
      cy.mount(
        <>
          <ATextInput
            {...commonProps}
            required
            rules={[
              {
                key: "required",
                test: (v) => !!v || "TEST WARNING",
                level: "warning"
              }
            ]}
          />
          <button tabIndex={0} />
        </>
      );

      // The test needs another tabbable element since the clear button is no longer always present

      cy.get(".a-text-input__input").focus();

      cy.tab();

      cy.get(".a-alert").should("exist");
      cy.get(".a-alert--state-warning").should("exist");
      cy.get(".a-alert__message").should("have.text", "TEST WARNING");
    });
  });
});
