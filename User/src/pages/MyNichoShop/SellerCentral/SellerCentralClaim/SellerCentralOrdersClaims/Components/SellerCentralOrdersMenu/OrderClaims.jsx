import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { useState } from "react";

const OrderClaims = () => {
  const [category1, setCategory1] = useState("Requiring your attention");
  const [category2, setCategory2] = useState("order");
  const [time, setTime] = useState("This week");
  const [resultCount, setResultCount] = useState(0);

  return (
    <div className="order-claims">
      <div className="search-category">
        <div className="category1">
          <FormControl sx={{ minWidth: 367 }}>
            <Select
              value={category1}
              onChange={(e) => {
                setCategory1(e.target.value);
              }}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="All open claims">All open claims</MenuItem>
              <MenuItem value="Requiring your attention">
                Requiring your attention
              </MenuItem>
              <MenuItem value="Waiting for the buyer's responses">
                Waiting for the buyer's responses
              </MenuItem>
              <MenuItem value="Under review">Under review</MenuItem>
              <MenuItem value="Closed by the Customer Support">
                Closed claims
              </MenuItem>
              <MenuItem value="Paid reimbursments">Paid reimbursments</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="d-flex justify-content-between resp">
          {category1 == "Paid reimbursments" ? (
            <div class="duration">
              <FormControl sx={{ minWidth: 300 }}>
                <Select
                  value={time}
                  onChange={(e) => {
                    setTime(e.target.value);
                  }}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="This week">This week</MenuItem>
                  <MenuItem value="Last 14 days">Last 14 days</MenuItem>
                  <MenuItem value="Last 30 days">Last 30 days</MenuItem>
                  <MenuItem value="Current month">Current month</MenuItem>
                  <MenuItem value="Last 60 days">Last 60 days</MenuItem>
                  <MenuItem value="Last 90 days">Last 90 days</MenuItem>
                  <MenuItem value="Last 6 months">Last 180 days</MenuItem>
                </Select>
              </FormControl>
            </div>
          ) : (
            ""
          )}
          <div className="category2 d-flex">
            <FormControl sx={{ minWidth: 169 }}>
              <Select
                value={category2}
                onChange={(e) => {
                  setCategory2(e.target.value);
                }}
                displayEmpty
                inputProps={{ "aria-label": "Without label" }}
              >
                <MenuItem value="order">Order ID</MenuItem>
                <MenuItem value="seller">Buyer username</MenuItem>
                <MenuItem value="nsln">NSLN</MenuItem>
                <MenuItem value="item">Item title</MenuItem>
              </Select>
            </FormControl>

            <input type="text" placeholder="Search..." />
            <label htmlFor="search">
              <i className="bi bi-search"></i>
            </label>
            <span className="reset">Reset</span>
          </div>
        </div>
      </div>
      <p className="result">Results: {resultCount}</p>
    </div>
  );
};

export default OrderClaims;
