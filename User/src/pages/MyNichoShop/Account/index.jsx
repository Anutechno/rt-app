// React
import React, { useState } from "react";
import { Link } from "react-router-dom";

// 3rd party components
import {
    Breadcrumbs,
    Checkbox,
    FormControl,
    FormControlLabel,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
} from "@mui/material";
import { ErrorMessage, Formik } from "formik";
import * as yup from "yup";
import { BsExclamationOctagon } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";

// Compoenents
import Header from "../../../components/header/Header";
import Menu from "../../../components/menu/Menu";

// Styles
import "./account.css";
import AccountFooter from "../../../components/accountfooter/AccountFooter";
import BusinessInformation from "./Components/BusinessInformation";

const Account = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [authSpinner, setAuthSpinner] = useState(false);

    const accountSchema = yup.object({
        user_name: yup
            .string("Enter your Name here")
            .required("User ID is required"),
        account_type: yup
            .string("Enter your account type here")
            .required("Account type is required"),
        password: yup
            .string("Enter your password")
            .min(8, "Password should be of minimum 8 characters length")
            .required("Please make your password unique.")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            ),
        phone_no: yup
            .string("Enter your MObile/phone number here")
            .required("Mobile number is required"),
    });

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <div className="home-page">
            <Header />
            <Menu />
            <div className="cs_section ne_css account-pg">
                <div className="container_no">
                    <Breadcrumbs />
                    <h3 className="all_heading">Account</h3>
                    <div className="inner_content no_padd">
                        <div className="inner_content-two">
                            {/* Form Section  */}
                            <Formik
                                initialValues={{
                                    emailorname: "",
                                }}
                            >
                                {(props) => (
                                    <form onSubmit={props.handleSubmit}>
                                        <div className="row out_both">
                                            <div className="col-md-9 form_left">
                                                <div className="textField">
                                                    <label for="account">
                                                        Account Type:
                                                    </label>
                                                    <TextField
                                                        fullWidth
                                                        value="Personal"
                                                        variant="outlined"
                                                        size="small"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-3 form_right">
                                                <button
                                                    type="submit1"
                                                    className="themeBtn w-100"
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                            {/* Form Section End */}

                            <hr />
                            {/* Form Section  */}
                            <Formik
                                initialValues={{
                                    user_name: "",
                                }}
                            >
                                {(props) => (
                                    <form onSubmit={props.handleSubmit}>
                                        <div className="row out_both">
                                            <div className="col-md-9 form_left">
                                                <div className="textField">
                                                    <label for="user_name">
                                                        User ID:
                                                    </label>
                                                    <TextField
                                                        fullWidth
                                                        value="username"
                                                        variant="outlined"
                                                        size="small"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-3 form_right">
                                                <button
                                                    type="submit"
                                                    className="themeBtn w-100"
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                            {/* Form Section End */}
                            <hr />

                            {/* Form Section  */}
                            <Formik
                                initialValues={{
                                    email: "",
                                }}
                            >
                                {(props) => (
                                    <form
                                        onSubmit={props.handleSubmit}
                                        readOnly
                                    >
                                        <div className="row out_both">
                                            {authSpinner ? (
                                                <div className="formSpinner">
                                                    <div className="loading"></div>
                                                </div>
                                            ) : null}
                                            <div className="col-md-9 form_left">
                                                <div className="textField">
                                                    <label for="email">
                                                        Email address:
                                                    </label>
                                                    <TextField
                                                        fullWidth
                                                        value="example@domain.com"
                                                        variant="outlined"
                                                        size="small"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-3 form_right">
                                                <button
                                                    type="submit"
                                                    className="themeBtn w-100"
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                            {/* Form Section End */}
                            <hr />

                            {/* Form Section  */}
                            <Formik
                                initialValues={{
                                    password: "",
                                }}
                            >
                                {(props) => (
                                    <form onSubmit={props.handleSubmit}>
                                        <div className="row out_both">
                                            <div className="col-md-9 form_left">
                                                <div className="textField">
                                                    <FormControl
                                                        variant="outlined"
                                                        size="small"
                                                    >
                                                        <label for="Password">
                                                            Password
                                                        </label>
                                                        <OutlinedInput
                                                            value="**********"
                                                            label="Password"
                                                        />
                                                    </FormControl>
                                                </div>
                                            </div>
                                            <div className="col-md-3 form_right">
                                                <button
                                                    type="submit"
                                                    className="themeBtn w-100"
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                            {/* Form Section End */}
                            <hr />

                            {/* Form Section  */}
                            <Formik
                                initialValues={{
                                    phone_no: "",
                                }}
                            >
                                {(props) => (
                                    <form onSubmit={props.handleSubmit}>
                                        <div className="row out_both">
                                            <div className="col-md-9 form_left">
                                                <div className="textField">
                                                    <label for="">
                                                        Mobile phone number:
                                                    </label>
                                                    <TextField
                                                        fullWidth
                                                        value="+1234567890"
                                                        variant="outlined"
                                                        size="small"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-md-3 form_right">
                                                <button
                                                    type="submit"
                                                    className="themeBtn w-100"
                                                >
                                                    Edit
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                )}
                            </Formik>
                            {/* Form Section End */}
                            <hr />
                            <div className="row out_both second-last">
                                <div className="col-md-9 form_left full width">
                                    <p className="top_text">
                                        Registration address
                                    </p>
                                    <h4 className="ine_haed">Name Family</h4>
                                    <div className="info_div">
                                        <p>1234 EL CAMINO REAL</p>
                                        <p>STE - 100386</p>
                                        <p>SUNNYVALE CA 98765-4321</p>
                                        <p>United States</p>
                                        <p>Phone: + 1 234-5678-900</p>
                                    </div>
                                </div>
                                <div className="col-md-3 form_right full_width">
                                    <button
                                        type="button"
                                        className="btn btn-primary Edit"
                                    >
                                        Edit
                                    </button>
                                </div>
                            </div>
                            <hr />
                            <div className="row out_both last-row">
                                <div className="col-md-9 form_left renove_mob"></div>
                                <div className="col-md-3 form_right full width">
                                    <Link
                                        to="/account/close-account"
                                        className="ine_close"
                                    >
                                        Close my account
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <BusinessInformation />
                </div>
            </div>
            <AccountFooter />
        </div>
    );
};

export default Account;
