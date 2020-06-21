import React from "react";

const Input: React.FC<{ inputId: string; label: string }> = ({
  inputId,
  label,
}) => {
  return (
    <div className="input-field col s4">
      <label htmlFor={inputId}>{label}</label>

      <input id={inputId} type="number" className="validate" />
    </div>
  );
};

export default Input;
