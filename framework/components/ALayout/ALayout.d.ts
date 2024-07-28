import {
  type AColProps,
  type AContainerProps,
  type ARow,
  type ASpacerProps
} from "./types";

declare const ACol: (props: AColProps) => JSX.Element;

declare const AContainer: (props: AContainerProps) => JSX.Element;

declare const ARow: (props: ARowProps) => JSX.Element;

declare const ASpacer: (props: ASpacerProps) => JSX.Element;

export {ACol, AContainer, ARow, ASpacer};
