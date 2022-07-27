import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./../../../assets/logo/logo.svg";
import FormFooter from "../../../components/FormFooter/FormFooter";
import { useRef, useState } from "react";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { TextField } from "@mui/material";

import "react-phone-number-input/style.css";

const ChangeNewPassword = () => {
    const pwdInputRef = useRef();

    // is password show & hidden
    const [isPwdShow, setPwdShow] = useState(false);

    // pasword show & hidden
    const isPwdShowedHandler = () => {
        if (pwdInputRef.current.querySelector("input").type == "password") {
            pwdInputRef.current.querySelector("input").type = "text";
            setPwdShow(true);
        } else {
            pwdInputRef.current.querySelector("input").type = "password";
            setPwdShow(false);
        }
    };

    // pasword validation
    const [getPwdLength, setPwdLength] = useState(false);
    const [getNumOrSimble, setNumOrSimble] = useState(false);
    const [getPwdInSensitive, setPwdInSensitive] = useState(false);
    const [getTotalLength, setTotalLength] = useState(0);

    // submit form
    const [getPassword, setPassword] = useState("");

    const [getFormSubmit, setFormSubmit] = useState(false);

    // full name input handler

    const pwdHandler = (e) => {
        setPassword(e.target.value);
        setPassword(e.target.value);
        e.target.value.length !== 0 ? setPwdLength(true) : setPwdLength(false);

        setTotalLength(e.target.value.length);

        if (e.target.value.length !== 0) {
            e.target.value.match(/[^a-zA-z]/) !== null
                ? setNumOrSimble(true)
                : setNumOrSimble(false);
        } else {
            setNumOrSimble(false);
        }
        if (e.target.value.length !== 0) {
            e.target.value.match(/[a-zA-Z]/) !== null
                ? setPwdInSensitive(true)
                : setPwdInSensitive(false);
        } else {
            setPwdInSensitive(false);
        }
    };

    // form data submit
    const formHandler = async (e) => {
        e.preventDefault();
        setFormSubmit(true);
    };
    return (
        <>
            <div className="ui-form-box">
                <Container>
                    <Row>
                        <Col>
                            <div className="ui-form-logo">
                                <Logo />
                            </div>
                            <div className="ui-form-content">
                                <h4>Create new password</h4>
                                <p className="text-start ui-add-mob-info mb-3">
                                    We’ll ask for this password whenever you
                                    sign in.
                                </p>
                                <Form onSubmit={formHandler}>
                                    <Form.Group className="mb-3">
                                        <div className="ui-form-pwd">
                                            <TextField
                                                id="outlined-basic"
                                                label="Password"
                                                variant="outlined"
                                                size="small"
                                                fullWidth
                                                type="password"
                                                ref={pwdInputRef}
                                                onChange={pwdHandler}
                                                value={getPassword}
                                                error={
                                                    getFormSubmit &&
                                                    getPassword.length < 1 &&
                                                    true
                                                }
                                            />
                                            <button
                                                onClick={isPwdShowedHandler}
                                                type="button"
                                            >
                                                {isPwdShow ? (
                                                    <BsEye />
                                                ) : (
                                                    <BsEyeSlash />
                                                )}
                                            </button>
                                        </div>

                                        <span className="ui-form-lable-error">
                                            {getFormSubmit &&
                                                getPassword.length < 1 &&
                                                "Please enter your new password."}
                                        </span>
                                    </Form.Group>

                                    <div className="ui-pwd-strength">
                                        {getTotalLength === 0 ? (
                                            <>
                                                <p>Too low</p>
                                            </>
                                        ) : (
                                            <>
                                                {getTotalLength <= 2 && (
                                                    <>
                                                        <p>Too low</p>
                                                    </>
                                                )}
                                                {getTotalLength <= 5 &&
                                                    getTotalLength > 2 && (
                                                        <>
                                                            <p>Medium</p>
                                                        </>
                                                    )}
                                                {getTotalLength > 5 && (
                                                    <>
                                                        <p>Strong</p>
                                                    </>
                                                )}
                                            </>
                                        )}
                                        <div className="ul-pwd-mark-circle">
                                            {getTotalLength === 0 ? (
                                                <>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                    <span></span>
                                                </>
                                            ) : (
                                                <>
                                                    {getTotalLength <= 2 && (
                                                        <>
                                                            <span class="low"></span>
                                                            <span class="low"></span>
                                                            <span></span>
                                                            <span></span>
                                                            <span></span>
                                                        </>
                                                    )}
                                                    {getTotalLength <= 5 &&
                                                        getTotalLength > 2 && (
                                                            <>
                                                                <span class="medium"></span>
                                                                <span class="medium"></span>
                                                                <span class="medium"></span>
                                                                <span></span>
                                                                <span></span>
                                                            </>
                                                        )}
                                                    {getTotalLength > 5 && (
                                                        <>
                                                            <span class="strong"></span>
                                                            <span class="strong"></span>
                                                            <span class="strong"></span>
                                                            <span class="strong"></span>
                                                            <span class="strong"></span>
                                                        </>
                                                    )}
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <ul className="ui-form-pwd-notify">
                                        {!getPwdLength && (
                                            <li>At least 8 characters.</li>
                                        )}
                                        {!getNumOrSimble && (
                                            <li>
                                                Besides letters include at least
                                                a number or symbol.
                                            </li>
                                        )}
                                        {!getPwdInSensitive && (
                                            <li>Password is case-sensitive.</li>
                                        )}
                                        <li>
                                            Avoid using the same passwort for
                                            miltiple sites.
                                        </li>
                                    </ul>
                                    <Button variant="primary" type="submit">
                                        Sign in
                                    </Button>
                                    <div className="d-flex justify-content-center">
                                        <button className="ui-add-mob-not-now">
                                            Resend SUC
                                        </button>
                                    </div>
                                </Form>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <FormFooter />
        </>
    );
};

export default ChangeNewPassword;
