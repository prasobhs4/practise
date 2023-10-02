import React from "react";
import { Link } from "react-router-dom";

const RouterComponent = (props) => {
  console.log(props.history);
  return (
    <div>
      <Link to="/">Home</Link>
    </div>
  );
};

export default RouterComponent;
