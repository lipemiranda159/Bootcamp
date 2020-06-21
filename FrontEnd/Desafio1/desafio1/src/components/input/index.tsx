import React from "react";

const Input: React.FC<{ inputId: string; label: string }> = ({
  inputId,
  label,
}) => {
  return (
    <div className="input-field col s3">
      <label htmlFor={inputId}>{label}</label>

      <input
        placeholder="Placeholder"
        id={inputId}
        type="number"
        className="validate"
      />
    </div>
  );
};

export default Input;
