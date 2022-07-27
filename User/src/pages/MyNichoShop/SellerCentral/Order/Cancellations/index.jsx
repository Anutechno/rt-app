import { IoIosArrowForward } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Badge, Dropdown } from "react-bootstrap";
import Select from "react-select";
import ProductImg from "../../../../../assets/product-img/product.png";
import Menu from "../../../../../components/menu/Menu";
import Footer from "../../../../../components/MyNichoShop/footer/Footer";

const SellerCentralOrderCancellations = () => {
    const allOrderOption = [
        {
            value: "open-cancellations",
            label: "Open cancellations",
        },
        {
            value: "cancellations-declined",
            label: "Cancellations declined",
        },
        {
            value: "cancelled",
            label: "Canceled",
        },
    ];

    const timeOption = [
        {
            value: "this-week",
            label: "This week",
        },
        {
            value: "last-14-days",
            label: "Last 14 days",
        },
        {
            value: "30-days",
            label: "Last 30 days",
        },
        {
            value: "60-days",
            label: "Last 60 days",
        },
        {
            value: "90-days",
            label: "Last 90 days",
        },
        {
            value: "last-6-months",
            label: "Last 6 months",
        },
    ];

    const searchOption = [
        {
            value: "buyer-username",
            label: "Buyer username",
        },
        {
            value: "order-id",
            label: "Order ID",
        },
    ];

    const sortOption = [
        {
            value: "1",
            label: "Date requested (ascending)",
        },
        {
            value: "2",
            label: "Date requested (descending)",
        },
    ];

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
                                <li>Overview</li>
                                <li>Listings</li>
                                <li className="active">Orders</li>
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
                            <p>Orders</p>
                        </div>
                        <div className="ui-sco-tab-filter-box">
                            <div className="ui-sco-head-tab">
                                <button>Orders</button>
                                <button className="active">
                                    <span>2</span> Cancellations
                                </button>
                                <button>
                                    <span>1</span> Claims
                                </button>
                                <button>
                                    <span>9</span> Returns
                                </button>
                                <button>
                                    <span>0</span> Chargebacks
                                </button>
                            </div>
                            <div className="ui-sco-head-filter">
                                <Select options={allOrderOption} />
                                <Select options={timeOption} />
                                <div className="ui-sco-search-box">
                                    <div className="ui-sco-search">
                                        <Select options={searchOption} />
                                        <Form.Control
                                            type="text"
                                            aria-describedby="passwordHelpBlock"
                                            placeholder="Search..."
                                        />
                                        <button>
                                            <BiSearch />
                                        </button>
                                    </div>
                                    <button>Reset</button>
                                </div>
                            </div>
                            <p>Results: 9</p>
                        </div>
                        <div className="ui-soc-table-head justify-content-end">
                            <div className="ui-soc-table-head-rigth">
                                <p>Sort by:</p>
                                <Select options={sortOption} />
                            </div>
                        </div>
                        <div className="ui-soc-table">
                            <table>
                                <tbody>
                                    <tr>
                                        <td width={"25%"}>
                                            <div className="status-box">
                                                <p><strong>Status:</strong></p>
                                                <p className="mb-3">Awaiting your action</p>
                                                <p>Date requested: 22 Sep 2017</p>
                                                <p>Order ID: <span> 12345678-123456</span></p>
                                                <p>Buyer: buyer’s_username</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p><strong>Reason:</strong></p>
                                            <p className="text-danger"><strong>Order created by mistake</strong></p>
                                            <div className="d-flex">
                                                <div className="ui-table-photo">
                                                    <img
                                                        src={ProductImg}
                                                        alt="product"
                                                    />
                                                </div>
                                                <div className="ui-table-photo-info ps-3">
                                                    <p>
                                                        Norton Security Deluxe 2016
                                                        - 1Year / 3 Devices
                                                        (Windows, Max OS, Android
                                                        and IOS)
                                                    </p>
                                                    <ul>
                                                        <li>NSLN: 123456789012</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                        <td width={"25%"}>
                                            <button className="btn btn-primary w-100">View details</button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td width={"25%"}>
                                            <div className="status-box">
                                                <p><strong>Status:</strong></p>
                                                <p className="mb-3">Awaiting your action</p>
                                                <p>Date requested: 22 Sep 2017</p>
                                                <p>Order ID: <span> 12345678-123456</span></p>
                                                <p>Buyer: buyer’s_username</p>
                                            </div>
                                        </td>
                                        <td>
                                            <p><strong>Reason:</strong></p>
                                            <p className="text-danger"><strong>Delivery cost too high</strong></p>
                                            <div className="d-flex">
                                                <div className="ui-table-photo">
                                                    <img
                                                        src={ProductImg}
                                                        alt="product"
                                                    />
                                                </div>
                                                <div className="ui-table-photo-info ps-3">
                                                    <p>
                                                        Norton Security Deluxe 2016
                                                        - 1Year / 3 Devices
                                                        (Windows, Max OS, Android
                                                        and IOS)
                                                    </p>
                                                    <ul>
                                                        <li>NSLN: 123456789012</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </td>
                                        <td width={"25%"}>
                                            <button className="btn btn-primary w-100">View details</button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="ui-soc-table-pagination">
                            <div class="ui-td-pag-box rounded-bottom d-flex align-items-center justify-content-between">
                                <p>Page 1 of 4</p>
                                <div class="ui-td-pag d-flex align-items-center gap-2">
                                    <button>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 24 24"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill="none"
                                                d="M0 0h24v24H0V0z"
                                            ></path>
                                            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"></path>
                                        </svg>
                                    </button>
                                    <div class="ui-td-pag-no">
                                        <button>1</button>
                                        <button class="active">2</button>
                                        <button>3</button>
                                        <button>4</button>
                                    </div>
                                    <button>
                                        <svg
                                            stroke="currentColor"
                                            fill="currentColor"
                                            stroke-width="0"
                                            viewBox="0 0 24 24"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                fill="none"
                                                d="M0 0h24v24H0V0z"
                                            ></path>
                                            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"></path>
                                        </svg>
                                    </button>
                                </div>
                                <div class="ui-td-per-page-select d-flex align-items-center gap-2">
                                    <p>Results per page</p>
                                    <select
                                        aria-label="Default select example"
                                        class="form-select"
                                    >
                                        <option>10</option>
                                        <option value="1">15</option>
                                        <option value="2">20</option>
                                        <option value="3">25</option>
                                        <option value="3">30</option>
                                    </select>
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

export default SellerCentralOrderCancellations;
