import React, { ChangeEvent } from "react";
import Input from "../input";
import { toast, ToastContainer } from "react-toastify";
import Footer from "../footer";

const MainHeader: React.FC<{
  setInitAmount: any;
  InitAmount: number;
  setTax: any;
  Tax: number;
  setPeriod: any;
  Period: Number[];
}> = ({ setInitAmount, InitAmount, setTax, Tax, setPeriod, Period }) => {
  const handleClickAdd = (event: ChangeEvent<HTMLInputElement>) => {
    if (InitAmount !== 0 && Tax !== 0) {
      const auxState = Object.assign([], Period);
      console.log(Period.length);
      console.log(auxState);
      auxState.push(auxState.length);
      setPeriod(auxState);
    } else {
      toast.error("Digite os valores do montante inicial e o valor da taxa!");
    }
  };

  return (
    <div className="center">
      <div className="row">
        <div className="col s12">
          <div className="row">
            <Input
              inputId="value"
              label="Montante inicial"
              state={InitAmount}
              setState={setInitAmount}
              InitAmount={InitAmount}
              Tax={Tax}
            />
            <Input
              inputId="taxMonth"
              label="Taxa de juros mensal"
              setState={setTax}
              state={Tax}
              InitAmount={InitAmount}
              Tax={Tax}
            />
            <Input
              inputId="period"
              label="Período"
              state={Period}
              setState={setPeriod}
              InitAmount={InitAmount}
              Tax={Tax}
            />
            <Footer addCard={handleClickAdd} />
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
