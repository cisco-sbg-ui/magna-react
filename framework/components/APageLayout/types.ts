import {Override} from "../../types";

export type APageContainerProps = React.ComponentPropsWithRef<"div">;

export type APageDescriptionProps = React.ComponentPropsWithRef<"div">;

export type APageHeaderProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Set to true if using a top line component such as ABreadcrumb
     *
     * @defaultValue `false`
     */
    hasTopLine?: boolean;
  }
>;

export type APageLabelProps = React.ComponentPropsWithRef<"div">;

export type APageLoaderSize = "small" | "medium" | "large";

export type APageLoaderProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Sets the size of the indicator.
     */
    size?: APageLoaderSize;
    /**
     * When used with `children`, renders the loader when true, `children`
     * when false.
     */
    loading?: boolean;
    /**
     * Center the loader with margin auto
     */
    center?: boolean;
  }
>;

export type APageTitleProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Title text. If not supplied and using code, use `h1` for the text
     */
    title?: string;
    /**
     * If not using `APageTitleContent`, set to true to wrap the content for size/alignment
     *
     *  @defaultValue `false`
     */
    withChildrenContainer?: boolean;
  }
>;

export type APageTitleContentProps = React.ComponentPropsWithRef<"div">;

export type APageTitleContentLeftProps = React.ComponentPropsWithRef<"div">;

export type APageTitleContentRightProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Set to true if using for right aligned content without APageTitleContentLeft
     */
    noLeftContent?: boolean;
  }
>;

export type APageTitleTextProps = React.ComponentPropsWithRef<"div">;
