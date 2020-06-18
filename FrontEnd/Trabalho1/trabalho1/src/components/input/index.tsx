import React, { useEffect } from "react";
import css from "./index.module.css";

const InputValue: React.FC<{
  id: string;
  type: string;
  disabled: boolean;
  text: string;
  value: string;
}> = ({ id, type, disabled, text, value }) => {
  useEffect(() => {
    if (value !== "") {
      const input = document.getElementById(id);
      if (input) {
        if (id === "DescInss") {
          input.style.color = "#e67e22";
        } else if (id === "DescIprf") {
          input.style.color = "#c0392b";
        }
      }
    }
  });
  return (
    <fieldset className={css.fieldset}>
      <label htmlFor={id} className={css.label}>
        {text}
      </label>
      <input
        className={css.inputvalue}
        id={id}
        type={type}
        disabled={disabled}
        value={value}
      />
    </fieldset>
  );
};

export default InputValue;
