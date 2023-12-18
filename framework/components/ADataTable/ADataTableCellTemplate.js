import {ASkeleton, ASkeletonText} from "../ASkeleton";
import ADataTableCell from "./ADataTableCell";
import React from "react";
import PropTypes from "prop-types";

const ADataTableCellTemplate = ({rowItem, headerItem, headerIndex}) => {
  const {cellLoading} = rowItem;

  const content = cellLoading ? (
    <ASkeleton hidePanelBackdrop animated style={{padding: 0}}>
      <ASkeletonText />
    </ASkeleton>
  ) : headerItem.cell?.component ? (
    headerItem.cell.component(rowItem)
  ) : (
    rowItem[headerItem.key]
  );

  return (
    <ADataTableCell
      tabIndex="-1"
      col-index={headerIndex}
      className={`text-${headerItem.align || "start"} ${
        headerItem.cell?.className || ""
      }`.trim()}
    >
      {content}
    </ADataTableCell>
  );
};

ADataTableCellTemplate.displayName = "ADataTableCellTemplate";

ADataTableCellTemplate.propTypes = {
  /** Specific header item associated with "rowItem" being currently rendered */
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

  /** Row item we are currently rendering */
  rowItem: PropTypes.object.isRequired,

  /** Header index (zero based)  */
  headerIndex: PropTypes.number.isRequired
};

export default ADataTableCellTemplate;
