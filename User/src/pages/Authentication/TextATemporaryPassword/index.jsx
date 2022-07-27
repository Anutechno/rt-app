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
import { BsExclamationOctagon } from "react-icons/bs";
import * as yup from "yup";

// Compoenents
// import Header from "../../components/auth/Header";
// import Footer from "../../components/auth/Footer";

// Styles
import "./textatemporarypassword.css";
import Footer from "../../../components/auth/Footer";
import Header from "../../../components/header/Header";

const TextATemporaryPassword = () => {
    const [authSpinner, setAuthSpinner] = useState(false);

    const UsernameSchema = yup.object({
        username: yup
            .string("Enter your Email or Username")
            .required("This email or username doesn't exit."),
    });

    return (
        <main>
            <div className="signInContainer authContainer temp-password">
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
                                <h2>Text a temporary password</h2>
                            </div>

                            <Formik
                                initialValues={{
                                    username: "",
                                }}
                                validationSchema={UsernameSchema}
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
                                        <p className="mt-0">
                                            Enter the username or email address
                                            associated with your
                                            NichoShop account.
                                        </p>

                                        <div className="textField">
                                            <TextField
                                                fullWidth
                                                id="username"
                                                name="username"
                                                label="Email or username"
                                                type="text"
                                                variant="outlined"
                                                size="small"
                                                className={
                                                    props.touched.username &&
                                                    props.errors.username
                                                        ? "error"
                                                        : ""
                                                }
                                                value={props.values.username}
                                                onChange={props.handleChange}
                                            />
                                            <ErrorMessage name="username">
                                                {(msg) => (
                                                    <p className="formError">
                                                        {msg}
                                                    </p>
                                                )}
                                            </ErrorMessage>
                                        </div>
                                        <div className="temp-password-btn">
                                            <button
                                                type="submit"
                                                className="themeBtn w-100"
                                            >
                                                Continue
                                            </button>

                                            <Link
                                                to="/signin"
                                                className="noBgThemeBtn mb-3 text-bold"
                                            >
                                                Cancel
                                            </Link>
                                        </div>
                                    </form>
                                )}
                            </Formik>
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

export default TextATemporaryPassword;
