import React, { ChangeEvent } from "react";

const Input: React.FC<{
  inputId: string;
  label: string;
  setState: any;
  state: any;
}> = ({ inputId, label, setState, state }) => {
  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === "period") {
      const auxState = Object.assign([], state);
      auxState.push(event.target.valueAsNumber);
      return setState(auxState);
    } else {
      state = event.target.valueAsNumber;
    }
    setState(state);
  };
  return (
    <div className="input-field col s4">
      <label htmlFor={inputId}>{label}</label>
      {inputId === "period" ? (
        <input
          id={inputId}
          type="number"
          className="validate"
          value={state.length - 1}
          onChange={handleChangeValue}
        />
      ) : (
        <input
          id={inputId}
          type="number"
          className="validate"
          onChange={handleChangeValue}
        />
      )}
    </div>
  );
};

export default Input;
