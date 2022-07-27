import React from "react";
import { NavLink } from "react-router-dom";
import "./css/navbar.css";
const Nav = () => {
    return (
        <React.Fragment>
            <div className="p-0">
                <nav className="navbar navbar-expand-sm bg-light justify-content-center">
                    <img
                        src="assets/img/NS Logo.svg"
                        className="logo"
                        alt="logo"
                    />
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to="/general" className="nav-link">
                                <img
                                    src="assets/img/menu/General (Statistic Chart).svg"
                                    alt="menu"
                                />
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink
                                to="/customer-support"
                                className="nav-link"
                            >
                                <img
                                    src="assets/img/menu/Customer Support.svg"
                                    alt="menu"
                                />
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/search" className="nav-link">
                                <img
                                    src="assets/img/menu/Search.svg"
                                    alt="menu"
                                />
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/category" className="nav-link">
                                <img
                                    src="assets/img/menu/Categories.svg"
                                    alt="menu"
                                />
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/content" className="nav-link">
                                <img
                                    src="assets/img/menu/Content.svg"
                                    alt="menu"
                                />
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/administrator" className="nav-link">
                                <img
                                    src="assets/img/menu/Administrator.svg"
                                    alt="menu"
                                />
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/messages" className="nav-link">
                                <img
                                    src="assets/img/menu/Messages.svg"
                                    className="m-auto"
                                    alt="menu"
                                />
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </React.Fragment>
    );
};
export default Nav;
