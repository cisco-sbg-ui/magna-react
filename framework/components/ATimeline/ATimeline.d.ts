import {
  type ATimelineProps,
  type ATimelineItemProps,
  type ATimelineItemTitleProps,
  type ATimelineItemBodyProps
} from "./types";

declare const ATimeline: (props: ATimelineProps) => JSX.Element;

declare const ATimelineItem: (props: ATimelineItemProps) => JSX.Element;

declare const ATimelineItemBody: (props: ATimelineItemBodyProps) => JSX.Element;

declare const ATimelineItemTitle: (
  props: ATimelineItemTitleProps
) => JSX.Element;

export {ATimeline, ATimelineItem, ATimelineItemBody, ATimelineItemTitle};
