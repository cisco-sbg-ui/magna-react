import {
  type AListProps,
  type AListItemProps,
  type AListItemActionProps,
  type AListItemAvatarProps,
  type AListItemContentProps,
  type AListItemGroupProps
} from "./types";

declare const AList: <C extends React.ElementType = "div">(
  props: AListProps<C>
) => JSX.Element;

declare const AListItem: <C extends React.ElementType = "div">(
  props: AListItemProps<C>
) => JSX.Element;

declare const AListItemAction: (props: AListItemActionProps) => JSX.Element;

declare const AListItemAvatar: (props: AListItemAvatarProps) => JSX.Element;

declare const AListItemContent: (props: AListItemContentProps) => JSX.Element;

declare const AListItemDivider: (props: AListItemContentProps) => JSX.Element;

declare const AListItemGroup: (props: AListItemGroupProps) => JSX.Element;

declare const AListItemSubtitle: (props: AListItemContentProps) => JSX.Element;

declare const AListItemTitle: (props: AListItemContentProps) => JSX.Element;

export {
  AList,
  AListItem,
  AListItemAction,
  AListItemAvatar,
  AListItemContent,
  AListItemDivider,
  AListItemGroup,
  AListItemSubtitle,
  AListItemTitle
};
