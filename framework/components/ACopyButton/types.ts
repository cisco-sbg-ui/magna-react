import {Override} from "../../types";
import {AButtonProps} from "../AButton/types";

export type ACopyButtonProps<C extends React.ElementType> = Override<
  AButtonProps<C>,
  {
    /**
     * Component id
     */
    id?: string;
    /**
     * Value to be copied on click
     */
    value?: string;
    /**
     * Identifier of the temporary container for the copy function
     */
    containerId?: string;
    /**
     * Tertiary button style
     *
     * @defaultValue `true`
     */
    tertiary?: boolean;
    /**
     * TertiaryAlt button style
     */
    tertiaryAlt?: boolean;
    /**
     * Show the default label as per design guidelines
     *
     * @defaultValue `true`
     */
    defaultLabel?: boolean;
    /**
     * Delay in milliseconds before the message is closed
     *
     * @defaultValue `3000`
     */
    messageCloseDelay?: number;
  }
>;
