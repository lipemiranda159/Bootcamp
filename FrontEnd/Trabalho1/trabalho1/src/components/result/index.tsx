import React from "react";
import InputValue from "../input";
import SalaryState from "../../models/salaryState";
import Constants from "../../constants/Constants";

const Result: React.FC<{ salary: SalaryState }> = ({ salary }) => {
  const { inputType, idSalaryLiq, textSalaryLiq } = Constants;

  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field col s3">
          <InputValue
            id={idSalaryLiq}
            type={inputType}
            disabled={true}
            text={textSalaryLiq}
            value={salary.SalLiq}
          />
        </div>
      </div>
    </div>
  );
};

export default Result;
