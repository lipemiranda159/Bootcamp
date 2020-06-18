import React from "react";
import InputSalary from "../inputSalary";

const Salary = (props: any) => {
  return (
    <div className="col s12">
      <div className="input-field col s12">
        <InputSalary
          id="salary"
          type="number"
          disabled={false}
          text="Salário Bruto"
          setSalary={props.setSalary}
        />
      </div>
    </div>
  );
};

export default Salary;
