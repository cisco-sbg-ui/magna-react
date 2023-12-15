import {ASkeleton, ASkeletonText} from "../ASkeleton";
import ADataTableCell from "./ADataTableCell";
import React from "react";

const ADataTableCellTemplate = ({headerItem, rowItem, index}) => {
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
      col-index={index}
      className={`text-${headerItem.align || "start"} ${
        headerItem.cell?.className || ""
      }`.trim()}
    >
      {content}
    </ADataTableCell>
  );
};

ADataTableCellTemplate.displayName = "ADataTableCellTemplate";

export default ADataTableCellTemplate;
