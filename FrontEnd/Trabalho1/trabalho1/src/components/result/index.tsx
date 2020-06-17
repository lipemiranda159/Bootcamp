import React from "react";
import InputValue from "../input";

const Result = () => {
  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field col s3">
          <InputValue
            id="SalaryLiq"
            type="text"
            disabled={true}
            text="Salário Líquido"
          />
        </div>
      </div>
    </div>
  );
};

export default Result;
