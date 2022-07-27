import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Select from "react-select";
import "./sellercentraldetails.scss";
import { useState } from "react";
import SellerCentralProduct from "./Component/SellerCentralProduct/SellerCentralProduct";
import Menu from "../../../../../components/menu/Menu";
import Footer from "../../../../../components/MyNichoShop/footer/Footer";

const NotYetPaid = () => {
    const detailsOptionHandler = [
        {
            value: "1",
            label: "Print packaging slip",
        },
        {
            value: "2",
            label: "Sell similar",
        },
        {
            value: "3",
            label: "Relist",
        },
        {
            value: "4",
            label: "Cancel this order",
        },
        {
            value: "5",
            label: "Report this buyer",
        },
    ];

    const [isTranToggled, setTranToggled] = useState(false);

    const tranToggleHandler = () => {
        setTranToggled(!isTranToggled);
    };
    return (
        <>
            <Menu />
            <div className="ui-scd-box">
                <Container>
                    <Row>
                        <Col>
                            <div className="ui-scd-head">
                                <h4>Order details</h4>
                            </div>
                        </Col>
                    </Row>
                    <Row className="justify-content-between">
                        <Col lg={5}>
                            <div className="ui-scd-head-order-info">
                                <ul>
                                    <li>
                                        <span>Order:</span> # 123456789-12345
                                    </li>
                                    <li>
                                        <span>Ordered on:</span> 22 Sep 2017
                                    </li>
                                    <li>
                                        <span>Buyer: </span>
                                        <Link to="/">buyer_username</Link>
                                    </li>
                                </ul>
                            </div>
                        </Col>
                        <Col lg="3">
                            <div className="ui-scd-head-print-btn">
                                <button>
                                    <svg
                                        width="27"
                                        height="22"
                                        viewBox="0 0 27 22"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <rect
                                            x="1.26318"
                                            y="12.0791"
                                            width="24.4735"
                                            height="9.42098"
                                            rx="0.5"
                                            stroke="#0072BC"
                                        />
                                        <rect
                                            x="5.896"
                                            y="0.499969"
                                            width="15.2104"
                                            height="11.7367"
                                            rx="0.5"
                                            stroke="#0072BC"
                                        />
                                        <path
                                            d="M18.1304 15.0527H21.604"
                                            stroke="#0072BC"
                                            stroke-linecap="round"
                                        />
                                        <path
                                            d="M4.23584 17.3684H22.762"
                                            stroke="#0072BC"
                                            stroke-linecap="round"
                                        />
                                    </svg>
                                    Printable order details
                                </button>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <div className="ui-scd-table-box">
                                <div className="ui-scd-tb-head">
                                    <h4>Not yet paid</h4>
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
                                    </div>
                                    <div className="ui-scd-t-info-two">
                                        <p>Payment method</p>
                                        <p>Not yet paid</p>
                                    </div>
                                    <div className="ui-scd-t-info-three">
                                        <p>Shipping address</p>
                                    </div>
                                    <div className="ui-scd-t-info-four">
                                        <Select
                                            options={detailsOptionHandler}
                                        />
                                    </div>
                                </div>
                                <div className="ui-scd-ordered-item">
                                    <div className="ui-scd-ri-head">
                                        <p>Ordered item(s)</p>
                                    </div>
                                    <SellerCentralProduct />
                                    <SellerCentralProduct />
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

export default NotYetPaid;
