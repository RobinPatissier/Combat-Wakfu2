import React, { useRef, useEffect } from "react";

const ProgressBar = ({ pv, pvMax, faType, barName, bgType, className }) => {
  const glossyRef = useRef(null);

  useEffect(() => {
    glossyRef.current.style.opacity = 1;
  }, []);

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
        <div className="glossy-overlay" ref={glossyRef}></div>{" "}
      </div>
    </div>
  );
};

export default ProgressBar;
