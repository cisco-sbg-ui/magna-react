import useKeydown from "./useKeydown";

describe("useKeydown()", async () => {
  it("should detect escape key presses", () => {
    const mockFn = cy.stub();
    cy.mount(<KeydownTest onEscapeKeydown={mockFn} />);

    expect(mockFn.callCount).to.eq(0);
    cy.escapeKeydown().then(() => {
      expect(mockFn.callCount).to.eq(1);
    });
    cy.escapeKeydown().then(() => {
      expect(mockFn.callCount).to.eq(2);
    });
  });

  it("should not detect escape key presses when disabled", () => {
    const mockFn = cy.stub();
    cy.mount(<KeydownTest isEnabled={false} onEscapeKeydown={mockFn} />);

    expect(mockFn.callCount).to.eq(0);
    cy.escapeKeydown().then(() => {
      expect(mockFn.callCount).to.eq(0);
    });
    cy.escapeKeydown().then(() => {
      expect(mockFn.callCount).to.eq(0);
    });
  });
});

function KeydownTest({isEnabled = true, onEscapeKeydown}) {
  useKeydown(["Escape"], onEscapeKeydown, isEnabled);
  return <span>test</span>;
}
