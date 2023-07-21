import PropTypes from "prop-types";
import React, {forwardRef, useState, useEffect, useRef} from "react";
import DateInputs from "./DateInputs";
import ADatePicker from "./ADatePicker";
import useADateRange from "./useADateRange";
import AMenu from "../AMenu/AMenu";

const defaultRange = {
  startDT: null,
  endDT: null
};

const ADateRangePicker = forwardRef(
  (
    {className, getDateRange, options, initialRange, maxDays, minDays, ...rest},
    ref
  ) => {
    const defaultOptions = options || {
      initialRange: initialRange,
      maxDays: maxDays,
      minDays: minDays
    };
    const calendarRef = useRef(null);
    const [dateRange, setDateRange] = useState(defaultRange);
    const [showCalendar, setShowCalendar] = useState(false);
    const {value, onChange, ...datePickerProps} = useADateRange(defaultOptions);

    const inputClassName = "a-date-range-picker",
      menuClassName = "a-menu--datepicker";

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

    return (
      <div id="calendarContainer" className={inputClassName} ref={calendarRef}>
        <DateInputs
          openCalendar={setShowCalendar}
          showCalendar={showCalendar}
          setDateRange={setDateRange}
          dateRange={dateRange}
        />
        <AMenu
          anchorRef={calendarRef}
          open={showCalendar}
          closeOnClick={false}
          placement="bottom"
          className={menuClassName}
          onClose={() => setShowCalendar(false)}
        >
          <ADatePicker
            ref={ref}
            className={className}
            value={formattedDates}
            onChange={onChange}
            {...datePickerProps}
            {...rest}
          />
        </AMenu>
      </div>
    );
  }
);

ADateRangePicker.displayName = "ADateRangePicker";

export default ADateRangePicker;
