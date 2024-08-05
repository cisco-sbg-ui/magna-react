import {Override} from "../../types";

export type AColCols =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12"
  | "auto";

export type AColXs =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";

export type AColSm =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";

export type AColMd =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";

export type AColLg =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";

export type AColXl =
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10"
  | "11"
  | "12";

export type AColProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Sets the number of columns to span.
     */
    cols?: AColCols;
    /**
     * Sets the number of columns to span at the xs breakpoint.
     */
    xs?: AColXs;
    /**
     * Sets the number of columns to span at the sm breakpoint.
     */
    sm?: AColSm;
    /**
     * Sets the number of columns to span at the md breakpoint.
     */
    md?: AColMd;
    /**
     * Sets the number of columns to span at the lg breakpoint.
     */
    lg?: AColLg;
    /**
     * Sets the number of columns to span at the xl breakpoint.
     */
    xl?: AColXl;
  }
>;

export type AContainerProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Removes the maximum width viewpoint restriction.
     *
     * @defaultValue `false`
     */
    fluid?: boolean;
  }
>;

export type ARowProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    /**
     * Removes gutters.
     *
     * @defaultValue `false`
     */
    noGutters?: boolean;
  }
>;

export type ASpacerProps = React.ComponentPropsWithRef<"div">;
