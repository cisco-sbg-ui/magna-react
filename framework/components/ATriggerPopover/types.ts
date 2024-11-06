import {ATriggerBaseProps} from "../ATriggerBase/types";

export type ATriggerPopoverProps = Omit<ATriggerBaseProps, "baseClass"> & {
  /** Set the container component
   *
   * @default ACardContainer
   */
  container?: React.ComponentType<any>;
};
