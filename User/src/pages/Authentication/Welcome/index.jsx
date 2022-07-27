import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./../../../assets/logo/logo.svg";
import FormFooter from "../../../components/FormFooter/FormFooter";
import { useRef, useState } from "react";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { TextField } from "@mui/material";

import "react-phone-number-input/style.css";

const Welcome = () => {
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

    // submit form
    const [getPassword, setPassword] = useState("");

    const [getFormSubmit, setFormSubmit] = useState(false);

    // full name input handler

    const pwdHandler = (e) => {
        setPassword(e.target.value);
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
                                <h4>Welcome</h4>
                                <div className="ui-welcome-form-info pb-4 mb-4 border-bottom">
                                    <p>email@domain.com</p>
                                    <p>Not you? Switch account</p>
                                    <p>
                                        Please sign in again to make changes to
                                        your account.
                                    </p>
                                </div>

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
                                                "Enter Password"}
                                        </span>
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Sign in
                                    </Button>
                                </Form>
                                <div className="ui-form-signin-info">
                                    <div className="ui-stay-signin">
                                        <Form.Check
                                            type="checkbox"
                                            label="Stay signed in"
                                            id="stay-signin"
                                        />
                                    </div>
                                    <div className="ui-stay-signin-link">
                                        <Link to="/user/temporary-password">
                                            Text a temporary password
                                        </Link>
                                        <Link to="/user/forgot-password">
                                            Forgot your password?
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="ui-form-link">
                                <p>
                                    Create new a account,{" "}
                                    <Link to="/user/signup">
                                        Create an account
                                    </Link>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <FormFooter />
        </>
    );
};

export default Welcome;
