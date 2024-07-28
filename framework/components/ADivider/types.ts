import {Override} from "../../types";

export type ADividerRole = "separator" | "presentation";

export type ADividerProps = Override<
  React.ComponentPropsWithRef<"hr">,
  {
    /**
     * Toggles the light variant.
     */
    light?: boolean;
    /**
     * Toggles the lighter variant.
     */
    lighter?: boolean;
    /**
     * Toggles the strong variant.
     */
    strong?: boolean;
    /**
     * Sets the [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) role.
     */
    role?: ADividerRole;
  }
>;
