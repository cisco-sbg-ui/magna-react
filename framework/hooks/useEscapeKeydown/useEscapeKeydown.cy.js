import useEscapeKeydown from "./useEscapeKeydown";

describe("useEscapeKeydown()", async () => {
  it("should detect escape key presses", () => {
    const mockFn = cy.stub();
    cy.mount(<EscapeKeydownTest onEscapeKeydown={mockFn} />);

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
    cy.mount(<EscapeKeydownTest isEnabled={false} onEscapeKeydown={mockFn} />);

    expect(mockFn.callCount).to.eq(0);
    cy.escapeKeydown().then(() => {
      expect(mockFn.callCount).to.eq(0);
    });
    cy.escapeKeydown().then(() => {
      expect(mockFn.callCount).to.eq(0);
    });
  });
});

function EscapeKeydownTest({isEnabled = true, onEscapeKeydown}) {
  useEscapeKeydown({isEnabled, onKeydown: onEscapeKeydown});
  return <span>test</span>;
}
