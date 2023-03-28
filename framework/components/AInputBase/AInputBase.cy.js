import AInputBase from "./AInputBase";

const commonProps = {
  labelId: "test",
  labelFor: "test",
  label: "test label",
  clearable: true
};

describe("<AInputBase />", () => {
  it("should render an associated label", () => {
    cy.mount(<AInputBase {...commonProps} />);
  });

  describe("when clearing the input", () => {
    let mockFn;
    beforeEach(() => {
      mockFn = cy.stub();
      cy.mount(<AInputBase {...commonProps} onClear={mockFn} />);
    });

    it("should invoke the clear callback on click", () => {
      cy.get(".a-input-base__clear")
        .click()
        .then(() => {
          expect(mockFn.callCount).to.eq(1);
        });
    });

    it("should invoke the clear callback on space keydown", () => {
      cy.get(".a-input-base__clear")
        .spaceKeydown()
        .then(() => {
          expect(mockFn.callCount).to.eq(1);
        });
    });

    it("should invoke the clear callback on enter keydown", () => {
      cy.get(".a-input-base__clear")
        .enterKeydown()
        .then(() => {
          expect(mockFn.callCount).to.eq(1);
        });
    });
  });

  describe("when rendering as readonly", () => {
    let mockFn;
    beforeEach(() => {
      mockFn = cy.stub();
      cy.mount(
        <AInputBase {...commonProps} readOnly={true} onClear={mockFn} />
      );
    });

    it("should not render a clear icon", () => {
      cy.get(".a-input-base__clear").should("not.exist");
    });
  });
});
