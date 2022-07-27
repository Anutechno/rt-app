import { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { IoIosArrowDown } from "react-icons/io";
import { HiViewGrid } from "react-icons/hi";
import { TiThList } from "react-icons/ti";
import {
    MdKeyboardArrowLeft,
    MdKeyboardArrowRight,
    MdOutlineKeyboardArrowDown,
} from "react-icons/md";
import { FiFilter } from "react-icons/fi";
import { ImCross } from "react-icons/im";
import "./todaysdeals.scss";
import Uk from "./../../../assets/cat-flag/uk.png";
import ProductImg from "./../../../assets/product-img/product.png";
import CategoryCheck from "../../../components/CategoryCheck/CategoryCheck";
import Menu from "../../../components/menu/Menu";
import Footer from "../../../components/MyNichoShop/footer/Footer";
import ProductCard from "../../../components/ProductCard/ProductCard";
import ProductListCard from "../../../components/ProductCard/ProductListCard";

const TodaysDeals = () => {
    // all categories of today's deals
    const [getCategory, setCategory] = useState([
        "Automotive & Motorcycle",
        "Baby",
        "Baby Clothing & Accessories",
        "Beauty",
        "Boys’ Fashion",
        "Camera & Photo",
        "Cell Phones & Accessories",
        "Collectibles & Fine Art",
        "Computers & Accessories",
        "Costumes & Accessories",
    ]);

    // all lagnuages
    const [getLang, setLang] = useState([
        {
            id: 1,
            img: Uk,
            name: "Uk",
            isSelected: true,
        },
        {
            id: 2,
            img: Uk,
            name: "USA",
        },
    ]);

    // is toggled dropdown
    const [isToggled, setToggle] = useState(false);

    const langHandler = () => {
        setToggle(!isToggled);
    };

    const selectLang = (id) => {
        setToggle(false);
        getLang.filter((item) => {
            item.isSelected = false;
            if (item.id === id) {
                item.isSelected = true;
            }
        });
    };

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
            productPrice: "12,345.67",
            productDiscountPrice: "123.54",
            productDiscount: "60%",
        },
        {
            id: 2,
            productTitle:
                "Norton Security Deluxe 2017 - 1 Year / 3 Devices (Windows, Max, Android...",
            productImage: ProductImg,
            productPrice: "12,345.67",
            productDiscountPrice: "123.54",
            productDiscount: "60%",
        },
        {
            id: 3,
            productTitle:
                "Norton Security Deluxe 2017 - 1 Year / 3 Devices (Windows, Max, Android...",
            productImage: ProductImg,
            productPrice: "12,345.67",
            productDiscountPrice: "123.54",
            productDiscount: "60%",
        },
        {
            id: 4,
            productTitle:
                "Norton Security Deluxe 2017 - 1 Year / 3 Devices (Windows, Max, Android...",
            productImage: ProductImg,
            productPrice: "12,345.67",
            productDiscountPrice: "123.54",
            productDiscount: "60%",
        },
        {
            id: 5,
            productTitle:
                "Norton Security Deluxe 2017 - 1 Year / 3 Devices (Windows, Max, Android...",
            productImage: ProductImg,
            productPrice: "12,345.67",
            productDiscountPrice: "123.54",
            productDiscount: "60%",
        },
        {
            id: 6,
            productTitle:
                "Norton Security Deluxe 2017 - 1 Year / 3 Devices (Windows, Max, Android...",
            productImage: ProductImg,
            productPrice: "12,345.67",
            productDiscountPrice: "123.54",
            productDiscount: "60%",
        },
        {
            id: 7,
            productTitle:
                "Norton Security Deluxe 2017 - 1 Year / 3 Devices (Windows, Max, Android...",
            productImage: ProductImg,
            productPrice: "12,345.67",
            productDiscountPrice: "123.54",
            productDiscount: "60%",
        },
        {
            id: 8,
            productTitle:
                "Norton Security Deluxe 2017 - 1 Year / 3 Devices (Windows, Max, Android...",
            productImage: ProductImg,
            productPrice: "12,345.67",
            productDiscountPrice: "123.54",
            productDiscount: "60%",
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
        <div>
            <Menu />
            <div className="ui-today-deals-box">
                <>
                    <Row>
                        {isCatToogled && (
                            <Col className="ui-mob-td-left d-lg-block" lg={3}>
                                <div className="ui-mob-cat-td-box">
                                    <div className="ui-mob-cat-td-child">
                                        <div className="ui-todays-deals-left">
                                            <h2>Today’s Deals</h2>
                                            <h4>Categories</h4>
                                            <button
                                                onClick={() => {
                                                    setCatToggle(false);
                                                }}
                                                className="ui-mob-cross-btn d-lg-none"
                                            >
                                                <ImCross />
                                            </button>
                                            {getCategory.map((item, index) => {
                                                return (
                                                    <CategoryCheck
                                                        category={item}
                                                    />
                                                );
                                            })}
                                            <Button>
                                                See More <IoIosArrowDown />
                                            </Button>
                                        </div>
                                        <div className="ui-price-left">
                                            <h4>Price</h4>
                                            <div className="ui-price-link">
                                                <a href="#">Under $25</a>
                                                <a href="#">$25 to $50</a>
                                                <a href="#">$50 to $100</a>
                                                <a href="#">$100 to $200</a>
                                                <a href="#">$200 & Above</a>
                                            </div>
                                        </div>
                                        <div className="ui-price-left">
                                            <h4>Discount</h4>
                                            <div className="ui-price-link">
                                                <a href="#">10% Off or More</a>
                                                <a href="#">25% Off or More</a>
                                                <a href="#">50% Off or More</a>
                                                <a href="#">70% Off or More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        )}
                        <Col className="d-none d-lg-block" lg={3}>
                            <div className="ui-todays-deals-left">
                                <h2>Today’s Deals</h2>
                                <h4>Categories</h4>
                                <button
                                    onClick={() => {
                                        setCatToggle(false);
                                    }}
                                    className="ui-mob-cross-btn d-lg-none"
                                >
                                    <ImCross />
                                </button>
                                {getCategory.map((item, index) => {
                                    return <CategoryCheck category={item} />;
                                })}
                                <Button>
                                    See More <IoIosArrowDown />
                                </Button>
                            </div>
                            <div className="ui-price-left">
                                <h4>Price</h4>
                                <div className="ui-price-link">
                                    <a href="#">Under $25</a>
                                    <a href="#">$25 to $50</a>
                                    <a href="#">$50 to $100</a>
                                    <a href="#">$100 to $200</a>
                                    <a href="#">$200 & Above</a>
                                </div>
                            </div>
                            <div className="ui-price-left">
                                <h4>Discount</h4>
                                <div className="ui-price-link">
                                    <a href="#">10% Off or More</a>
                                    <a href="#">25% Off or More</a>
                                    <a href="#">50% Off or More</a>
                                    <a href="#">70% Off or More</a>
                                </div>
                            </div>
                        </Col>
                        <Col lg={9}>
                            <div className="ui-todays-deals-content d-none d-lg-block">
                                <div className="ui-todays-deals-content-head d-flex align-items-center justify-content-between border rounded-top px-3">
                                    <p>
                                        <span>234,567</span> results
                                    </p>
                                    <div className="ui-tdc-box d-flex align-items-center gap-4">
                                        <div className="ui-td-select d-flex align-items-center gap-3">
                                            <p>Sort by:</p>
                                            <Form.Select aria-label="Default select example">
                                                <option>Relevance</option>
                                                <option value="1">
                                                    Price - Low to High
                                                </option>
                                                <option value="1">
                                                    Price - High to Low
                                                </option>
                                                <option value="1">
                                                    Discount - Low to High
                                                </option>
                                                <option value="1">
                                                    Discount - High to Low
                                                </option>
                                            </Form.Select>
                                        </div>
                                        <div className="ui-td-select d-flex align-items-center gap-3">
                                            <p>Shipping to</p>
                                            <div className="ui-td-lang">
                                                {getLang.map((item) => {
                                                    if (
                                                        item.isSelected == true
                                                    ) {
                                                        return (
                                                            <button
                                                                className="form-select"
                                                                onClick={
                                                                    langHandler
                                                                }
                                                            >
                                                                <img
                                                                    src={
                                                                        item.img
                                                                    }
                                                                    alt="flug"
                                                                />
                                                                <span>
                                                                    {item.name}
                                                                </span>
                                                            </button>
                                                        );
                                                    }
                                                })}
                                                {isToggled && (
                                                    <div className="ui-td-lang-option">
                                                        {getLang.map(
                                                            (item, index) => {
                                                                return (
                                                                    <button
                                                                        key={
                                                                            index
                                                                        }
                                                                        onClick={() => {
                                                                            selectLang(
                                                                                item.id
                                                                            );
                                                                        }}
                                                                    >
                                                                        <img
                                                                            src={
                                                                                item.img
                                                                            }
                                                                            alt="flug"
                                                                        />
                                                                        <span>
                                                                            {
                                                                                item.name
                                                                            }
                                                                        </span>
                                                                    </button>
                                                                );
                                                            }
                                                        )}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
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
                                </div>
                            </div>
                            <div className="ui-mobile-td-header d-lg-none">
                                <div className="ui-mob-td-top">
                                    <button
                                        onClick={filterHandler}
                                        className="d-flex align-items-center"
                                    >
                                        <FiFilter />
                                        Filter
                                    </button>
                                    <div className="ui-mob-td-select gap-3">
                                        <button onClick={sortByHandler}>
                                            Sort by
                                            <MdOutlineKeyboardArrowDown />
                                        </button>

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
                                    </div>
                                </div>
                                <p>234,567 results</p>
                            </div>
                            {isSelectedList ? (
                                <>
                                    <div className="ui-td-card-list">
                                        {getProduct.map((item, index) => {
                                            return (
                                                <ProductListCard
                                                    key={index}
                                                    img={item.productImage}
                                                    title={item.productTitle}
                                                    price={item.productPrice}
                                                    discountPrice={
                                                        item.productDiscountPrice
                                                    }
                                                    discount={
                                                        item.productDiscount
                                                    }
                                                />
                                            );
                                        })}
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="ui-td-card">
                                        {getProduct.map((item, index) => {
                                            return (
                                                <ProductCard
                                                    key={index}
                                                    img={item.productImage}
                                                    title={item.productTitle}
                                                    price={item.productPrice}
                                                    discountPrice={
                                                        item.productDiscountPrice
                                                    }
                                                    discount={
                                                        item.productDiscount
                                                    }
                                                />
                                            );
                                        })}
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
                                        <button className="active">2</button>
                                        <button>3</button>
                                        <button>4</button>
                                    </div>
                                    <button>
                                        <MdKeyboardArrowRight />
                                    </button>
                                </div>
                                <div className="ui-td-per-page-select align-items-center gap-2">
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
    );
};

export default TodaysDeals;
