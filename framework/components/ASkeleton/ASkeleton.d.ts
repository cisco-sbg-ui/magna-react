import {
  type ASkeletonProps,
  type ASkeletonBlockProps,
  type ASkeletonHeaderProps,
  type ASkeletonTextProps
} from "./types";

declare const ASkeleton: (props: ASkeletonProps) => JSX.Element;

declare const ASkeletonBlock: (props: ASkeletonBlockProps) => JSX.Element;

declare const ASkeletonHeader: (props: ASkeletonHeaderProps) => JSX.Element;

declare const ASkeletonText: (props: ASkeletonTextProps) => JSX.Element;

export {ASkeleton, ASkeletonHeader, ASkeletonBlock, ASkeletonText};
