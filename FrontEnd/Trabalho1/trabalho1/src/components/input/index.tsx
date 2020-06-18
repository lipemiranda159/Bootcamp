import React from "react";
import css from "./index.module.css";

const InputValue: React.FC<{
  id: string;
  type: string;
  disabled: boolean;
  text: string;
  value: string;
}> = ({ id, type, disabled, text, value }) => {
  return (
    <fieldset className={css.fieldset}>
      <label htmlFor={id} className={css.label}>
        {text}
      </label>
      <input id={id} type={type} disabled={disabled} value={value} />
    </fieldset>
  );
};

export default InputValue;
