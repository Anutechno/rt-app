import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="d-flex align-items-center justify-content-center">
          <p className="text-center">
            Copyright 2017 NichoShop Inc. All rights reserved.{" "}
            <Link className="redirectLink" to="/">
              User agreement
            </Link>
            ,{" "}
            <Link className="redirectLink" to="/">
              Privicy
            </Link>{" "}
            and{" "}
            <Link className="redirectLink" to="/">
              Cookies
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
