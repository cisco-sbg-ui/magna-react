import {
  type APanelProps,
  type APanelBodyProps,
  type APanelFooterProps,
  type APanelHeaderProps,
  type APanelTitleProps
} from "./types";

declare const APanel: <C extends React.ElementType = "div">(
  props: APanelProps<C>
) => JSX.Element;

declare const APanelBody: (props: APanelBodyProps) => JSX.Element;

declare const APanelFooter: (props: APanelFooterProps) => JSX.Element;

declare const APanelHeader: (props: APanelHeaderProps) => JSX.Element;

declare const APanelTitle: (props: APanelTitleProps) => JSX.Element;

export {APanel, APanelBody, APanelFooter, APanelHeader, APanelTitle};
