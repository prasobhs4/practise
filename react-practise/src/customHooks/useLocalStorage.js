import { useEffect, useState } from "react";

const useLocalStorage = (name, defaultVal) => {
  const initialVal = JSON.parse(localStorage.getItem(name));

  const [input, setInput] = useState(initialVal || defaultVal);

  useEffect(() => {
    localStorage.setItem(name, JSON.stringify(input));
  }, [input]);

  return [input, setInput];
};

export default useLocalStorage;
