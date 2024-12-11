import PropTypes from "prop-types";
import React from "react";
import {useDropzone} from "react-dropzone";

import AIcon from "../AIcon";
import AButton from "../AButton";
import {ACardBasic} from "../ACard";
import {ALoader} from "../ALoader";
import AProgressBar from "../AProgressBar";

import "./AUpload.scss";
import classnames from "classnames";

const AUpload = ({
  accept,
  loading,
  onUpload = () => {},
  // onUploadRejected,
  // onUploadSuccess,
  progress,
  // size = "md",
  supplementalText,
  text = "Click or drag file to this area to upload"
  // validate,
}) => {
  const [file, setFile] = React.useState(null);
  const {
    getInputProps,
    getRootProps,
    //isDragAccept, // TODO pending design
    isDragActive
    //isDragReject  // TODO pending design
  } = useDropzone({
    accept,
    multiple: false,
    onDrop: onUpload,
    // TODO validator
    // validate: (file) => { },
    onDropAccepted: (fileList) => {
      const droppedFile = fileList[0];
      const reader = new FileReader();

      // Extend the file object with preview and content
      let extendedDroppedFile = {
        ...droppedFile,
        image: droppedFile.type.startsWith("image"),
        // removes the leading `./` from the path
        name: droppedFile.path.slice(2),
        // a Blob URL of the file, needed to show an image preview
        preview: URL.createObjectURL(droppedFile),
        type: droppedFile.type
      };

      reader.onload = (e) => {
        // the text or binary content of the file
        extendedDroppedFile.content = e.target.result;
      };

      reader.readAsText(droppedFile);

      console.log("extendedDroppedFile:", extendedDroppedFile);
      setFile(extendedDroppedFile);
    },
    onDropRejected: (fileList, ev) => {
      const droppedFile = fileList[0];
      if (fileList.length > 0) {
        console.log("Drop was rejected. Too many files!");
      } else if (droppedFile.size > 1024) {
        console.log("file is too dang big bobby");
      } else {
        console.error("Drop was rejected!", ev);
      }
    }
  });

  function handleDelete() {
    setFile(null);
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
                    <AProgressBar
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
    </>
  );
};

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
