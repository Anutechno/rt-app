// React
import React, { useState } from "react";
import { Link } from "react-router-dom";
import PasswordStrengthBar from "react-password-strength-bar";

// 3rd party components
import {
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
import Header from "../../../components/auth/Header";
import Footer from "../../../components/auth/Footer";

// Styles
import "./../auth.css";

const CreateNewPassword = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [authSpinner, setAuthSpinner] = useState(false);

    const CreatePassSchema = yup.object({
        new_password: yup
            .string("Enter your new password")
            // .min(8, "Password should be of minimum 8 characters length")
            .required("Please enter your new password.")
            .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
                "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
            ),
    });

    const handleClickShowPassword = (e) => {
        setShowPassword(!showPassword);
        console.log(e);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    //const recaptchaLoaded = () => {
    //  console.log("capcha successfully loaded");
    //};

    // const verifyCallback = () => {
    //   console.log("capcha successfully loaded");
    // };

    return (
        <main>
            <div className="signInContainer authContainer">
                {/* Header  */}
                <Header>
                    <Link to="/user/signup" className="redirectLink ms-1">
                        Create an account
                    </Link>
                </Header>
                {/* Header End  */}

                {/* Form Section only password  */}
                <section className="authFormSection create-pass">
                    <div className="container">
                        <div className="authFormBox">
                            <div className="formTitle switchAcoount">
                                <h2>Create new password</h2>

                                <p>
                                    We’ll ask for this password whenever you
                                    sign in.
                                </p>
                            </div>
                            {/*<p className="failedMsg">
                <BsExclamationOctagon /> Please enter your new password.
                </p>*/}
                            <Formik
                                initialValues={{
                                    new_password: "",
                                }}
                                validationSchema={CreatePassSchema}
                                onSubmit={(values, { setSubmitting }) => {
                                    alert(JSON.stringify(values, null, 2));
                                    setSubmitting(false);
                                }}
                            >
                                {(props) => (
                                    <form onSubmit={props.handleSubmit}>
                                        {authSpinner ? (
                                            <div className="formSpinner">
                                                <div className="loading"></div>
                                            </div>
                                        ) : null}

                                        <div className="textField">
                                            <FormControl
                                                variant="outlined"
                                                size="small"
                                                className={
                                                    props.touched
                                                        .new_password &&
                                                    props.errors.new_password
                                                        ? "error w-100"
                                                        : "w-100"
                                                }
                                            >
                                                <InputLabel htmlFor="New Password">
                                                    New Password
                                                </InputLabel>
                                                <OutlinedInput
                                                    id="new_password"
                                                    name="new_password"
                                                    placeholder="New password"
                                                    type={
                                                        showPassword
                                                            ? "text"
                                                            : "new_password"
                                                    }
                                                    value={
                                                        props.values.password
                                                    }
                                                    onChange={
                                                        props.handleChange
                                                    }
                                                    endAdornment={
                                                        <InputAdornment position="end">
                                                            <IconButton
                                                                aria-label="toggle password visibility"
                                                                onClick={
                                                                    handleClickShowPassword
                                                                }
                                                                onMouseDown={
                                                                    handleMouseDownPassword
                                                                }
                                                                edge="end"
                                                            >
                                                                {showPassword ? (
                                                                    <FiEyeOff className="eyeIcon" />
                                                                ) : (
                                                                    <FiEye className="eyeIcon" />
                                                                )}
                                                            </IconButton>
                                                        </InputAdornment>
                                                    }
                                                    label="New password"
                                                />
                                            </FormControl>
                                            <ErrorMessage name="new_password">
                                                {(msg) => (
                                                    <p className="formError">
                                                        {msg}
                                                    </p>
                                                )}
                                            </ErrorMessage>
                                        </div>

                                        <button
                                            type="submit"
                                            className="themeBtn w-100"
                                        >
                                            Save Changes
                                        </button>
                                    </form>
                                )}
                            </Formik>
                            <p className="resend-suc">
                                <Link to="/">Resend SUC</Link>
                            </p>
                        </div>
                    </div>
                </section>
                {/* Form Section only password End */}

                {/* Footer  */}
                <Footer />
                {/* Footer End  */}
            </div>
        </main>
    );
};

export default CreateNewPassword;
