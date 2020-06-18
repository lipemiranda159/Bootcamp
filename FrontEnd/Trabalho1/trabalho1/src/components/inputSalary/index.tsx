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
      <input
        id={id}
        type={type}
        disabled={disabled}
        onChange={setSalary}
        required={true}
        pattern="[0-9]+$"
        min="1"
        className="validate"
      />
      <label htmlFor={id} className={css.label}>
        {text}
      </label>

      <span
        className="helper-text"
        data-error="Só é aceito números"
        data-success="right"
      >
        Favor digitar o valor do seu salário
      </span>
    </fieldset>
  );
};

export default InputSalary;
