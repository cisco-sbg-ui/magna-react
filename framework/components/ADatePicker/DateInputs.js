import React, {useState, useEffect} from "react";

import ATextInput from "../ATextInput";

//TEMP FOR DEVELOPMENT PURPOSES ONLY - REPLACE WITH MORE ROBUST DATE VALIDATION LIBRARY
const tempValidateDate = (date) => {
  if (!date || isNaN(Date.parse(date))) {
    return false;
  }
  return true;
};

const DateInputs = ({openCalendar, setDateRange, dateRange}) => {
  const [hover, setHover] = useState(false);

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

  return (
    <div
      className={`a-date-picker__inputs ${hover ? "inputs--hover" : ""}`}
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
            setDateRange({
              ...dateRange,
              startDT: new Date(e.target.value).toLocaleDateString()
            });
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
            setDateRange({
              ...dateRange,
              endDT: new Date(e.target.value).toLocaleDateString()
            });
          }
        }}
      />
    </div>
  );
};

export default DateInputs;
