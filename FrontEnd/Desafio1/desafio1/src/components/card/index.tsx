import React from "react";
import HeaderCard from "./headerCard";
import BodyCard from "./body";
import css from "./index.module.css";

const Card: React.FC<{
  totalAmount: string;
  amount: string;
  tax: string;
  period: number[];
  month: number;
  setState: any;
  type: string;
}> = ({ totalAmount, amount, tax, period, month, setState, type }) => {
  const cssClass = `card horizontal ${css.flexOrientation}`;
  const colClass = `col s2 ${css.col}`;
  return (
    <div className={colClass}>
      <div className={cssClass}>
        <HeaderCard period={period} month={month} setState={setState} />
        <BodyCard
          totalAmount={totalAmount}
          amount={amount}
          tax={tax}
          type={type}
        />
      </div>
    </div>
  );
};

export default Card;
