import React, {useState} from "react";
import APagination from "./APagination";

describe("<APagination/>", () => {
  it("should render", () => {
    cy.mount(<APagination />);
  });

  it("has working basic pagination", () => {
    cy.mount(<APaginationUsage1 />);
    cy.getByDataTestId("pagination-test")
      .contains("Page 1")
      .get(" .a-pagination__previous")
      .should("have.attr", "disabled")
      .get(".a-pagination__next")
      .click()
      .get(".a-pagination__previous")
      .should("not.have.attr", "disabled");
    cy.getByDataTestId("pagination-test")
      .contains("Page 2")
      .get(".a-pagination__next")
      .click();
    cy.getByDataTestId("pagination-test")
      .contains("Page 3")
      .get(".a-pagination__next")
      .should("have.attr", "disabled");
  });

  it("has working pagination with total", () => {
    cy.mount(<APaginationUsage2 />);
    cy.getByDataTestId("pagination-test")
      .contains("Page 1")
      .get(".a-pagination__previous")
      .should("have.attr", "disabled");
    cy.getByDataTestId("pagination-test")
      .get(".a-button-group .a-button")
      .eq(0)
      .should("have.class", "a-button--selected")
      .get(".a-pagination__next")
      .click();
    cy.getByDataTestId("pagination-test")
      .contains("Page 2")
      .get(".a-pagination__previous")
      .should("not.have.attr", "disabled")
      .get(".a-button-group .a-button")
      .eq(1)
      .should("have.class", "a-button--selected")
      .get(".a-pagination__next")
      .click()
      .click()
      .click()
      .click()
      .get(".a-button-group")
      .should("have.length", 2);
    cy.getByDataTestId("pagination-test")
      .get(".a-pagination__next")
      .click()
      .get(".a-button-group")
      .should("have.length", 3)
      .get(".a-button-group .a-button")
      .last()
      .click()
      .get(".a-button-group .a-button")
      .last()
      .should("have.class", "a-button--selected");
    cy.getByDataTestId("pagination-test")
      .get(".a-button-group")
      .should("have.length", 2)
      .get(".a-pagination__next")
      .should("have.attr", "disabled")
      .get(" .a-pagination__previous")
      .click()
      .get(" .a-button-group .a-button--selected")
      .contains("14");
  });

  it("has working pagination with total and resultsPerPage", () => {
    cy.mount(<APaginationUsage3 />);
    cy.getByDataTestId("pagination-test")
      .get(".a-pagination__page-selection .a-text-input__input")
      .should("have.value", "1")
      .get(".a-pagination__results")
      .contains("1-5 of 145");
    cy.getByDataTestId("pagination-test")
      .get(".a-pagination__first")
      .should("have.attr", "disabled");
    cy.get(".a-pagination__previous")
      .should("have.attr", "disabled")
      .get(".a-pagination__next")
      .click();
    cy.getByDataTestId("pagination-test")
      .get(".a-pagination__page-selection .a-text-input__input")
      .should("have.value", "2")
      .get(".a-pagination__results")
      .contains("6-10 of 145")
      .get(".a-pagination__first")
      .should("not.have.attr", "disabled")
      .get(" .a-pagination__previous")
      .should("not.have.attr", "disabled")
      .get(" .a-pagination__last")
      .click();
    cy.getByDataTestId("pagination-test")
      .get(".a-pagination__page-selection .a-text-input__input")
      .should("have.value", "29")
      .get(".a-pagination__results")
      .contains("141-145 of 145")
      .get(".a-pagination__last")
      .should("have.attr", "disabled")
      .get(" .a-pagination__next")
      .should("have.attr", "disabled")
      .get(".a-pagination__previous")
      .click();
    cy.getByDataTestId("pagination-test")
      .get(".a-pagination__page-selection .a-text-input__input")
      .should("have.value", "28")
      .get(".a-pagination__results")
      .contains("136-140 of 145")
      .get(".a-pagination__last")
      .should("not.have.attr", "disabled")
      .get(".a-pagination__next")
      .should("not.have.attr", "disabled");
    cy.getByDataTestId("pagination-test")
      .get(".a-pagination__page-selection .a-text-input__input")
      .type("{backspace}{backspace}5{enter}")
      .get(".a-pagination__results")
      .contains("21-25 of 145");
    cy.getByDataTestId("pagination-test")
      .get(".a-pagination__results-per-page .a-text-input__input")
      .type("{backspace}{backspace}50{enter}")
      .get(".a-pagination__page-selection .a-text-input__input")
      .should("have.value", "1")
      .get(".a-pagination__results")
      .contains("1-50 of 145");
  });

  it("has disabled property", () => {
    cy.mount(<APaginationUsage1 disabled />);
    cy.getByDataTestId("pagination-test")
      .get(".a-pagination")
      .should("have.class", "a-pagination--disabled")
      .get(".a-pagination__next")
      .should("have.attr", "disabled");

    cy.mount(<APaginationUsage2 disabled />);
    cy.getByDataTestId("pagination-test")
      .get(".a-pagination")
      .should("have.class", "a-pagination--disabled")
      .get(".a-pagination__next")
      .should("have.attr", "disabled");

    cy.mount(<APaginationUsage3 disabled />);
    cy.getByDataTestId("pagination-test")
      .get(".a-pagination")
      .should("have.class", "a-pagination--disabled")
      .get(".a-pagination__next")
      .should("have.attr", "disabled");
  });
});

const APaginationUsage1 = ({disabled}) => {
  const [currentPage1, setCurrentPage1] = useState(1);

  return (
    <div data-testid="pagination-test">
      <div>Page {currentPage1}</div>
      <APagination
        disabled={disabled}
        onNext={currentPage1 < 3 && (() => setCurrentPage1(currentPage1 + 1))}
        onPrevious={
          currentPage1 > 1 && (() => setCurrentPage1(currentPage1 - 1))
        }
      />
    </div>
  );
};

const APaginationUsage2 = ({disabled}) => {
  const [currentPage2, setCurrentPage2] = useState(1);
  return (
    <div data-testid="pagination-test">
      <div>Page {currentPage2}</div>
      <APagination
        disabled={disabled}
        onPageChange={(value) => {
          setCurrentPage2(value);
        }}
        page={currentPage2}
        showText={false}
        total={15}
      />
    </div>
  );
};

const APaginationUsage3 = ({disabled}) => {
  const [currentPage3, setCurrentPage3] = useState(1);
  const [resultsPerPage3, setResultsPerPage3] = useState(5);
  return (
    <div data-testid="pagination-test">
      <div>
        <ul>
          {Array.from(
            Array(resultsPerPage3),
            (_, x) => (currentPage3 - 1) * resultsPerPage3 + x + 1
          )
            .map((x) => <li key={x}>Result #{x}</li>)
            .slice(0, 145)}
        </ul>
      </div>

      <APagination
        disabled={disabled}
        onPageChange={(value) => {
          setCurrentPage3(value);
        }}
        onResultsPerPageChange={(value) => setResultsPerPage3(value)}
        page={currentPage3}
        resultsPerPage={resultsPerPage3}
        total={145}
      />
    </div>
  );
};
