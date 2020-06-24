import React, { useCallback, useEffect } from "react";
import Footer from "../footer";
import Card from "../card";
import CalcService from "../../Service/CalcService";
import FormatService from "../../Service/FormatService";

const Main: React.FC<{
  Period: number[];
  setState: any;
  InitAmount: number;
  TaxMonth: number;
}> = ({ Period, InitAmount, TaxMonth, setState }) => {
  const handleClickAdd = useCallback(() => {
    const auxState = Object.assign([], Period);
    console.log(Period.length);
    console.log(auxState);
    auxState.push(auxState.length);
    setState(auxState);
  }, []);
  return (
    <div>
      <div className="row">
        {Period.length > 1 &&
          Period.map((month) => {
            if (month === 0) return <div key={0}></div>;
            const amount = CalcService.GetMontant(InitAmount, TaxMonth, month);
            const diff =
              TaxMonth > 0 ? InitAmount + amount : InitAmount - amount;
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
