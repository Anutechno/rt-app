import { Col, Container, Row } from "react-bootstrap";
import Menu from "../../../../components/menu/Menu";
import Footer from "../../../../components/MyNichoShop/footer/Footer";
import "./messagesent.scss";

const MessageSent = () => {
    return (
        <>
            <Menu />
            <div className="ui-ms-box">
                <Container>
                    <Row>
                        <Col md={8} xl={6}>
                            <div className="ui-ms-content">
                                <h4>
                                    <svg
                                        width="35"
                                        height="25"
                                        viewBox="0 0 35 25"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M34.5607 0.43934C35.1464 1.02513 35.1464 1.97487 34.5607 2.56066L12.5607 24.5607C11.9749 25.1464 11.0251 25.1464 10.4393 24.5607L0.43934 14.5607C-0.146447 13.9749 -0.146447 13.0251 0.43934 12.4393C1.02513 11.8536 1.97487 11.8536 2.56066 12.4393L11.5 21.3787L32.4393 0.43934C33.0251 -0.146447 33.9749 -0.146447 34.5607 0.43934Z"
                                            fill="#2AAC27"
                                        />
                                    </svg>
                                    Message sent
                                </h4>
                                <p>
                                    Your message has been sent to{" "}
                                    <b>username</b>
                                </p>
                                <p>
                                    You should expect a response within 1-2
                                    working days. A copy of this message is in
                                    your Messages <a href="#">Sent</a> folder.
                                </p>

                                <ul>
                                    <li>
                                        <a href="#">View item details</a>
                                        <p>
                                            ( Norton Mobile Security For Android
                                            Light Efition #282998417207)
                                        </p>
                                    </li>
                                    <li>
                                        <a href="#">Watch this item</a>
                                    </li>
                                    <li>
                                        <a href="#">Go to Messages</a>
                                    </li>
                                    <li>
                                        <a href="#">Go to My NichoShop</a>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default MessageSent;
