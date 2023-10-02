import React, { useContext } from "react";
import ButtonClick from "./ButtonClick";
import MouseHover from "./MouseHover";
import Count from "./Count";
import { MoodContext } from "../App";

function RenderProps() {
  const moods = useContext(MoodContext);
  console.log(moods);
  return (
    <>
      <div>RenderProps</div>
      <Count
        render={(count, incrementCount) => (
          <ButtonClick count={count} increment={incrementCount} />
        )}
      />
      <Count
        render={(count, incrementCount) => (
          <MouseHover count={count} increment={incrementCount} />
        )}
      />
    </>
  );
}

export default RenderProps;
