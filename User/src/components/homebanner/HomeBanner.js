import React from "react";
import "./HomeBanner.css";

function HomeBanner({
  title,
  subtitle,
  description,
  btnlink,
  bannerimg,
  banneralt,
  gradient,
}) {
  return (
    <div className={`home-banner ${gradient}`}>
      <div className="text-container">
        <div className="left-text">
          <h1>{title}</h1>
          <h2>{subtitle}</h2>
          <p className="small-text">{description}</p>
          <button className="custom-button shop-now-btn small-text">
            Shop Now
            <i class="bi bi-arrow-right-short"></i>
          </button>
        </div>
      </div>
      <div className="img-container">
        <img src={bannerimg} alt={banneralt} />
      </div>
    </div>
  );
}

export default HomeBanner;
