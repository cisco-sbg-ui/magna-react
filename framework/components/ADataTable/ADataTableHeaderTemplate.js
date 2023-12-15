import React from "react";
import ADataTableHeader from "./ADataTableHeader";
import AIcon from "../AIcon";
import {keyCodes} from "../../utils/helpers";

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
  index,
  sort,
  onSort,
  setExpandedRows,
  disableSortReset
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
    wrap: headerItem.wrap
  };

  const sortableBtnProps = {};
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
      <ADataTableHeader {...headerProps} key={`a-data-table_header_${index}`}>
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
        <button
          {...sortableBtnProps}
          tabIndex={-1}
          className="a-data-table__header__sort__button"
        >
          <span className="a-data-table__header__label">{headerItem.name}</span>
        </button>
        {headerItem.align !== "end" && sortIcon}
      </div>
    </ADataTableHeader>
  );
};

ADataTableHeaderTemplate.displayName = "ADataTableHeaderTemplate";

export default ADataTableHeaderTemplate;
