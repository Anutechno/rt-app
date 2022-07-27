import React, { useState } from "react";
import "./Navbar.css";
// import { NavLink, Link } from "react-router-dom";
// import account from "../../assets/icons/Account.png";
import trolly from "../../assets/icons/Trolly.png";
import cart from "../../assets/cancelled-img/cart.png"
import bell from "../../assets/icons/Bell.png";
import Account from "../../assets/icons/Account.png";
import { DropdownButton, Dropdown } from "react-bootstrap";
import SearchbarMobile from "../searchbar/SearchbarMobile";
import { Link } from "react-router-dom";
import NotificationBell from "../notification/NotificationBell";
import { useSelector, useDispatch } from "react-redux";
import { setHideSearchBar, setShowNotif } from "../../actions/actions";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Search from '../../assets/cancelled-img/Search.svg'
function Navbar() {
    const hideSearchBar = useSelector((state) => state.hideSearchBar);

    if (!hideSearchBar) {
        return <NavbarContainer />;
    } else {
        return <SearchbarMobile />;
    }
}

// const notifHandler = () => {
//   dispatch(setShowNotif(!showNotif));
// };

const NavbarContainer = () => {
    const dispatch = useDispatch();
    const showNotif = useSelector((state) => state.showNotif);

    return (
        <nav className="nav-bar">
            <button className="custom-button search-mobile-btn">
                <img src={Search} alt='Search'
                    onClick={() => {
                        dispatch(setHideSearchBar(true));
                    }}
                />
            </button>
            <button
                className="sell-btn custom-button small-text"
                onClick={() => {
                    dispatch(setShowNotif(!showNotif));
                }}
            >
                Sell
            </button>
            {/* <Button className="sell-btn custom-button" value="Sell" /> */}

            <DropdownButton id="" title="" className="account-drop">
                <Dropdown.Item href="#/action-1">
                    <button className="custom-button signin-btn small-text">
                        {/* <Link to="/signin">Sign In<Link /> */}
                        <Link to="/signin" style={{ color: "#fff" }}>
                            Sign In
                        </Link>
                    </button>
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                    <button className="custom-button register-btn small-text">
                        <Link to="/signup">Sign Up</Link>
                    </button>
                </Dropdown.Item>
            </DropdownButton>

            <Link to="/mynichoshop" className="trolly-link">
                <img className="trolly-icon" src={cart} alt="cart icon" />
                <p className="cart-num">9</p>
            </Link>

            <span className="bell-notify">9</span>
            {/* <img className="bell-icon" src={bell} alt="Bell icon" /> */}
            <DropdownButton id="" title="" className="notification-drop">
                <Dropdown.Item href="#/action-1">
                    <NotificationBell
                        color="green"
                        title="WON"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ..."
                    />
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">
                    <NotificationBell
                        color="red"
                        title="OUTBID"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ..."
                    />
                </Dropdown.Item>
                <Dropdown.Item href="#/action-3">
                    <NotificationBell
                        color="gray"
                        title="SOLD"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ..."
                    />
                </Dropdown.Item>
                <Dropdown.Item href="#/action-4">
                    <NotificationBell
                        color="gray"
                        title="NEW MESSAGE"
                        description="You received 6 messages.Lorem Ipsum is simply dummy text of the printing and"
                    />
                </Dropdown.Item>
            </DropdownButton>
            <Dropdown className="mobile-dot">
                <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
                    <MoreVertIcon />
                </Dropdown.Toggle>
                <Dropdown.Menu variant="dark">
                    <Dropdown.Item href="#/action-2">
                        <Link to="/mynichoshop" className="trolly-link">
                            <img className="trolly-icon" src={cart} alt="cart icon" />
                            <p className="cart-num">9</p>
                        </Link>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-4">
                        <DropdownButton id="" title="" className="account-drop">
                            <Dropdown.Item href="#/action-1">
                                <button className="custom-button signin-btn small-text">
                                    {/* <Link to="/signin">Sign In<Link /> */}
                                    <Link to="/signin" style={{ color: "#fff" }}>
                                        Sign In
                                    </Link>
                                </button>
                            </Dropdown.Item>
                            <Dropdown.Item href="#/action-2">
                                <button className="custom-button register-btn small-text">
                                    <Link to="/signup">Sign Up</Link>
                                </button>
                            </Dropdown.Item>
                        </DropdownButton>
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">
                        <button
                            className="sell-btn sell-btn-mob custom-button small-text"
                            onClick={() => {
                                dispatch(setShowNotif(!showNotif));
                            }}
                        >
                            Sell
                        </button>
                    </Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </nav>
    );
};

export default Navbar;
