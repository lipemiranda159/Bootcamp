import React from "react";
import InputSalary from "../inputSalary";
import Constants from "../../constants/Constants";

const Salary = (props: any) => {
  const { idSalary, typeSalary, textSalary } = Constants;
  return (
    <div className="col s12">
      <div className="input-field col s12">
        <InputSalary
          id={idSalary}
          type={typeSalary}
          disabled={false}
          text={textSalary}
          setSalary={props.setSalary}
        />
      </div>
    </div>
  );
};

export default Salary;
