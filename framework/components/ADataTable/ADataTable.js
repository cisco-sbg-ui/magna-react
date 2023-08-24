import PropTypes from "prop-types";
import React, {
  forwardRef,
  useMemo,
  useRef,
  useCallback,
  useState,
  useEffect
} from "react";

import {keyCodes} from "../../utils/helpers";
import {useKeydown} from "../../index";

import AInView from "../AInView";
import AIcon from "../AIcon";
import ASimpleTable from "../ASimpleTable";
import {ASkeleton, ASkeletonText} from "../ASkeleton";
import "./ADataTable.scss";
import {useCombinedRefs} from "../../utils/hooks";

const ARROW_UP = "ArrowUp";
const ARROW_DOWN = "ArrowDown";
const ARROW_KEYS = [ARROW_UP, ARROW_DOWN];

/**
 * Used inside ADataTable to enable proper styling
 * for infinite scrolling
 */
const ADataTableWrapper = React.forwardRef(
  ({shouldWrap, maxHeight, style, children, ...rest}, ref) => {
    if (!shouldWrap) {
      return children; // TODO: ref is lost ?
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

const TableHeader = React.forwardRef(({className, ...rest}, ref) => {
  return (
    <th
      ref={ref}
      role="columnheader"
      className={`a-data-table__header${className ? ` ${className}` : ""}`}
      {...rest}
    />
  );
});
TableHeader.displayName = "TableHeader";

const TableRow = React.forwardRef(
  ({className: propsClassName, isKeySelected, isSelected, ...rest}, ref) => {
    let className = "a-data-table__row";
    if (isSelected) {
      className += " a-data-table__row--selected";
    }
    if (isKeySelected) {
      className += " a-data-table__row--key-selected";
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
    return "sort-empty";
  }

  switch (sort.direction) {
    case "asc":
      return "sort-up";
    case "desc":
      return "sort-down";
    default:
      return "sort-empty";
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
      disableSortReset = false,
      onSort,
      onScrollToEnd,
      sort,
      selectedItems,
      truncateHeaders,
      stickyHeader = false,
      keyboardArrowSupport = null,
      ...rest
    },
    ref
  ) => {
    const tableWrapperRef = useRef();
    const simpleTableRef = useRef();
    const combinedTableRef = useCombinedRefs(simpleTableRef, ref);
    const [expandedRows, setExpandedRows] = useState({});
    const [selectedRowIndex, setSelectedRowIndex] = useState(-1); // zero based index in items array, -1 for no index

    const handleArrowKeydown = useCallback(
      (key, event) => {
        let nextRowIndex;

        if (selectedRowIndex === -1) {
          // first move
          if (key === ARROW_UP) nextRowIndex = items.length - 1;
          else nextRowIndex = 0;
        } else {
          // subsequent moves
          if (key === ARROW_UP) nextRowIndex = selectedRowIndex - 1;
          else nextRowIndex = selectedRowIndex + 1;
        }

        if (items[nextRowIndex] === undefined) {
          // out of items index
          return;
        }

        setSelectedRowIndex(nextRowIndex);

        if (typeof keyboardArrowSupport?.onKeyboardSelect === "function") {
          keyboardArrowSupport?.onKeyboardSelect(
            {index: nextRowIndex, item: items[nextRowIndex]},
            event
          );
        }
      },
      // having keyboardArrowSupport in deps causes unnecessary re-renders
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [
        items,
        selectedRowIndex,
        setSelectedRowIndex,
        keyboardArrowSupport?.onKeyboardSelect
      ]
    );

    const onTableBlur = useCallback(
      (event) => {
        if (keyboardArrowSupport?.disableOnBlurReset) return;

        const isEventsInTable = event.currentTarget.contains(
          event.relatedTarget
        );
        if (!isEventsInTable) {
          setSelectedRowIndex(-1);
          if (typeof keyboardArrowSupport?.onKeyboardSelect === "function") {
            keyboardArrowSupport?.onKeyboardSelect(
              {index: -1, item: undefined},
              event
            );
          }
        }
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [
        setSelectedRowIndex,
        keyboardArrowSupport?.disableOnBlurReset,
        keyboardArrowSupport?.onKeyboardSelect
      ]
    );

    useEffect(() => {
      if (keyboardArrowSupport === null || selectedRowIndex === -1) return;

      const {
        disableRowAutoFocus,
        activeRowFocusSelector,
        overrideFocusOptions = {}
      } = keyboardArrowSupport;

      if (disableRowAutoFocus) return;

      const row = combinedTableRef.current?.querySelector(
        `[row-index="${selectedRowIndex}"]`
      );
      if (!row) return;

      if (activeRowFocusSelector) {
        const element = row.querySelector(activeRowFocusSelector);
        if (element && element.focus) {
          element.focus(overrideFocusOptions);
        }
      } else {
        row.focus(overrideFocusOptions);
      }
      // combinedTableRef should not need to be in deps
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
      keyboardArrowSupport?.disableRowAutoFocus,
      keyboardArrowSupport?.activeRowFocusSelector,
      keyboardArrowSupport?.overrideFocusOptions,
      selectedRowIndex
    ]);

    useEffect(() => {
      if (keyboardArrowSupport === null) return;

      const index = keyboardArrowSupport.initiallySelectedRowIndex;
      if (typeof index === "number" && items[index]) {
        setSelectedRowIndex(index);
      } else {
        setSelectedRowIndex(-1);
      }
      // having keyboardArrowSupport in deps causes unnecessary re-renders
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
      keyboardArrowSupport?.initiallySelectedRowIndex,
      setSelectedRowIndex,
      items
    ]);

    useKeydown(ARROW_KEYS, handleArrowKeydown, keyboardArrowSupport !== null);

    const ExpandableComponent = useMemo(
      () => expandable?.component,
      [expandable]
    );
    let className = "a-data-table";
    if (ExpandableComponent) {
      className += " a-data-table--expandable";
    }
    if (stickyHeader) {
      className += " a-data-table--sticky";
    }
    if (truncateHeaders) {
      className += " a-data-table--truncate-headers";
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

    const sortedItems = useMemo(() => {
      if (sort) {
        const sortDirection = sort.direction === "desc" ? -1 : 1;
        const sortKey = sort.key;

        const sortingHeader = Object.values(headers).find(
          (header) => header.key === sortKey
        );
        let sortFunc = (a, b) => (a === b ? 0 : a < b ? -1 : 1);
        if (sortingHeader && typeof sortingHeader.sort === "function") {
          sortFunc = sortingHeader.sort;
        }

        if (!sortingHeader || sortingHeader.sort !== false) {
          return items.toSorted(
            (a, b) => sortDirection * sortFunc(a[sortKey], b[sortKey])
          );
        }
      }

      return [...items];
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
      sort,
      items,
      // Optimize headers deps to compare only used properties because "headers" array reference will be probably changed every re-render.
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ...headers.map((header) => header.key),
      // eslint-disable-next-line react-hooks/exhaustive-deps
      ...headers.map((header) => header.sort)
    ]);

    return (
      headers &&
      items && (
        <ADataTableWrapper
          ref={tableWrapperRef}
          shouldWrap={typeof onScrollToEnd === "function" || maxHeight}
          maxHeight={maxHeight}
        >
          <ASimpleTable
            {...rest}
            ref={combinedTableRef}
            className={className}
            onBlur={onTableBlur}
          >
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
                      "aria-label": x.name,
                      style: x.style,
                      wrap: x.wrap
                    };

                    const sortableBtnProps = {};
                    let onClick;
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

                      onClick = () => {
                        setExpandedRows({});
                        if (!onSort) {
                          return;
                        }

                        if (!disableSortReset) {
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
                        } else {
                          onSort({
                            key: x.key,
                            direction:
                              sort &&
                              x.key === sort.key &&
                              sort.direction === "asc"
                                ? "desc"
                                : "asc"
                          });
                        }
                      };
                    }

                    if (!x.sortable) {
                      return (
                        <TableHeader
                          {...headerProps}
                          key={`a-data-table_header_${i}`}
                        >
                          <span className="a-data-table__header__label">
                            {x.name}
                          </span>
                        </TableHeader>
                      );
                    }

                    let sortIcon = x.sortable && (
                      <AIcon
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
                    );

                    return (
                      <TableHeader
                        {...headerProps}
                        key={`a-data-table_header_${i}`}
                        tabIndex={0}
                        onClick={onClick}
                        onKeyDown={(e) => {
                          if (
                            [keyCodes.enter, keyCodes.space].includes(e.keyCode)
                          ) {
                            e.preventDefault();
                            onClick && onClick(e);
                          }
                        }}
                      >
                        <div className="a-data-table__header__sort-wrap">
                          {x.align === "end" && sortIcon}
                          <button
                            {...sortableBtnProps}
                            tabIndex={-1}
                            className="a-data-table__header__sort__button"
                          >
                            <span className="a-data-table__header__label">
                              {x.name}
                            </span>
                          </button>
                          {x.align !== "end" && sortIcon}
                        </div>
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
                const isLastRow = i === items.length - 1;
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
                const isRowKeySelected = selectedRowIndex === i;
                const rowContent = (
                  <TableRow
                    data-expandable-row={hasExpandedRowContent}
                    isSelected={isRowSelected}
                    key={key}
                    isKeySelected={isRowKeySelected}
                    row-index={i}
                    tabIndex="-1"
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
                      const {cellLoading} = rowItem;

                      const content = cellLoading ? (
                        <ASkeleton
                          hidePanelBackdrop
                          animated
                          style={{padding: 0}}
                        >
                          <ASkeletonText />
                        </ASkeleton>
                      ) : y.cell && y.cell.component ? (
                        y.cell.component(rowItem)
                      ) : (
                        rowItem[y.key]
                      );

                      return (
                        <TableCell
                          tabIndex="-1"
                          col-index={j}
                          key={`a-data-table_cell_${j}`}
                          className={`text-${y.align || "start"} ${
                            y.cell?.className || ""
                          }`.trim()}
                        >
                          {content}
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
   * Disables third click of header sort icon to unset sorting.
   */
  disableSortReset: PropTypes.bool,
  /**
   * Toggles the `striped` display variant. Darkened backgrounds for alternate rows.
   */
  striped: PropTypes.bool,
  /**
   * Toggles the `tight` display variant. Smaller row heights.
   */
  tight: PropTypes.bool,
  /**
   * Automatically truncate header text with ellipses when applicable
   */
  truncateHeaders: PropTypes.bool,
  /**
   * Enable sticky header
   */
  stickyHeader: PropTypes.bool,

  /**
   * Enable and configure support for moving in table using pageup/pagedown keys. `null` (turned off) by default.
   * `a-data-table__row--key-selected` class is added to currently active row and can be used for styling of key selection.
   */
  keyboardArrowSupport: PropTypes.shape({
    /**
     * Callback function for key selection. To callback are sent two params
     * - object {index, item}
     *    - index - zero based index of currently selected row,
     *    - item - current data row
     * - event - triggering event to prevent default, stop propagation etc.
     */
    onKeyboardSelect: PropTypes.func,

    /**
     * Optional way how to select first active row from which we can continue with arrow up/down.
     * Zero based. It should be within items array range. Set `-1` to unselect.
     */
    initiallySelectedRowIndex: PropTypes.number,

    /**
     * Active row or element in row (specified by `activeRowFocusSelector` param)
     * is focused by default. This option can turn focus off.
     */
    disableRowAutoFocus: PropTypes.bool,

    /**
     * Disable resetting selection and positon in table when table component looses focus.
     */
    disableOnBlurReset: PropTypes.bool,

    /**
     * When this selector is provided we try to focus element by `css` selector in active row.
     * `disableRowAutoFocus` will turn focus feature off.
     */
    activeRowFocusSelector: PropTypes.string,

    /**
     * When focusing element we can override focus options, e.g. to prevent focus scroll, etc.
     */
    overrideFocusOptions: PropTypes.shape({
      preventScroll: PropTypes.bool,
      focusVisible: PropTypes.bool
    })
  })
};

ADataTable.displayName = "ADataTable";

export default ADataTable;
