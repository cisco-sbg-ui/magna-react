import {
  type AActivityTimelineProps,
  type AActivityTimelineItemProps,
  type AActivityTimelineItemTitleProps
} from "./types";
declare const AActivityTimeline: (props: AActivityTimelineProps) => JSX.Element;
declare const AActivityTimelineItem: (
  props: AActivityTimelineItemProps
) => JSX.Element;
declare const AActivityTimelineItemTitle: (
  props: AActivityTimelineItemTitleProps
) => JSX.Element;

export {AActivityTimeline, AActivityTimelineItem, AActivityTimelineItemTitle};
