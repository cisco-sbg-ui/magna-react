import React from "react";

import {
  AIcon,
  AList,
  AListItem,
  AListItemAvatar,
  AListItemTitle
} from "../framework";

import MagnaIcons from "../framework/components/AIcon/magnaIcons";
import Icons from "../framework/components/AIcon/icons.json";

const AtomicIconGallery = () => {
  return (
    <AList className="flex-row flex-wrap mb-8">
      {Object.keys(Icons)
        .filter((i) => {
          return !MagnaIcons[i];
        })
        .map((x) => (
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

AtomicIconGallery.displayName = "AtomicIconGallery";

export default AtomicIconGallery;
