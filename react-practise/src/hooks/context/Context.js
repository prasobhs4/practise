import React, { createContext } from "react";

export const moods = {
  happy: "😄",
  sad: "🥲",
};

const Context = () => {
  const moodContext = createContext(moods);
  return <></>;
};

export default Context;
