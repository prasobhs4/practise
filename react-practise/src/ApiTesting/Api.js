import React, { useState } from "react";
import Card from "./Card";
import "./api.styles.css";

const url = "https://jsonplaceholder.typicode.com/users";

const Api = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setUsers(data);
  };

  console.log(users);
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="api-container">
      {users.map((eachUser, index) => (
        <Card key={index} data={eachUser} />
      ))}
    </div>
  );
};

export default Api;
