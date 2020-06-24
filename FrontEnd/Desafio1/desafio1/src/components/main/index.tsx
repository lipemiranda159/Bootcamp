import React, { useState } from "react";
import Footer from "../footer";
import Card from "../card";
import ValueState from "../../model/ValueState";
import CalcService from "../../Service/CalcService";

const Main: React.FC<{ state: ValueState }> = ({ state }) => {
  const { InitAmount, Period, TaxMonth } = state;
  const initalState: number[] = [0];
  const [period, setPeriod] = useState(initalState);
  const handleClickAdd = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const auxValues = Object.assign([], period);
    auxValues.push(period.length);
    setPeriod(auxValues);
  };
  return (
    <div>
      <div className="row">
        {period.map((month) => {
          if (month === 0) return;
          const amount = CalcService.GetMontant(InitAmount, TaxMonth, month);
          const diff = TaxMonth > 0 ? InitAmount + amount : InitAmount - amount;
          const taxValue = CalcService.GetTax(InitAmount, diff);
          return (
            <Card
              key={month}
              month={month}
              amount={diff.toFixed(2)}
              tax={taxValue.toFixed(2)}
              totalAmount={amount.toFixed(2)}
            />
          );
        })}
      </div>
      <div className="row">
        <Footer addCard={handleClickAdd} />
      </div>
    </div>
  );
};

export default Main;
