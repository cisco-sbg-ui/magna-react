import {Override} from "../../types";

type AKeyValueSize = "small" | "medium" | "large";

export type AKeyValueProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Adds a help tooltip to the key field
     */
    tooltip?: React.ReactNode;
    /**
     * Sets the icon of the help tooltip
     */
    icon?: string;
    /**
     * Sets the label for the key field
     */
    label?: React.ReactNode;
    /**
     * Sets the font size
     */
    size?: AKeyValueSize;
  }
>;
