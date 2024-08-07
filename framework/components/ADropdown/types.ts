import {Override} from "../../types";
import {AButtonProps} from "../AButton/types";

export type ADropdownProps<C extends React.ElementType> = Override<
  AButtonProps<C>,
  {
    /**
     * Toggles the `disabled` state.
     */
    disabled?: boolean;
    /**
     * Signifies an icon-only button.
     */
    icon?: boolean;
    /**
     * Toggles the `primary` style variant. If no style variant is chosen, `primary` is applied.
     */
    primary?: boolean;
    /**
     * Toggles the `secondary` style variant.
     */
    secondary?: boolean;
    /**
     * Toggles the `tertiary` style variant.
     */
    tertiary?: boolean;
    /**
     * Destructive - button for destructive action, should be used with confirm dialog/modal when clicked
     */
    destructive?: boolean;
    /**
     * Apply Magnetic small size styles vs only re-skin styles, defaults to false
     */
    small?: boolean;
    /**
     * Apply Magnetic medium size styles vs only re-skin styles, defaults to false
     */
    medium?: boolean;
    /**
     * Automatically add a loading spinner to the button
     */
    loading?: boolean;
    /**
     * Removes padding on any button, defaults to false
     */
    noPadding?: boolean;
    /**
     * Title of dropdown can be string or react element
     */
    title?: React.ReactNode;
    /**
     * Test id
     */
    "data-testid"?: string;
  }
>;
