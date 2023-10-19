import React, {useState, useEffect} from "react";
import {convertToStandardDateFormat, isValidDateStr} from "./helpers";
import ATextInput from "../ATextInput";

const DateInputs = ({
  setShowCalendar,
  setDateRange,
  dateRange,
  label,
  ...rest
}) => {
  const [hover, setHover] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const {startDT, endDT} = dateRange;
  const {maxDate, minDate} = {...rest};
  const hasMinDate = minDate instanceof Date;
  const hasMaxDate = maxDate instanceof Date;

  useEffect(() => {
    const hasFocus = document.querySelectorAll(".a-input-base--focused").length;
    if (hasFocus) {
      setHover(false);
    }
  }, [hover]);

  const handleInput = () => {
    setHover(false);
    setShowCalendar(true);
  };

  useEffect(() => {
    setInvalid(false);
    if (startDT && endDT) {
      if (Date.parse(startDT) > Date.parse(endDT)) {
        setInvalid(true);
      }
    }
  }, [startDT, endDT]);

  return (
    <>
      {label && (
        // Allow an actionable label
        // eslint-disable-next-line jsx-a11y/no-static-element-interactions
        <span
          className="a-date-picker__range-label"
          onClick={handleInput}
          onKeyUp={handleInput}
          aria-label="Date range inputs label"
        >
          {label}
        </span>
      )}
      <div
        className={`a-date-picker__inputs ${hover ? "inputs--hover" : ""} ${
          invalid ? "inputs--invalid" : ""
        }`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        aria-label="Date picker inputs"
      >
        <ATextInput
          label="Start date"
          labelHidden
          className="a-date-picker__inputs--start"
          onClick={handleInput}
          onKeyUp={handleInput}
          placeholder="Start date"
          appendIcon="arrow-right"
          value={startDT?.toLocaleDateString() || ""}
          onChange={(e) => {
            if (isValidDateStr(e.target.value)) {
              const {dateObj} = convertToStandardDateFormat(e.target.value);

              const minDateInvalid =
                hasMinDate &&
                Date.parse(dateObj) <
                  Date.parse(convertToStandardDateFormat(minDate).dateObj);
              if (minDateInvalid) {
                setInvalid(true);
              } else {
                setDateRange({
                  ...dateRange,
                  startDT: dateObj
                });
              }
            } else {
              setInvalid(true);
            }
          }}
        />
        <ATextInput
          label="End date"
          labelHidden
          className="a-date-picker__inputs--end"
          placeholder="End date"
          onClick={handleInput}
          onKeyUp={handleInput}
          appendIcon="calendar"
          value={endDT?.toLocaleDateString() || ""}
          onChange={(e) => {
            if (isValidDateStr(e.target.value)) {
              const {dateObj} = convertToStandardDateFormat(e.target.value);

              const maxDateInvalid =
                hasMaxDate &&
                Date.parse(dateObj) >
                  Date.parse(convertToStandardDateFormat(maxDate).dateObj);

              if (maxDateInvalid) {
                setInvalid(true);
              } else {
                setDateRange({
                  ...dateRange,
                  endDT: dateObj
                });
              }
            } else {
              setInvalid(true);
            }
          }}
        />
      </div>
    </>
  );
};

export default DateInputs;
