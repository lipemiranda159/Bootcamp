import React from "react";
import css from "./index.module.css";

const InputSalary: React.FC<{
  id: string;
  type: string;
  disabled: boolean;
  text: string;
  setSalary: any;
}> = ({ id, type, disabled, text, setSalary }) => {
  return (
    <fieldset className={css.fieldset}>
      <label htmlFor={id} className={css.label}>
        {text}
      </label>
      <input id={id} type={type} disabled={disabled} onChange={setSalary} />
    </fieldset>
  );
};

export default InputSalary;
