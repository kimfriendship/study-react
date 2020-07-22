import React from "react";
import classNames from "classnames";
import "./button.scss";

// size: small, medium, large
// color: green, blue, pink
const Button = ({ children, size, color, outline, fullWidth, ...rest }) => {
  return (
    <button
      className={classNames("button", size, color, { outline, fullWidth })}
      {...rest}
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
