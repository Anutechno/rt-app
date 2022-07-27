import { Dropdown, DropdownButton } from "react-bootstrap";
import "./TabComponent.css";
import React, { useState } from "react";

const TabComponent = () => {
  const [dropdownOverview] = useState([
    "All Listing",
    "Fixed Price",
    "Auction",
    "Auction + Fixed price",
    "Classified ad",
  ]);

  return (
    <>
      {/* <DropdownButton id="dropdown-tab-panel" title="All Listing">
        {dropdownOverview.map((overviewData, index) => {
          return (
            <div className="tab_comp_dd">
              <Dropdown.Item
                as="button"
                key={index}
                onClick={() => {
                  console.log(overviewData);
                }}
              >
                {overviewData}
              </Dropdown.Item>
            </div>
          );
        })}
      </DropdownButton> */}

      <select name="data" id="dropdown-tab-panel">
        {dropdownOverview.map((overviewData, index) => {
          return <option value="All Listing">{overviewData}</option>;
        })}
      </select>
    </>
  );
};

export default TabComponent;
