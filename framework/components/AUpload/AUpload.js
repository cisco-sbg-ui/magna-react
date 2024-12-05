import PropTypes from "prop-types";
import React from "react";
import {useDropzone} from "react-dropzone";

import AIcon from "../AIcon";
import {ACardBasic} from "../ACard";
import {ALoader} from "../ALoader";

import "./AUpload.scss";
import classnames from "classnames";

const AUpload = ({
  accept,
  loading = false,
  // progress,
  onUpload = () => {},
  // onUploadSuccess,`accept`
  // onUploadRejected,
  // size = "md",
  supplementalText,
  text = "Click or drag file to this area to upload"
}) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    onDropAccepted: (fileList, event) => {
      console.log("Drop was accepted!");

      // TODO: Some actual UI behavior here, pending design
      const droppedFile = fileList[0];
      const reader = new FileReader();
      // extend the file object with preview and content
      let extendedDroppedFile = {
        ...droppedFile,
        // a Blob URL of the file, needed to show an image preview
        preview: URL.createObjectURL(droppedFile)
      };

      console.log("event:", event);
      reader.onload = (e) => {
        // the text or binary content of the file
        extendedDroppedFile.content = e.target.result;
      };

      reader.readAsText(droppedFile);

      console.log("extendedDroppedFile:", extendedDroppedFile);
      setFile(extendedDroppedFile);
    },
    onDropRejected: () => {
      console.log("Drop was rejected. Do something useful here.");
    }
  });

  return (
    <ACardBasic
      {...getRootProps({
        className: classnames("a-upload", {
          "a-upload--active": isDragActive || loading
        })
      })}
    >
      <div className="a-upload__interior">
        {loading ? (
          // Loading State
          <>
            <ALoader variant="spinner" size="medium" />
            <div className="a-upload__text a-upload__text--loading">
              Uploading
            </div>
          </>
        ) : (
          // Default State
          <>
            <input {...getInputProps()} />
            <AIcon size={24}>upload-simple</AIcon>
            {!!text && <p className="a-upload__text">{text}</p>}
            {!!supplementalText && (
              <p className="a-upload__supplemental-text">{supplementalText}</p>
            )}
          </>
        )}
      </div>
    </ACardBasic>
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
