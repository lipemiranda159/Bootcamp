import React from "react";
import HeaderCard from "./headerCard";
import BodyCard from "./body";
import css from "./index.module.css";

const Card: React.FC<{
  totalAmount: number;
  amount: number;
  tax: number;
}> = ({ totalAmount, amount, tax }) => {
  const cssClass = `card horizontal ${css.flexOrientation}`;
  return (
    <div className={cssClass}>
      <HeaderCard />
      <BodyCard totalAmount={totalAmount} amount={amount} tax={tax} />
    </div>
  );
};

export default Card;
