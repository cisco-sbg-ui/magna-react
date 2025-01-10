import { ReactNode } from 'react';
import { AStepProps } from '../AStepper/types';

export interface AStepperCardContentProps extends React.HTMLProps<HTMLDivElement> {
  className?: string; // String representing class names to be passed to component container
  children?: React.ReactNode; // ReactNode to be rendered inside of AStepperCardContent
  contentFooter?: React.ReactNode; // ReactNode to be rendered inside of AStepperCardContent footer
  isNextButtonDisabled?: boolean; // Boolean to disable next button
  nextButtonText?: string; // String representing text for next button
  subtitle?: string; // String subtitle of card content area
  title?: string; // String title of card content area
  onCancel?: () => void; // Callback to cancel action
  onBack?: () => void; // Callback to go back
  onNext?: () => void; // Callback to go to next step or submit
}
export type AStepperCardProps = {
  className?: string;  // String representing class names to be passed to component container
  active: number;      // Mark step as active
  children: ReactNode; // ReactNode to be rendered inside of AStepperCard
  items: AStepProps[]; // Array of steps inside of AStepper
  stepProps?: AStepProps; // AStep accepted props to be passed to AStep
}
