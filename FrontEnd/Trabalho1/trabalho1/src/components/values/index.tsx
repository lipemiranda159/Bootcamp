import React from "react";
import InputValue from "../input";

const Values = () => {
  return (
    <div className="row">
      <div className="col s12">
        <div className="input-field col s3">
          <InputValue
            id="BaseInss"
            type="text"
            disabled={true}
            text="Base INSS"
          />
        </div>
        <div className="input-field col s3">
          <InputValue
            id="DescInss"
            type="text"
            disabled={true}
            text="Deconto INSS"
          />
        </div>
        <div className="input-field col s3">
          <InputValue
            id="BaseIprf"
            type="text"
            disabled={true}
            text="Base IPRF"
          />
        </div>
        <div className="input-field col s3">
          <InputValue
            id="DescIprf"
            type="text"
            disabled={true}
            text="Desconto IPRF"
          />
        </div>
      </div>
    </div>
  );
};

export default Values;
