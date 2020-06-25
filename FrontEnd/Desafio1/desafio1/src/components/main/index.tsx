import React from "react";
import Card from "../card";
import CalcService from "../../Service/CalcService";
import FormatService from "../../Service/FormatService";
import "react-toastify/dist/ReactToastify.min.css";
import css from "../main/index.module.css";

const Main: React.FC<{
  Period: number[];
  setState: any;
  InitAmount: number;
  TaxMonth: number;
}> = ({ Period, InitAmount, TaxMonth, setState }) => {
  return (
    <div className={css.fullContent}>
      <div className="center">
        <div className="row">
          {Period.length > 1 &&
            Period.map((month) => {
              if (month === 0) return <div key={0}></div>;
              const amount = CalcService.GetMontant(
                InitAmount,
                TaxMonth,
                month
              );
              const diff = amount - InitAmount;
              const taxValue = CalcService.GetTax(InitAmount, diff);
              const type = TaxMonth > 0 ? "default" : "red";
              return (
                <Card
                  key={month}
                  month={month}
                  setState={setState}
                  period={Period}
                  amount={FormatService.FormatCurrency(diff)}
                  tax={FormatService.FormatPercent(taxValue)}
                  totalAmount={FormatService.FormatCurrency(amount)}
                  type={type}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Main;
