import React, { ChangeEvent } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
const Input: React.FC<{
  inputId: string;
  label: string;
  setState: any;
  state: any;
  InitAmount: number;
  Tax: number;
}> = ({ inputId, label, setState, state, InitAmount, Tax }) => {
  const handleChangeValue = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.id === "period") {
      if (InitAmount !== 0 && Tax !== 0) {
        const auxState = Object.assign([], state);
        auxState.push(event.target.valueAsNumber);
        return setState(auxState);
      } else {
        toast.error("Digite os valores do montante inicial e o valor da taxa!");
      }
    } else {
      state = event.target.valueAsNumber;
      return setState(state);
    }
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
      <ToastContainer />
    </div>
  );
};

export default Input;
