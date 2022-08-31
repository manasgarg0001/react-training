import React from "react";
import "./style.css";
const Button = (props) => {
  return (
    <button className="btn" onClick={props.onClick}>
      +
    </button>
  );
};
export default Button;
