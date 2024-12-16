import React, {useState} from "react";
import {useDropzone} from "react-dropzone";
import type {DropzoneOptions, DropzoneState} from "react-dropzone";

import AAlert from "../AAlert";
import AButton from "../AButton";
import {ACardBasic} from "../ACard";
import AIcon from "../AIcon";
import {ALoader} from "../ALoader";
import AProgressbar from "../AProgressbar";

import "./AUpload.scss";
import classnames from "classnames";

interface AUploadProps {
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

const AUpload: React.FC<AUploadProps> = ({
  dropzoneProps: {
    onDrop,
    onDropAccepted,
    onDropRejected,
    ...restDropzoneProps
  } = {},
  loading,
  onCloseError = () => {},
  onFileDelete = () => {},
  progress,
  supplementalText,
  text = "Click or drag file to this area to upload"
}) => {
  const [error, setError] = useState<string | null>(null);
  const [file, setFile] = useState<ExtendedFile | null>(null);
  const {getInputProps, getRootProps, isDragActive}: DropzoneState =
    useDropzone({
      maxFiles: 1,
      multiple: false,
      onDrop: (acceptedFileList, rejectedFileList, ev) => {
        onDrop?.(acceptedFileList, rejectedFileList, ev);
        setError(null);
        setFile(null);
      },
      onDropAccepted: (fileList, ev) => {
        onDropAccepted?.(fileList, ev);
        const droppedFile = fileList[0];
        if (droppedFile) {
          setFile(extendDroppedFileInfo(droppedFile) ?? null);
        } else {
          setError("File upload failed. Please try again.");
        }
      },
      onDropRejected: (fileList, ev) => {
        onDropRejected?.(fileList, ev);
        const droppedFile = fileList[0];
        if (droppedFile) {
          setError(
            droppedFile?.errors[0]?.message ??
              "File upload failed. Please try again."
          );
        }
      },
      ...restDropzoneProps
    });

  console.log("file:", file);

  function handleDelete() {
    onFileDelete?.(file);
    setFile(null);
  }

  function handleCloseError() {
    onCloseError?.();
    setError(null);
  }

  return (
    <>
      <ACardBasic
        {...getRootProps({
          className: classnames("a-upload", {
            "a-upload--active": isDragActive
          })
        })}>
        <div className="a-upload__interior">
          <>
            <input {...getInputProps()} />
            <AIcon size={24}>upload-simple</AIcon>
            {!!text && <p className="a-upload__text">{text}</p>}
            {!!supplementalText && (
              <p className="a-upload__supplemental-text">{supplementalText}</p>
            )}
          </>
        </div>
      </ACardBasic>

      {file && (
        <div className="a-upload__files">
          <div
            className={classnames("a-upload__file", {
              "a-upload__file--loading": loading
            })}>
            <div className="a-upload__file-attachment">
              {file.type.startsWith("image") ? (
                <img
                  src={file.preview}
                  alt={file.name}
                  height={18}
                  width={18}
                  onError={(e) => {
                    e.currentTarget.parentNode?.removeChild(e.currentTarget);
                  }}
                />
              ) : (
                <AIcon size={18}>paperclip</AIcon>
              )}
              <span className="a-upload__filename">{file.name}</span>
            </div>
            <div className="a-upload__file-actions">
              {loading ? (
                <>
                  {progress ? (
                    <AProgressbar percentage={progress} />
                  ) : (
                    <ALoader variant="spinner" size="small" />
                  )}
                </>
              ) : (
                <AButton tertiaryAlt onClick={handleDelete}>
                  <AIcon size={18}>trash-simple</AIcon>
                </AButton>
              )}
            </div>
          </div>
        </div>
      )}

      {error && (
        <AAlert
          level="danger"
          dismissable={true}
          onClose={handleCloseError}
          className="a-upload__alert">
          {error}
        </AAlert>
      )}
    </>
  );
};

interface ExtendedFile extends File {
  preview: string;
  image: boolean;
  content?: string;
}

function extendDroppedFileInfo(file?: File): ExtendedFile | undefined {
  if (file) {
    const reader = new FileReader();
    const extendedDroppedFile: ExtendedFile = {
      ...file,
      image: file.type.startsWith("image"),
      name: file.name,
      // a Blob URL of the file, needed to show an image preview
      preview: URL.createObjectURL(file),
      type: file.type
    };

    reader.onload = (e) => {
      extendedDroppedFile.content = e.target?.result as string;
    };

    reader.readAsText(file);

    return extendedDroppedFile;
  }
}

AUpload.displayName = "AUpload";

export default AUpload;
