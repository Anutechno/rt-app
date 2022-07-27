import { IoIosArrowForward } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Badge, Dropdown } from "react-bootstrap";
import "./sellercentralorder.scss";
import Select from "react-select";
import ProductImg from "./../../../../assets/product-img/product.png";
import Menu from "../../../../components/menu/Menu";
import Footer from "../../../../components/MyNichoShop/footer/Footer";

const SellerCentralOrder = () => {
    const allOrderOption = [
        {
            value: "all-orders",
            label: "All orders",
        },
        {
            value: "awaiting-payment",
            label: "Awaiting payment",
        },
        {
            value: "awaiting-shipment",
            label: "Awaiting shipment",
        },
        {
            value: "paid-shipped",
            label: "Paid and shipped",
        },
    ];

    const timeOption = [
        {
            value: "24-hours",
            label: "Last 24 hours",
        },
        {
            value: "3-days",
            label: "Last 3 days",
        },
        {
            value: "7-days",
            label: "Last 7 days",
        },
        {
            value: "14-days",
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
            value: "180-days",
            label: "Last 180 days",
        },
    ];
    const searchOption = [
        {
            value: "nsln",
            label: "NSLN",
        },
        {
            value: "item-title",
            label: "Item title",
        },
        {
            value: "order-id",
            label: "Order ID",
        },
        {
            value: "buyer-username",
            label: "Buyer username",
        },
    ];

    const actionOnSelectedOption = [
        {
            value: "make-as-dispatched",
            label: "Mark as dispatched",
        },
        {
            value: "buy-a-shippinh-label",
            label: "Buy a shipping label",
        },
    ];

    const sortOption = [
        {
            value: "1",
            label: "Date sold (ascending)",
        },
        {
            value: "2",
            label: "Date sold (descending)",
        },
        {
            value: "3",
            label: "Ship by date (ascending)",
        },
        {
            value: "4",
            label: "Ship by date (descending)",
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
                                <button className="active">Orders</button>
                                <button>
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
                        <div className="ui-soc-table-head">
                            <div className="ui-soc-table-head-left">
                                <Form.Check type="checkbox" />
                                <div className="ui-soc-thl-select">
                                    <Select options={actionOnSelectedOption} />
                                    <svg
                                        width="10"
                                        height="21"
                                        viewBox="0 0 10 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4.91016 20.4023C5.15625 20.6484 5.56641 20.6484 5.8125 20.4023L9.53125 16.6836C9.80469 16.4102 9.80469 16 9.53125 15.7539L8.92969 15.125C8.65625 14.8789 8.24609 14.8789 8 15.125L5.34766 17.7773L2.72266 15.125C2.47656 14.8789 2.06641 14.8789 1.79297 15.125L1.19141 15.7539C0.917969 16 0.917969 16.4102 1.19141 16.6836L4.91016 20.4023Z"
                                            fill="#6C757D"
                                        />
                                        <path
                                            d="M5.83984 1.125C5.56641 0.878906 5.15625 0.878906 4.91016 1.125L1.19141 4.84375C0.917969 5.11719 0.917969 5.52734 1.19141 5.77344L1.79297 6.40234C2.06641 6.64844 2.47656 6.64844 2.72266 6.40234L5.375 3.75L8 6.40234C8.24609 6.64844 8.68359 6.64844 8.92969 6.40234L9.55859 5.77344C9.80469 5.52734 9.80469 5.11719 9.55859 4.84375L5.83984 1.125Z"
                                            fill="#6C757D"
                                        />
                                    </svg>
                                </div>
                            </div>
                            <div className="ui-soc-table-head-rigth">
                                <p>Sort by:</p>
                                <Select options={sortOption} />
                            </div>
                        </div>
                        <div className="ui-soc-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>
                                            Date sold
                                            <MdOutlineKeyboardArrowDown />
                                        </th>
                                        <th>Order ID / Buyer</th>
                                        <th>Photo</th>
                                        <th>Ordered item</th>
                                        <th>Order status</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>
                                            <div className="ui-table-checkbox">
                                                <Form.Check type="checkbox" />
                                                <p>22 May 2017</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="ui-table-order">
                                                <p>12345678-123456</p>
                                                <p>
                                                    <span>Buyer:</span>
                                                    buyer_username
                                                </p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="ui-table-photo">
                                                <img
                                                    src={ProductImg}
                                                    alt="product"
                                                />
                                            </div>
                                        </td>
                                        <td>
                                            <div className="ui-table-photo-info">
                                                <p>
                                                    Norton Security Deluxe 2016
                                                    - 1Year / 3 Devices
                                                    (Windows, Max OS, Android
                                                    and IOS)
                                                </p>
                                                <ul>
                                                    <li>NSLN: 123456789012</li>
                                                    <li>
                                                        Size: S, Main Color:
                                                        Blue
                                                    </li>
                                                    <li>Quantity: 1</li>
                                                    <li>
                                                        Item price: US $1,234.56
                                                    </li>
                                                </ul>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="ui-table-order-status">
                                                {/* className : unshipped | unpaid | shipped */}
                                                <Badge
                                                    bg="primary"
                                                    className="unshipped"
                                                >
                                                    Unshipped (<span>1</span>)
                                                </Badge>
                                                <p>Ship by 22 Sep at 3:40 pm</p>
                                            </div>
                                        </td>
                                        <td>
                                            <div className="ui-table-action-btn">
                                                <Dropdown>
                                                    <Dropdown.Toggle>
                                                        Buy shipping label
                                                        <MdOutlineKeyboardArrowDown />
                                                    </Dropdown.Toggle>

                                                    <Dropdown.Menu>
                                                        <Dropdown.Item href="#/action-1">
                                                            Confirm shpment
                                                        </Dropdown.Item>
                                                        <Dropdown.Item href="#/action-2">
                                                            Contact buyer
                                                        </Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">
                                                            Sell similar
                                                        </Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">
                                                            Relist
                                                        </Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">
                                                            Cancel
                                                        </Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">
                                                            Issue a refund
                                                        </Dropdown.Item>
                                                        <Dropdown.Item href="#/action-3">
                                                            Report this buyer
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                </Dropdown>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="ui-soc-table-bottom">
                            <div className="ui-soc-table-head-left">
                                <Form.Check type="checkbox" />
                                <div className="ui-soc-thl-select">
                                    <Select options={actionOnSelectedOption} />
                                    <svg
                                        width="10"
                                        height="21"
                                        viewBox="0 0 10 21"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M4.91016 20.4023C5.15625 20.6484 5.56641 20.6484 5.8125 20.4023L9.53125 16.6836C9.80469 16.4102 9.80469 16 9.53125 15.7539L8.92969 15.125C8.65625 14.8789 8.24609 14.8789 8 15.125L5.34766 17.7773L2.72266 15.125C2.47656 14.8789 2.06641 14.8789 1.79297 15.125L1.19141 15.7539C0.917969 16 0.917969 16.4102 1.19141 16.6836L4.91016 20.4023Z"
                                            fill="#6C757D"
                                        />
                                        <path
                                            d="M5.83984 1.125C5.56641 0.878906 5.15625 0.878906 4.91016 1.125L1.19141 4.84375C0.917969 5.11719 0.917969 5.52734 1.19141 5.77344L1.79297 6.40234C2.06641 6.64844 2.47656 6.64844 2.72266 6.40234L5.375 3.75L8 6.40234C8.24609 6.64844 8.68359 6.64844 8.92969 6.40234L9.55859 5.77344C9.80469 5.52734 9.80469 5.11719 9.55859 4.84375L5.83984 1.125Z"
                                            fill="#6C757D"
                                        />
                                    </svg>
                                </div>
                            </div>
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

export default SellerCentralOrder;
