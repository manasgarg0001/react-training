import React from "react";
import "./style.css";

const Card = (props) => {
  return <div className="container">{props.children}</div>;
};
export default Card;
