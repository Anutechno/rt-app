import React from "react";
import "./HomeFooter.css";
import CountrySelector from "../countryselector/CountrySelector";
import CurrencySelector from "../currencyselector/CurrencySelector";
import Copyright from "../copyright/Copyright";

function HomeFooter() {
  return (
    <div className="home-footer">
      <div className="footer-links-container footer-container">
        <div className="footer-links">
          <h4 className="bold small-text">Buy</h4>
          <ul className="small-text">
            <li>
              <a href="">Registration</a>
            </li>
            <li>
              <a href="">NichoShop Buyer Protection</a>
            </li>
            <li>
              <a href="">Bidding & Buying Help</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4 className="bold small-text">Sell</h4>
          <ul className="small-text">
            <li>
              <a href="">Start Selling</a>
            </li>
            <li>
              <a href="">NichoShop Seller Protection</a>
            </li>
            <li>
              <a href="">Learn to Sell</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4 className="bold small-text">About NichoShop</h4>
          <ul className="small-text">
            <li>
              <a href="">Company Info</a>
            </li>
            <li>
              <a href="">News</a>
            </li>
            <li>
              <a href="">Careers</a>
            </li>
            <li>
              <a href="">Policies</a>
            </li>
          </ul>
        </div>
        <div className="footer-links">
          <h4 className="bold small-text">Help & Contact</h4>
          <ul className="small-text">
            <li>
              <a href="">Help Topics</a>
            </li>
            <li>
              <a href="">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-selections footer-container ">
        <div className="footer-social">
          <a href="">
            <i class="bi bi-facebook"></i>
          </a>
          <a href="">
            <i class="bi bi-twitter"></i>
          </a>
          <a href="">
            <i class="bi bi-instagram"></i>
          </a>

          <a href="">
            <i class="bi bi-youtube"></i>
          </a>
          <a href="">
            <i class="bi bi-twitch"></i>
          </a>
        </div>
        <div className="footer-selectors">
          <CountrySelector />
          <CurrencySelector />
        </div>
      </div>
      <div className="footer-container">
        <Copyright />
      </div>
    </div>
  );
}

export default HomeFooter;
