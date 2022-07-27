import { Link } from "react-router-dom";
import Menu from "../../../../components/menu/Menu";
import Footer from "../../../../components/MyNichoShop/footer/Footer";
import "./browsehelp.scss";
import { IoIosArrowForward } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const BrowseHelp = () => {
    /**
     * @description store browse help toptic data
     */

    const [getBrowseHelp, setBrowseHelp] = useState([
        {
            id: uuidv4(),
            title: "Buying",
            isOpend: true,
        },
        {
            id: uuidv4(),
            title: "Selling",
            isOpend: false,
        },
        {
            id: uuidv4(),
            title: "Account",
            isOpend: false,
        },
        {
            id: uuidv4(),
            title: "Shipping & Tracking",
            isOpend: false,
        },
        {
            id: uuidv4(),
            title: "Return & Refunds",
            isOpend: false,
        },
    ]);

    const tabHandler = (i) => {
        const tab = getBrowseHelp.filter((item) => {
            if (item.id === i) {
                getBrowseHelp.filter((rem) => {
                    rem.isOpend = false;
                });
                item.isOpend = true;
            }
            return item;
        });
        setBrowseHelp(tab);
    };

    const [getSearchHistory, setSearchHistory] = useState([
        "return policy",
        "return",
        "return kindle book",
        "return label",
        "return shipping",
        "return book",
    ]);

    const [getHistory, setHistory] = useState([]);

    const searchHandler = (e) => {
        if (e.target.value.length !== 0) {
            const history = getSearchHistory.filter((item) => {
                return item
                    .toLowerCase()
                    .includes(e.target.value.toLowerCase());
            });
            setHistory(history);
        } else {
            setHistory([]);
        }
    };

    return (
        <div>
            <Menu />
            <div className="ui-browser-help-box">
                <div className="container">
                    <div className="row mb-4">
                        <div className="col-lg-8">
                            <div className="ui-breadcrumb-box">
                                <ul>
                                    <li>
                                        <Link to="/">My NichoShop</Link>
                                    </li>
                                    <li>
                                        <IoIosArrowForward />
                                    </li>
                                    <li>Help and contact</li>
                                </ul>
                            </div>
                            <div className="ui-bh-headline">
                                <h2>Hi Jonathan. What can we help you with?</h2>
                            </div>
                            <div className="ui-bh-filter">
                                <div className="ui-bh-filter-search">
                                    <input
                                        type="email"
                                        className="form-control"
                                        onChange={searchHandler}
                                        placeholder="Enter a title for your listing (include brand, color, material etc.)"
                                    />
                                    {getHistory.length !== 0 && (
                                        <div className="u-bhfs-history">
                                            <ul>
                                                {getHistory.map((item) => {
                                                    return (
                                                        <li>
                                                            <Link to="/">
                                                                {item}
                                                            </Link>
                                                        </li>
                                                    );
                                                })}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                                <button className="btn">
                                    <FiSearch />
                                    Search
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 d-flex gap-4">
                            <div className="ui-bh-side-menu-box">
                                <div className="ui-bh-side-menu">
                                    <h4>Browse help topics</h4>
                                    <ul>
                                        {getBrowseHelp.map((item, index) => {
                                            return (
                                                <li
                                                    className={
                                                        item.isOpend && "active"
                                                    }
                                                    onMouseOver={() => {
                                                        tabHandler(item.id);
                                                    }}
                                                    key={index}
                                                >
                                                    {item.title}
                                                </li>
                                            );
                                        })}
                                    </ul>
                                </div>
                                <p>
                                    Need more help?{" "}
                                    <Link to="/contact">Contact us</Link>
                                </p>
                            </div>

                            <div className="ui-bh-right-menu ui-buying">
                                <ul>
                                    <li>
                                        <Link to="/">
                                            Didn’t receive an item
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            Item isn’t as described
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/"> Returning an item</Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            Checking the status of a return or a
                                            claim
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/"> Cancel a purchase</Link>
                                    </li>
                                    <li>
                                        <Link to="/">How to retract a bid</Link>
                                    </li>
                                    <li>
                                        <Link to="/">Paying for items</Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            Report an item or listing
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            Trouble listing an item
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/">
                                            Someone else has used your account
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/"> Delivery & Tracking</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BrowseHelp;
