import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "./../../../assets/logo/logo.svg";
import FormFooter from "../../../components/FormFooter/FormFooter";
import { useRef, useState } from "react";
import {
    FormControl,
    InputAdornment,
    InputLabel,
    OutlinedInput,
} from "@mui/material";

import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

const AddMobile = () => {
    // get country code
    const [getCountryCode, setCountryCode] = useState("");

    // store phone number with country code
    const [getPhoneNumber, setPhoneNumber] = useState("");

    const [getFormSubmit, setFormSubmit] = useState(false);

    const phoneNumberHandler = (e) => {
        setPhoneNumber(e.target.value);
    };

    // form data submit
    const formHandler = (e) => {
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
                                <h4>Add mobile number</h4>
                                <p className="text-start ui-add-mob-info">
                                    Add a mobile phone number for a higher level
                                    of protection to your NichoShop account.
                                    Make sure your mobile number is up to date
                                    because it is an important part of your
                                    account security.
                                </p>

                                <Form onSubmit={formHandler}>
                                    <div className="ui-phone-no my-3">
                                        <FormControl
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            error={
                                                getFormSubmit &&
                                                getPhoneNumber.length == 0
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
                                                onChange={phoneNumberHandler}
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
                                        <span className="ui-form-lable-error">
                                            {getFormSubmit &&
                                                getPhoneNumber.length < 1 &&
                                                "Please enter a valid mobile number."}
                                        </span>
                                    </div>

                                    <Button variant="primary" type="submit">
                                        Add mobile number
                                    </Button>

                                    <div className="d-flex justify-content-center">
                                        <button className="ui-add-mob-not-now">
                                            Not now
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

export default AddMobile;
