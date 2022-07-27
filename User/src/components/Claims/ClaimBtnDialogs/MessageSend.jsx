import { useRef, useState } from "react";
import { Button, CloseButton } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { hasButton } from "../../../pages/PurchaseClaim/Action/actions";

const MessageSend = () => {
  const dispatch = useDispatch();

  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadedFileSize, setUploadedFileSize] = useState([]);
  const [change, setChange] = useState(true);
  const inputRef = useRef(null);

  const handleFileUpload = () => {
    let data = uploadedFiles;
    let size = uploadedFileSize;
    data.push(inputRef.current.files[0].name);
    size.push(Math.ceil(inputRef.current.files[0].size / 1024));
    setUploadedFiles(data);
    setUploadedFileSize(size);
    setChange(!change);
  };

  const fileClose = (index) => {
    setUploadedFiles([
      ...uploadedFiles.slice(0, index),
      ...uploadedFiles.slice(index + 1, uploadedFiles.length),
    ]);
    setUploadedFileSize([
      ...uploadedFileSize.slice(0, index),
      ...uploadedFileSize.slice(index + 1, uploadedFiles.length),
    ]);
  };

  const cancelHandle = () => {
    let data = {
      msgSend: false,
      closeClaim: false,
      documentSend: false,
      askUs: false,
    };
    dispatch(hasButton(data));
  };

  return (
    <div className="message-send">
      <h3>Send a message</h3>
      <div className="message-content">
        <textarea placeholder="Add a message to the seller"></textarea>
        <div className="left-characters">
          <span>1000 characters left</span>
        </div>

        {uploadedFiles.map((file, index) => (
          <div key={index} className="d-flex align-items-center">
            {file}{" "}
            <span className="file-size"> ({uploadedFileSize[index]}KB)</span>
            <CloseButton
              className="close-button"
              onClick={() => fileClose(index)}
            />
          </div>
        ))}
        <input
          ref={inputRef}
          onChange={handleFileUpload}
          type="file"
          style={{ display: "none" }}
          // multiple={false}
        />
        <Button variant="outlined" onClick={() => inputRef.current.click()}>
          Add files
        </Button>
        <p>
          Accepted file formats: .gif, .jpg, .jpeg, .pdf, .and .png. Add up to
          10 files, 5MB each
        </p>
        <div>
          <Button
            variant="contained"
            style={{
              color: "white",
              background: "#6C757D",
              border: "none !important",
            }}
          >
            Send message
          </Button>
          <Button variant="outlined" onClick={cancelHandle}>
            Cancel
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MessageSend;
