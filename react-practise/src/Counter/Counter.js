import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const handle1 = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
    return;
  };
  const handle2 = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
    return;
  };
  const handle3 = () => {
    if (counter > 0) {
      setCounter(counter + 2);
    }
    return;
  };
  const handle4 = () => {
    if (counter > 0) {
      setCounter(counter / 2);
    }
    return;
  };
  const handle5 = () => {
    setCounter(0);
  };
  return (
    <>
      <br />
      <button onClick={handle1}>IncrementBY1</button>
      <button onClick={handle2}>DecrementBY1</button>
      <button onClick={handle3}>IncrementBY2</button>
      <button onClick={handle4}>IncrementDivideBy2</button>
      <button onClick={handle5}>ResetCount</button>
      <br />
      <span>{counter}</span>
    </>
  );
};

export default Counter;
