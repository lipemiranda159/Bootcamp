import React, { ChangeEvent } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import css from "./index.module.css";
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
        let auxState = Object.assign([], state);
        console.log(state.length);
        console.log(auxState);
        if (state.length <= event.target.valueAsNumber) {
          auxState.push(auxState.length);
        } else {
          if (auxState.length > 0) {
            auxState = auxState.slice(0, -1);
          } else
            toast.error(
              "Não é permitido que o período seja menor do que zero!"
            );
        }
        setState(auxState);
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
      <label className={css.lableText} htmlFor={inputId}>
        {label}
      </label>
      {inputId === "period" ? (
        <input
          id={inputId}
          type="number"
          className={css.validate}
          value={state.length - 1}
          onChange={handleChangeValue}
        />
      ) : (
        <input
          id={inputId}
          type="number"
          className={css.validate}
          onChange={handleChangeValue}
        />
      )}
      <ToastContainer />
    </div>
  );
};

export default Input;
