import React from "react";
import AButton from "../AButton";
import AIcon from "../AIcon";
import ATag from "../ATag";

const AMultiSelectTag = ({items, value, onSelected, itemValue, itemText}) => {
  const tagItem = items.find((item) =>
    typeof item === "string" ? item === value : item[itemValue] === value
  );

  let computedValue, displayValue;

  if (tagItem && typeof tagItem === "string") {
    computedValue = tagItem;
    displayValue = tagItem;
  } else if (tagItem && typeof tagItem === "object") {
    computedValue = tagItem[itemValue];
    displayValue = tagItem[itemText];
  }

  return (
    <ATag>
      {displayValue}
      <AButton
        icon
        tertiaryAlt
        onClick={(e) => {
          e.stopPropagation();

          const newValue = [...value].filter(
            (value) => value !== computedValue
          );

          onSelected && onSelected(newValue);
        }}
      >
        <AIcon>x</AIcon>
      </AButton>
    </ATag>
  );
};

export default AMultiSelectTag;
