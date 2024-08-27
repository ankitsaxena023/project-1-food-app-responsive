import React, { useState, useEffect } from "react";
import "./home.css";

const icons = [
  "fas fa-egg",
  "fas fa-stroopwafel",
  "fas fa-cheese",
  "fas fa-hotdog",
  "fas fa-drumstick-bite",
  "fas fa-apple-alt",
  "fas fa-ice-cream",
  "fas fa-fish",
  "fas fa-cookie",
  "fas fa-seedling",
];

const Home = () => {
  const [currentIconIndex, setCurrentIconIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIconIndex((prevIndex) => (prevIndex + 1) % icons.length);
    }, 2000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [currentIconIndex]);

  return (
    <div className="container">
      <h1 className="heading">Variety of Foods</h1>
      <div className="icons">
        <i className={`${icons[currentIconIndex]} icon active`}></i>
      </div>
    </div>
  );
};

export default Home;
