import React, { useEffect, useRef, useState } from "react";

const Test = () => {
  const [counter, setCounter] = useState(0);
  let previouseVal = useRef(0);

  useEffect(() => {
    console.log("current value", counter);
    console.log("previous value", previouseVal.current);
  }, [counter]);
  const handleOnclick = () => {
    console.log("counter1", counter);
    setCounter(counter + 1);
    console.log("counter2", counter);
    previouseVal.current = counter;
  };

  return (
    <>
      <button onClick={handleOnclick}>TEST</button>
    </>
  );
};

export default Test;
