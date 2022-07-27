import { Button, CloseButton } from "react-bootstrap";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";

import { hasButton } from "../../../pages/PurchaseClaim/Action/actions";

const AskUs = ({ isOpen }) => {
  const dispatch = useDispatch();
  const [problemType, setProblemType] = useState("--Choose a reason --");

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
    <div>
      <div className="message-send">
        <h3>
          Ask us to help
          <p>
            It looks like it's time for us to help. Give us a few more details
            so we can help resolve the problem.
          </p>
        </h3>
        <div className="message-content">
          <h4>Tell us what the problem in:</h4>

          <FormControl sx={{ minWidth: 510 }}>
            <Select
              value={problemType}
              onChange={(e) => {
                setProblemType(e.target.value);
              }}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={"--Choose a reason --"} disabled>
                --Choose a reason --
              </MenuItem>
              <MenuItem value={"The item has arrived"}>
                The item has arrived
              </MenuItem>
              <MenuItem value={"I resolved this with the seller"}>
                I resolved this with the seller
              </MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
          </FormControl>

          <textarea placeholder="Add more details (Optional)"></textarea>
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
              Ask use to help
            </Button>
            <Button variant="outlined" onClick={cancelHandle}>
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AskUs;
