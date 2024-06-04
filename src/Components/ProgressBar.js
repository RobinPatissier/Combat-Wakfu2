import React from "react";

const ProgressBar = ({ pv, pvMax, faType, barName, bgType, className }) => {
  return (
    <div className={`progress md-progress ${className}`}>
      <div
        className="progress-bar"
        style={{ width: (pv * 100) / pvMax + "%", background: bgType }}
        aria-valuenow={pv}
        aria-valuemin="0"
        aria-valuemax={pvMax}
        role="progressbar"
      >
        <i className={`fas ${faType} icon-text `}>
          {pv} {barName}
        </i>
      </div>
    </div>
  );
};

export default ProgressBar;
