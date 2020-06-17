import React from "react";
import css from "./index.module.css";

const InputValue: React.FC<{ id: string; type: string; disabled: boolean }> = ({
  id,
  type,
  disabled,
}) => {
  return (
    <fieldset className={css.fieldset}>
      <label htmlFor={id} className={css.label}>
        Salário Bruto
      </label>
      <input id={id} type={type} disabled={disabled} />
    </fieldset>
  );
};

export default InputValue;
