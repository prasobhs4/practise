import React from "react";
import "./square.style.css";

const Square = ({ value, onSquareClick }) => {
  return (
    <div className="square-container" onClick={onSquareClick}>
      <span>{value}</span>
    </div>
  );
};

export default Square;
