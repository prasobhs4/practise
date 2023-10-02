import React, { useState } from "react";
import "./progress.styles.css";

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);

  const handleProgress = () => {
    if (progress < 100) {
      setProgress(progress + 10);
    }
  };

  const handleReset = () => {
    setProgress(0);
  };

  const getColor = () => {
    if (progress < 40) {
      return "red";
    } else if (progress < 80) {
      return "yellow";
    }
    return "green";
  };

  return (
    <div className="container">
      <div className="progressbar">
        <div
          className="progressbar-fill"
          //   style={{ backgroundColor: getColor(), width: `${progress}%` }}
        ></div>
      </div>
      <span>{`Progress is ${progress}%`}</span>
      <button className="btn" onClick={handleProgress}>
        Progress
      </button>
      <button className="btn" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default ProgressBar;
