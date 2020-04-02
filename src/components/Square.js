import React, { useState } from "react";

let Square = () => {
  let [className, setClassName] = useState("square");

  return (
    <div
      className={className}
      onMouseDown={() => setClassName(className + " click")}
      onMouseLeave={() => setClassName("square")}
      onMouseUp={() => setClassName("square")}
    ></div>
  );
};

export default Square;
