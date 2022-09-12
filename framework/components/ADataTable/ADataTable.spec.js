context("ADataTable", () => {
  before(() => {
    cy.visitInLightTheme("http://localhost:3000/components/data-table");
  });

  const basicUsageSelector = `#basic + .playground`;
  const infiniteScrollSelector = '#infinite-scrolling + .playground';

  it("sorts normally", () => {
    cy.get(`${basicUsageSelector} td`).eq(0).contains(11.1);
    cy.get(`${basicUsageSelector} th`).eq(0).click();
    cy.get(`${basicUsageSelector} td`).eq(0).contains(8.9);
    cy.get(`${basicUsageSelector} th`).eq(0).click();
    cy.get(`${basicUsageSelector} td`).eq(0).contains(11.1);
    cy.get(`${basicUsageSelector} th .a-icon`)
      .eq(0)
      .should("have.attr", "aria-label", "chevron-down icon");
    cy.get(`${basicUsageSelector} th`).eq(0).click();
    cy.get(`${basicUsageSelector} td`).eq(0).contains(11.1);
  });

  it("allows disabled sort", () => {
    cy.get(`${basicUsageSelector} td`).eq(1).contains(526);
    cy.get(`${basicUsageSelector} th`).eq(1).click();
    cy.get(`${basicUsageSelector} td`).eq(1).contains(526);
    cy.get(`${basicUsageSelector} th`).eq(1).click();
    cy.get(`${basicUsageSelector} td`).eq(1).contains(526);
    cy.get(`${basicUsageSelector} th .a-icon`)
      .eq(1)
      .should("have.attr", "aria-label", "chevron-down icon");
    cy.get(`${basicUsageSelector} th`).eq(1).click();
    cy.get(`${basicUsageSelector} td`).eq(1).contains(526);
  });

  it("allows custom sort", () => {
    cy.get(`${basicUsageSelector} td`).eq(2).contains("aardvark");
    cy.get(`${basicUsageSelector} th`).eq(2).click();
    cy.get(`${basicUsageSelector} td`).eq(2).contains("aardvark");
    cy.get(`${basicUsageSelector} th`).eq(2).click();
    cy.get(`${basicUsageSelector} td`).eq(2).contains("Zanzibar");
    cy.get(`${basicUsageSelector} th .a-icon`)
      .eq(2)
      .should("have.attr", "aria-label", "chevron-down icon");
    cy.get(`${basicUsageSelector} th`).eq(2).click();
    cy.get(`${basicUsageSelector} td`).eq(2).contains("aardvark");
  });

  it("allows events to be fired when the last row is on the screen", () => {
    cy.get(`${infiniteScrollSelector} tr`).should("have.length", 26);
    cy.get(`${infiniteScrollSelector} div[data-testid="table-wrapper"]`).scrollTo('bottom');
    // Disable this eslint rule since the demo uses an arbitrary delay
    // to mimic a delay from an HTTP request
    cy.wait(1000); // eslint-disable-line cypress/no-unnecessary-waiting
    cy.get(`${infiniteScrollSelector} tr`).should("have.length", 51);
  });

  it("aligns correctly", () => {
    if (Cypress.env("snapshots") === "off") return;

    cy.get(`${basicUsageSelector} .playground__preview`).compareSnapshot(
      "DataTable 1"
    );
  });

  it("toggles expandable table cells", () => {
    cy.get("#expandable-rows + .playground td button").eq(0).should("have.attr", "aria-expanded", "false");
    cy.get("#expandable-rows + .playground td button").eq(0).click();
    cy.get("#expandable-rows + .playground td button").eq(0).should("have.attr", "aria-expanded", "true");
    cy.get("#expandable-rows + .playground td button").eq(0).click();
    cy.get("#expandable-rows + .playground td button").eq(0).should("have.attr", "aria-expanded", "false");
  });
});
