import React from "react";
import "./Breadcrumbs.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function Breadcrumbs() {
  return (
    <ul className="breadcrumb">
      <li>
        <a href="/">My NichoShop&nbsp; &gt;</a>
      </li>
      <li>
        <a href="/user/my-account" className="selected">&nbsp;Account</a>
      </li>
    </ul>
  );
}

export default Breadcrumbs;
