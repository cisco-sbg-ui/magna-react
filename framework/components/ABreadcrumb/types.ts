import {Override} from "../../types";

export type ABreadcrumbItems<C extends React.ElementType> = {
  component?: C;
  content?: React.ReactNode;
  contentProps?: React.ComponentProps<C>;
};

export type ABreadcrumbProps<C extends React.ElementType> = Override<
  React.ComponentPropsWithRef<"ul">,
  {
    /**
     * Sets a custom breadcrumb template.
     */
    item?: (item: ABreadcrumbItems<C>) => JSX.Element;
    /**
     * Sets the array of breadcrumb data objects.
     */
    items?: ABreadcrumbItems<C>[];
  }
>;
