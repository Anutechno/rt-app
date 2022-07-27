import { Link } from "react-router-dom";
import Menu from "../../../../components/menu/Menu";
import Footer from "../../../../components/MyNichoShop/footer/Footer";
import "./callus.scss";
import { IoIosArrowForward } from "react-icons/io";
import {
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from "@material-ui/core";
import PhoneInput from "react-phone-number-input";
import { useState } from "react";
import Select from "react-select";
import UkImg from "./../../../../assets/flags/UK.png";
import UsImg from "./../../../../assets/flags/US.png";

const CallUs = () => {
    // get country code
    const [getCountryCode, setCountryCode] = useState("");

    // store phone number with country code
    const [getPhoneNumber, setPhoneNumber] = useState("");

    const [getFormSubmit, setFormSubmit] = useState(false);

    const phoneNumberHandler = (e) => {
        setPhoneNumber(e.target.value);
    };

    const options = [
        {
            value: "1",
            label: (
                <div>
                    <img src={UkImg} />
                    <span>United Kingdom</span>
                </div>
            ),
        },
        {
            value: "2",
            label: (
                <div>
                    <img src={UsImg} />
                    <span>United State</span>
                </div>
            ),
        },
    ];

    const [isChaned, setChecked] = useState(false);
    const changeHandler = () => {
        setChecked(!isChaned);
    };
    return (
        <div>
            <Menu />
            <div className="ui-call-us-box">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-lg-8">
                            <div className="ui-breadcrumb-box">
                                <ul>
                                    <li>
                                        <Link to="/">My NichoShop</Link>
                                    </li>
                                    <li>
                                        <IoIosArrowForward />
                                    </li>
                                    <li>Help and contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="ui-call-us-content">
                                <h2>Call us</h2>
                                <div className="ui-call-cb">
                                    <ul className="mb-4">
                                        <li>Reason:</li>
                                        <li>
                                            <p>
                                                Buying <br />- Return an order
                                                or item
                                            </p>
                                            <button onClick={changeHandler}>
                                                {isChaned ? "Cencel" : "Change"}
                                            </button>
                                        </li>
                                    </ul>
                                    {!isChaned && (
                                        <>
                                            <div className="ui-phone-no">
                                                <FormControl
                                                    variant="outlined"
                                                    size="small"
                                                    fullWidth
                                                    error={
                                                        getFormSubmit &&
                                                        getPhoneNumber.length ==
                                                            0
                                                            ? true
                                                            : false
                                                    }
                                                >
                                                    <InputLabel htmlFor="my-input">
                                                        Legal phone number
                                                    </InputLabel>
                                                    <OutlinedInput
                                                        id="phoneNumber"
                                                        name="phoneNumber"
                                                        type="number"
                                                        value={getPhoneNumber}
                                                        onChange={
                                                            phoneNumberHandler
                                                        }
                                                        endAdornment={
                                                            <InputAdornment position="start">
                                                                <div className="ui-country-code">
                                                                    <PhoneInput
                                                                        international
                                                                        defaultCountry="BD"
                                                                        placeholder="Enter phone number"
                                                                        value={
                                                                            getCountryCode
                                                                        }
                                                                        onChange={
                                                                            setCountryCode
                                                                        }
                                                                    />
                                                                </div>
                                                            </InputAdornment>
                                                        }
                                                        label="Legal phone number"
                                                    />
                                                </FormControl>
                                            </div>
                                            <p>
                                                Your one-time passcode:{" "}
                                                <b>1234567</b> (Use it for
                                                faster customer service)
                                            </p>
                                        </>
                                    )}
                                    {isChaned && (
                                        <div className="ui-cu-change-content">
                                            <p>
                                                Review your phone number (add
                                                new if it’s need) and click Call
                                                me.
                                            </p>
                                            <ul>
                                                <li>
                                                    <p>Country</p>
                                                </li>
                                                <li>
                                                    <Select options={options} />
                                                </li>
                                            </ul>
                                            <ul>
                                                <li>
                                                    <p>
                                                        Your number{" "}
                                                        <span>+44</span>
                                                    </p>
                                                </li>
                                                <li>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        placeholder="Enter Phone"
                                                        value="098-7654-321"
                                                    />
                                                </li>
                                            </ul>
                                            <button>Call me</button>
                                            <p>
                                                Estimated wait time:{" "}
                                                <b>15 minutes</b>
                                            </p>
                                            <p>
                                                If you prefer, you can also{" "}
                                                <Link to="/call">Call us</Link>
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default CallUs;
