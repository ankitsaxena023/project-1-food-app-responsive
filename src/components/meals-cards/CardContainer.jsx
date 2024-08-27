import React from "react";
import Card from "./Card";
import "./card-container.css";

const CardContainer = () => {
  const cardData = [
    { imgSrc: "/card-img-1.png", heading: "Fish" },
    { imgSrc: "/card-img-2.png", heading: "Cake" },
    { imgSrc: "/card-img-3.png", heading: "Lobster" },
  ];

  return (
    <div className="cardContainer">
      {cardData.map((card, index) => {
        return <Card key={index} imgSrc={card.imgSrc} heading={card.heading} />;
      })}
    </div>
  );
};

export default CardContainer;
