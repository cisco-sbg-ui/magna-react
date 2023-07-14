import PropTypes from "prop-types";
import React, {forwardRef, useState, useEffect} from "react";
import DateInputs from "./DateInputs";
import ADatePicker from "./ADatePicker";
import useADateRange from "./useADateRange";

const defaultRange = {
  startDT: null,
  endDT: null
};

const ADateRangePicker = forwardRef(() =>
  // {
  //   className: propsClassName,
  //   onChange,
  //   value = new Date(),
  //   minDate,
  //   maxDate,
  //   ...rest
  // },
  // ref

  {
    const [dateRange, setDateRange] = useState(defaultRange);
    const [showCalendar, setShowCalendar] = useState(false);
    const {value, onChange} = useADateRange();

    useEffect(() => {
      const calendarStartDate =
        value[0] && new Date(value[0]).toLocaleDateString();
      const calendarEndDate =
        value[1] && new Date(value[1]).toLocaleDateString();

      setDateRange({startDT: calendarStartDate, endDT: calendarEndDate});
    }, [value]);

    useEffect(() => {
      if (dateRange.startDT && dateRange.endDT) {
        setShowCalendar(false);
      }
    }, [dateRange.startDT, dateRange.endDT]);

    const formattedStartDate = dateRange.startDT
      ? new Date(dateRange.startDT)
      : null;
    const formattedEndDate = dateRange.endDT ? new Date(dateRange.endDT) : null;

    return (
      <>
        <DateInputs
          openCalendar={setShowCalendar}
          showCalendar={showCalendar}
          setDateRange={setDateRange}
          dateRange={dateRange}
        />
        {showCalendar && (
          <ADatePicker
            value={[formattedStartDate, formattedEndDate]}
            onChange={onChange}
          />
        )}
      </>
    );
  }
);

ADateRangePicker.displayName = "ADateRangePicker";

export default ADateRangePicker;
