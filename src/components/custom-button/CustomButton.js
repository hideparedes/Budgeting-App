import React from "react";
import "./custom-button.styles.scss";

const Button = ({ children }) => {
  return <button className="custom-button">{children}</button>;
};

export default Button;
