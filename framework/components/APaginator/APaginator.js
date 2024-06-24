import PropTypes from "prop-types";
import React, {forwardRef, useCallback, useEffect, useState} from "react";

import APaginatorRowsSelector from "./APaginatorResultsSelector";
import APaginatorPageDetail from "./APaginatorPageDetail";
import {DEFAULT_PAGE_SIZE, RESULTS_PER_PAGE} from "./constants";
import "./APaginator.scss";
import APaginatorControls from "./APaginatorControls";

/**
 * i18n note: Rows per page needs to be externalized at some point
 */

const getResultsPerPage = (resultsPerPage) => {
  return RESULTS_PER_PAGE.map((i) => i.value).includes(resultsPerPage)
    ? resultsPerPage
    : DEFAULT_PAGE_SIZE;
};

const APagination = forwardRef(
  (
    {
      className: propsClassName,
      onPageChange,
      onResultsPerPageChange,
      page = 0,
      resultsPerPage = DEFAULT_PAGE_SIZE,
      showPageNumbers = true,
      showPageDetail = true,
      showResultCount = false,
      showResultSelector = true,
      total,
      disabled,
      ...rest
    },
    ref
  ) => {
    const computedResultsPerPage = getResultsPerPage(resultsPerPage);
    const [workingResultsPerPage, setWorkingResultsPerPage] = useState(
      computedResultsPerPage
    );
    const pages = Math.ceil(total / workingResultsPerPage);

    const [workingPage, setWorkingPageState] = useState(
      page < pages ? page : 0
    );

    useEffect(() => {
      const computed = getResultsPerPage(resultsPerPage);
      setWorkingResultsPerPage(computed);
    }, [resultsPerPage]);

    useEffect(() => {
      if (page > pages - 1) {
        return;
      }

      setWorkingPage(page);
    }, [page, pages, setWorkingPage]);

    const setWorkingPage = useCallback(
      (newPage) => {
        if (newPage < 0 || newPage > pages - 1) {
          return;
        }

        setWorkingPageState(newPage);

        onPageChange && onPageChange(newPage);
      },
      [setWorkingPageState, onPageChange, pages]
    );

    let className = `a-paginator`;
    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    if (disabled) {
      className += ` ${className}--disabled`;
    }

    return (
      <div {...rest} ref={ref} className={className}>
        <div className="a-paginator__results-per-page">
          {showResultCount && (
            <div className="a-paginator__results-per-page-label">
              Rows per page: {workingResultsPerPage}
            </div>
          )}
          <APaginatorRowsSelector
            disabled={disabled}
            show={showResultSelector}
            page={workingPage}
            workingResultsPerPage={workingResultsPerPage}
            setWorkingResultsPerPage={setWorkingResultsPerPage}
            setWorkingPage={setWorkingPage}
            onResultsPerPageChange={onResultsPerPageChange}
            onPageChange={onPageChange}
          />
          <APaginatorPageDetail
            show={showPageDetail}
            page={workingPage}
            total={total}
            resultsPerPage={workingResultsPerPage}
          />
        </div>
        <APaginatorControls
          disabled={disabled}
          pages={pages}
          workingPage={workingPage}
          setWorkingPage={setWorkingPage}
          showPageNumbers={showPageNumbers}
        />
      </div>
    );
  }
);

APagination.propTypes = {
  /**
   * Handles updates to the current page.
   */
  onPageChange: PropTypes.func,
  /**
   * Handles the submission of results per page values.
   */
  onResultsPerPageChange: PropTypes.func,
  /**
   * Sets the current page.
   */
  page: PropTypes.number,
  /**
   * Sets the results per page.
   */
  resultsPerPage: PropTypes.oneOf([10, 20, 30, 50, 100]),
  /**
   * Sets the total number or results if `resultsPerPage` is defined, otherwise sets the total number of pages.
   */
  total: PropTypes.number,
  /**
   * Show page number buttons between traversal buttons
   */
  showPageNumbers: PropTypes.bool,
  /**
   * Shows the current result subset and total count
   */
  showPageDetail: PropTypes.bool,
  /**
   * Show result count (useful if rows selector is not shown)
   */
  showResultCount: PropTypes.bool,
  /**
   * Show the set page result selector. If false, shows the current page number as text.
   */
  showResultSelector: PropTypes.bool,
  /**
   * Set all actionable pagination elements to disabled
   */
  disabled: PropTypes.bool
};

APagination.displayName = "APagination";

export default APagination;
