import {
  type APageContainerProps,
  type APageDescriptionProps,
  type APageHeaderProps,
  type APageLabelProps,
  type APageLoaderProps,
  type APageTitleProps,
  type APageTitleContentProps,
  type APageTitleContentLeftProps,
  type APageTitleContentRightProps,
  type APageTitleTextProps
} from "./types";

declare const APageContainer: (
  props: React.PropsWithChildren<APageContainerProps>
) => JSX.Element;

declare const APageDescription: (
  props: React.PropsWithChildren<APageDescriptionProps>
) => JSX.Element;

declare const APageHeader: (
  props: React.PropsWithChildren<APageHeaderProps>
) => JSX.Element;

declare const APageLabel: (
  props: React.PropsWithChildren<APageLabelProps>
) => JSX.Element;

declare const APageLoader: (
  props: React.PropsWithChildren<APageLoaderProps>
) => JSX.Element;

declare const APageTitle: (
  props: React.PropsWithChildren<APageTitleProps>
) => JSX.Element;

declare const APageTitleContent: (
  props: React.PropsWithChildren<APageTitleContentProps>
) => JSX.Element;

declare const APageTitleContentLeft: (
  props: React.PropsWithChildren<APageTitleContentLeftProps>
) => JSX.Element;

declare const APageTitleContentRight: (
  props: React.PropsWithChildren<APageTitleContentRightProps>
) => JSX.Element;

declare const APageTitleText: (
  props: React.PropsWithChildren<APageTitleTextProps>
) => JSX.Element;

export {
  APageContainer,
  APageDescription,
  APageHeader,
  APageLabel,
  APageLoader,
  APageTitle,
  APageTitleContent,
  APageTitleContentLeft,
  APageTitleContentRight,
  APageTitleText
};
