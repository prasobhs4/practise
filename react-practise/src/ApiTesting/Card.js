import React from "react";
import "./card.styles.css";

const Card = ({ data }) => {
  const { name, username, email } = data;
  return (
    <div className="container">
      <p>{name}</p>
      <p>{username}</p>
      <p>{email}</p>
    </div>
  );
};

export default Card;
