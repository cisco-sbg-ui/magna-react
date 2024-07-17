import {Override} from "../../types";

export type AAccordionProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    bordered?: boolean;
  }
>;

export type AAccordionHeaderTitleProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Toggles the chevron.
     */
    chevron?: boolean;
    /**
     * Sets an alternative collapse icon.
     */
    collapseIcon?: string;
    /**
     * Sets an alternative expand icon.
     */
    expandIcon?: string;
    /**
     * Decide where the icon will be placed in relation to the title.
     * Default is "right".
     */
    iconPlacement?: "right" | "left";

    onBlur?: React.FocusEventHandler<HTMLDivElement>;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    onFocus?: React.FocusEventHandler<HTMLDivElement>;
    onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
  }
>;

export type AAccordionPanelProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Sets the default collapsed state.
     */
    collapsed?: boolean;
    panelKey?: string;
    /**
     * Handles the expand/collapse toggle event.
     */
    onToggle?: () => void;
  }
>;
