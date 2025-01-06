import type {DropzoneOptions} from "react-dropzone";
import type {Override} from "../../types";

export type AUploadProps = Override<
  React.ComponentPropsWithoutRef<"div">,
  {
    /**
     * Options forwarded to the `useDropzone` hook from `react-dropzone`
     * @docs - https://react-dropzone.js.org/
     */
    dropzoneProps?: DropzoneOptions;
    /**
     * Controls loading UI state of the file
     */
    loading?: boolean;
    /**
     * Callback for when the error alert is closed
     */
    onCloseError?: () => void;
    /**
     * Callback for when the file is deleted/removed
     */
    onFileDelete?: (file: File | null) => void;
    /**
     * A percentage of progress, used for loading UI state
     */
    progress?: number;
    /**
     * The subheading beneath primary text
     */
    supplementalText?: string;
    /**
     * The primary text of the dropzone
     */
    text?: string;
  }
>;

export interface ExtendedFile extends File {
  preview: string;
  image: boolean;
  content?: string;
}
