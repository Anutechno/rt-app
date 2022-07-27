import React from "react";
import "./AccountFooter.css";
// import CountrySelector from "../countryselector/CountrySelector";
// import CurrencySelector from "../currencyselector/CurrencySelector";
// import Copyright from "../copyright/Copyright";

function AccountFooter() {
  return (
    <footer id="footer">
        <div className="container">
            <div className="footer_menu">
                <ul>
                    <li>
                    <a className="nav-link scrollto active" href="#hero">About us</a>
                    </li>
                    <li>
                    <a className="nav-link scrollto" href="#">Safety center</a>
                    </li>
                    <li>
                    <a className="nav-link scrollto" href="#">Policies </a>
                    </li>
                    <li>
                    <a className="nav-link scrollto" href="#">Help & Contact</a>
                    </li>
                </ul>
            </div>
            <div className="me-md-auto text-center text-md-start">
                <div className="copyright"> &copy; Copyright 2017 <span>nichoShop Inc.</span>. All Rights Reserved. <u>User Agreement</u>, &nbsp; <u>Privicy</u> and &nbsp; <u>Cookies</u>
                </div>
            </div>
        </div>
    </footer>
  );
}

export default AccountFooter;
