import React, { ChangeEvent } from "react";

const Input: React.FC<{
  inputId: string;
  label: string;
  setState: any;
  state: any;
}> = ({ inputId, label, setState, state }) => {
  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === "period") {
      state.push(event.target.valueAsNumber);
    } else {
      state = event.target.valueAsNumber;
    }
    setState(state);
  };
  return (
    <div className="input-field col s4">
      <label htmlFor={inputId}>{label}</label>

      <input
        id={inputId}
        type="number"
        className="validate"
        onChange={handleChangeValue}
      />
    </div>
  );
};

export default Input;
