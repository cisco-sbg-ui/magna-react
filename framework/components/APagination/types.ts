import {Override} from "../../types";

export type APaginationOnNext = ((...args: unknown[]) => unknown) | boolean;

export type APaginationOnPrevious = ((...args: unknown[]) => unknown) | boolean;

export type APaginationProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Sets numeric displays to be locale formatted.
     */
    localeFormatting?: boolean;
    /**
     * Handles the activation of the `Next` button when the number of pages isn't determined.
     */
    onNext?: APaginationOnNext;
    /**
     * Handles updates to the current page.
     */
    onPageChange?: (newPage: number) => void;
    /**
     * Handes the activation of the `Previous` button when the number of pages isn't determined.
     */
    onPrevious?: APaginationOnPrevious;
    /**
     * Handles the submission of results per page values.
     */
    onResultsPerPageChange?: (resultsPerPage: number) => void;
    /**
     * Sets the current page.
     */
    page?: number;
    /**
     * Sets the results per page.
     */
    resultsPerPage?: number;
    /**
     * Toggles whether text is shown on the Previous/Next buttons in the button group view.
     */
    showText?: boolean;
    /**
     * Sets the total number or results if `resultsPerPage` is defined, otherwise sets the total number of pages.
     */
    total?: number;
    /**
     * Show the jump to first and jump to last buttons.
     */
    showFirstLastButtons?: boolean;
    /**
     * Show the set page text input. If false, shows the current page number as text.
     */
    showSetPageInput?: boolean;

    /**
     * NOTE: dirty fix
     * The disable prop is passed down to the wrapping `div` element of the component.
     * Normally this wouldn't have any effect but in our app we're using a global css rule
     * to disable pointer events on any element with `disabled` prop.
     */
    disabled?: boolean;
  }
>;
