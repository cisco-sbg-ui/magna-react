import React from "react";
import ADataTableRow from "./ADataTableRow";
import ADataTableCell from "./ADataTableCell";
import AIcon from "../AIcon";
import ADataTableCellTemplate from "./ADataTableCellTemplate";
import AInView from "../AInView";
import PropTypes from "prop-types";

const ADataTableRowTemplate = ({
  rowItem,
  rowIndex,
  headers,
  isLastRow,
  onScrollToEnd,
  expandable,
  toggleExpandedRow,
  isExpandedRow,
  ExpandableComponent,
  onRowClick,
  isSelected,
  isKeySelected
}) => {
  const id = `a-data-table_row_${rowIndex}`;
  const isInfiniteScrollTarget =
    isLastRow && typeof onScrollToEnd === "function";
  const hasExpandedRowContent =
    ExpandableComponent &&
    (typeof expandable.isRowExpandable === "function"
      ? expandable.isRowExpandable(rowItem)
      : true);

  const rowContent = (
    <ADataTableRow
      data-expandable-row={hasExpandedRowContent}
      isSelected={isSelected}
      isKeySelected={isKeySelected}
      row-index={rowIndex}
      tabIndex="-1"
      onClick={(e) =>
        typeof onRowClick === "function" && onRowClick(rowItem, e)
      }
    >
      {ExpandableComponent && (
        <ADataTableCell>
          {hasExpandedRowContent && (
            <button
              aria-expanded={isExpandedRow}
              aria-controls={id}
              className="a-data-table__cell__btn--expand"
              onClick={() => toggleExpandedRow(`${rowIndex}`)}
            >
              <AIcon size={12}>
                {isExpandedRow ? "chevron-down" : "chevron-right"}
              </AIcon>
            </button>
          )}
        </ADataTableCell>
      )}
      {headers.map((headerItem, headerIndex) => (
        <ADataTableCellTemplate
          key={`a-data-table_cell_${headerIndex}`}
          rowItem={rowItem}
          headerItem={headerItem}
          headerIndex={headerIndex}
        />
      ))}
      {hasExpandedRowContent && (
        <ADataTableCell
          id={id}
          data-expandable-content
          hidden={!isExpandedRow}
          role="cell"
        >
          <ExpandableComponent {...rowItem} />
        </ADataTableCell>
      )}
    </ADataTableRow>
  );
  if (!isInfiniteScrollTarget) {
    return rowContent;
  }

  return (
    <AInView
      triggerOnce
      onChange={({inView, entry}) => {
        if (inView) {
          onScrollToEnd(entry);
        }
      }}
    >
      {rowContent}
    </AInView>
  );
};

ADataTableRowTemplate.displayName = "ADataTableRowTemplate";

ADataTableRowTemplate.propTypes = {
  /** Current row item being rendered */
  rowItem: PropTypes.object.isRequired,

  /** Zero based index of row item being rendered */
  rowIndex: PropTypes.object.isRequired,

  /** The table headers containing row renderers */
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      /** The text to be displayed in the header column */
      name: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      /** Standard set of HTML TH properties to set on each header element.
       * Some of these properties can be superseded by computed properties utilized for table functionality. */
      properties: PropTypes.object,
      /** The unique identifier to associate a column with subsequent row data */
      key: PropTypes.string,
      /** CSS class used to style the header column */
      className: PropTypes.string,
      /** The alignment of the header column text content */
      align: PropTypes.oneOf(["start", "center", "end"]),
      /** Determines if the column can be sorted by the user */
      sortable: PropTypes.bool,
      /** Sorting function for the column data */
      sort: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
      /** Object that refers to the column's associated data table cells, i.e., <td /> elements */
      cell: PropTypes.shape({
        /** Class to be added to each table data element */
        className: PropTypes.string,
        /** Custom component to be rendered for each table data item */
        component: PropTypes.func
      })
    })
  ).isRequired,

  /** When we are on the last row true, false otherwise  */
  isLastRow: PropTypes.bool.isRequired,

  /** Handler called when we scroll to last visible item */
  onScrollToEnd: PropTypes.func,

  /**
   * Configuration object for expandable table rows
   */
  expandable: PropTypes.shape({
    /** The component to be rendered on expansion */
    component: PropTypes.func.isRequired,
    /**
     * (optional): A function called when rendering each row to determine
     * if the row can be expanded an collapsed
     */
    isRowExpandable: PropTypes.func
  }),

  /** Handler called when row is expended/collapsed */
  toggleExpandedRow: PropTypes.func,

  /** Indicator if row is expanded or collapsed */
  isExpandedRow: PropTypes.bool,

  /** Resolved expandable component */
  ExpandableComponent: PropTypes.elementType,

  /** On row click event handler */
  onRowClick: PropTypes.func,

  /** Is this row selected */
  isSelected: PropTypes.bool,

  /** Is this row selected by keyboard navigation */
  isKeySelected: PropTypes.bool
};

export default ADataTableRowTemplate;
