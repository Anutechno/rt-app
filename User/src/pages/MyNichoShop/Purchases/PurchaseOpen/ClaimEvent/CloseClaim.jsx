import { Button } from "react-bootstrap"
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

const CloseClaim = ({isOpen}) => {
  const [reason, setReason] = useState("--Choose a reason --")

  return (
    <div>
      <div className="message-send">
        <h3>
          Close this claim
          <p>If you're satisfied with the seller's reply, or if you received your item, you can close the claim. After you close a claim, you won't be able to reopen it again.</p>
        </h3>
        <div className="message-content">
          <h4>Why are you closing this claim?</h4>

          <FormControl sx={{minWidth: 510}}>
            <Select
              value={reason}
              onChange={(e) => {
                setReason(e.target.value);
              }}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={"--Choose a reason --"} disabled>--Choose a reason --</MenuItem>
              <MenuItem value={"The item has arrived"}>The item has arrived</MenuItem>
              <MenuItem value={"I resolved this with the seller"}>I resolved this with the seller</MenuItem>
              <MenuItem value={"Other"}>Other</MenuItem>
            </Select>
          </FormControl>

          <textarea placeholder="Add a message to the seller"></textarea>
          <div className="left-characters"><span>1000 characters left</span></div>
          <div>
            <Button variant="contained" style={{color: "white", background: "#6C757D", border:"none !important"}}>Close claim</Button>
            <Button variant="outlined" onClick={() => {isOpen(false)}}>Cancel</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CloseClaim