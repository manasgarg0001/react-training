import React from "react";
import "../card/style.css";

const Card = (props) => {
  return (
    <>
      <div className="card">
        <div className="container">{props.children}</div>
      </div>
    </>
  );
};
export default Card;
