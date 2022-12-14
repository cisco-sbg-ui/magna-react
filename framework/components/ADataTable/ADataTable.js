import PropTypes from "prop-types";
import React, {forwardRef, useMemo, useRef, useCallback, useState} from "react";

import AInView from "../AInView";
import AIcon from "../AIcon";
import ASimpleTable from "../ASimpleTable";
import "./ADataTable.scss";

/**
 * Used inside ADataTable to enable proper styling
 * for infinite scrolling
 */
const ADataTableWrapper = React.forwardRef(
  ({shouldWrap, maxHeight, style, children, ...rest}, ref) => {
    if (!shouldWrap) {
      return children;
    }

    return (
      <div
        ref={ref}
        data-testid="table-wrapper"
        style={{
          ...style,
          overflowY: "scroll",
          maxHeight
        }}
        {...rest}
      >
        {children}
      </div>
    );
  }
);
ADataTableWrapper.displayName = "ADataTableWrapper";

const TableHeader = React.forwardRef(({className, ...rest}, ref) => (
  <th
    ref={ref}
    role="columnheader"
    className={`a-data-table__header${className ? ` ${className}` : ""}`}
    {...rest}
  />
));
TableHeader.displayName = "TableHeader";

const TableRow = React.forwardRef(
  ({className: propsClassName, isSelected, ...rest}, ref) => {
    let className = "a-data-table__row";
    if (isSelected) {
      className += " a-data-table__row--selected";
    }
    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return <tr ref={ref} role="row" className={className} {...rest} />;
  }
);
TableRow.displayName = "TableRow";

const TableCell = React.forwardRef(({className, ...rest}, ref) => (
  <td
    ref={ref}
    role="cell"
    className={`a-data-table__cell${className ? ` ${className}` : ""}`}
    {...rest}
  />
));
TableCell.displayName = "TableCell";

export const getSortIconName = (column, sort) => {
  if (!sort || column.key !== sort.key) {
    return "sortEmpty";
  }

  switch (sort.direction) {
    case "asc":
      return "sortUp";
    case "desc":
      return "sortDown";
    default:
      return "sortEmpty";
  }
};

