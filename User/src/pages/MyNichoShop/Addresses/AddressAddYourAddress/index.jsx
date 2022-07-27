// import "./accountaddyouraddress.scss";
import { ReactComponent as Logo } from "./../../../../assets/logo/logo.svg";
import SelectCountry from "../../../../components/SelectCountry";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
// import PhoneNumber from "../../../../components/PhoneNumber";
import { useState } from "react";

import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

const AddressAddYourAddress = () => {
  // form all data
  const [getCountryData, setCountryData] = useState("");
  const [getFullNameData, setFullNameData] = useState("");
  const [getStreetNumberData, setStreetNumberData] = useState("");
  const [getCityData, setCityData] = useState("");
  const [getStateData, setStateData] = useState("");
  const [getPostCodeData, setPostCodeData] = useState("");

  const [getValue, setValue] = useState("");
  // error display

  const [isError, setError] = useState(false);

  // form all handler
  const countryChangeHandler = (e) => {
    setCountryData(e.target.value[0]);
  };

  const fullNameHandler = (e) => {
    setFullNameData(e.target.value);
  };

  const streetNumberHandler = (e) => {
    setStreetNumberData(e.target.value);
  };

  const cityHandler = (e) => {
    setCityData(e.target.value);
  };

  const stateHandler = (e) => {
    setStateData(e.target.value);
  };

  const postCodeHandler = (e) => {
    setPostCodeData(e.target.value);
  };

  console.log(setValue);

  // form submit
  const formSubmitHandler = (e) => {
    e.preventDefault();

    if (
      getCountryData &&
      getFullNameData &&
      getStreetNumberData &&
      getCityData
    ) {
    } else {
      setError(true);
    }
  };
  return (
    <>
      <div className="ui-add-your-address-box">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="ui-common-logo">
                <Logo />
              </div>
              <div className="ui-commont-form-box">
                <p>Add your address</p>
                <form onSubmit={formSubmitHandler}>
                  <div className="mb-3">
                    <SelectCountry
                      countryChangeHandler={countryChangeHandler}
                    />
                  </div>
                  <div className="mb-3">
                    <TextField
                      error={
                        isError && getFullNameData.length === 0 ? true : false
                      }
                      id="outlined-basic"
                      label="Full name"
                      variant="outlined"
                      size="medium"
                      value={getFullNameData}
                      fullWidth
                      onChange={fullNameHandler}
                    />
                    {isError && getFullNameData.length == 0 && (
                      <span className="text-danger">Enter a name.</span>
                    )}
                  </div>
                  <div className="mb-3">
                    <TextField
                      id="outlined-basic"
                      label="Street and number, P.O. box, c/o."
                      variant="outlined"
                      size="medium"
                      fullWidth
                      onChange={streetNumberHandler}
                      error={
                        isError && getStreetNumberData.length == 0
                          ? true
                          : false
                      }
                    />
                    {isError && getStreetNumberData.length == 0 && (
                      <>
                        <span className="text-danger">Enter address.</span>
                        <br />
                      </>
                    )}
                    {isError && getStreetNumberData.length < 6 && (
                      <span className="text-danger">
                        The address is too short.
                      </span>
                    )}
                  </div>
                  <div className="mb-3">
                    <TextField
                      id="outlined-basic"
                      label="Apartment, suite, unit, building, floor, etc."
                      variant="outlined"
                      size="medium"
                      fullWidth
                    />
                  </div>
                  <div className="mb-3">
                    <TextField
                      id="outlined-basic"
                      label="City"
                      variant="outlined"
                      size="medium"
                      fullWidth
                      onChange={cityHandler}
                      error={isError && getCityData.length == 0 ? true : false}
                    />

                    {isError && getCityData.length == 0 && (
                      <span className="text-danger">Enter a city name.</span>
                    )}
                  </div>
                  <div className="mb-3">
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        State
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="State"
                        onChange={stateHandler}
                        error={isError && !getStateData ? true : false}
                      >
                        <MenuItem value={10}>Noakhali</MenuItem>
                        <MenuItem value={10}>Chittagong</MenuItem>
                        <MenuItem value={10}>Dhaka</MenuItem>
                      </Select>
                    </FormControl>
                    {isError && !getStateData && (
                      <span className="text-danger">Enter state.</span>
                    )}
                  </div>
                  <div className="mb-3">
                    <TextField
                      id="outlined-basic"
                      label="Postcode"
                      variant="outlined"
                      size="medium"
                      fullWidth
                      onChange={postCodeHandler}
                      error={
                        isError && getPostCodeData.length === 0 ? true : false
                      }
                    />
                    {isError && getPostCodeData.length === 0 && (
                      <span className="text-danger">Enter Postcode.</span>
                    )}
                  </div>
                  <div className="mb-3 ui-phone-codes-select">
                    {/* <PhoneNumber /> */}
                    <PhoneInput
                      placeholder="Enter phone number"
                      value={getValue}
                      onChange={setValue}
                    />
                  </div>
                  <div className="ui-commont-form-btn">
                    <button type="submit">Save</button>
                    <button>Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddressAddYourAddress;
