import React, { useState } from "react";
import Footer from "../footer";
import Card from "../card";
import ValueState from "../../model/ValueState";
import CalcService from "../../Service/CalcService";

const Main: React.FC<{ state: ValueState }> = ({ state }) => {
  const { InitAmount, Period, TaxMonth } = state;
  const initalState: ValueState[] = [];
  const [cardsValues, setCardsValues] = useState(initalState);
  const handleClickAdd = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const auxValues = Object.assign([], cardsValues);
    auxValues.push({
      InitAmount,
      Period,
      TaxMonth,
    });

    setCardsValues(auxValues);
  };
  return (
    <div>
      <div className="row">
        {cardsValues.map((_, index) => {
          const amount = CalcService.GetMontant(
            InitAmount,
            TaxMonth,
            cardsValues.length
          );
          const taxValue = CalcService.GetTax(InitAmount, amount);
          return (
            <Card
              key={index}
              amount={TaxMonth > 0 ? InitAmount + amount : InitAmount - amount}
              tax={taxValue}
              totalAmount={amount}
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
