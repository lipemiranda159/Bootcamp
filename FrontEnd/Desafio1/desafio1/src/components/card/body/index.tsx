import React from "react";
import css from "./index.module.css";

const BodyCard: React.FC<{
  totalAmount: number;
  amount: number;
  tax: number;
}> = ({ totalAmount, amount, tax }) => {
  return (
    <div className={css.body}>
      <div className={css.id}>1</div>
      <div>
        <h6>{totalAmount}</h6>
        <h6>{amount}</h6>
        <h6>{tax}</h6>
      </div>
    </div>
  );
};

export default BodyCard;
