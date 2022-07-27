// React
import React, { useState } from "react";
import { Link } from "react-router-dom";

// 3rd party components
import {
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
} from "@mui/material";
import { ErrorMessage, Formik } from "formik";
import * as yup from "yup";

// Compoenents
import Header from "../../../components/auth/Header";
import Footer from "../../../components/auth/Footer";

// Styles
import "./../auth.css";
import MuiPhoneNumber from "material-ui-phone-number";

const AddMobileNumber = () => {
    const [authSpinner, setAuthSpinner] = useState(false);

    const AddNumberSchema = yup.object({
        phoneNumber: yup
            .string("Enter your Phone Number")
            .required("Phone Number Required"),
    });

    const SUCSchema = yup.object({
        suc: yup
            .string("Enter your SUC")
            .required(
                "The code you entered is different from the one we texted."
            ),
    });

    return (
        <main>
            <div className="signUpContainer authContainer add-number">
                {/* Header  */}
                <Header>
                    Already a member?
                    <Link to="/user/signin" className="redirectLink ms-1">
                        Sign In
                    </Link>
                </Header>
                {/* Header End  */}

                {/* Form Section  */}
                <section className="authFormSection">
                    <div className="container">
                        <div className="authFormBox">
                            <div className="formTitle">
                                <h2>Add mobile number</h2>
                            </div>
                            <Formik
                                initialValues={{
                                    phoneNumber: "",
                                    countryCode: "+1",
                                }}
                                validationSchema={AddNumberSchema}
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
                                            <p>
                                                Add a mobile phone number for a
                                                higher level of protection to
                                                your NichoShop account. Make
                                                sure your mobile number is up to
                                                date because it is an important
                                                part of your account security.
                                            </p>
                                            <FormControl
                                                variant="outlined"
                                                size="small"
                                                className={
                                                    props.touched.phoneNumber &&
                                                    props.errors.phoneNumber
                                                        ? "error w-100 countryPhoneCode"
                                                        : "w-100 countryPhoneCode"
                                                }
                                            >
                                                <InputLabel htmlFor="phoneNumber">
                                                    Legal phone number
                                                </InputLabel>
                                                <OutlinedInput
                                                    id="phoneNumber"
                                                    name="phoneNumber"
                                                    type="text"
                                                    value={
                                                        props.values.phoneNumber
                                                    }
                                                    onChange={
                                                        props.handleChange
                                                    }
                                                    endAdornment={
                                                        <InputAdornment position="start">
                                                            <div className="countryCode">
                                                                <MuiPhoneNumber
                                                                    disabled
                                                                    className="countryCodeInput"
                                                                    defaultCountry={
                                                                        "us"
                                                                    }
                                                                    countryCodeEditable={
                                                                        false
                                                                    }
                                                                    onChange={(
                                                                        value
                                                                    ) =>
                                                                        props.setFieldValue(
                                                                            "countryCode",
                                                                            value
                                                                        )
                                                                    }
                                                                />
                                                            </div>
                                                        </InputAdornment>
                                                    }
                                                    label="phoneNumber"
                                                />
                                            </FormControl>
                                            <ErrorMessage name="phoneNumber">
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
                                            Add mobile number
                                        </button>
                                    </form>
                                )}
                            </Formik>
                            <p className="not-now">
                                <Link to="/">Not Now</Link>
                            </p>
                        </div>
                    </div>
                </section>
                {/* Form Section End */}

                {/* message Component */}
                {/* <SuccessMessage /> */}
                {/* message Component End */}

                {/* Footer  */}
                <Footer />
                {/* Footer End  */}
            </div>
        </main>
    );
};

export default AddMobileNumber;
