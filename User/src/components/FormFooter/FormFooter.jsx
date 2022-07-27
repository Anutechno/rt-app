import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./formfooter.scss";

const FormFooter = () => {
    return (
        <div>
            <div className="form-footer-box">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg="7">
                            <div className="form-footer-content">
                                <p>
                                    Copyright 2017 NichoShop Inc. All rights
                                    reserved.
                                    <a href="#"> User agreement, Privicy</a> and
                                    <a href="#">Cookies</a>.
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default FormFooter;
