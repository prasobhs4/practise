import React, { useState } from "react";
import "./tooltip.styles.css";

const Tooltip = () => {
  const [displayTT, setDisplayTT] = useState(false);

  const displayToolTip = () => {
    setDisplayTT(true);
  };

  const removeToolTip = () => {
    setDisplayTT(false);
  };
  return (
    <div className="tooltip-container">
      {displayTT && (
        <div className="tooltip">
          <span className="text-tooltip">This is some info about the icon</span>
        </div>
      )}
      <span
        class="material-symbols-outlined"
        onMouseOver={displayToolTip}
        onMouseLeave={removeToolTip}
      >
        info
      </span>
    </div>
  );
};

export default Tooltip;
