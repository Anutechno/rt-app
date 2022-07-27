import { IoIosArrowForward } from "react-icons/io";
import { BiSearch } from "react-icons/bi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, Badge, Dropdown } from "react-bootstrap";
import Select from "react-select";
import ProductImg from "../../../../../assets/product-img/product.png";
import Menu from "../../../../../components/menu/Menu";
import Footer from "../../../../../components/MyNichoShop/footer/Footer";
import ReturnItem from "./Component/ReturnItem";
import data from '../data/returnData'
import { useEffect, useState } from "react";


const Returns = () => {

    const [returnData, setReturnData] = useState(data)

    useEffect(() => {
        setReturnData(data)
    }, [data])

    const allOrderActions = [
        {
            value: "action-required",
            label: "Action required",
        },
        {
            value: "all-open-returns",
            label: "All Open Returns",
        },
        {
            value: "returns-shipped",
            label: "Returns shipped",
        },
        {
            value: "returns-delivered",
            label: "Returns delivered",
        },
        {
            value: "under-review",
            label: "Under review",
        },
        {
            value: "completed-returns",
            label: "Completed returns",
        },
        {
            value: "closed-returns",
            label: "Closed returns",
        },
    ];

    const searchOption = [
        {
            value: "buyer-username",
            label: "Buyer username",
        },
        {
            value: "nsln",
            label: "NSLN",
        },
        {
            value: "order-id",
            label: "Order ID",
        },
        {
            value: "item-title",
            label: "Item Title",
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
                                <Link to='/sellercentral/order'>
                                    <button>Orders</button>                            
                                </Link>
                                <Link to='/sellercentral/order/cancellations'>
                                    <button>
                                        <span>2</span> Cancellations
                                    </button>
                                </Link>
                                <Link to='/sellercentral/order/claims'>
                                    <button>
                                        <span>1</span> Claims
                                    </button>
                                </Link>
                                <button className="active">
                                    <span>9</span> Returns
                                </button>
                                <Link to='/sellercentral/order/chargebacks'>
                                    <button>
                                        <span>0</span> Chargebacks
                                    </button>
                                </Link>
                            </div>
                            <div className="ui-sco-head-filter short">
                                <Select options={allOrderActions} />
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
                                    {
                                        returnData.map((item, i) => (
                                            <ReturnItem key={i} data={item} />
                                        ))
                                    }
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

export default Returns;
