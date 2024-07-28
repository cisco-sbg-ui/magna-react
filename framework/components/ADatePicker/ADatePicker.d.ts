import {type ADatePickerProps, type ADateRangePickerProps} from "./types";

declare const ADatePicker: (props: ADatePickerProps) => JSX.Element;

declare const ADateRangePicker: (props: ADateRangePickerProps) => JSX.Element;

declare const useADateRange: () => unknown;

declare const useGetADateRange: () => unknown;

export {ADatePicker, ADateRangePicker, useADateRange, useGetADateRange};
