import React from "react";
import "./card.css";

const Card = ({ imgSrc, heading }) => {
  return (
    <div className="singleCardContainer">
      <img src={imgSrc} alt={heading} className="cardImg" />
      <h3 className="cardHeading">{heading}</h3>
      <button className="cardBtn">Order Now</button>
    </div>
  );
};

export default Card;
