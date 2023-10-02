import React from "react";

const CarousalItem = ({ id, icon, description }) => {
  return (
    <div className="carousel-item" style={{ width: "100%" }}>
      <div key={id}>
        <img className="carousel-img" src={icon} />
        <div className="carousel-item-text">{description}</div>
      </div>
    </div>
  );
};

export default CarousalItem;
