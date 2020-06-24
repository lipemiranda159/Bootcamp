import React from "react";
import HeaderCard from "./headerCard";
import BodyCard from "./body";
import css from "./index.module.css";

const Card: React.FC<{
  totalAmount: string;
  amount: string;
  tax: string;
  month: number;
}> = ({ totalAmount, amount, tax, month }) => {
  const cssClass = `card horizontal ${css.flexOrientation}`;
  const colClass = `col s2 ${css.col}`;
  return (
    <div className={colClass}>
      <div className={cssClass}>
        <HeaderCard />
        <BodyCard
          totalAmount={totalAmount}
          amount={amount}
          tax={tax}
          month={month}
        />
      </div>
    </div>
  );
};

export default Card;
