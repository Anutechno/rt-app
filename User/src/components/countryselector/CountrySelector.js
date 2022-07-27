import React from "react";
import "./CountrySelector.css";
import US from "../../assets/flags/US.png";
import UK from "../../assets/flags/UK.png";
import Select from "react-select";

function CountrySelector() {
  const options = [
    {
      label: (
        <div>
          <img src={US} />
          United States
        </div>
      ),
      value: "US",
    },
    {
      label: (
        <div>
          <img src={UK} />
          United Kingdom
        </div>
      ),
      value: "UK",
    },
  ];

  return (
    <div className="country-selector">
      <Select
        options={options}
        defaultValue={{
          label: (
            <div>
              <img src={US} />
              United States
            </div>
          ),
        }}
      />
      {/* <Form.Select className="select-form selector">
        <option value="1" selected>
          <div className="">
            <img src={US} alt="" />
            <p> United States</p>
          </div>
        </option>
        <option value="2">United Kingdom</option>
      </Form.Select> */}
    </div>
  );
}

export default CountrySelector;
