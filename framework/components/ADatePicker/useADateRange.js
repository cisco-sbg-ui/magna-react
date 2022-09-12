import { useCallback, useState } from "react";
import { sortDates } from "./helpers";

/**
 * Sequencing logic for setting an incoming date relative to an existing date range.
 * It has no opinion on if the second selection must be larger than the first selection.
 * 
 * Flow: first date selection -> second date selection -> first date selection -> second date selection -> (etc.)
 * @param {Array.<Date|null>} oldRange - Tuple with starting date and ending date
 * @param {Date} incomingDate - The next date to sequence
 * @returns tuple the newly set date range
 */
export const stepSequencer = (existingRange, nextDate) => {
  const [rangeStartDate, rangeEndDate] = existingRange;
  const isRangeEmpty = !rangeStartDate && !rangeEndDate;
  const shouldResetRange = rangeStartDate && rangeEndDate;

  return isRangeEmpty || shouldResetRange ?
    [nextDate, null] :
    sortDates([rangeStartDate, nextDate]);
};

/**
 * Hook for storing date range state. Currently uses a step sequence, but has
 * room for flexibility in the future.
 */
const useADateRange = (config) => {
  // Support older version hook config
  let initialRange;
  let maxDays;
  const isUsingOldParams = Array.isArray(config);
  if (isUsingOldParams) {
    initialRange = config || [null, null];
  } else {
    initialRange = Array.isArray(config?.initialRange) ? config.initialRange : [null, null];
    maxDays = config?.maxDays || null;
  }
  const [range, setRange] = useState(initialRange);
  const [firstSelection, secondSelection] = range;
  let minDate, maxDate;
  if (maxDays && firstSelection && !secondSelection) {
    minDate = new Date(firstSelection);
    // Offset by 1 since one date is already selected
    minDate.setDate(firstSelection.getDate() - (parseInt(maxDays) - 1));

    maxDate = new Date(firstSelection);
    // Offset by 1 since one date is already selected
    maxDate.setDate(firstSelection.getDate() + (parseInt(maxDays) - 1));
  }
  if (maxDays && firstSelection && secondSelection) {
    minDate = null;
    maxDate = null;
  }

  const onChange = useCallback((incomingDate) => {
    setRange(oldRange => stepSequencer(oldRange, incomingDate));
  }, [setRange]);

  return {
    value: range,
    onChange,
    minDate,
    maxDate,
  };
};
export default useADateRange;
