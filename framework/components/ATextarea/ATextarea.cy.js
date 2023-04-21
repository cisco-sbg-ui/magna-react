import ATextarea from "./ATextarea";

const commonProps = {
  labelId: "test",
  labelFor: "test",
  label: "test label",
  clearable: true
};

describe("<ATextarea />", () => {
  it("should render", () => {
    cy.mount(<ATextarea {...commonProps} />);
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
      cy.mount(<ATextarea {...commonProps} {...validationRules} />);

      // Type and check for validation
      cy.get(".a-textarea__field").type("a");
      cy.get(".a-alert").should("exist");
    });

    it("should support automatic required value validation", () => {
      cy.mount(<ATextarea {...commonProps} required />);

      cy.get(".a-textarea__field").focus();
      cy.tab();

      cy.get(".a-alert").should("exist");
      cy.get(".a-alert--state-danger").should("exist");
    });

    it("should override internal rule for required", () => {
      cy.mount(
        <ATextarea
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
      );

      cy.get(".a-textarea__field").focus();
      cy.tab();

      cy.get(".a-alert").should("exist");
      cy.get(".a-alert--state-warning").should("exist");
      cy.get(".a-alert__message").should("have.text", "TEST WARNING");
    });
  });
});
