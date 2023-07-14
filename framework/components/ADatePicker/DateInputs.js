import React, {useState, useEffect} from "react";

import ATextInput from "../ATextInput";

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
        className="a-date-picker__inputs--start"
        clearable
        onClick={handleInput}
        placeholder="Start date"
        appendIcon="arrow-right"
        value={dateRange.startDT}
        onBlur={(e) => {
          if (e.target.value !== "") {
            setDateRange({
              ...dateRange,
              startDT: new Date(e.target.value).toLocaleDateString()
            });
          }
        }}
      />
      <ATextInput
        className="a-date-picker__inputs--end"
        placeholder="End date"
        clearable
        onClick={handleInput}
        appendIcon="calendar"
        value={dateRange.endDT}
        onBlur={(e) => {
          if (e.target.value !== "") {
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
