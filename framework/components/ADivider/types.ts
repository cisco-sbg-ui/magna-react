import {Override} from "../../types";

export type ADividerRole = "separator" | "presentation";

export type ADividerProps = Override<
  React.ComponentPropsWithRef<"hr">,
  {
    /**
     * Toggles the light variant.
     *
     *  @defaultValue `false`
     */
    light?: boolean;
    /**
     * Toggles the strong variant.
     *
     *  @defaultValue `false`
     */
    strong?: boolean;
    /**
     * Toggles the vertical variant.
     *
     *  @defaultValue `false`
     */
    vertical?: boolean;
    /**
     * Sets the [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) role.
     *
     *  @defaultValue `separator`
     */
    role?: ADividerRole;
  }
>;
