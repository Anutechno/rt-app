import { IoIosArrowForward } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Badge, Dropdown } from "react-bootstrap";
import "./sellercentraloverview.scss";
import Select from "react-select";
import ProductImg from "./../../../../assets/product-img/product.png";
import Menu from "../../../../components/menu/Menu";
import Footer from "../../../../components/MyNichoShop/footer/Footer";

const SellerCentralOverview = () => {

    return (
        <div>
            <Menu />
            <Container>
                <Row>
                    <Col>
                        <div className="ui-bread-crumb">
                            <Link to="/">My NichoShop</Link>
                            <IoIosArrowForward />
                            <span>Seller Central</span>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={2}>
                        <div className="ui-sco-left-top">
                            <h2>Seller Central </h2>
                            <button>Create listing</button>
                        </div>
                        <div className="ui-sco-tab">
                            <ul>
                                <li className="active">Overview</li>
                                <li>Listings</li>
                                <li>Orders</li>
                                <li>Shipping labels</li>
                            </ul>
                            <ul>
                                <li>Settings</li>
                                <li>Perfomance</li>
                            </ul>
                        </div>
                    </Col>
                    <Col lg={10}>
                        <div className="ui-sco-head-name">
                            <p>Overview</p>
                        </div>
                        <div className="d-flex justify-content-between">
                            <div className="overview-box flex-grow-1 me-2">
                                <div className="head p-3">
                                    <h5 className="mb-0">Orders</h5>
                                </div>
                                <div className="body p-3">
                                    <div className="d-flex justify-content-between">
                                        <span className="text-danger">Not shipped</span>
                                        <span>1,234</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>Awaiting shippment</span>
                                        <span>0</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>Awaiting shippment</span>
                                        <span>5</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>Buyer messages</span>
                                        <span>0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="overview-box flex-grow-1 me-2">
                                <div className="head p-3">
                                    <h5 className="mb-0">Requests</h5>
                                </div>
                                <div className="body p-3">
                                    <div className="d-flex justify-content-between">
                                        <span>Cancellation requests</span>
                                        <span>1</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>Not received items</span>
                                        <span>2</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>Return requests</span>
                                        <span>12</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>Chargeback</span>
                                        <span>0</span>
                                    </div>
                                </div>
                            </div>
                            <div className="overview-box flex-grow-1 me-2">
                                <div className="head p-3">
                                    <h5 className="mb-0">Listings</h5>
                                </div>
                                <div className="body p-3">
                                    <div className="d-flex justify-content-between">
                                        <span>Active listings</span>
                                        <span>1234</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>Out of stock</span>
                                        <span>5</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>Unsold items</span>
                                        <span>123</span>
                                    </div>
                                </div>
                            </div>
                            <div className="overview-box flex-grow-1">
                                <div className="head p-3">
                                    <h5 className="mb-0">Seller perfomance</h5>
                                </div>
                                <div className="body p-3">
                                    <div className="d-flex justify-content-between">
                                        <span>Seller level</span>
                                        <span className="text-success">Above standard</span>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>Positive feedback</span>
                                        <span>98.7%</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
};

export default SellerCentralOverview;
