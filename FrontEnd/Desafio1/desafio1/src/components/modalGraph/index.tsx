import React from "react";
import Modal from "react-modal";
import CalcService from "../../Service/CalcService";
Modal.setAppElement("#root");
const ModalGraph: React.FC<{
  Period: number[];
  InitAmount: number;
  TaxMonth: number;
}> = ({ Period, InitAmount, TaxMonth }) => {
  return (
    <div>
      {/* {Period.length > 1 &&
    Period.map((month) => {
      if (month === 0) {
        return <div key={0}></div>;
      }
      const amount = CalcService.GetMontant(
        InitAmount,
        TaxMonth,
        month
      );
      const diff = amount - InitAmount;
      const taxValue = CalcService.GetTax(InitAmount, diff);
      const type = TaxMonth > 0 ? "default" : "red";} */}
    </div>
  );
};

export default ModalGraph;
