import {type ALoaderProps} from "./types";

declare const ALoader: <
  VARIANT extends ALoaderVariant,
  C extends React.ElementType
>(
  props: ALoaderProps<VARIANT, C>
) => JSX.Element;

export {ALoader};
