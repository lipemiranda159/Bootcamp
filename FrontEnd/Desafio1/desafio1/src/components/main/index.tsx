import React from "react";
import Footer from "../footer";
import Card from "../card";
import ValueState from "../../model/ValueState";
import CalcService from "../../Service/CalcService";
import FormatService from "../../Service/FormatService";

const Main: React.FC<{
  state: ValueState;
  setState: any;
}> = ({ state, setState }) => {
  const { InitAmount, TaxMonth, Period } = state;

  const handleClickAdd = (event: React.MouseEvent<HTMLAnchorElement>) => {
    Period.push(Period.length++);
    setState(state);
  };
  return (
    <div>
      <div className="row">
        {Period.map((month) => {
          if (month === 0) return <div key={0}></div>;
          const amount = CalcService.GetMontant(InitAmount, TaxMonth, month);
          const diff = TaxMonth > 0 ? InitAmount + amount : InitAmount - amount;
          const taxValue = CalcService.GetTax(InitAmount, diff);

          return (
            <Card
              key={month}
              month={month}
              setState={setState}
              period={Period}
              amount={FormatService.FormatCurrency(diff)}
              tax={FormatService.FormatPercent(taxValue)}
              totalAmount={FormatService.FormatCurrency(amount)}
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
