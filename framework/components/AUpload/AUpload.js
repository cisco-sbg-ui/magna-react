import PropTypes from "prop-types";
import React, {useState} from "react";
import {useDropzone} from "react-dropzone";

import AAlert from "../AAlert";
import AButton from "../AButton";
import {ACardBasic} from "../ACard";
import AIcon from "../AIcon";
import {ALoader} from "../ALoader";
import AProgressbar from "../AProgressbar";

import "./AUpload.scss";
import classnames from "classnames";

const AUpload = ({
  loading,
  onCloseError = () => {},
  onFileDelete = () => {},
  progress,
  supplementalText,
  text = "Click or drag file to this area to upload",
  dropzoneProps: {
    onDrop,
    onDropAccepted,
    onDropRejected,
    ...restDropzoneProps
  } = {}
}) => {
  const [error, setError] = useState(null);
  const [file, setFile] = useState(null);
  const {getInputProps, getRootProps, isDragActive} = useDropzone({
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
      setFile(extendDroppedFileInfo(droppedFile));
    },
    onDropRejected: (fileList, ev) => {
      onDropRejected?.(fileList, ev);
      const droppedFile = fileList[0];
      setError(droppedFile.errors[0]?.message);
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
        {...getRootProps({
          className: classnames("a-upload", {
            "a-upload--active": isDragActive
          })
        })}
      >
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
            })}
          >
            <div className="a-upload__file-attachment">
              {file.type.startsWith("image") ? (
                <img
                  src={file.preview}
                  alt={file.name}
                  height={18}
                  width={18}
                  onError={(e) => {
                    e.target.parentNode.removeChild(e.target);
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
                    <AProgressbar
                      percentage={progress}
                      showPercentage={false}
                    />
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
          className="a-upload__alert"
        >
          {error}
        </AAlert>
      )}
    </>
  );
};

function extendDroppedFileInfo(file) {
  const reader = new FileReader();
  let extendedDroppedFile = {
    ...file,
    image: file.type.startsWith("image"),
    // removes the leading `./` from the path
    name: file.path.slice(2),
    // a Blob URL of the file, needed to show an image preview
    preview: URL.createObjectURL(file),
    type: file.type
  };

  reader.onload = (e) => {
    // the text or binary content of the file
    extendedDroppedFile.content = e.target.result;
  };

  reader.readAsText(file);

  return extendedDroppedFile;
}

// function collapseErrors(fileRejections = []) {
//   console.log("collapseErrors - fileRejections:", fileRejections);
//   const errorRecord = {};
//   fileRejections.forEach((fileRejection) => {
//     const {errors = []} = fileRejection;
//     errors.forEach((error = {}) => {
//       const {code, message} = error;
//       errors[code] = message;
//     });
//   });
//   console.log("collapseErrors - collapsedErrors:", Object.values(errorRecord));
//   return Object.values(errorRecord);
// }

AUpload.propTypes = {
  /**
   * A string or object of the accepted MIME types and extensions
   */
  accept: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.string)),
  /**
   * Whether the upload is in a loading state.
   */
  loading: PropTypes.bool,
  /**
   * Callback function when the upload is successful.
   * @unimplemented
   */
  onUploadAccepted: PropTypes.func,
  /**
   * Callback function when the upload fails, ex. it doesn't match `accept`
   * @unimplemented
   */
  onUploadRejected: PropTypes.func,
  /**
   * Displays a progress bar. This is the percentage.
   * @unimplemented
   */
  progress: PropTypes.number,
  /**
   * The size of the thing.
   * @unimplemented
   */
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  /**
   * Additional text to display under the `text`. Describes the upload requirements.
   */
  supplementalText: PropTypes.node,
  /**
   * The primary text to display. Describes the interactivity.
   */
  text: PropTypes.string
};

AUpload.displayName = "AUpload";

export default AUpload;
