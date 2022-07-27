import { FilledInput, FormHelperText } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import {
    FormControl,
    InputAdornment,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    TextField,
} from "@mui/material";
import { useRef, useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./businessinformation.scss";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import PhoneNumber from "../../../../../components/PhoneNumber";

const BusinessInformation = () => {
    // all country store
    const [country, setCountry] = useState([]);
    // all country fetch api
    useEffect(() => {
        const countryApi = async () => {
            const res = await fetch("https://restcountries.com/v3.1/all");
            const data = await res.json();
            data && setCountry(data);
        };
        countryApi();
    }, []);

    const countryChangeHandler = () => {};

    // phone number handler

    const [getPhoneNumber, setPhoneNumber] = useState("");
    const [getCountryCode, setCountryCode] = useState("880");

    const phoneHandler = (e) => {
        setPhoneNumber(e.target.value);
    };

    const areaCodeHandler = (data) => {
        setCountryCode(data);
    };

    // is edit address
    const [isEditAddress, setIsEditAddress] = useState(false);
    const updateAddressHandlerBtn = () => {
        setIsEditAddress(true);
    };

    return (
        <>
            <div className="ui-abi-box">
                <h2>Business information</h2>
                <div className="ui-abi-content-head">
                    <div className="ui-abi-head">
                        <p>
                            Please note that on EU sites, business are required
                            by law to provide buyers with certain information
                            about their business. Business seller information
                            will be shown on all your item listings. Learn more
                            about
                            <Link to="/account">
                                Business seller information.
                            </Link>
                        </p>
                    </div>

                    <div className="ui-abi-body">
                        <div className="ui-abi-bn">
                            <TextField
                                fullWidth
                                id="outlined-basic"
                                label="Business name"
                            />
                        </div>

                        <div className="ui-abi-form-head">
                            <h4>Business address</h4>
                            <p>
                                Please enter the same address as you find it on
                                official documents.
                            </p>
                        </div>
                        <div className="ui-abi-form-list">
                            {!isEditAddress && (
                                <>
                                    <h4>Name Surname</h4>
                                    <ul>
                                        <li>1234 EL CAMINO REAL</li>
                                        <li>STE - 100386</li>
                                        <li>SUNNYVALE CA 98765-4321</li>
                                        <li>United States</li>
                                        <li>Phone: + 1 234-5678-900</li>
                                    </ul>
                                    <button onClick={updateAddressHandlerBtn}>
                                        Update your business address
                                    </button>
                                </>
                            )}
                        </div>
                        {isEditAddress && (
                            <div className="ui-abi-form">
                                <div className="mb-3">
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">
                                            Country
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Country"
                                            onChange={countryChangeHandler}
                                        >
                                            {country.map((item, index) => {
                                                return (
                                                    <MenuItem
                                                        key={index}
                                                        value={item.name.common}
                                                    >
                                                        {item.name.common}
                                                    </MenuItem>
                                                );
                                            })}
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="mb-3">
                                    <TextField
                                        fullWidth
                                        id="outlined-basic"
                                        label="Full name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <TextField
                                        fullWidth
                                        id="outlined-basic"
                                        label="Street address"
                                    />
                                </div>
                                <div className="mb-3">
                                    <input
                                        type="text"
                                        className="form-control"
                                    />
                                </div>
                                <div className="mb-3">
                                    <TextField
                                        fullWidth
                                        id="outlined-basic"
                                        label="Town/City :"
                                    />
                                </div>
                                <div className="mb-3">
                                    <TextField
                                        fullWidth
                                        id="outlined-basic"
                                        label="Country"
                                    />
                                </div>
                                <div className="mb-3">
                                    <TextField
                                        fullWidth
                                        id="outlined-basic"
                                        label="Postal Code"
                                    />
                                </div>
                                <div className="mb-3 ui-phone-codes-select">
                                    <PhoneNumber
                                        phoneHandler={phoneHandler}
                                        areaCodeHandler={areaCodeHandler}
                                        getAreaCode={getCountryCode}
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="ui-abi-footer">
                        <p>VAT / GST Registration information</p>
                        <div className="ui-abi-footer-form">
                            <div className="row">
                                <div className="col-lg-6">
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">
                                            Country
                                        </InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Country"
                                        >
                                            {country.map((item, index) => {
                                                return (
                                                    <MenuItem
                                                        value={item.name.common}
                                                        key={index}
                                                    >
                                                        {item.name.common}
                                                    </MenuItem>
                                                );
                                            })}
                                        </Select>
                                    </FormControl>
                                </div>
                                <div className="col-lg-6">
                                    <TextField
                                        id="outlined-basic"
                                        label="VAT / GST Registration number"
                                        variant="outlined"
                                        type="number"
                                        fullWidth
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="u-abi-footer-btn">
                            <button>Save</button>
                            <button>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BusinessInformation;
