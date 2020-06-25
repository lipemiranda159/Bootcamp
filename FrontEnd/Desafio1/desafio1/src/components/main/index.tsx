import React, { ChangeEvent } from "react";
import Footer from "../footer";
import Card from "../card";
import CalcService from "../../Service/CalcService";
import FormatService from "../../Service/FormatService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import css from "../main/index.module.css";

const Main: React.FC<{
  Period: number[];
  setState: any;
  InitAmount: number;
  TaxMonth: number;
}> = ({ Period, InitAmount, TaxMonth, setState }) => {
  const handleClickAdd = (event: ChangeEvent<HTMLInputElement>) => {
    if (InitAmount !== 0 && TaxMonth !== 0) {
      const auxState = Object.assign([], Period);
      console.log(Period.length);
      console.log(auxState);
      auxState.push(auxState.length);
      setState(auxState);
    } else {
      toast.error("Digite os valores do montante inicial e o valor da taxa!");
    }
  };
  return (
    <div className={css.fullContent}>
      <div className="row">
        {Period.length > 1 &&
          Period.map((month) => {
            if (month === 0) return <div key={0}></div>;
            const amount = CalcService.GetMontant(InitAmount, TaxMonth, month);
            const diff =
              TaxMonth > 0 ? InitAmount + amount : InitAmount - amount;
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
        <ToastContainer />
      </div>
      <div className={css.footer}>
        <Footer addCard={handleClickAdd} />
      </div>
    </div>
  );
};

export default Main;
