import React from "react";
import Input from "../input";

const MainHeader: React.FC<{
  setInitAmount: any;
  InitAmount: number;
  setTax: any;
  Tax: number;
  setPeriod: any;
  Period: Number[];
}> = ({ setInitAmount, InitAmount, setTax, Tax, setPeriod, Period }) => {
  return (
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
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
