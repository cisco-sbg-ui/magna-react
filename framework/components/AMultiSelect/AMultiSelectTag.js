import React from "react";
import AButton from "../AButton";
import AIcon from "../AIcon";
import ATag from "../ATag";

const AMultiSelectTag = ({
  items,
  tagValue,
  value,
  onSelected,
  itemValue,
  itemText
}) => {
  const tagItem = items.find((item) =>
    typeof item === "string" ? item === tagValue : item[itemValue] === tagValue
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
    <ATag small>
      {displayValue}
      <AButton
        icon
        small
        tertiaryAlt
        onClick={(e) => {
          e.stopPropagation();

          const newValue = [...value].filter((v) => v !== computedValue);

          onSelected && onSelected(newValue);
        }}
      >
        <AIcon>x</AIcon>
      </AButton>
    </ATag>
  );
};

export default AMultiSelectTag;
