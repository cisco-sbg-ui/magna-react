declare namespace Cypress {
  type CypressElement = JQuery<HTMLElement>;

  interface Chainable {
    mount(component: React.ReactNode): Chainable<unknown>;

    /**
     * Custom command to select DOM element by data-testid attribute.
     * @example getting an element by the data-testid attribute
     * ```TypeScript
     * cy.getByDataTestId("some-test-id")
     * ```
     */
    getByDataTestId(id: string): Chainable<CypressElement>;

    /**
     * Custom command to select DOM element by aria-label attribute.
     * @example getting an element by its aria label
     * ```TypeScript
     * cy.getByAriaLabel("some-aria-label")
     * ```
     */
    getByAriaLabel(label: string): Chainable<CypressElement>;

    /**
     * Custom command to hover a tooltip
     * @example checking that a tooltip is visible
     * ```TypeScript
     * cy.hoverATooltip();
     * cy.getByDataTestId("tooltip").should("be.visible");
     * ```
     */
    hoverATooltip(): Chainable<CypressElement>;

    /**
     * Custom command to hover a tooltip
     * @example checking that a tooltip is visible
     * ```TypeScript
     * cy.hoverATooltip();
     * cy.getByDataTestId("tooltip").should("be.visible");
     * ```
     */
    clickATooltip(): Chainable<CypressElement>;

    /**
     * Custom command to get a style of a pseudo element
     * @example checking that a border is blue
     * ```TypeScript
     * cy.get(".some-class")
     *    .then(($el) => cy.getPseudoElementStyle($el, ":before", "border-left"))
     *    .then((borderStyle) => {
     *        expect(borderStyle).contains("2px solid blue");
     *    });
     * ```
     */
    getPseudoElementStyle(
      $el: any,
      pseudoElement: any,
      style: string
    ): Chainable<Element>;

    /**
     * Custom command defined in the `cypress-plugin-tab` package.
     * @example
     * ```TypeScript
     * cy.get("#focusable-item-1").should("have.focus");
     * cy.get("body").tab();
     * cy.get("#focusable-item-2").should("have.focus");
     * ```
     * @see https://github.com/kuceb/cypress-plugin-tab/blob/61db462718cdc791194d577555cc88f58c176996/src/index.d.ts#L5C3-L5C54
     */
    tab(options?: Partial<{shift: boolean}>): Chainable;

    /**
     * Deprecated: not used in component tests
     */
    waitForFonts(): Chainable<void>;

    /**
     * Deprecated: not used in component tests
     */
    visitInLightTheme(url: string): Chainable<void>;

    /**
     * Deprecated: not used in component tests
     */
    visitInDarkTheme(url: string): Chainable<void>;

    /**
     * Deprecated: not used in component tests
     */
    isCovered(value: string): Chainable<boolean>;
  }
}
