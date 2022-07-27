import { useState } from "react";
import { Col, Form, Row } from "react-bootstrap";
import { HiViewGrid } from "react-icons/hi";
import { TiThList } from "react-icons/ti";
import "./recentlyvieweditems.scss";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { ImCross } from "react-icons/im";
import ProductImg from "./../../../assets/product-img/product.png";
import Menu from "../../../components/menu/Menu";
import Footer from "../../../components/MyNichoShop/footer/Footer";
import RecentlyProductList from "../../../components/RecentlyProduct/RecentlyProductList";
import RecentlyProduct from "../../../components/RecentlyProduct/RecentlyProduct";

const RecentlyViewedItems = () => {
    // view list is toggled
    const [isToggledList, setToggleList] = useState(false);
    const [isSelectedList, setSelectedList] = useState(false);

    const listHandler = () => {
        setToggleList(!isToggledList);
    };

    // product info
    const [getProduct, setProduct] = useState([
        {
            id: 1,
            productTitle:
                "Norton Security Deluxe 2017 - 1 Year / 3 Devices (Windows, Max, Android...",
            productImage: ProductImg,
        },
        {
            id: 2,
            productTitle:
                "Norton Security Deluxe 2017 - 1 Year / 3 Devices (Windows, Max, Android...",
            productImage: ProductImg,
        },
        {
            id: 3,
            productTitle:
                "Norton Security Deluxe 2017 - 1 Year / 3 Devices (Windows, Max, Android...",
            productImage: ProductImg,
        },
        {
            id: 4,
            productTitle:
                "Norton Security Deluxe 2017 - 1 Year / 3 Devices (Windows, Max, Android...",
            productImage: ProductImg,
        },
        {
            id: 5,
            productTitle:
                "Norton Security Deluxe 2017 - 1 Year / 3 Devices (Windows, Max, Android...",
            productImage: ProductImg,
        },
        {
            id: 6,
            productTitle:
                "Norton Security Deluxe 2017 - 1 Year / 3 Devices (Windows, Max, Android...",
            productImage: ProductImg,
        },
        {
            id: 7,
            productTitle:
                "Norton Security Deluxe 2017 - 1 Year / 3 Devices (Windows, Max, Android...",
            productImage: ProductImg,
        },
        {
            id: 8,
            productTitle:
                "Norton Security Deluxe 2017 - 1 Year / 3 Devices (Windows, Max, Android...",
            productImage: ProductImg,
        },
    ]);

    const [isCatToogled, setCatToggle] = useState(false);

    const filterHandler = () => {
        setCatToggle(true);
    };

    const [getSort, setSort] = useState(false);

    const sortByHandler = () => {
        setSort(true);
    };

    return (
        <>
            <div>
                <Menu />
                <div className="ui-today-deals-box">
                    <>
                        <Row>
                            <Col lg={12}>
                                <div className="ui-todays-deals-content d-none d-lg-block">
                                    <div className="ui-todays-deals-content-head d-flex align-items-center justify-content-between border rounded-top px-3">
                                        <div className="ui-rv-top ui-tdc-box py-2">
                                            <h2>Recently viewed</h2>
                                            <div className="ui-td-select d-flex align-items-center gap-3">
                                                <p>View</p>
                                                <div className="ui-td-view">
                                                    <button
                                                        className="form-select"
                                                        onClick={listHandler}
                                                    >
                                                        {isSelectedList ? (
                                                            <TiThList />
                                                        ) : (
                                                            <HiViewGrid />
                                                        )}
                                                    </button>

                                                    {isToggledList && (
                                                        <div className="ui-td-view-option">
                                                            <button
                                                                onClick={() => {
                                                                    setSelectedList(
                                                                        false
                                                                    );

                                                                    setToggleList(
                                                                        false
                                                                    );
                                                                }}
                                                            >
                                                                <HiViewGrid />
                                                            </button>
                                                            <button
                                                                onClick={() => {
                                                                    setSelectedList(
                                                                        true
                                                                    );

                                                                    setToggleList(
                                                                        false
                                                                    );
                                                                }}
                                                            >
                                                                <TiThList />
                                                            </button>
                                                        </div>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <a className="#">Clear All</a>
                                    </div>
                                </div>
                                <div className="ui-mobile-td-header d-lg-none">
                                    <div className="ui-mob-td-top">
                                        {/* <button
                                            onClick={filterHandler}
                                            className="d-flex align-items-center"
                                        >
                                            <FiFilter />
                                            Filter
                                        </button> */}

                                        <div className="ui-td-select d-flex align-items-center gap-2">
                                            <p>View</p>
                                            <div className="ui-td-view">
                                                <button
                                                    className="form-select"
                                                    onClick={listHandler}
                                                >
                                                    {isSelectedList ? (
                                                        <TiThList />
                                                    ) : (
                                                        <HiViewGrid />
                                                    )}
                                                </button>

                                                {isToggledList && (
                                                    <div className="ui-td-view-option">
                                                        <button
                                                            onClick={() => {
                                                                setSelectedList(
                                                                    false
                                                                );

                                                                setToggleList(
                                                                    false
                                                                );
                                                            }}
                                                        >
                                                            <HiViewGrid />
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                setSelectedList(
                                                                    true
                                                                );

                                                                setToggleList(
                                                                    false
                                                                );
                                                            }}
                                                        >
                                                            <TiThList />
                                                        </button>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        {/* <div className="ui-mob-td-select gap-3">
                                            <button onClick={sortByHandler}>
                                                Sort by
                                                <MdOutlineKeyboardArrowDown />
                                            </button>
                                        </div> */}

                                        <a className="#">Clear All</a>
                                    </div>
                                </div>
                                {isSelectedList ? (
                                    <>
                                        <div className="ui-td-card-list">
                                            {getProduct.length !== 0 &&
                                                getProduct.map(
                                                    (item, index) => {
                                                        return (
                                                            <RecentlyProductList
                                                                key={index}
                                                            />
                                                        );
                                                    }
                                                )}
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="ui-td-card">
                                            {getProduct.length !== 0 &&
                                                getProduct.map(
                                                    (item, index) => {
                                                        return (
                                                            <RecentlyProduct
                                                                key={index}
                                                                product={item}
                                                            />
                                                        );
                                                    }
                                                )}
                                        </div>
                                    </>
                                )}
                                <div className="ui-td-pag-box rounded-bottom d-flex align-items-center justify-content-between">
                                    <p>Page 1 of 4</p>
                                    <div className="ui-td-pag d-flex align-items-center gap-2">
                                        <button>
                                            <MdKeyboardArrowLeft />
                                        </button>
                                        <div className="ui-td-pag-no">
                                            <button>1</button>
                                            <button className="active">
                                                2
                                            </button>
                                            <button>3</button>
                                            <button>4</button>
                                        </div>
                                        <button>
                                            <MdKeyboardArrowRight />
                                        </button>
                                    </div>
                                    <div className="ui-td-per-page-select d-flex align-items-center gap-2">
                                        <p>Results per page</p>
                                        <Form.Select aria-label="Default select example">
                                            <option>10</option>
                                            <option value="1">15</option>
                                            <option value="2">20</option>
                                            <option value="3">25</option>
                                            <option value="3">30</option>
                                        </Form.Select>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </>
                    {getSort && (
                        <div className="ui-mobile-sorting">
                            <div className="ui-mobile-sorting-content">
                                <div className="ui-mob-sorting-top d-flex align-content-center justify-content-between">
                                    <p>Sort by</p>
                                    <button
                                        onClick={() => {
                                            setSort(false);
                                        }}
                                    >
                                        <ImCross />
                                    </button>
                                </div>
                                <ul>
                                    <li>Relevance</li>
                                    <li>Price - Low to High</li>
                                    <li>Price - High to Low</li>
                                    <li>Discount - Low to High</li>
                                    <li>Discount - High to Low</li>
                                </ul>
                            </div>
                        </div>
                    )}
                </div>
                <Footer />
            </div>
        </>
    );
};

export default RecentlyViewedItems;
