import React from "react";
import "./Footer.css";
import Copyright from "../../copyright/Copyright";

function Footer() {
  return (
    <footer className="my-nicho-shop-footer">
      <div className="footer-links-container-ns">
        <ul className="footer-links">
          <li>
            <a href="">About Us</a>
          </li>
          <li>
            <a href="">Safety Center</a>
          </li>
          <li>
            <a href="">Policies</a>
          </li>
          <li>
            <a href="">Help & Contact</a>
          </li>
        </ul>
      </div>
      <Copyright />
    </footer>
  );
}

export default Footer;
