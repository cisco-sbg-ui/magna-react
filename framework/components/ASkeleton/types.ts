import {Override} from "../../types";

export type ASkeletonProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Automatically add a header component
     */
    header?: boolean;
    /**
     * Set if nesting inside another ASkeleton
     */
    nested?: boolean;
    /**
     * Use with `nested` to display sub panels horizontally
     */
    horizontal?: boolean;
    /**
     * Show a shine keyframe animation to indicate loading
     *
     * @defaultValue `true`
     */
    animated?: boolean;
    /**
     * Use a <span> wrapper instead of `APanel`
     *
     * @defaultValue `false`
     */
    hidePanelBackdrop?: boolean;
  }
>;

export type ASkeletonBlockProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Set a custom height in px
     */
    height?: number;
  }
>;

export type ASkeletonHeaderProps = React.ComponentPropsWithRef<"div">;

export type ASkeletonTextProps = React.ComponentPropsWithRef<"div">;
