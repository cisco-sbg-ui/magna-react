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

export {
  sortDates,
  isSameDate,
  isDateTipOfRange,
  isDateBetweenRange,
  rangeTupleValidator
};
