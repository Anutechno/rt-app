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
import { IoIosMail } from "react-icons/io";
import { BsChatLeftTextFill } from "react-icons/bs";

import * as yup from "yup";

// Compoenents
import Header from "../../../components/auth/Header";
import Footer from "../../../components/auth/Footer";

//Images
import Email from "../../../assets/authentication/email.svg";
import Text from "../../../assets/authentication/get-text.svg";
// Styles
import "./../auth.css";

const ChooseMethod = () => {
    const [authSpinner, setAuthSpinner] = useState(false);

    const UsernameSchema = yup.object({
        username: yup
            .string("Enter your Email or Username")
            .required("This email or username doesn't exit."),
    });

    return (
        <main>
            <div className="signInContainer authContainer">
                <Header>
                    Already a member?
                    <Link to="/user/signin" className="redirectLink ms-1">
                        Sign In
                    </Link>
                </Header>
                {/* Form Section  */}
                <section className="authFormSection choose-method">
                    <div className="container">
                        <div className="authFormBox">
                            <div className="formTitle">
                                <h2>
                                    How do you want to get your single-use code
                                </h2>
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
                                        <Link
                                            className="choose-option"
                                            to={"/auth/signup"}
                                        >
                                            <strong>
                                                <img
                                                    className="email"
                                                    src={Email}
                                                    alt="Email"
                                                />
                                                Get an email
                                            </strong>
                                            <p className="formError">
                                                We’ll send a code to your email
                                                example@gmail.com
                                            </p>
                                        </Link>

                                        <Link
                                            className="choose-option"
                                            to={"/auth/signup"}
                                        >
                                            <strong>
                                                <img
                                                    className="get-text"
                                                    src={Text}
                                                    alt="Text"
                                                />
                                                Get a text
                                            </strong>
                                            <p className="formError">
                                                We’ll text a code to your phone{" "}
                                                <strong>+XXXX XXXXX1234</strong>
                                            </p>
                                        </Link>
                                    </form>
                                )}
                            </Formik>

                            <div className="choose-option-txt">
                                <h2>Having trouble resetting your password?</h2>
                                <p>
                                    If you no longer use the email address or
                                    the mobile phone number associated with your
                                    NichoShop account, you can contact{" "}
                                    <Link to="/">Customer Support</Link> for
                                    help restoring access to your account.
                                </p>
                                <span>
                                    *By selecting to Get a text, mobile phone
                                    charges my apply.
                                </span>
                            </div>
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

export default ChooseMethod;
