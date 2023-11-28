import React, {useRef} from "react";
import {ATooltip} from "../ATooltip";
import ATag from "../ATag";
import useToggle from "../../hooks/useToggle/useToggle";

const AMultiSelectCounter = ({items, value, itemValue, itemText}) => {
  const {isOpen, open, close} = useToggle();
  const iconRef = useRef(null);

  const itemsMap = new Map(
    items.map((item) =>
      typeof item === "string"
        ? [item, item]
        : [item[itemValue], item[itemText]]
    )
  );
  const selectedItems = value.map((item) => itemsMap.get(item));

  if (!selectedItems.length) {
    return null;
  }

  return (
    <>
      <ATag small ref={iconRef} onMouseEnter={open} onMouseLeave={close}>
        {selectedItems.length}
      </ATag>
      <ATooltip
        anchorRef={iconRef}
        id="tooltip_usage_2"
        open={isOpen}
        placement="top"
        pointer
      >
        {selectedItems.join(", ")}
      </ATooltip>
    </>
  );
};

export default AMultiSelectCounter;
