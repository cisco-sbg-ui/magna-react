import React from "react";

import ASelect from "../ASelect";

import {RESULTS_PER_PAGE} from "./constants";

const APaginatorRowsSelector = ({
  disabled,
  show,
  page,
  workingResultsPerPage,
  setWorkingResultsPerPage,
  setWorkingPage,
  onResultsPerPageChange,
  onPageChange
}) => {
  if (!show) {
    return null;
  }

  const getNewPage = (newResultsPerPage) => {
    const currentResult = page * workingResultsPerPage + 1;
    const newPage = currentResult / newResultsPerPage;
    return Math.floor(newPage);
  };

  return (
    <>
      <div className="a-paginator__results-per-page-label">Rows per page</div>
      <ASelect
        disabled={disabled}
        items={RESULTS_PER_PAGE.map(({value}) => {
          if (value === workingResultsPerPage) {
            return {value, selected: true};
          }

          return {value};
        })}
        itemText="value"
        itemValue="value"
        onSelected={({value}) => {
          setWorkingResultsPerPage(value);

          onResultsPerPageChange && onResultsPerPageChange(value);

          const newPage = getNewPage(value);

          setWorkingPage(newPage);

          onPageChange && onPageChange(newPage);
        }}
      />
    </>
  );
};

export default APaginatorRowsSelector;
