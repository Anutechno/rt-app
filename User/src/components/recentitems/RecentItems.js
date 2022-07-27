import React from "react";
import "./RecentItems.css";
import ProductRecent from "../product/ProductRecent";

function RecentItems() {
  return (
    <div className="container-ns recent-items-container">
      <div className="upper-text-items">
        <h3 className="small-title">Your recently viewed items</h3>
        <p className="small-text">
          See all <i class="bi bi-chevron-right"></i>
        </p>
      </div>
      <div className="recent-items">
        <ProductRecent />
        <ProductRecent />
        <ProductRecent />
        <ProductRecent />
        <ProductRecent />
        <ProductRecent />
        <ProductRecent />
      </div>
    </div>
  );
}

export default RecentItems;
