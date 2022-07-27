import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { ReactComponent as Logo } from "./../../../assets/logo/logo.svg";
import FormFooter from "../../../components/FormFooter/FormFooter";
import { useState } from "react";
import { TextField } from "@mui/material";

import "react-phone-number-input/style.css";

const ChangeYourName = () => {
    const [getUserName, setUserName] = useState("");

    const [getFormSubmit, setFormSubmit] = useState(false);

    const usernameHandler = (e) => {
        setUserName(e.target.value);
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
                                <h4>Change your username</h4>
                                <p className="text-start ui-add-mob-info mb-3">
                                    <b>Current username:</b> username <br /> You
                                    can only change your username on every 30
                                    days.
                                </p>

                                <Form onSubmit={formHandler}>
                                    <Form.Group className="mb-3">
                                        <TextField
                                            id="outlined-basic"
                                            label="New NichoShop username"
                                            variant="outlined"
                                            size="small"
                                            fullWidth
                                            onChange={usernameHandler}
                                            value={getUserName}
                                            error={
                                                getFormSubmit &&
                                                getUserName.length < 1 &&
                                                true
                                            }
                                        />
                                        <span className="ui-form-lable-error">
                                            {getFormSubmit &&
                                                getUserName.length < 1 &&
                                                "The username is busy."}
                                        </span>
                                    </Form.Group>

                                    <Button variant="primary" type="submit">
                                        Save changes
                                    </Button>
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

export default ChangeYourName;
