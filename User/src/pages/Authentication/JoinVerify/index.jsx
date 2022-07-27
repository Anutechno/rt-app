import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import OutsideClickHandler from "react-outside-click-handler";
import { getStore } from "./../../../helper/storeHelper";
import { ReactComponent as Logo } from "./../../../assets/logo/logo.svg";

const JoinVerify = () => {
    /**
     * sign up : email verification data store
     */
    const [getSignUpInfo, setSignUpInfo] = useState();
    useEffect(() => {
        const data = getStore("signup_data");
        setSignUpInfo(data);
    }, []);

    // main options
    const [getMailBoxClicked, setIsMailBoxClicked] = useState(false);
    return (
        <>
            <div className="ui-join-mail-activation mb-4">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={8}>
                            <div className="d-flex justify-content-center p-4">
                                <Logo />
                            </div>
                            <div className="ui-join-box">
                                <div className="ui-join-head">
                                    <h4>
                                        Hi John, you have successfully joined
                                        NichoShop.
                                    </h4>
                                </div>
                                <div className="ui-join-content">
                                    <p>
                                        An email containing an activation link
                                        has been sent to: <br />
                                        <b>{getSignUpInfo?.email}</b>
                                    </p>
                                    <p>
                                        Please log in your email and click the
                                        activation link within 24 hours to
                                        complete your registration.
                                    </p>
                                    <div className="ui-join-mail-box">
                                        <OutsideClickHandler
                                            onOutsideClick={() => {
                                                setIsMailBoxClicked(false);
                                            }}
                                        >
                                            <button
                                                onClick={() => {
                                                    setIsMailBoxClicked(
                                                        !getMailBoxClicked
                                                    );
                                                }}
                                            >
                                                I haven’t received the email
                                            </button>
                                            {getMailBoxClicked && (
                                                <div className="ui-join-mail-info">
                                                    <ul>
                                                        <li>
                                                            Please check your
                                                            spam folder
                                                        </li>
                                                        <li>
                                                            <p>
                                                                If you haven’t
                                                                received the
                                                                email
                                                                <button>
                                                                    Click here
                                                                    to resend
                                                                    the email
                                                                </button>
                                                            </p>
                                                        </li>
                                                        <li>
                                                            <p>
                                                                Still not
                                                                received?
                                                                <button>
                                                                    Try using
                                                                    another
                                                                    email
                                                                    address
                                                                </button>
                                                            </p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            )}
                                        </OutsideClickHandler>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default JoinVerify;
