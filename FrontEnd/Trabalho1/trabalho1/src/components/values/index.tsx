import React from "react";
import InputValue from "../input";
import SalaryState from "../../models/salaryState";
import Constants from "../../constants/Constants";

const Values: React.FC<{ salary: SalaryState }> = ({ salary }) => {
  const {
    inputType,
    idBaseInss,
    textBaseInss,
    idDescInss,
    textDescInss,
    idBaseIprf,
    textBaseIprf,
    idDescIprf,
    textDescIprf,
  } = Constants;
  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field col s3">
          <InputValue
            id={idBaseInss}
            type={inputType}
            disabled={true}
            text={textBaseInss}
            value={salary.BaseInss}
          />
        </div>
        <div className="input-field col s3">
          <InputValue
            id={idDescInss}
            type={inputType}
            disabled={true}
            text={textDescInss}
            value={salary.DescInss}
          />
        </div>
        <div className="input-field col s3">
          <InputValue
            id={idBaseIprf}
            type={inputType}
            disabled={true}
            text={textBaseIprf}
            value={salary.BaseIprf}
          />
        </div>
        <div className="input-field col s3">
          <InputValue
            id={idDescIprf}
            type={inputType}
            disabled={true}
            text={textDescIprf}
            value={salary.DescIprf}
          />
        </div>
      </div>
    </div>
  );
};

export default Values;
