import PropTypes from "prop-types";
import React, {forwardRef, useMemo, useState, useEffect} from "react";

import AButton from "../AButton";
import AIcon from "../AIcon";
import {
  isDateBetweenRange,
  isDateTipOfRange,
  isSameDate,
  sortDates,
  rangeTupleValidator
} from "./helpers";
import "./ADatePicker.scss";

const fullMonthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
];

const ICON_SIZE = 10;

const ADatePicker = forwardRef(
  (
    {
      className: propsClassName,
      onChange,
      value = new Date(),
      minDate,
      maxDate,
      ...rest
    },
    ref
  ) => {
    const hasMinDate = minDate instanceof Date;
    const hasMaxDate = maxDate instanceof Date;
    // Because date comparisons in this widget are ...
    // ... only concerned with the day, reset the ...
    // ... time to midnight for equal comparisons
    if (hasMinDate) {
      minDate.setHours(0, 0, 0, 0);
    }
    if (hasMaxDate) {
      maxDate.setHours(0, 0, 0, 0);
    }
    const isRange = Array.isArray(value);

    const handleInitialDate = () => {
      const isRange = Array.isArray(value);

      if (!isRange) {
        return value;
      }

      // If range has a Date object, use the latest one
      // to initialize the calendar UI
      const dates = value.filter((d) => d instanceof Date);
      if (!dates.length) {
        return new Date();
      }
      return sortDates(dates)[dates.length - 1];
    };
    const [calendarDate, setCalendarDate] = useState(handleInitialDate);

    //When value changes, update calendar UI.
    useEffect(() => {
      setCalendarDate(handleInitialDate());
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [value]);

    const firstCalendarDate = useMemo(() => {
      let currDate = new Date(
        calendarDate.getFullYear(),
        calendarDate.getMonth(),
        calendarDate.getDate() - calendarDate.getDay()
      );

      while (
        currDate.getFullYear() >= calendarDate.getFullYear() &&
        currDate.getMonth() >= calendarDate.getMonth() &&
        currDate.getDate() > 1
      ) {
        currDate.setDate(currDate.getDate() - 7);
      }

      return currDate;
    }, [calendarDate]);
    let className = "a-date-picker";

    if (propsClassName) {
      className += ` ${propsClassName}`;
    }

    return (
      <div {...rest} title="Datepicker" ref={ref} className={className}>
        <div className="a-date-picker__header">
          <AButton
            tertiaryAlt
            icon
            className="a-date-picker__prev"
            onClick={() => {
              setCalendarDate(
                new Date(
                  calendarDate.getFullYear(),
                  calendarDate.getMonth() - 1,
                  1
                )
              );
            }}
          >
            <AIcon size={ICON_SIZE}>chevron-left</AIcon>
          </AButton>
          <div className="a-date-picker__title">
            <span className="a-date-picker__month">
              {fullMonthNames[calendarDate.getMonth()]}
            </span>{" "}
            <span className="a-date-picker__year">
              {calendarDate.getFullYear()}
            </span>
          </div>
          <AButton
            tertiaryAlt
            icon
            className="a-date-picker__next"
            onClick={() => {
              setCalendarDate(
                new Date(
                  calendarDate.getFullYear(),
                  calendarDate.getMonth() + 1,
                  1
                )
              );
            }}
          >
            <AIcon size={ICON_SIZE}>chevron-right</AIcon>
          </AButton>
        </div>
        <table className="a-date-picker__calendar">
          <thead>
            <tr>
              <th className="a-date-picker__week" scope="col">
                <span aria-label="Sunday">Su</span>
              </th>
              <th className="a-date-picker__week" scope="col">
                <span aria-label="Monday">Mo</span>
              </th>
              <th className="a-date-picker__week" scope="col">
                <span aria-label="Tuesday">Tu</span>
              </th>
              <th className="a-date-picker__week" scope="col">
                <span aria-label="Wednesday">We</span>
              </th>
              <th className="a-date-picker__week" scope="col">
                <span aria-label="Thursday">Th</span>
              </th>
              <th className="a-date-picker__week" scope="col">
                <span aria-label="Friday">Fr</span>
              </th>
              <th className="a-date-picker__week" scope="col">
                <span aria-label="Saturday">Sa</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(6)].map((x, i) => {
              const sunday = new Date(+firstCalendarDate);
              sunday.setDate(sunday.getDate() + i * 7);
              return (
                <tr key={i}>
                  {[...Array(7)].map((y, j) => {
                    const currWeekDay = new Date(+sunday);
                    currWeekDay.setDate(currWeekDay.getDate() + j);
                    const isBeforeMinDate =
                      hasMinDate &&
                      Date.parse(currWeekDay) < Date.parse(minDate);
                    const isPastMaxDate =
                      hasMaxDate &&
                      Date.parse(currWeekDay) > Date.parse(maxDate);
                    const isDisabled =
                      currWeekDay.getMonth() !== calendarDate.getMonth() ||
                      isBeforeMinDate ||
                      isPastMaxDate;
                    const isSelected = isRange
                      ? isDateTipOfRange(currWeekDay, value)
                      : isSameDate(currWeekDay, value);
                    const isBetweenRange =
                      isRange && isDateBetweenRange(currWeekDay, value);
                    return (
                      <td
                        key={j}
                        className={`a-date-picker__day${
                          isDisabled ? " disabled" : ""
                        }${isSelected ? " selected" : ""}${
                          isBetweenRange ? " between" : ""
                        }`}
                      >
                        {isDisabled ? (
                          currWeekDay.getDate()
                        ) : (
                          <button
                            type="button"
                            className="a-date-picker__day__label"
                            onClick={() => {
                              onChange && onChange(currWeekDay);
                            }}
                          >
                            {currWeekDay.getDate()}
                          </button>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
);

ADatePicker.propTypes = {
  /**
   * Handles the `change` event for when a date is selected.
   */
  onChange: PropTypes.func,
  /**
   * Sets the selected date(s). If selecting a single date, a JavaScript
   * `Date` object should be passed. If selecting a date range, however,
   * then a two-item array should be supplied representing the starting
   * date and ending date. If either the starting date or ending date is
   * not yet selected, you should pass in the date as `null`.
   * @example supplying the starting date with an unselected ending date
   * value={[new Date(2022, 2, 28), null]}
   */
  value: PropTypes.oneOfType([
    PropTypes.instanceOf(Date),
    PropTypes.arrayOf(rangeTupleValidator)
  ]),
  /**
   * The minimum date allowed for selection
   */
  minDate: PropTypes.instanceOf(Date),
  /**
   * The maximum date allowed for selection
   */
  maxDate: PropTypes.instanceOf(Date)
};

ADatePicker.displayName = "ADatePicker";

export default ADatePicker;
