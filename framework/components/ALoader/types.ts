import {AProgressbarProps} from "../AProgressbar/types";
import {ASpinnerProps} from "../ASpinner/types";

type ALoaderVariant = "dot" | "spinner" | "progressbar";

type ALoaderSize = "small" | "medium" | "large";

type ALoaderPlacement = "top" | "bottom" | "left" | "right";

interface ALoaderGenericVariantProps<
  VARIANT extends ALoaderVariant,
  C extends React.ElementType
> {
  /**
   * Indicator type to use in the loader. Can be ADotLoader, ASpinLoader, or AProgressbar.
   */
  variant: VARIANT;
  /**
   * Props to pass to the indicator
   *
   * @defaultValue `{}`
   */
  indicatorProps?: VARIANT extends "spinner"
    ? ASpinnerProps<C>
    : VARIANT extends "progressbar"
    ? AProgressbarProps
    : never;
  /**
   * Sets the size of the indicator.
   */
  size?: ALoaderSize;
  /**
   * Place the indicator around the children. Has no effect if `children` is undefined.
   *
   * @defaultValue "top"
   */
  placement?: ALoaderPlacement;
}

export type ALoaderProps<
  VARIANT extends ALoaderVariant,
  C extends React.ElementType
> = React.ComponentPropsWithRef<"div"> & ALoaderGenericVariantProps<VARIANT, C>;
