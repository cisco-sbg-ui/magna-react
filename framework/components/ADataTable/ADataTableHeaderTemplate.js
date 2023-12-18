import React from "react";
import ADataTableHeader from "./ADataTableHeader";
import AIcon from "../AIcon";
import {keyCodes} from "../../utils/helpers";
import PropTypes from "prop-types";

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

const ADataTableHeaderTemplate = ({
  headerItem,
  sort,
  onSort,
  disableSortReset,
  setExpandedRows,
  ...rest
}) => {
  const headerProps = {
    className: `a-data-table__header ${
      headerItem.sortable ? "a-data-table__header--sortable" : ""
    } text-${headerItem.align || "start"} ${headerItem.className || ""}`
      .replace("  ", " ")
      .trim(),
    role: "columnheader",
    scope: "col",
    "aria-label": headerItem.name,
    style: headerItem.style,
    wrap: headerItem.wrap,
    ...rest
  };

  let onClick;
  if (headerItem.sortable) {
    if (!sort || headerItem.key !== sort.key) {
      headerProps["aria-label"] += ": Not sorted. Activate to sort ascending.";
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
          sort && sort.key === headerItem.key && sort.direction === "desc"
            ? null
            : {
                key: headerItem.key,
                direction:
                  sort &&
                  headerItem.key === sort.key &&
                  sort.direction === "asc"
                    ? "desc"
                    : "asc"
              }
        );
      } else {
        onSort({
          key: headerItem.key,
          direction:
            sort && headerItem.key === sort.key && sort.direction === "asc"
              ? "desc"
              : "asc"
        });
      }
    };
  }

  if (!headerItem.sortable) {
    return (
      <ADataTableHeader {...headerProps}>
        <span className="a-data-table__header__label">{headerItem.name}</span>
      </ADataTableHeader>
    );
  }

  let sortIcon = headerItem.sortable && (
    <AIcon
      left={headerItem.align === "end"}
      right={headerItem.align !== "end"}
      className={`a-data-table__header__sort ${
        sort && headerItem.key === sort.key
          ? "a-data-table__header__sort--active"
          : ""
      }`}
    >
      {getSortIconName(headerItem, sort)}
    </AIcon>
  );

  return (
    <ADataTableHeader
      {...headerProps}
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => {
        if ([keyCodes.enter, keyCodes.space].includes(e.keyCode)) {
          e.preventDefault();
          onClick && onClick(e);
        }
      }}
    >
      <div className="a-data-table__header__sort-wrap">
        {headerItem.align === "end" && sortIcon}
        <button tabIndex={-1} className="a-data-table__header__sort__button">
          <span className="a-data-table__header__label">{headerItem.name}</span>
        </button>
        {headerItem.align !== "end" && sortIcon}
      </div>
    </ADataTableHeader>
  );
};

ADataTableHeaderTemplate.displayName = "ADataTableHeaderTemplate";

ADataTableHeaderTemplate.propTypes = {
  /** Particular header item which is currently being rendered */
  headerItem: PropTypes.shape({
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
  }),

  /**
   * `sort` configuration
   */
  sort: PropTypes.shape({
    key: PropTypes.string,
    direction: PropTypes.oneOf(["asc", "desc"])
  }),

  /**
   * `sort` click event handler
   */
  onSort: PropTypes.func,

  /**
   * Disables third click of header sort icon to unset sorting.
   */
  disableSortReset: PropTypes.bool,

  /**
   * Expanded row's state setter.
   */
  setExpandedRows: PropTypes.func
};

export default ADataTableHeaderTemplate;
