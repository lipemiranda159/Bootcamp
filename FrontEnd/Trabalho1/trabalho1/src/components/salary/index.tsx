import React from "react";
import InputValue from "../input";

const Salary = () => {
  return (
    <div className="col s12">
      <div className="input-field col s12">
        <InputValue
          id="salary"
          type="number"
          disabled={false}
          text="Salário Bruto"
        />
      </div>
    </div>
  );
};

export default Salary;
