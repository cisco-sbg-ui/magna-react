import {Override} from "../../types";

export type ASimpleTableProps = Override<
  React.ComponentPropsWithRef<"table">,
  {
    /**
     * Toggles the `altLinks` display variant. If the table has munknown links, use this to display them in the base text color.
     */
    altLinks?: boolean;
    /**
     * Toggles the `striped` display variant. Darkened backgrounds for alternate rows.
     */
    striped?: boolean;
    /**
     * Toggles the `tight` display variant. Smaller row heights.
     */
    tight?: boolean;
    /**
     * Toggles the `compact` display variant. Medium row heights.
     */
    compact?: boolean;
    /**
     * Toggles the `comfy` display variant. Large row heights.
     */
    comfy?: boolean;
    /**
     * Toggles the `spacious` display variant. Largest row heights.
     */
    spacious?: boolean;
    /**
     * Enable sticky header
     */
    stickyHeader?: boolean;
  }
>;
