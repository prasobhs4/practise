import React, { useEffect, useState } from "react";

const url = (name) => `https://dummyjson.com/users/search?q=${name}`;

const Debounce = () => {
  const [input, setInput] = useState("");
  const [data, setData] = useState(null);
  const [debounced, setDebounced] = useState(null);

  const fetchFromApi = async () => {
    const response = await fetch(url(input));
    const { users } = await response.json();
    setData(users[0]);
  };

  const debounce = (cb, delay) => {
    let timer;
    return (...args) => {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        cb(...args);
      }, delay);
    };
  };

  useEffect(() => {
    if (input) fetchFromApi();
  }, [input]);

  const handleChange = debounce((e) => {
    setInput(e.target.value);
  }, 1000);

  return (
    <div>
      <input type="text" onChange={handleChange} />
    </div>
  );
};

export default Debounce;
