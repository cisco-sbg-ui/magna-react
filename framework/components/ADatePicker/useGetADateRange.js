import React, {useState} from "react";

export const defaultRange = [null, null];

/**
 * Simple hook for passing along the values from the ADateRangePicker.
 * ADateRangePicker is an extension of ADatePicker (with date range).
 */

const useGetADateRange = () => {
  const [dates, setDates] = useState(defaultRange);

  const getDateRange = (value) => setDates(value);
  return {
    dates,
    getDateRange
  };
};
export default useGetADateRange;
