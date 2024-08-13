import {Override} from "../../types";

export type APaginatorProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Handles updates to the current page.
     */
    onPageChange?: (newPage: number) => void;
    /**
     * Handles the submission of results per page values.
     */
    onResultsPerPageChange?: (resultsPerPage: number) => void;
    /**
     * Sets the current page. APaginator indexes at 0 which differs from APagination components.
     *
     * @defaultValue `0`
     */
    page?: number;
    /**
     * Sets the results per page.
     *
     * @defaultValue `30`
     */
    resultsPerPage?: number;
    /**
     * Show page number buttons between traversal buttons
     *
     * @defaultValue `true`
     */
    showPageNumbers?: boolean;
    /**
     * Shows the current result subset and total count
     *
     * @defaultValue `true`
     */
    showPageDetail?: boolean;
    /**
     * Show result count (useful if rows selector is not shown)
     *
     *  @defaultValue `false`
     */
    showResultCount?: boolean;
    /**
     * Show the set page result selector. If false, shows the current page number as text.
     *
     * @defaultValue `true`
     */
    showResultSelector?: boolean;
    /**
     * Sets the total number or results if `resultsPerPage` is defined, otherwise sets the total number of pages.
     */
    total?: number;
    /**
     * Set all actionable pagination elements to disabled
     */
    disabled?: boolean;
  }
>;
