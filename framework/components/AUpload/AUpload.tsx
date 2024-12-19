import React, {useState} from "react";
import {useDropzone} from "react-dropzone";
import type {DropzoneState} from "react-dropzone";

import AAlert from "../AAlert";
import AButton from "../AButton";
import {ACardBasic} from "../ACard";
import AIcon from "../AIcon";
import {ALoader} from "../ALoader";
import AProgressbar from "../AProgressbar";
import type {AUploadProps, ExtendedFile} from "./types";

import "./AUpload.scss";
import classnames from "classnames";

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

const AUpload: React.FC<AUploadProps> = ({
  className,
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
  text = "Click or drag file to this area to upload",
  ...rest
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
        {...rest}
        {...getRootProps({
          className: classnames(
            "a-upload",
            {
              "a-upload--active": isDragActive
            },
            className
          )
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
                  <AIcon size={18}>trash</AIcon>
                </AButton>
              )}
            </div>
          </div>
        </div>
      )}

      {error && (
        <AAlert
          level="danger"
          dismissible
          onClose={handleCloseError}
          className="a-upload__alert">
          {error}
        </AAlert>
      )}
    </>
  );
};

AUpload.displayName = "AUpload";

export default AUpload;
