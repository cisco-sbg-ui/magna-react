import React from "react";
import ADataTableRow from "./ADataTableRow";
import ADataTableCell from "./ADataTableCell";
import AIcon from "../AIcon";
import ADataTableCellTemplate from "./ADataTableCellTemplate";
import AInView from "../AInView";

const ADataTableRowTemplate = ({
  rowItem,
  rowIndex,
  isLastRow,
  headers,
  onScrollToEnd,
  expandable,
  expandedRows,
  toggleRow,
  ExpandableComponent,
  propsIsRowSelected,
  selectedRowIndex,
  propsOnRowClick
}) => {
  const id = `a-data-table_row_${rowIndex}`;
  const isInfiniteScrollTarget =
    isLastRow && typeof onScrollToEnd === "function";
  const hasExpandedRowContent =
    ExpandableComponent &&
    (typeof expandable.isRowExpandable === "function"
      ? expandable.isRowExpandable(rowItem)
      : true);
  const isRowSelected =
    typeof propsIsRowSelected === "function" && propsIsRowSelected(rowItem);
  const isRowKeySelected = selectedRowIndex === rowIndex;
  const rowContent = (
    <ADataTableRow
      data-expandable-row={hasExpandedRowContent}
      isSelected={isRowSelected}
      isKeySelected={isRowKeySelected}
      row-index={rowIndex}
      tabIndex="-1"
      onClick={(e) =>
        typeof propsOnRowClick === "function" && propsOnRowClick(rowItem, e)
      }
    >
      {ExpandableComponent && (
        <ADataTableCell>
          {hasExpandedRowContent && (
            <button
              aria-expanded={!!expandedRows[id]}
              aria-controls={id}
              className="a-data-table__cell__btn--expand"
              onClick={toggleRow(id)}
            >
              <AIcon size={12}>
                {expandedRows[id] ? "chevron-down" : "chevron-right"}
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
          index={headerIndex}
        />
      ))}
      {hasExpandedRowContent && (
        <ADataTableCell
          id={id}
          data-expandable-content
          hidden={!expandedRows[id]}
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

export default ADataTableRowTemplate;