const ADataTable = forwardRef(
  (
    {
      className: propsClassName,
      expandable,
      isRowSelected: propsIsRowSelected,
      onRowClick: propsOnRowClick,
      headers,
      maxHeight,
      items,
      onSort,
      onScrollToEnd,
      sort,
      selectedItems,
      ...rest
    },
    ref
  ) => {
    const tableWrapperRef = useRef();
    const [expandedRows, setExpandedRows] = useState({});
    const ExpandableComponent = useMemo(
      () => expandable?.component,
      [expandable]
    );
    let className = "a-data-table";
    if (ExpandableComponent) {
      className += " a-data-table--expandable";
    }
    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    const toggleRow = useCallback(
      (id) => {
        return () => {
          setExpandedRows((prev) => ({...prev, [id]: !prev[id]}));
        };
      },
      [setExpandedRows]
    );

    const sortedItems = useMemo(() => [...items], [items]);
    if (sort) {
      const sortDir = sort.direction === "desc" ? -1 : 1;
      const targetHeader = Object.values(headers).find(
        (x) => x.key === sort.key
      );

      let sortFunc = (a, b) => (a === b ? 0 : a < b ? -1 : 1);

      if (targetHeader && typeof targetHeader.sort === "function") {
        sortFunc = targetHeader.sort;
      }

      if (!targetHeader || targetHeader.sort !== false) {
        sortedItems.sort(
          (a, b) => sortDir * sortFunc(a[sort.key], b[sort.key])
        );
      }
    }
    return (
      headers &&
      items && (
        <ADataTableWrapper
          ref={tableWrapperRef}
          shouldWrap={typeof onScrollToEnd === "function" || maxHeight}
          maxHeight={maxHeight}
        >
          <ASimpleTable {...rest} ref={ref} className={className}>
            {headers && (
              <thead>
                <TableRow
                  onClick={(e) =>
                    typeof propsOnRowClick === "function" &&
                    propsOnRowClick(headers, e)
                  }
                >
                  {ExpandableComponent && (
                    <TableHeader className="a-data-table__header a-data-table__header--hidden">
                      <span className="a-data-table__header--hidden__text">
                        Toggle
                      </span>
                    </TableHeader>
                  )}
                  {headers.map((x, i) => {
                    const headerProps = {
                      className: `a-data-table__header ${
                        x.sortable ? "a-data-table__header--sortable" : ""
                      } text-${x.align || "start"} ${x.className || ""}`
                        .replace("  ", " ")
                        .trim(),
                      role: "columnheader",
                      scope: "col",
                      "aria-label": x.name
                    };

                    const sortableBtnProps = {};
                    if (x.sortable) {
                      if (!sort || x.key !== sort.key) {
                        headerProps["aria-label"] +=
                          ": Not sorted. Activate to sort ascending.";
                        headerProps["aria-sort"] = "none";
                      } else if (sort && sort.direction === "asc") {
                        headerProps["aria-label"] +=
                          ": Sorted ascending. Activate to sort descending.";
                        headerProps["aria-sort"] = "ascending";
                      } else {
                        headerProps["aria-label"] +=
                          ": Sorted descending. Activate to remove sorting.";
                        headerProps["aria-sort"] = "descending";
                      }

                      sortableBtnProps.onClick = () => {
                        setExpandedRows({});
                        onSort &&
                          onSort(
                            sort &&
                              sort.key === x.key &&
                              sort.direction === "desc"
                              ? null
                              : {
                                  key: x.key,
                                  direction:
                                    sort &&
                                    x.key === sort.key &&
                                    sort.direction === "asc"
                                      ? "desc"
                                      : "asc"
                                }
                          );
                      };
                    }

                    if (!x.sortable) {
                      return (
                        <TableHeader
                          {...headerProps}
                          key={`a-data-table_header_${i}`}
                        >
                          {x.name}
                        </TableHeader>
                      );
                    }

                    return (
                      <TableHeader
                        {...headerProps}
                        key={`a-data-table_header_${i}`}
                      >
                        <button
                          {...sortableBtnProps}
                          className="a-data-table__header__sort__button"
                        >
                          {x.align !== "end" ? x.name : ""}
                          {x.sortable && (
                            <AIcon
                              iconSet="magna"
                              left={x.align === "end"}
                              right={x.align !== "end"}
                              className={`a-data-table__header__sort ${
                                sort && x.key === sort.key
                                  ? "a-data-table__header__sort--active"
                                  : ""
                              }`}
                            >
                              {getSortIconName(x, sort)}
                            </AIcon>
                          )}
                          {x.align === "end" ? x.name : ""}
                        </button>
                      </TableHeader>
                    );
                  })}
                  {ExpandableComponent && (
                    <TableHeader>Additional Details</TableHeader>
                  )}
                </TableRow>
              </thead>
            )}
            <tbody>
              {sortedItems.map((rowItem, i) => {
                const key = `a-data-table_row_${i}`;
                const id = `a-data-table_row_${i}`;
                const isLastRow = i == items.length - 1;
                const isInfiniteScrollTarget =
                  isLastRow && typeof onScrollToEnd === "function";
                const hasExpandedRowContent =
                  ExpandableComponent &&
                  (typeof expandable.isRowExpandable === "function"
                    ? expandable.isRowExpandable(rowItem)
                    : true);
                const isRowSelected =
                  typeof propsIsRowSelected === "function" &&
                  propsIsRowSelected(rowItem);
                const rowContent = (
                  <TableRow
                    data-expandable-row={hasExpandedRowContent}
                    isSelected={isRowSelected}
                    key={key}
                    onClick={(e) =>
                      typeof propsOnRowClick === "function" &&
                      propsOnRowClick(rowItem, e)
                    }
                  >
                    {ExpandableComponent && (
                      <TableCell>
                        {hasExpandedRowContent && (
                          <button
                            aria-expanded={expandedRows[id] ? true : false}
                            aria-controls={id}
                            className="a-data-table__cell__btn--expand"
                            onClick={toggleRow(id)}
                          >
                            <AIcon size={12}>
                              {expandedRows[id]
                                ? "chevron-down"
                                : "chevron-right"}
                            </AIcon>
                          </button>
                        )}
                      </TableCell>
                    )}
                    {headers.map((y, j) => {
                      return (
                        <TableCell
                          key={`a-data-table_cell_${j}`}
                          className={`text-${y.align || "start"} ${
                            y.cell?.className || ""
                          }`.trim()}
                        >
                          {y.cell && y.cell.component
                            ? y.cell.component(rowItem)
                            : rowItem[y.key]}
                        </TableCell>
                      );
                    })}
                    {hasExpandedRowContent && (
                      <TableCell
                        id={id}
                        data-expandable-content
                        hidden={!expandedRows[id]}
                        role="cell"
                      >
                        <ExpandableComponent {...rowItem} />
                      </TableCell>
                    )}
                  </TableRow>
                );
                if (!isInfiniteScrollTarget) {
                  return rowContent;
                }

                return (
                  <AInView
                    key={key}
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
              })}
            </tbody>
          </ASimpleTable>
        </ADataTableWrapper>
      )
    );
  }
);

ADataTable.propTypes = {
  /**
   * Toggles the `altLinks` display variant. If the table has many links, use this to display them in the base text color.
   */
  altLinks: PropTypes.bool,
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
  /**
   * Sets the table headers.
   */
  headers: PropTypes.arrayOf(
    PropTypes.shape({
      /** The text to be displayed in the header column */
      name: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
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
  /**
   * A function called when rendering each row to determine if
   * the row is selected. It is passed the associated row item.
   */
  isRowSelected: PropTypes.func,
  /**
   * Sets the table data.
   */
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  /**
   * A function called when the table row (<tr>) is clicked. It is passed
   * the associated row item as the first argument, and the native event
   * object as the second.
   */
  onRowClick: PropTypes.func,
  /**
   * Called when the user reaches the bottom of the data table for the first time.
   */
  onScrollToEnd: PropTypes.func,
  /**
   * Handles the `sort` event.
   */
  onSort: PropTypes.func,
  /**
   * Sets the sort.
   */
  sort: PropTypes.shape({
    key: PropTypes.string,
    direction: PropTypes.oneOf(["asc", "desc"])
  }),
  /**
   * Toggles the `striped` display variant. Darkened backgrounds for alternate rows.
   */
  striped: PropTypes.bool,
  /**
   * Toggles the `tight` display variant. Smaller row heights.
   */
  tight: PropTypes.bool
};

ADataTable.displayName = "ADataTable";

export default ADataTable;
