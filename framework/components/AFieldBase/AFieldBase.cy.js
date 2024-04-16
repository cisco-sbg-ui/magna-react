import AFieldBase from "./AFieldBase";

const commonProps = {
  labelId: "test",
  labelFor: "test",
  label: "test label"
};

const tooltipProps = {
  infoTooltip: "test tooltip",
  infoTooltipProps: {
    "data-testid": "tooltip"
  }
};

describe("<AFieldBase />", () => {
  it("should render an associated label", () => {
    cy.mount(<AFieldBase {...commonProps} />);

    cy.get('label[for="test"]').should("exist");
  });

  describe("when rendered with a tooltip", () => {
    it("should add an information icon", () => {
      cy.mount(<AFieldBase {...commonProps} {...tooltipProps} />);

      cy.getByAriaLabel("information icon").should("exist");
    });

    it("should display content with a pointer by default", () => {
      cy.mount(<AFieldBase {...commonProps} {...tooltipProps} />);

      cy.hoverATooltip();
      cy.getByDataTestId("tooltip").should("be.visible");
      cy.get(".a-menu-base__pointer").should("exist");
    });

    it("should allow tooltip props to be customized", () => {
      const noPointerConfig = {
        ...tooltipProps.infoTooltipProps,
        pointer: false
      };
      cy.mount(
        <AFieldBase
          {...commonProps}
          {...tooltipProps}
          infoTooltipProps={noPointerConfig}
        />
      );

      cy.hoverATooltip();
      cy.getByDataTestId("tooltip").should("be.visible");
      cy.get(".a-menu-base__pointer").should("not.exist");
    });
  });

  describe("when rendered with a hints", () => {
    it("should render single hint", () => {
      cy.mount(
        <AFieldBase
          {...commonProps}
          hints={[
            {
              content: "Simple hint"
            }
          ]}
        />
      );

      cy.get(".a-field-base__hint").should("have.length", 1);
      cy.get(".a-field-base__hint").should("have.text", "Simple hint");
    });

    it("should render two hints", () => {
      cy.mount(
        <AFieldBase
          {...commonProps}
          hints={[
            {
              content: "Simple hint 1"
            },
            {
              content: "Simple hint 2"
            }
          ]}
        />
      );

      cy.get(".a-field-base__hint").should("have.length", 2);
      cy.get(".a-field-base__hint:first").should("have.text", "Simple hint 1");
      cy.get(".a-field-base__hint:last").should("have.text", "Simple hint 2");
    });

    it("should render hint with component validation state", () => {
      cy.mount(
        <AFieldBase
          {...commonProps}
          validationState="danger"
          hints={[
            {
              content: "Simple hint",
              hintUsesValidationState: true
            }
          ]}
        />
      );

      cy.get(".a-field-base__hint").should("have.length", 1);
      cy.get(".a-field-base__hint").should("have.text", "Simple hint");
      cy.get(".a-alert--state-danger").should("exist");
    });

    it("should render hint with overridden validation state ", () => {
      cy.mount(
        <AFieldBase
          {...commonProps}
          validationState="warning"
          hints={[
            {
              content: "Simple hint",
              validationStateOverride: "danger"
            }
          ]}
        />
      );

      cy.get(".a-field-base__hint").should("have.length", 1);
      cy.get(".a-field-base__hint").should("have.text", "Simple hint");
      cy.get(".a-alert--state-danger").should("exist");
    });

    it("should render hint when there is no error and we have set hideHintOnError", () => {
      cy.mount(
        <AFieldBase
          {...commonProps}
          hints={[
            {
              content: "Simple hint",
              hideHintOnError: true
            }
          ]}
        />
      );

      cy.get(".a-field-base__hint").should("have.length", 1);
      cy.get(".a-field-base__hint").should("have.text", "Simple hint");
    });

    it("should not render hint when there is error and we have set hideHintOnError", () => {
      cy.mount(
        <AFieldBase
          {...commonProps}
          error="ERROR !"
          hints={[
            {
              content: "Simple hint",
              hideHintOnError: true
            }
          ]}
        />
      );

      cy.get(".a-field-base__hint").should("have.length", 1);
      cy.get(".a-field-base__hint").should("have.text", "ERROR !");
    });
  });
});
