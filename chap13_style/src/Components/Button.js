import React from "react";
import classNames from "classnames";
import "./buttons.scss";

// size: small, medium, large
// color: green, blue, pink
const Button = ({ children, size, color, outline, fullWidth }) => {
  return (
    <button
      className={classNames("button", size, color, { outline, fullWidth })}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  size: "medium",
  color: "blue",
};

export default Button;
