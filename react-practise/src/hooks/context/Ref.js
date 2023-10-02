import React, { useEffect, useRef } from "react";

//Mutable - But doesn't rerender
const Ref = () => {
  const ref = useRef(0);
  console.log("rerender", ref.current);
  return (
    <>
      <br />
      <br />
      <HTMLRef />
      <button
        onClick={() => {
          console.log(ref.current);
          return ref.current++;
        }}
      >
        Ref
      </button>
      <br />
      <br />
    </>
  );
};

export default Ref;

export const HTMLRef = () => {
  const refInput = useRef(null);
  useEffect(() => {
    console.log(refInput.current.type);
    refInput.current.focus();
  }, []);
  return (
    <>
      <input type="text" ref={refInput}></input>
    </>
  );
};
