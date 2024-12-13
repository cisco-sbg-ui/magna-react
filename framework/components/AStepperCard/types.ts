import { ReactNode } from 'react';
import { AStepProps } from '../AStepper/types';

export type AStepperCardProps = {
  className?: string;  // String representing class names to be passed to component container
  active: number;      // Mark step as active
  children: ReactNode;
  items: AStepProps[]; // Array of steps inside of AStepper
  [key: string]: any;  // To accommodate any additional props (rest parameter)
}