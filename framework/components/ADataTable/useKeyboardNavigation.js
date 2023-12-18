import {useCallback, useEffect, useState} from "react";
import useKeydown from "../../hooks/useKeydown/useKeydown";

const ARROW_UP = "ArrowUp";
const ARROW_DOWN = "ArrowDown";
const ARROW_KEYS = [ARROW_UP, ARROW_DOWN];

const useKeyboardNavigation = ({
  keyboardArrowSupport,
  items,
  getRowByIndex
}) => {
  const [keySelectedRowIndex, setKeySelectedRowIndex] = useState(-1); // zero based index in items array, -1 for no index

  const handleArrowKeydown = useCallback(
    (key, event) => {
      let nextRowIndex;

      if (keySelectedRowIndex === -1) {
        // first move
        if (key === ARROW_UP) nextRowIndex = items.length - 1;
        else nextRowIndex = 0;
      } else {
        // subsequent moves
        if (key === ARROW_UP) nextRowIndex = keySelectedRowIndex - 1;
        else nextRowIndex = keySelectedRowIndex + 1;
      }

      if (items[nextRowIndex] === undefined) {
        // out of items index
        return;
      }

      setKeySelectedRowIndex(nextRowIndex);

      if (typeof keyboardArrowSupport?.onKeyboardSelect === "function") {
        keyboardArrowSupport?.onKeyboardSelect(
          {index: nextRowIndex, item: items[nextRowIndex]},
          event
        );
      }
    },
    // having keyboardArrowSupport in deps causes unnecessary re-renders
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [items, keySelectedRowIndex, keyboardArrowSupport?.onKeyboardSelect]
  );

  const onTableBlur = useCallback(
    (event) => {
      if (keyboardArrowSupport?.disableOnBlurReset) return;

      const isEventsInTable = event.currentTarget.contains(event.relatedTarget);
      if (!isEventsInTable) {
        setKeySelectedRowIndex(-1);
        if (typeof keyboardArrowSupport?.onKeyboardSelect === "function") {
          keyboardArrowSupport?.onKeyboardSelect(
            {index: -1, item: undefined},
            event
          );
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      keyboardArrowSupport?.disableOnBlurReset,
      keyboardArrowSupport?.onKeyboardSelect
    ]
  );

  useEffect(() => {
    if (keyboardArrowSupport === null || keySelectedRowIndex === -1) return;

    const {
      disableRowAutoFocus,
      activeRowFocusSelector,
      overrideFocusOptions = {}
    } = keyboardArrowSupport;

    if (disableRowAutoFocus) return;

    const row = getRowByIndex && getRowByIndex(keySelectedRowIndex);
    if (!row) return;

    if (activeRowFocusSelector) {
      const element = row.querySelector(activeRowFocusSelector);
      if (element && element.focus) {
        element.focus(overrideFocusOptions);
      }
    } else {
      row.focus(overrideFocusOptions);
    }
    // combinedTableRef should not need to be in deps
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [
    keyboardArrowSupport?.disableRowAutoFocus,
    keyboardArrowSupport?.activeRowFocusSelector,
    keyboardArrowSupport?.overrideFocusOptions,
    keySelectedRowIndex
  ]);

  useEffect(() => {
    if (keyboardArrowSupport === null) return;

    const index = keyboardArrowSupport.initiallySelectedRowIndex;
    if (typeof index === "number" && items[index]) {
      setKeySelectedRowIndex(index);
    } else {
      setKeySelectedRowIndex(-1);
    }
    // having keyboardArrowSupport in deps causes unnecessary re-renders
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyboardArrowSupport?.initiallySelectedRowIndex, items]);

  useKeydown(ARROW_KEYS, handleArrowKeydown, keyboardArrowSupport !== null);

  return {
    keySelectedRowIndex,
    onTableBlur
  };
};

export default useKeyboardNavigation;
