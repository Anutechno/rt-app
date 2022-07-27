import { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import Menu from "../../../../components/menu/Menu";
import Footer from "../../../../components/MyNichoShop/footer/Footer";
import ConfigmAlert from "./component/ConfigmAlert";
import "./confirmshipment.scss";

const ConfirmShipment = () => {
    const [getIsCofigmAlert, setIsConfigmAlert] = useState(false);

    const alertCloseHandler = () => {
        setIsConfigmAlert(false);
    };
    return (
        <>
            <Menu />
            <div className="ui-configm-shipment-box">
                <Container>
                    <Row>
                        <Col>
                            <div className="ui-confirm-shipment-content">
                                <h4>Confirm shipment</h4>
                                <div className="ui-cs-box">
                                    <div className="ui-cs-body">
                                        <ul>
                                            <li>Order ID #:</li>
                                            <li>
                                                <a href="#">12345678-123456</a>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>Buyer:</li>
                                            <li>buyer_username</li>
                                        </ul>
                                    </div>
                                    <div className="ui-cs-body">
                                        <ul>
                                            <li>Items in the package:</li>
                                            <li>
                                                <a href="#">
                                                    EE PAY AS YOU GO 4G prepaid
                                                    sim car with preloaded US
                                                    $150.50 for calls,
                                                    everything in one package
                                                </a>
                                                <ul>
                                                    <li>NSLN: 123456789012</li>
                                                    <li>
                                                        Size: S, Main color:
                                                        Blue
                                                    </li>
                                                    <li>Condition: New</li>
                                                </ul>
                                                <Form.Select aria-label="Default select example">
                                                    <option>Qty: 1</option>
                                                    <option value="1">
                                                        Qty: 2
                                                    </option>
                                                    <option value="2">
                                                        Qty: 3
                                                    </option>
                                                    <option value="3">
                                                        Qty: 4
                                                    </option>
                                                </Form.Select>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="ui-cs-body">
                                        <ul>
                                            <li>Items in the package:</li>
                                            <li>
                                                <ul>
                                                    <li>Name Surname</li>
                                                    <li>1234 EL CAMINO REAL</li>
                                                    <li>STE - 100386</li>
                                                    <li>
                                                        SUNNYVALE CA 98765-4321
                                                    </li>
                                                    <li>United States</li>
                                                    <li>
                                                        Phone: + 1 234-5678-900
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="ui-cs-body">
                                        <ul>
                                            <li>Ship date:</li>
                                            <li className="ui-cs-big-select">
                                                <Form.Select aria-label="Default select example">
                                                    <option selected>
                                                        Choose One
                                                    </option>
                                                    <option>
                                                        Wednesday, September 29,
                                                        2017
                                                    </option>
                                                    <option value="1">
                                                        Wednesday, September 29,
                                                        2017
                                                    </option>
                                                    <option value="2">
                                                        Monday, September 28,
                                                        2017
                                                    </option>
                                                    <option value="3">
                                                        Sunday, September 28,
                                                        2017
                                                    </option>
                                                    <option value="3">
                                                        Other
                                                    </option>
                                                </Form.Select>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>Shipping carrier:</li>
                                            <li className="ui-cs-big-select">
                                                <Form.Select aria-label="Default select example">
                                                    <option>Choose One</option>
                                                    <option>Example 19</option>
                                                    <option value="1">
                                                        Example 20
                                                    </option>
                                                    <option value="1">
                                                        Example 21
                                                    </option>
                                                    <option value="1">
                                                        Example 22
                                                    </option>
                                                    <option value="3">
                                                        Other
                                                    </option>
                                                </Form.Select>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>Tracking ID:</li>
                                            <li className="ui-cs-big-select">
                                                <Form.Select aria-label="Default select example">
                                                    <option>Choose One</option>
                                                    <option>
                                                        Wednesday, September 29,
                                                        2017
                                                    </option>
                                                    <option value="1">
                                                        Wednesday, September 29,
                                                        2017
                                                    </option>
                                                    <option value="2">
                                                        Monday, September 28,
                                                        2017
                                                    </option>
                                                    <option value="3">
                                                        Sunday, September 28,
                                                        2017
                                                    </option>
                                                    <option value="3">
                                                        Other
                                                    </option>
                                                </Form.Select>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="ui-cs-btn">
                                        <button
                                            onClick={() => {
                                                setIsConfigmAlert(true);
                                            }}
                                        >
                                            Confirm shipment
                                        </button>
                                        <button>Cencel</button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            {getIsCofigmAlert && (
                <ConfigmAlert alertCloseHandler={alertCloseHandler} />
            )}

            <Footer />
        </>
    );
};

export default ConfirmShipment;
