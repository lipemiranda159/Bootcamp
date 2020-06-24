import React, { ChangeEvent } from "react";
import ValueState from "../../model/ValueState";

const Input: React.FC<{
  inputId: string;
  label: string;
  setState: any;
  state: ValueState;
}> = ({ inputId, label, setState, state }) => {
  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    switch (event.target.id) {
      case "value":
        state.InitAmount = event.target.valueAsNumber;
        break;
      case "taxMonth":
        state.TaxMonth = event.target.valueAsNumber;
        break;
      default:
        state.Period.push(event.target.valueAsNumber);
        break;
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
