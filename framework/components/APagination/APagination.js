import PropTypes from "prop-types";
import React, {forwardRef, useEffect, useState} from "react";

import {keyCodes} from "../../utils/helpers";
import AButton from "../AButton";
import AButtonGroup from "../AButtonGroup";
import ATextInput from "../ATextInput";
import AIcon from "../AIcon";
import "./APagination.scss";

const ICON_SIZE = 10;

const APagination = forwardRef(
  (
    {
      className: propsClassName,
      localeFormatting,
      onNext,
      onPageChange,
      onPrevious,
      onResultsPerPageChange,
      page = 1,
      resultsPerPage,
      showText,
      showFirstLastButtons = true,
      showSetPageInput = true,
      total,
      ...rest
    },
    ref
  ) => {
    const [workingResultsPerPage, setWorkingResultsPerPage] =
      useState(resultsPerPage);

    const [workingPage, setWorkingPage] = useState(page);

    useEffect(() => {
      setWorkingResultsPerPage(resultsPerPage);
    }, [resultsPerPage]);

    useEffect(() => {
      setWorkingPage(page);
    }, [page]);

    const getNewPage = (newResultsPerPage) => {
      const currentResult = (page - 1) * resultsPerPage + 1;
      const newPage = (currentResult - 1) / newResultsPerPage + 1;
      return Math.floor(newPage);
    };

    let className = `a-pagination`;
    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    const content = () => {
      if (total && resultsPerPage) {
        const pages = Math.ceil(total / resultsPerPage);
        const firstResultIndex = (page - 1) * resultsPerPage + 1;
        const lastResultIndex = Math.min(
          total,
          (page - 1) * resultsPerPage + resultsPerPage
        );
        return (
          <>
            <div className="a-pagination__results-per-page">
              <ATextInput
                spinner={false}
                onBlur={() => {
                  if (!workingResultsPerPage) {
                    setWorkingResultsPerPage(1);
                    onResultsPerPageChange && onResultsPerPageChange(1);
                    onPageChange && onPageChange(getNewPage(1));
                    return;
                  }

                  onResultsPerPageChange &&
                    onResultsPerPageChange(workingResultsPerPage);
                  onPageChange &&
                    onPageChange(getNewPage(workingResultsPerPage));
                }}
                onChange={(e) =>
                  setWorkingResultsPerPage(
                    Math.min(Math.max(parseInt(e.target.value), 1), total)
                  )
                }
                onKeyDown={(e) => {
                  if (onResultsPerPageChange && e.keyCode === keyCodes.enter) {
                    e.preventDefault();
                    if (!workingResultsPerPage) {
                      setWorkingResultsPerPage(1);
                      onResultsPerPageChange && onResultsPerPageChange(1);
                      onPageChange && onPageChange(getNewPage(1));
                      return;
                    }

                    onResultsPerPageChange(workingResultsPerPage);
                    onPageChange &&
                      onPageChange(getNewPage(workingResultsPerPage));
                  }
                }}
                value={workingResultsPerPage || ""}
                type="number"
              />
              per page
            </div>
            <div className="a-pagination__results">
              {localeFormatting
                ? firstResultIndex.toLocaleString()
                : firstResultIndex}
              -
              {localeFormatting
                ? lastResultIndex.toLocaleString()
                : lastResultIndex}{" "}
              of {localeFormatting ? total.toLocaleString() : total}
            </div>
            {showFirstLastButtons && (
              <AButton
                className="a-pagination__first"
                disabled={page === 1}
                tertiary
                icon
                onClick={() => onPageChange(1)}
                aria-label="First"
              >
                <AIcon size={ICON_SIZE}>first-page</AIcon>
              </AButton>
            )}
            <AButton
              className="a-pagination__previous"
              disabled={page === 1}
              tertiary
              icon
              onClick={() => onPageChange(page - 1)}
              aria-label="Previous"
            >
              <AIcon left={showText} size={ICON_SIZE}>
                chevron-left
              </AIcon>
            </AButton>
            <div className="a-pagination__page-selection">
              {showSetPageInput ? (
                <ATextInput
                  spinner={false}
                  onBlur={() => {
                    if (!workingPage) {
                      setWorkingPage(1);
                      onPageChange && onPageChange(1);
                      return;
                    }

                    onPageChange && onPageChange(workingPage);
                  }}
                  onChange={(e) =>
                    setWorkingPage(
                      Math.min(Math.max(parseInt(e.target.value), 1), pages)
                    )
                  }
                  onKeyDown={(e) => {
                    if (onPageChange && e.keyCode === keyCodes.enter) {
                      e.preventDefault();
                      if (!workingPage) {
                        setWorkingPage(1);
                        onPageChange && onPageChange(1);
                        return;
                      }

                      onPageChange && onPageChange(workingPage);
                    }
                  }}
                  value={workingPage || ""}
                  type="number"
                />
              ) : (
                workingPage
              )}
              {" / "}
              {localeFormatting ? pages.toLocaleString() : pages}
            </div>
            <AButton
              className="a-pagination__next"
              disabled={page === pages}
              tertiary
              icon
              onClick={() => onPageChange(page + 1)}
              aria-label="Next"
            >
              <AIcon right={showText} size={ICON_SIZE}>
                chevron-right
              </AIcon>
            </AButton>
            {showFirstLastButtons && (
              <AButton
                className="a-pagination__last"
                disabled={page === pages}
                tertiary
                icon
                onClick={() => onPageChange(pages)}
                aria-label="Last"
              >
                <AIcon right={showText} size={ICON_SIZE}>
                  last-page
                </AIcon>
              </AButton>
            )}
          </>
        );
      }

      if (total) {
        // PADDING is what to show around the current page.
        // If on page 50 of 100 pages, show 48, 49, 50, 51, 52
        const PADDING = 2;

        // START_END_LENGTH is how much of the beginning to show
        // If you're on page 50 of 100, show 1, 2, 3 in the start section
        // and 98, 99, 100 in the end section.
        const START_END_LENGTH = 1 + PADDING;

        let start = page - PADDING;
        let end = page + PADDING;

        let startPages = [];
        let endPages = [];

        if (page <= 1 + PADDING + START_END_LENGTH) {
          start = 1;
        } else {
          startPages = Array.from(Array(START_END_LENGTH), (_, x) => x + 1);
        }

        if (total - PADDING - START_END_LENGTH <= page) {
          end = total;
        } else {
          endPages = Array.from(
            Array(START_END_LENGTH),
            (_, x) => total - x
          ).reverse();
        }

        const midPages = Array.from(
          Array(end - start + 1),
          (_, x) => x + start
        );

        return (
          <>
            <AButton
              className="a-pagination__previous"
              disabled={page === 1}
              tertiary
              icon={!showText}
              onClick={() => onPageChange(page - 1)}
              aria-label="Previous"
            >
              <AIcon left={showText} size={ICON_SIZE}>
                chevron-left
              </AIcon>
              {showText && "Previous"}
            </AButton>
            {!!startPages.length && (
              <>
                <AButtonGroup
                  selectedValues={[page]}
                  onChange={(selectedValue) => onPageChange(selectedValue)}
                >
                  {startPages.map((x) => (
                    <AButton value={x} key={x}>
                      {localeFormatting ? x.toLocaleString() : x}
                    </AButton>
                  ))}
                </AButtonGroup>
                &hellip;
              </>
            )}
            {midPages.length && (
              <AButtonGroup
                selectedValues={[page]}
                onChange={(selectedValue) => onPageChange(selectedValue)}
              >
                {midPages.map((x) => (
                  <AButton value={x} key={x}>
                    {localeFormatting ? x.toLocaleString() : x}
                  </AButton>
                ))}
              </AButtonGroup>
            )}
            {!!endPages.length && (
              <>
                &hellip;
                <AButtonGroup
                  selectedValues={[page]}
                  onChange={(selectedValue) => onPageChange(selectedValue)}
                >
                  {endPages.map((x) => (
                    <AButton value={x} key={x}>
                      {localeFormatting ? x.toLocaleString() : x}
                    </AButton>
                  ))}
                </AButtonGroup>
              </>
            )}
            <AButton
              className="a-pagination__next"
              disabled={page === total}
              tertiary
              icon={!showText}
              onClick={() => onPageChange(page + 1)}
              aria-label="Next"
            >
              {showText && "Next"}
              <AIcon right={showText} size={ICON_SIZE}>
                chevron-right
              </AIcon>
            </AButton>
          </>
        );
      }

      return (
        <>
          <AButton
            className="a-pagination__previous"
            disabled={!onPrevious}
            onClick={(e) => onPrevious(e)}
            aria-label="Previous"
          >
            <AIcon left size={ICON_SIZE}>
              chevron-left
            </AIcon>
            Previous
          </AButton>
          <AButton
            className="a-pagination__next"
            disabled={!onNext}
            onClick={(e) => onNext(e)}
            aria-label="Next"
          >
            Next
            <AIcon right size={ICON_SIZE}>
              chevron-right
            </AIcon>
          </AButton>
        </>
      );
    };

    return (
      <div {...rest} ref={ref} className={className}>
        {content()}
      </div>
    );
  }
);

APagination.propTypes = {
  /**
   * Sets numeric displays to be locale formatted.
   */
  localeFormatting: PropTypes.bool,
  /**
   * Handles the activation of the `Next` button when the number of pages isn't determined.
   */
  onNext: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  /**
   * Handles updates to the current page.
   */
  onPageChange: PropTypes.func,
  /**
   * Handes the activation of the `Previous` button when the number of pages isn't determined.
   */
  onPrevious: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
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
  resultsPerPage: PropTypes.number,
  /**
   * Toggles whether text is shown on the Previous/Next buttons in the button group view.
   */
  showText: PropTypes.bool,
  /**
   * Sets the total number or results if `resultsPerPage` is defined, otherwise sets the total number of pages.
   */
  total: PropTypes.number,
  /**
   * Show the jump to first and jump to last buttons.
   */
  showFirstLastButtons: PropTypes.bool,
  /**
   * Show the set page text input. If false, shows the current page number as text.
   */
  showSetPageInput: PropTypes.bool
};

APagination.displayName = "APagination";

export default APagination;
