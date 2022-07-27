import { useRef, useState } from "react";
import { Button, CloseButton } from "react-bootstrap";

const DocumentSend = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [uploadedFileSize, setUploadedFileSize] = useState([]);
  const [change, setChange] = useState(true);
  const [addComment, setAddComment] = useState(false);
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

  return (
    <div className="message-send">
      <h3 className="border-0">
        Please provide us with the following documentation:
        <p>- Proof of something 123456</p>
      </h3>
      <div className="message-content pt-0">
        <div className="dashed-line"></div>
        <div className="pt-4">
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
        </div>
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

        <div className="py-3">
          <label htmlFor="add" className="pb-3 d-flex align-items-center">
            <input
              type="checkbox"
              name="addComments"
              style={{ width: "20px", height: "20px" }}
              onChange={() => {
                setAddComment(!addComment);
              }}
            />
            <span className="ps-2">Add comments</span>
          </label>
          {!!addComment ? (
            <>
              <textarea placeholder="Add a message to the seller"></textarea>
              <div className="left-characters">
                <span>1000 characters left</span>
              </div>
            </>
          ) : (
            ""
          )}
        </div>

        <div className="dashed-line"></div>

        <div>
          <Button
            variant="contained"
            style={{
              color: "white",
              background: "#6C757D",
              border: "none !important",
            }}
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DocumentSend;
