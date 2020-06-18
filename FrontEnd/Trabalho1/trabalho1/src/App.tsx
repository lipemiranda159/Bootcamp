import React, { useState, ChangeEvent } from "react";
import "./App.css";
import Header from "./components/header";
import Salary from "./components/salary";
import Values from "./components/values";
import Result from "./components/result";
import Bar from "./components/bar";
import SalaryState from "./models/salaryState";

const App = () => {
  const [salary, setSalary] = useState<SalaryState>(new SalaryState(0));

  const handleChangeSalary = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    const salaryValue = parseInt(event.target.value);
    setSalary(new SalaryState(salaryValue));
  };

  return (
    <div className="main">
      <Header />
      <div className="row">
        <Salary setSalary={handleChangeSalary} />
      </div>
      <Values />
      <Result />
      <div className="row">
        <div className="col s12 bar">
          <Bar value="100" color="blue" />
          <Bar value="50" color="black" />
        </div>
      </div>
    </div>
  );
};

export default App;
