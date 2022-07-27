import { Col, Container, Row } from "react-bootstrap";
import Menu from "../../../../../components/menu/Menu";
import Footer from "../../../../../components/MyNichoShop/footer/Footer";
import { Link } from "react-router-dom";
import "./sellercentraldetails.scss";
import OrderInvoiceItem from "./Component/OrderInvoiceItem/OrderInvoiceItem";

const OrderInvoice = () => {
    return (
        <>
            <Menu />
            <div className="ui-scd-box">
                <Container>
                    <Row>
                        <Col>
                            <div className="ui-scd-table-box">
                                <div className="ui-oi-head">
                                    <div className="ui-scd-head">
                                        <h4>Order details</h4>
                                    </div>
                                    <div className="ui-scd-head-order-info">
                                        <ul>
                                            <li>
                                                <span>Order:</span> #
                                                123456789-12345
                                            </li>
                                            <li>
                                                <span>Ordered on:</span> 22 Sep
                                                2017
                                            </li>
                                            <li>
                                                <span>Buyer: </span>
                                                <Link to="/">
                                                    buyer_username
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="ui-scd-t-info">
                                    <div className="ui-scd-t-info-one">
                                        <p>Order summary</p>
                                        <ul>
                                            <li>Subtotal (2 items):</li>
                                            <li>
                                                <b>US $1,234.56</b>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>Shipping cost:</li>
                                            <li>
                                                <b>US $123.45</b>
                                            </li>
                                        </ul>
                                        <ul>
                                            <li>
                                                <b>Total</b>
                                            </li>
                                            <li>
                                                <b>US $1,234.56</b>
                                            </li>
                                        </ul>
                                        <ul className="ui-scd-refund">
                                            <li>
                                                <b>Refund total</b>
                                            </li>
                                            <li>
                                                <b>US $1,234.56</b>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="ui-scd-t-info-two">
                                        <p>Paid on</p>
                                        <div class="ui-scd-tit-date">
                                            <p>22 May 2019 12:34 AM</p>
                                        </div>
                                    </div>
                                    <div className="ui-scd-t-info-three">
                                        <p>Shipping address</p>
                                        <ul>
                                            <li>Name Surname</li>
                                            <li>1234 EL CAMINO REAL</li>
                                            <li>STE - 100386</li>
                                            <li>SUNNYVALE CA 98765-4321</li>
                                            <li>United States</li>
                                            <li>Phone: + 1 234-5678-900</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="ui-scd-ordered-item">
                                    <div className="ui-scd-ri-head">
                                        <p>Ordered item(s)</p>
                                    </div>
                                    <OrderInvoiceItem />
                                    <OrderInvoiceItem />
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    );
};

export default OrderInvoice;
