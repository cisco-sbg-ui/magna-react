import React, {useState} from "react";
import APaginator from "./APaginator";

const first = ".a-paginator__first";
const last = ".a-paginator__last";
const previous = ".a-paginator__previous";
const next = ".a-paginator__next";

const results = ".a-paginator__results";

describe("<APaginator/>", () => {
  it("should render", () => {
    cy.mount(<APaginator />);
  });

  it("has working basic pagination", () => {
    cy.mount(<APaginatorDefault />);

    cy.getByDataTestId("pagination-test")
      .contains("Page 0")
      .get(previous)
      .should("have.attr", "disabled")
      .get(next)
      .click()
      .get(previous)
      .should("not.have.attr", "disabled");

    cy.getByDataTestId("pagination-test").contains("Page 1").get(next).click();

    cy.getByDataTestId("pagination-test")
      .contains("Page 2")
      .get(next)
      .should("have.attr", "disabled");
  });

  it("can traverse back and forth", () => {
    cy.mount(<APaginatorDefault />);

    // Forward

    cy.getByDataTestId("pagination-test").contains("Page 0").get(next).click();

    cy.getByDataTestId("pagination-test").contains("Page 1").get(next).click();

    cy.getByDataTestId("pagination-test")
      .contains("Page 2")
      .get(next)
      .should("have.attr", "disabled");

    // Back

    cy.getByDataTestId("pagination-test")
      .contains("Page 2")
      .get(previous)
      .click();

    cy.getByDataTestId("pagination-test")
      .contains("Page 1")
      .get(previous)
      .click();

    cy.getByDataTestId("pagination-test")
      .contains("Page 0")
      .get(previous)
      .should("have.attr", "disabled");
  });

  it("has disabled controls when no pages", () => {
    cy.mount(<APaginatorDefault resultsPerPage={100} />);

    cy.getByDataTestId("pagination-test")
      .get(previous)
      .should("have.attr", "disabled");

    cy.getByDataTestId("pagination-test")
      .get(next)
      .should("have.attr", "disabled");
  });

  it("should have result count", () => {
    cy.mount(<APaginatorDefault page={1} />);

    cy.getByDataTestId("pagination-test").get(results).contains("31-60 of 90");
  });

  it("should NOT have result count", () => {
    cy.mount(<APaginatorDefault page={1} showPageDetail={false} />);

    cy.getByDataTestId("pagination-test").get(results).should("not.exist");
  });

  it("should jump to last when clicking last page", () => {
    cy.mount(<APaginatorDefault />);

    cy.getByDataTestId("pagination-test")
      .get(".a-paginator__page-button")
      .contains("3")
      .click();

    cy.getByDataTestId("pagination-test").contains("Page 2");
  });

  it("should jump to first when clicking first page", () => {
    cy.mount(<APaginatorDefault page={2} />);

    cy.getByDataTestId("pagination-test")
      .get(".a-paginator__page-button")
      .contains("1")
      .click();

    cy.getByDataTestId("pagination-test").contains("Page 0");
  });

  it("has first and last controls", () => {
    cy.mount(<APaginatorDefault showPageNumbers={false} />);

    cy.getByDataTestId("pagination-test")
      .get(first)
      .should("have.attr", "disabled");

    cy.getByDataTestId("pagination-test")
      .get(last)
      .should("not.have.attr", "disabled");
  });

  it("should jump to end when clicking last", () => {
    cy.mount(<APaginatorDefault showPageNumbers={false} />);

    cy.getByDataTestId("pagination-test")
      .get(last)
      .click()
      .should("have.attr", "disabled");

    cy.getByDataTestId("pagination-test").contains("Page 2");
  });

  it("should jump to start when clicking first", () => {
    cy.mount(<APaginatorDefault showPageNumbers={false} page={2} />);

    cy.getByDataTestId("pagination-test").contains("Page 2");

    cy.getByDataTestId("pagination-test")
      .get(first)
      .click()
      .should("have.attr", "disabled");

    cy.getByDataTestId("pagination-test").contains("Page 0");
  });

  it("can change results per page", () => {
    cy.mount(<APaginatorDefault />);

    cy.getByDataTestId("pagination-test").contains("Page 0");

    cy.getByDataTestId("pagination-test")
      .get(".a-select__selection")
      .contains(30);

    cy.getByDataTestId("pagination-test").get(results).contains("1-30 of 90");

    cy.getByDataTestId("pagination-test")
      .get(".a-select")
      .click()
      .get(".a-list-item")
      .contains("100")
      .click();

    cy.getByDataTestId("pagination-test").get(results).contains("1-90 of 90");

    cy.getByDataTestId("pagination-test")
      .get(".a-select__selection")
      .contains(100);
  });

  it("defaults to magnetic defined page size option", () => {
    cy.mount(<APaginatorDefault resultsPerPage={77} />);

    cy.getByDataTestId("pagination-test")
      .get(".a-select__selection")
      .contains(30);
  });
});

const APaginatorDefault = ({disabled, ...rest}) => {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div data-testid="pagination-test">
      <div>Page {currentPage}</div>
      <APaginator
        disabled={disabled}
        onPageChange={setCurrentPage}
        total={90}
        {...rest}
      />
    </div>
  );
};
