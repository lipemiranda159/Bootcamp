import React, { useEffect } from "react";
import css from "./index.module.css";
import Constants from "../../constants/Constants";

const InputValue: React.FC<{
  id: string;
  type: string;
  disabled: boolean;
  text: string;
  value: string;
}> = ({ id, type, disabled, text, value }) => {
  const { descInssColor, descIprfColor, idDescInss, idDescIprf } = Constants;

  useEffect(() => {
    if (value !== "") {
      const input = document.getElementById(id);
      if (input) {
        if (id === idDescInss) {
          input.style.color = descInssColor;
        } else if (id === idDescIprf) {
          input.style.color = descIprfColor;
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
