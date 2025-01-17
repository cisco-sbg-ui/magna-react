import type {AButtonProps, Override} from "../../types";
import type {AStepProps} from "../AStepper/types";

export type AStepperCardContentProps<C extends React.ElementType = "div"> =
  Override<
    React.ComponentPropsWithRef<C>,
    {
      /**
       * Button props to be spread in the back button
       */
      backButtonProps?: AButtonProps<C> | AButtonProps<C>[];
      /**
       * Button props to be spread in the cancel button
       */
      cancelButtonProps?: AButtonProps<C> | AButtonProps<C>[];
      contentFooter?: React.ReactNode; // ReactNode to be rendered inside of AStepperCardContent footer
      /**
       * String representing text for next button
       * @defaultValue `"Next"`
       */
      nextButtonText?: string;
      /**
       * Props to be spread in the "next" button
       */
      nextButtonProps?: AButtonProps<C> | AButtonProps<C>[];
      subtitle?: string; // String subtitle of card content area
      title?: string; // String title of card content area
    }
  >;

export type AStepperCardProps = Override<
  React.ComponentPropsWithRef<"div">,
  {
    active: number; // Mark step as active
    steps: AStepProps[]; // Array of steps inside of AStepper and spreads in props to AStep
  }
>;
