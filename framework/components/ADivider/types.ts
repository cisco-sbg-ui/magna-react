import {Override} from "../../types";

export type ADividerRole = "separator" | "presentation";

export type ADividerProps = Override<
  React.ComponentPropsWithRef<"hr">,
  {
    /**
     * Toggles the light variant.
     *
     *  @defaultValue `false`
     *  @deprecated There is no longer a light variant in design - convert to default or strong variant.
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
