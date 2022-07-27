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
    TextField,
} from "@mui/material";

import "react-phone-number-input/style.css";

const SucCode = () => {
    const [getSocCode, setSocCode] = useState("");

    const [getFormSubmit, setFormSubmit] = useState(false);

    const soccodeHandler = (e) => {
        setSocCode(e.target.value);
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
                                <p className="text-start ui-add-mob-info mb-3">
                                    A text with a Single-Use Code (SUC) has been
                                    sent to your mobile phone number: <br />
                                    <b>+44 1234567890</b>
                                </p>

                                <Form onSubmit={formHandler}>
                                    <Form.Group className="mb-3">
                                        <TextField
                                            id="outlined-basic"
                                            label="Enter SUC"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            onChange={soccodeHandler}
                                            value={getSocCode}
                                            error={
                                                getFormSubmit &&
                                                getSocCode.length < 1 &&
                                                true
                                            }
                                        />
                                        <span className="ui-form-lable-error">
                                            {getFormSubmit &&
                                                getSocCode.length < 1 &&
                                                "The code you entered is different from the one we texted."}
                                        </span>
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Verify
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

export default SucCode;
