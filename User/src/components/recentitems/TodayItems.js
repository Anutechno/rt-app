import React from "react";
import "./TodayItems.css";
import ProductToday from "../product/ProductToday";

function TodayItems() {
  return (
    <div className="container-ns today-items-container">
      <div className="upper-text-items">
        <h3 className="small-title">Today's Deal</h3>
        <p className="small-text">
          See all <i class="bi bi-chevron-right"></i>
        </p>
      </div>
      <div className="today-items">
        <ProductToday />
        <ProductToday />
        <ProductToday />
        <ProductToday />
        <ProductToday />
        <ProductToday />
        <ProductToday />
      </div>
    </div>
  );
}

export default TodayItems;
