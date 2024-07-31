import {Override} from "../../types";

export type ATimelineProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Toggles timeline item content vertical alignment with the icon.
     */
    centered?: boolean;
  }
>;

export type ATimelineItemVariant =
  | "default"
  | "success"
  | "info"
  | "warning"
  | "danger";

export type ATimelineItemProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Time of event
     */
    time?: React.ReactNode;
    /**
     * Item type variation
     */
    variant: ATimelineItemVariant;
  }
>;

export type ATimelineItemBodyProps = React.ComponentPropsWithRef<"div">;

export type ATimelineItemTitleProps = React.ComponentPropsWithRef<"div">;
