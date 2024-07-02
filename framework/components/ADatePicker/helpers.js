const sortDates = (dates) => {
  return dates.sort((a, b) => Date.parse(a) - Date.parse(b));
};

const isSameDate = (a, b) => {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
};

const isDateTipOfRange = (date, range) => {
  const [rangeStartDate, rangeEndDate] = range;

  if (
    (rangeStartDate instanceof Date && isSameDate(date, rangeStartDate)) ||
    (rangeEndDate instanceof Date && isSameDate(date, rangeEndDate))
  ) {
    return true;
  }

  return false;
};

const isDateBetweenRange = (date, range) => {
  const [rangeStartDate, rangeEndDate] = range;
  return (
    Date.parse(date) > Date.parse(rangeStartDate) &&
    Date.parse(date) < Date.parse(rangeEndDate)
  );
};

const isValidDateTuple = (range) => {
  const isArray = Array.isArray(range);
  const isValidTypes =
    isArray && range.every((value) => value instanceof Date || value === null);
  const isValidLength = isValidTypes && range.length <= 2;
  return isArray && isValidDateTuple && isValidLength;
};

function rangeTupleValidator(propValue, key, componentName) {
  if (!isValidDateTuple(propValue)) {
    throw new Error(
      "Invalid prop 'value' supplied to '" +
        componentName +
        "'. " +
        "When using a range, pass a tuple indicting a start and end " +
        "date, or 'null' if empty."
    );
  }
  return null;
}

//Date/Time helpers
const timezone = Intl.DateTimeFormat().resolvedOptions().locale;
var formatter = new Intl.DateTimeFormat(timezone, {
  year: "numeric",
  month: "numeric",
  day: "numeric",
  timeZone: "UTC"
});
/*************
 * As of 8/18/2023, Intl returns date parts in sorted order from left to right which is what this logic depends on.
 * This is based of observation, hunch, and hope and may change in the future.
 * This is a dynamic approach to detecting which locale uses a format of day first (which is an invalid date according to new Date())
 * We detect day first and flip to month first to allow it to be properly consumed by new Date().
 **************/
/**
 * @param {String} type Intl types: "day", "month", "literal", "year", etc
 * @returns {Boolean}
 */
const dateType = (type) =>
  formatter.formatToParts(new Date()).findIndex((i) => i.type === type);
const isDayFirst = dateType("day") < dateType("month");

/**
 * @param {String} date "Any date format with yyyy
 * @returns {{dateStr: String, dateObj: Date}}
 */
const convertToStandardDateFormat = (date) => {
  const stabilizeLiteral = date.replace(/(\.|-)/g, "/");

  if (isDayFirst) {
    const dayToMonthFormat = stabilizeLiteral.replace(
      /([0-9]{1,2})\/([0-9]{1,2})\/([0-9]{4})/g,
      "$2/$1/$3"
    );

    return {dateStr: dayToMonthFormat, dateObj: new Date(dayToMonthFormat)};
  }

  return {dateStr: date, dateObj: new Date(date)};
};

/**
 * @param {String} date Any date format with yyyy
 * @returns {Boolean}
 */
const isValidDateStr = (date) => {
  const {dateStr} = convertToStandardDateFormat(date);
  //Shallow check to validate if user is typing a date string
  //This helps avoid setting new Date() prematurely
  var dateRegex =
    /^(0[1-9]|[1-9]|1[0-2])\/(0[1-9]|[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}$/;
  const invalidDate =
    !date || isNaN(Date.parse(dateStr)) || !dateRegex.test(dateStr);

  //Final check if we missed other non-standard formats
  if (invalidDate && Date.parse(dateStr) && dateStr.length >= 8) {
    return true;
  }

  return !invalidDate;
};

export {
  sortDates,
  isSameDate,
  isDateTipOfRange,
  isDateBetweenRange,
  rangeTupleValidator,
  convertToStandardDateFormat,
  isValidDateStr
};
