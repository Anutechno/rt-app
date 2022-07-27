import React from "react";
import "./Product.css";

function ProductToday() {
  return (
    <div className="product product-today">
      <div className="product-img">
        <img src="" alt="" />
      </div>
      <div className="product-price">
        <p className="product-price-p">$123.45</p>
        <div className="product-discount">
          <p className="smaller-text line-through">$123.45</p>
          <p className="smaller-text">
            <i class="bi bi-dot"></i>12% OFF
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProductToday;
