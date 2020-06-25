import React from "react";
import css from "./index.module.css";

const BodyCard: React.FC<{
  totalAmount: string;
  amount: string;
  tax: string;
}> = ({ totalAmount, amount, tax }) => {
  const classColor =
    amount < totalAmount
      ? `material-icons md-18 ${css.red}`
      : `material-icons md-18 ${css.red}`;
  return (
    <div className={css.body}>
      <div className={css.id}>
        <h3>
          <i className={classColor}>trending_down</i>
        </h3>
      </div>
      <div>
        <h6>{totalAmount}</h6>
        <h6>{amount}</h6>
        <h6>{tax}</h6>
      </div>
    </div>
  );
};

export default BodyCard;
