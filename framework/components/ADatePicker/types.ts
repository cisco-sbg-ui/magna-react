import {Override} from "../../types";

export type ADatePickerValue = Date | unknown[];

export type ADatePickerProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Handles the `change` event for when a date is selected.
     */
    onChange?: (date: Date) => unknown;
    /**
     * Sets the selected date(s). If selecting a single date, a JavaScript
     * `Date` object should be passed. If selecting a date range, however,
     * then a two-item array should be supplied representing the starting
     * date and ending date. If either the starting date or ending date is
     * not yet selected, you should pass in the date as `null`.
     * @example supplying the starting date with an unselected ending date
     * value={[new Date(2022, 2, 28), null]}
     *
     *  @defaultValue `new Date()`
     */
    value?: ADatePickerValue;
    /**
     * The minimum date allowed for selection
     */
    minDate?: Date;
    /**
     * The maximum date allowed for selection
     */
    maxDate?: Date;
  }
>;

export type ADateRangePickerInitialRange = Date | unknown[];

export type ADateRangePickerProps = Override<
  ADatePickerProps,
  {
    /**
     * Handles the `change` event for when a date is entered.
     */
    getDateRange?: (...args: unknown[]) => unknown;
    /**
     * Sets the selected date(s). If selecting a single date, a JavaScript
     * `Date` object should be passed. If selecting a date range, however,
     * then a two-item array should be supplied representing the starting
     * date and ending date. If either the starting date or ending date is
     * not yet selected, you should pass in the date as `null`.
     * @example supplying the starting date with an unselected ending date
     * value={[new Date(2022, 2, 28), null]}
     *
     *  @defaultValue `new Date()`
     */
    initialRange?: ADateRangePickerInitialRange;
    /**
     * Limit selection to a minimum number of days
     *
     *  @defaultValue `null`
     */
    maxDays?: number;
    /**
     * The minimum date allowed for selection
     */
    minDate?: Date;
    /**
     * The maximum date allowed for selection
     */
    maxDate?: Date;
  }
>;
