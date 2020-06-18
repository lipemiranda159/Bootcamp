import React from "react";
import InputValue from "../input";
import SalaryState from "../../models/salaryState";

const Result: React.FC<{ salary: SalaryState }> = ({ salary }) => {
  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field col s3">
          <InputValue
            id="SalaryLiq"
            type="text"
            disabled={true}
            text="Salário Líquido"
            value={salary.SalLiq}
          />
        </div>
      </div>
    </div>
  );
};

export default Result;
