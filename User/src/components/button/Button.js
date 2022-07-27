import React from "react";
import "./Button.css";

function Button({ value, btnclass }) {
  return <button className="custom-button">{value}</button>;
}

export default Button;
