import PropTypes from "prop-types";
import React, {forwardRef, useState, useEffect, useRef} from "react";
import DateInputs from "./DateInputs";
import ADatePicker from "./ADatePicker";
import useADateRange from "./useADateRange";
import AMenu from "../AMenu/AMenu";
import {rangeTupleValidator} from "./helpers";

const defaultRange = {
  startDT: null,
  endDT: null
};

const ADateRangePicker = forwardRef(
  (
    {
      className,
      getDateRange,
      initialRange = new Date(),
      maxDays = null,
      label,
      ...rest
    },
    ref
  ) => {
    const defaultOptions = {
      initialRange: initialRange,
      maxDays: maxDays
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
      <div className={inputClassName} ref={calendarRef}>
        <DateInputs
          openCalendar={setShowCalendar}
          showCalendar={showCalendar}
          setDateRange={setDateRange}
          label={label}
          dateRange={dateRange}
          {...rest}
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

ADateRangePicker.propTypes = {
  /**
   * Handles the `change` event for when a date is entered.
   */
  getDateRange: PropTypes.func,
  /**
   * Sets the selected date(s). If selecting a single date, a JavaScript
   * `Date` object should be passed. If selecting a date range, however,
   * then a two-item array should be supplied representing the starting
   * date and ending date. If either the starting date or ending date is
   * not yet selected, you should pass in the date as `null`.
   * @example supplying the starting date with an unselected ending date
   * value={[new Date(2022, 2, 28), null]}
   */
  initialRange: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.arrayOf(rangeTupleValidator)
  ]),
  /**
   * Limit selection to a minimum number of days
   */
  maxDays: PropTypes.number,
  /**
   * The minimum date allowed for selection
   */
  minDate: PropTypes.instanceOf(Date),
  /**
   * The maximum date allowed for selection
   */
  maxDate: PropTypes.instanceOf(Date),
  /**
   * Optional label for the date picker
   */
  label: PropTypes.string
};

ADateRangePicker.displayName = "ADateRangePicker";

export default ADateRangePicker;
