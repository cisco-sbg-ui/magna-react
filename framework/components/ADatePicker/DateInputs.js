import React, {useState, useEffect, useRef} from "react";

import ATextInput from "../ATextInput";

//TEMP FOR DEVELOPMENT PURPOSES ONLY - REPLACE WITH MORE ROBUST DATE VALIDATION LIBRARY
var date_regex =
  /^(0[1-9]|[1-9]|1[0-2])\/(0[1-9]|[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
const tempValidateDate = (date) => {
  const invalidDate =
    !date || isNaN(Date.parse(date)) || !date_regex.test(date);
  return !invalidDate;
};

const DateInputs = ({openCalendar, setDateRange, dateRange, ...rest}) => {
  const [hover, setHover] = useState(false);
  const [invalid, setInvalid] = useState(false);
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
    openCalendar(true);
  };

  useEffect(() => {
    if (dateRange.startDT && dateRange.endDT) {
      if (Date.parse(dateRange.startDT) > Date.parse(dateRange.endDT)) {
        setInvalid(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateRange.startDT, dateRange.endDT]);

  return (
    <div
      className={`a-date-picker__inputs ${hover ? "inputs--hover" : ""} ${
        invalid ? "inputs--invalid" : ""
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <ATextInput
        label="Start date"
        labelHidden
        className="a-date-picker__inputs--start"
        onClick={handleInput}
        onKeyUp={handleInput}
        placeholder="Start date"
        appendIcon="arrow-right"
        value={dateRange.startDT ?? ""}
        onChange={(e) => {
          if (tempValidateDate(e.target.value)) {
            const minDateInvalid =
              hasMinDate && Date.parse(e.target.value) < Date.parse(minDate);
            if (minDateInvalid) {
              setInvalid(true);
            } else {
              setDateRange({
                ...dateRange,
                startDT: new Date(e.target.value).toLocaleDateString()
              });
              setInvalid(false);
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
        value={dateRange.endDT ?? ""}
        onChange={(e) => {
          if (tempValidateDate(e.target.value)) {
            const maxDateInvalid =
              hasMaxDate && Date.parse(e.target.value) > Date.parse(maxDate);

            if (maxDateInvalid) {
              setInvalid(true);
            } else {
              setDateRange({
                ...dateRange,
                endDT: new Date(e.target.value).toLocaleDateString()
              });
              setInvalid(false);
            }
          } else {
            setInvalid(true);
          }
        }}
      />
    </div>
  );
};

export default DateInputs;
