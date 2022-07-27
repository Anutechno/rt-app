import Menu from "../../../components/menu/Menu";
import Footer from "../../../components/MyNichoShop/footer/Footer";
import {
    IoIosArrowForward,
    IoIosArrowBack,
    IoIosArrowDown,
} from "react-icons/io";
import { Container, Row, Col, Card, Form, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./199.scss";
import { useState } from "react";

const TextATemporaryPasswordMsg = () => {
    const [isMsgOpen, setIsMsgOpen] = useState(false);
    const allMsgHandler = () => {
        setIsMsgOpen(!isMsgOpen);
    };
    return (
        <div>
            <Menu />
            <Container>
                <Row>
                    <Col>
                        <div className="ui-bread-crumb">
                            <Link to="/">My NichoShop</Link>
                            <IoIosArrowForward />
                            <span>Messages</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={3}>
                        <div className="ui-ttp-filter ">
                            <h2>Messages</h2>
                            <Card className="p-3">
                                <Form.Check
                                    type="radio"
                                    label="Inbox"
                                    id="inbox"
                                />
                                <div className="ui-ttp-toggle">
                                    <button
                                        className={isMsgOpen && "show"}
                                        onClick={allMsgHandler}
                                    >
                                        <IoIosArrowForward /> All messages
                                    </button>
                                    {isMsgOpen && (
                                        <div className="ui-ttp-toggle-list">
                                            <ul>
                                                <li>Related my purchases</li>
                                                <li>9,999</li>
                                            </ul>
                                            <ul>
                                                <li>Related my sales</li>
                                                <li></li>
                                            </ul>
                                            <ul>
                                                <li>My account</li>
                                                <li>2</li>
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            </Card>
                            <div className="ui-ttp-radio-option p-3">
                                <Form.Check
                                    type="radio"
                                    label="Sent"
                                    id="sent"
                                    value="sent"
                                    name="radio-group"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Trash"
                                    id="trash"
                                    value="trash"
                                    name="radio-group"
                                />
                                <Form.Check
                                    type="radio"
                                    label="Folders"
                                    value="folders"
                                    id="folders"
                                    name="radio-group"
                                />
                            </div>
                        </div>
                    </Col>
                    <Col lg={9}>
                        <div className="ui-ttp-box border rounded">
                            <div className="ui-ttp-header p-3 border-bottom">
                                <button>
                                    <IoIosArrowBack /> Back
                                </button>
                                <button>Delete</button>
                                <Dropdown>
                                    <Dropdown.Toggle>
                                        Move to <IoIosArrowDown />
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">
                                            Action
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">
                                            Another action
                                        </Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">
                                            Something else
                                        </Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                            <div className="ui-ttp-mail-head p-3 border-bottom">
                                <h4>NichoShop password assistant</h4>
                                <p>
                                    From: <span>NichoShop</span>
                                </p>
                                <p>
                                    Sent: <span>20 Aug 2016 16:59</span>
                                </p>
                            </div>
                            <div className="ui-ttp-mail-info p-3">
                                <h4>Hello Name,</h4>
                                <p>
                                    To verify your identify, please use the
                                    following Single-Use Code (SUC):
                                </p>

                                <h2>012345</h2>
                                <p>Please pay attention:</p>
                                <ul>
                                    <li>
                                        NichoShop will never email you and ask
                                        you to disclose or confirm your
                                        NichoShop password or Credit and Debit
                                        cards.
                                    </li>
                                    <li>
                                        In order to protect your NichoShop
                                        account, please do not allow others
                                        access to your email.
                                    </li>
                                    <li>
                                        If you receive a suspicious email with a
                                        link to update or confirm your account
                                        information, NEVER click on the link —
                                        instead, contact us and report the email
                                        to NichoShop for investigation.
                                    </li>
                                </ul>
                            </div>
                            <div className="ui-ttp-mail-footer p-3 border-top">
                                <p>
                                    This email was sent from a notification-only
                                    address that can’t accept incoming emails.
                                    Please do not reply to this message.
                                </p>
                                <p>Email reference ID: ms#123456789012345</p>
                                <p>
                                    © 2017 NichoShop Inc., NichoShop S.a.r.l. 3
                                    Europe Road, GX11 1AA, Gibraltar
                                </p>
                                <p>
                                    Copyright © 2017 NichoShop Inc. All Rights
                                    Reserved
                                </p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default TextATemporaryPasswordMsg;
