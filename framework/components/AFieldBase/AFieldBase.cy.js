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

  describe("when rendered with a hint", () => {
    it("should render a hint", () => {
      cy.mount(<AFieldBase {...commonProps} hint="test hint" />);

      cy.get(".a-field-base__hint").should("exist");
    });

    it("should render an error in place of a hint by default", () => {
      cy.mount(
        <AFieldBase
          {...commonProps}
          hint="test hint"
          error="test error"
          validationState="danger"
        />
      );

      cy.get(".a-field-base__hint").should("have.length", 1);
      cy.get(".a-alert").should("exist");
    });

    it("should allow the default hint to render alongside an error", () => {
      cy.mount(
        <AFieldBase
          {...commonProps}
          hint="test hint"
          error="test error"
          validationState="danger"
          hideHintOnError={false}
        />
      );

      cy.get(".a-field-base__hint").should("have.length", 2); // One for hint, one for error
      cy.get(".a-alert").should("exist");
    });
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
});
