import React from "react";
import css from "./index.module.css";

const BodyCard: React.FC<{
  totalAmount: string;
  amount: string;
  tax: string;
  month: number;
}> = ({ totalAmount, amount, tax, month }) => {
  return (
    <div className={css.body}>
      <div className={css.id}>
        <h5> {month}</h5>
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
