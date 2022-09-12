import React from "react";

import {
  AIcon,
  AList,
  AListItem,
  AListItemAvatar,
  AListItemTitle
} from "../framework";

import Icons from "../framework/components/AIcon/icons.json";

const IconGallery = () => {
  return (
    <AList className="flex-row flex-wrap mb-8">
      {Object.keys(Icons).map((x) => (
        <AListItem
          name={x}
          key={x}
          className="flex-grow-0"
          style={{flexBasis: "33.33%"}}>
          <AListItemAvatar style={{minWidth: 24}}>
            <AIcon>{x}</AIcon>
          </AListItemAvatar>
          <AListItemTitle>{x}</AListItemTitle>
        </AListItem>
      ))}
    </AList>
  );
};

IconGallery.displayName = "IconGallery";

export default IconGallery;
