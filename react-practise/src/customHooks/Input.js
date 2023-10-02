import React from "react";
import useLocalStorage from "./useLocalStorage";

const Input = () => {
  const [input, setInput] = useLocalStorage("name", "abc");

  return (
    <>
      <br />
      <br />
      <input
        type="text"
        placeholder="Type here ..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      ></input>
    </>
  );
};

export default Input;
