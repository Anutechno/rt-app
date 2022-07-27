import React from "react";
import "./Copyright.css";

function Copyright() {
  return (
    <div className="copyright">
      <p className="small-text">
        Copyright 2017 NichoShop Inc. All rights reserved.{" "}
        <span>
          <a href="">User agreement</a>
        </span>
        ,{" "}
        <span>
          <a href="">Privicy</a>
        </span>{" "}
        and{" "}
        <span>
          <a href="">Cookies</a>
        </span>
        .
      </p>
    </div>
  );
}

export default Copyright;
