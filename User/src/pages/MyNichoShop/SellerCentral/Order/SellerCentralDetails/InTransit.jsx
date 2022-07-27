import { Col, Container, Row } from "react-bootstrap";
import Menu from "../../../../../components/menu/Menu";
import Footer from "../../../../../components/MyNichoShop/footer/Footer";
import { Link } from "react-router-dom";
import Select from "react-select";
import { IoIosArrowDown } from "react-icons/io";
import "./sellercentraldetails.scss";
import { useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import SellerCentralProduct from "./Component/SellerCentralProduct/SellerCentralProduct";

const InTransit = () => {
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
    const [isDepoToggled, setDepoToggled] = useState(false);

    const tranToggleHandler = () => {
        setTranToggled(!isTranToggled);
    };
    const depoHandler = () => {
        setDepoToggled(!isDepoToggled);
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
                                <div className="ui-it-head">
                                    <h4>In transit</h4>
                                    <p>Delivery estimate: 22 Sep - 24 Sep</p>
                                    <ul>
                                        <li>Carrier:</li>
                                        <li>USPS</li>
                                    </ul>
                                    <ul>
                                        <li>Tracing number:</li>
                                        <li>GB12345678901234567890</li>
                                    </ul>
                                    <div className="ui-it-progress-bar">
                                        <div className="ui-pb-box">
                                            <div
                                                className="u-pb-step"
                                                style={{ width: "25%" }}
                                            >
                                                <div className="ui-pb-step-arrow">
                                                    <svg
                                                        width="15"
                                                        height="5"
                                                        viewBox="0 0 15 5"
                                                        fill="none"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                    >
                                                        <path
                                                            d="M7.5 5L5.1656e-07 -1.1917e-07L15 -1.43051e-06L7.5 5Z"
                                                            fill="#2AAC27"
                                                        />
                                                    </svg>
                                                </div>
                                            </div>
                                            <div className="ui-pb-step-name">
                                                <span className="step-active">
                                                    Accepted
                                                </span>
                                                <span>In transit</span>
                                                <span>OUT FOR DELIVERY</span>
                                                <span>delivered</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="ui-it-show-more">
                                        <OutsideClickHandler
                                            onOutsideClick={() => {
                                                setDepoToggled(false);
                                            }}
                                        >
                                            <button onClick={depoHandler}>
                                                Show More <IoIosArrowDown />
                                            </button>
                                            {isDepoToggled && (
                                                <ul>
                                                    <li>
                                                        <p>
                                                            Enroute to Carrier’s
                                                            Depot
                                                        </p>
                                                        <p>
                                                            29-Sep-17, 08:30 AM,
                                                            SHENZHEN
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            Enroute to Carrier’s
                                                            Depot
                                                        </p>
                                                        <p>
                                                            29-Sep-17, 08:30 AM,
                                                            SHENZHEN
                                                        </p>
                                                    </li>
                                                    <li>
                                                        <p>
                                                            Enroute to Carrier’s
                                                            Depot
                                                        </p>
                                                        <p>
                                                            29-Sep-17, 08:30 AM,
                                                            SHENZHEN
                                                        </p>
                                                    </li>
                                                </ul>
                                            )}
                                        </OutsideClickHandler>
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
                                        <p>Payment method</p>
                                        <div className="ui-scd-tit-date">
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
                                    <div className="ui-scd-t-info-four">
                                        <Select
                                            options={detailsOptionHandler}
                                        />
                                    </div>
                                </div>
                                <div className="ui-scd-transaction">
                                    <OutsideClickHandler
                                        onOutsideClick={() => {
                                            setTranToggled(false);
                                        }}
                                    >
                                        <button
                                            className={isTranToggled && "show"}
                                            onClick={tranToggleHandler}
                                        >
                                            Transactions <IoIosArrowDown />
                                        </button>
                                        {isTranToggled && (
                                            <ul>
                                                <li>
                                                    Refund Processing 22 Sep
                                                    2018 - US $123.45
                                                </li>
                                                <li>
                                                    Refund Processing 22 Sep
                                                    2018 - US $123.45
                                                </li>
                                            </ul>
                                        )}
                                    </OutsideClickHandler>
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

export default InTransit;
