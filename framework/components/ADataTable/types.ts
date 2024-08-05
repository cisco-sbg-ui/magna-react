import {Override} from "../../types";
import {ASimpleTableProps} from "../ASimpleTable/types";

export interface ADataTableExpandable {
  component: (...args: unknown[]) => unknown;
  isRowExpandable?: (...args: unknown[]) => unknown;
}

export interface ADataTableHeaders<KEY extends string, DATA> {
  name?: string | React.ReactElement<unknown>;
  properties?: Partial<HTMLTableCellElement> & {
    [dataAttribute: `data-${string}`]: string;
  };
  key?: KEY;
  className?: string;
  align?: "start" | "center" | "end";
  sortable?: boolean;
  sort?: ((...args: unknown[]) => unknown) | boolean;
  cell?: {
    className?: string;
    component?: (row: DATA) => unknown;
  };
  /**
   * Small column to show icons, small tags, and checkboxes
   */
  colWidthSm?: boolean;
}

export interface ADataTableSort<KEY> {
  key: KEY;
  direction: "asc" | "desc";
}

export type ADataTableProps<KEY extends string, DATA> = Override<
  ASimpleTableProps,
  {
    /**
     * Toggles the `altLinks` display variant. If the table has munknown links, use this to display them in the base text color.
     */
    altLinks?: boolean;
    /**
     * Configuration object for expandable table rows
     */
    expandable?: ADataTableExpandable;
    /**
     * Sets the table headers.
     */
    headers: ADataTableHeaders<KEY, DATA>[];
    /**
     * A function called when rendering each row to determine if
     * the row is selected. It is passed the associated row item.
     */
    isRowSelected?: (row: DATA) => unknown;
    /**
     * Sets the table data.
     */
    items: Array<DATA | {cellLoading: true}>;
    /**
     * Keyboard arrow support for table row selection
     *
     *     @defaultValue `null`
     */
    keyboardArrowSupport?: {
      onKeyboardSelect: (
        selection: {item: DATA; index: number},
        event: KeyboardEvent
      ) => void;
      activeRowFocusSelector?: string;
      initiallySelectedRowIndex?: number;
    };
    /**
     * A function called when the table row (<tr>) is clicked. It is passed
     * the associated row item as the first argument, and the native event
     * object as the second.
     */
    onRowClick?: (...args: unknown[]) => unknown;
    /**
     * Called when the user reaches the bottom of the data table for the first time.
     */
    onScrollToEnd?: (...args: unknown[]) => unknown;
    /**
     * Handles the `sort` event.
     */
    onSort?: (sort: ADataTableSort<KEY>) => void;
    /**
     * Sets the sort.
     */
    sort?: ADataTableSort<KEY>;
    /**
     * Disables third click of header sort icon to unset sorting.
     *
     * @defaultValue `false`
     */
    disableSortReset?: boolean;
    /**
     * Toggles the `striped` display variant. Darkened backgrounds for alternate rows.
     */
    striped?: boolean;
    /**
     * Toggles the `tight` display variant. Smaller row heights.
     */
    tight?: boolean;
    /**
     * Automatically truncate header text with ellipses when applicable
     */
    truncateHeaders?: boolean;
    /**
     * Enable sticky header
     *
     * @defaultValue `false`
     */
    stickyHeader?: boolean;
    /**
     * Disables pointer events on the table
     */
    disabled?: boolean;
  }
>;
