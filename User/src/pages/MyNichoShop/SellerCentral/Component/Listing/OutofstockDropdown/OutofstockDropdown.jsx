import { Dropdown, DropdownButton } from "react-bootstrap";
import "./OutofstockDropdown.css";
import React, { useState } from "react";

const OutofstockDropdown = () => {
  const [dropdownOverview] = useState([
    "Last 24 hours",
    "Last 3 days",
    "Last 7 days",
    "Last 14 days",
    "Last 30 days",
  ]);

  return (
    <>
      <select name="data" id="dropdown-tab-panel">
        {dropdownOverview.map((overviewData, index) => {
          return <option value="All Listing">{overviewData}</option>;
        })}
      </select>
    </>
  );
};

export default OutofstockDropdown;
