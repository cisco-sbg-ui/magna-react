import React from "react";

import {
  AIcon,
  AList,
  AListItem,
  AListItemAvatar,
  AListItemTitle
} from "../framework";

import MagnaIcons from "../framework/components/AIcon/magnaIcons";

const MagnaIconGallery = () => {
  return (
    <AList className="flex-row flex-wrap mb-8">
      {Object.keys(MagnaIcons).map((x) => (
        <AListItem
          name={x}
          key={x}
          className="flex-grow-0"
          style={{flexBasis: "33.33%"}}
        >
          <AListItemAvatar style={{minWidth: 24}}>
            <AIcon>{x}</AIcon>
          </AListItemAvatar>
          <AListItemTitle>{x}</AListItemTitle>
        </AListItem>
      ))}
    </AList>
  );
};

MagnaIconGallery.displayName = "MagnaIconGallery";

export default MagnaIconGallery;
