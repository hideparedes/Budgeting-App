import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ label, type, handleChange, name, value }) => {
  return (
    <div className="group">
      <label htmlFor={label}>{label}</label>
      <input
        className="form-input"
        type={type}
        name={name}
        onChange={handleChange}
        value={value}
      />
    </div>
  );
};

export default FormInput;
