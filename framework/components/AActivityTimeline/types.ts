import type React from "react";
import type {Override} from "../../types";

export type AActivityTimelineProps = Override<
  React.ComponentPropsWithRef<"ol" | "ul">,
  {
    /**
     * Indicates that the timeline has items that are in a random order, i.e., not sorted.
     * This ultimately determines if the timeline renders as a <ol> or <ul>.
     * The default is an ordered list.
     *
     * @defaultValue `false`
     */
    hasUnorderedItems?: boolean;
    /**
     * Adds numbered timeline and associated positioning to content.
     * If `hasUnorderedItems` is set to `true`, this prop is ignored.
     * For paginated lists, pass the number provided in paginated data to `itemNum` in `AActivityTimelineItem`
     */
    numbered?: boolean;
  }
>;

export type AActivityTimelineItemStatus =
  | "neutral"
  | "incomplete"
  | "progress"
  | "complete"
  | "error";

export type AActivityTimelineItemProps = Override<
  React.ComponentPropsWithRef<"li">,
  {
    /**
     * Determines if the timeline items renders as a collapsible
     * accordion. To set the initial collapsed state of the component,
     * use the `defaultCollapsed` prop.
     *
     * @defaultValue `false`
     */
    isCollapsible?: boolean;

    /**
     * Determines if the timeline item is initially collapsed
     * when rendering the component in uncontrolled mode. Any
     * subsequent toggles of the timeline item are therefore
     * handled by the internals of this component.
     */
    defaultCollapsed?: boolean;

    /**
     * Determines if the timeline item is collapsed. This gives
     * you full control of the collapsed state of the timeline
     * item.
     */
    isCollapsed?: boolean;

    /**
     * A callback function for when the collapse/expand button
     * of the timeline item is being clicked. If you are controlling
     * the state of the component (i.e. passing `isCollapsed`), then
     * this is the right place to toggle said state.
     */
    onToggle?: (...args: unknown[]) => unknown;

    /**
     * Determines which icon to render in the timeline item's bullet.
     *
     * If an invalid status is passed, then the "neutral" status is used
     * as a fallback.
     *
     * @defaultValue `"neutral"`
     */
    status?: AActivityTimelineItemStatus;

    /**
     * The main title content. Can be a string or any other valid React Element.
     */
    title?: React.ReactNode;

    /**
     * The time of the timeline item that is rendered underneath the bolded
     * title text. Can be a string or any other valid React Element.
     */
    time?: React.ReactNode;

    /**
     * Determines if the item should have a divider at the bottom.
     *
     * If not explicitly passed, then the divider is automatically rendered
     * for collapsible items (unless it is the last one in the list.)
     */
    withDivider?: boolean;
    /** Option to pass number to numbered list. Useful for paginated data. */
    itemNum?: number | string;
    /**
     * Determines if the item should have the vertical connector underneath the
     * timeline item bullet circle.
     *
     * If not explicitly passed, then every item gets a connector except for the
     * very last one in the list.
     *
     * Passing this prop can be useful if you're rendering a paginated list of data
     * and the last item in the user's current view of the list may not actually be
     * the very last item in the list (since it is paginated). In such cases, you
     * would want to show the connector to indicate that the timeline is still ongoing.
     * For this, you can explicitly pass `withConnector={true}` to guarantee it appears.
     */
    withConnector?: boolean;
  }
>;

export type AActivityTimelineItemTitleProps = Override<
  React.ComponentPropsWithRef<"div">,
  {}
>;

export type AActivityTimelineListItemProps = Override<
  React.ComponentPropsWithRef<"li">,
  {
    icon?: React.ReactNode;
    /**
     * Determines which icon to render in the timeline item's bullet.
     *
     * If an invalid status is passed, then the "neutral" status is used
     * as a fallback.
     *
     * @defaultValue `"neutral"`
     */
    status?: AActivityTimelineItemStatus;
    /**
     * Determines if the item should have the vertical connector underneath the
     * timeline item bullet circle.
     *
     * If not explicitly passed, then every item gets a connector except for the
     * very last one in the list.
     *
     * Passing this prop can be useful if you're rendering a paginated list of data
     * and the last item in the user's current view of the list may not actually be
     * the very last item in the list (since it is paginated). In such cases, you
     * would want to show the connector to indicate that the timeline is still ongoing.
     * For this, you can explicitly pass `withConnector={true}` to guarantee it appears.
     */
    withConnector?: boolean;
  }
>;
