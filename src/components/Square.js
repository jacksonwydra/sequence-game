import React, { useState } from "react";

let Square = () => {
  const initialState = {
    className: "square",
    isActive: true,
  };

  let [state, setState] = useState(initialState);

  let handleClick = () => {
    if (state.isActive) {
      setState({ className: state.className + " click", isActive: false });
    }
  };

  let handleAnimationEnd = () => {
    setState({ className: initialState.className, isActive: true });
  };

  return (
    <div
      className={state.className}
      onClick={handleClick}
      onAnimationEnd={handleAnimationEnd}
    ></div>
  );
};

export default Square;
