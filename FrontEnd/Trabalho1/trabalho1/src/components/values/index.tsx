import React from "react";
import InputValue from "../input";
import SalaryState from "../../models/salaryState";

const Values: React.FC<{ salary: SalaryState }> = ({ salary }) => {
  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field col s3">
          <InputValue
            id="BaseInss"
            type="text"
            disabled={true}
            text="Base INSS"
            value={salary.BaseInss}
          />
        </div>
        <div className="input-field col s3">
          <InputValue
            id="DescInss"
            type="text"
            disabled={true}
            text="Deconto INSS"
            value={salary.DescInss}
          />
        </div>
        <div className="input-field col s3">
          <InputValue
            id="BaseIprf"
            type="text"
            disabled={true}
            text="Base IPRF"
            value={salary.BaseIprf}
          />
        </div>
        <div className="input-field col s3">
          <InputValue
            id="DescIprf"
            type="text"
            disabled={true}
            text="Desconto IPRF"
            value={salary.DescIprf}
          />
        </div>
      </div>
    </div>
  );
};

export default Values;
