import React from "react";
import Input from "../input";
import ValueState from "../../model/ValueState";

const MainHeader: React.FC<{ setState: any; state: ValueState }> = ({
  setState,
  state,
}) => {
  return (
    <div className="row">
      <div className="col s12">
        <div className="row">
          <Input
            inputId="value"
            label="Montante inicial"
            state={state}
            setState={setState}
          />
          <Input
            inputId="taxMonth"
            label="Taxa de juros mensal"
            setState={setState}
            state={state}
          />
          <Input
            inputId="period"
            label="Período"
            state={state}
            setState={setState}
          />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
