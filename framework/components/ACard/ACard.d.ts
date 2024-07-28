import {
  type ACardBasicProps,
  type ACardContainerProps,
  type ACardContentProps,
  type ACardFooterProps,
  type ACardHeaderProps,
  type ACardItemProps,
  type ACardSubTitleProps,
  type ACardTitleProps
} from "./types";

declare const ACardBasic: <C extends React.ElementType = "div">(
  props: ACardBasicProps<C>
) => JSX.Element;

declare const ACardContainer: <C extends React.ElementType = "div">(
  props: ACardContainerProps<C>
) => JSX.Element;

declare const ACardContent: (props: ACardContentProps) => JSX.Element;

declare const ACardFooter: (props: ACardFooterProps) => JSX.Element;

declare const ACardHeader: (props: ACardHeaderProps) => JSX.Element;

declare const ACardItem: (props: ACardItemProps) => JSX.Element;

declare const ACardSubTitle: (props: ACardSubTitleProps) => JSX.Element;

declare const ACardTitle: (props: ACardTitleProps) => JSX.Element;

export {
  ACardBasic,
  ACardContainer,
  ACardContent,
  ACardFooter,
  ACardItem,
  ACardSubTitle,
  ACardTitle
};
