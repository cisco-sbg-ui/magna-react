import PropTypes from "prop-types";
import React, {forwardRef, useState, useEffect, useRef} from "react";
import DateInputs from "./DateInputs";
import ADatePicker from "./ADatePicker";
import useADateRange from "./useADateRange";
import useOutsideClick from "../../hooks/useOutsideClick/useOutsideClick";

const defaultRange = {
  startDT: null,
  endDT: null
};

const ADateRangePicker = forwardRef(
  ({className, getDateRange, options, ...rest}, ref) => {
    const calendarRef = useRef(null);
    const [dateRange, setDateRange] = useState(defaultRange);
    const [showCalendar, setShowCalendar] = useState(false);
    const {value, onChange, ...datePickerProps} = useADateRange(options);
    const inputClassName = "a-date-range-picker";

    useEffect(() => {
      const calendarStartDate =
        value[0] && new Date(value[0]).toLocaleDateString();
      const calendarEndDate =
        value[1] && new Date(value[1]).toLocaleDateString();

      setDateRange({startDT: calendarStartDate, endDT: calendarEndDate});
    }, [value]);

    const formattedStartDate = dateRange.startDT
      ? new Date(dateRange.startDT)
      : null;
    const formattedEndDate = dateRange.endDT ? new Date(dateRange.endDT) : null;

    const formattedDates = [formattedStartDate, formattedEndDate];

    useEffect(() => {
      getDateRange(formattedDates);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [dateRange]);

    useOutsideClick({
      isEnabled: calendarRef?.current && showCalendar,
      rootRef: calendarRef,
      onClick: () => setShowCalendar(false)
    });

    return (
      <div id="calendarContainer" ref={calendarRef} className={inputClassName}>
        <DateInputs
          openCalendar={setShowCalendar}
          showCalendar={showCalendar}
          setDateRange={setDateRange}
          dateRange={dateRange}
        />
        {showCalendar && (
          <ADatePicker
            ref={ref}
            className={className}
            value={formattedDates}
            onChange={onChange}
            {...datePickerProps}
            {...rest}
          />
        )}
      </div>
    );
  }
);

ADateRangePicker.displayName = "ADateRangePicker";

export default ADateRangePicker;
