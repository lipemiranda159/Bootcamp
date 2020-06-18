import React, { useState, ChangeEvent } from "react";
import "./App.css";
import Header from "./components/header";
import Salary from "./components/salary";
import Values from "./components/values";
import Result from "./components/result";
import Bar from "./components/bar";
import SalaryState from "./models/salaryState";
import { SalaryService } from "./services/salaryService";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

const App = () => {
  const [salary, setSalary] = useState<SalaryState>(new SalaryState(0));

  const handleChangeSalary = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
    const value = parseFloat(event.target.value);
    if (value) {
      const calcSalary = SalaryService.calcSalary(value);
      console.log(calcSalary);
      setSalary(calcSalary);
    } else if (event.target.value !== "") {
      toast.error("Este campo só aceita números!");
    }
  };

  return (
    <div className="main">
      <Header />
      <div className="row">
        <Salary setSalary={handleChangeSalary} />
        <ToastContainer />
      </div>
      <Values salary={salary} />
      <Result salary={salary} />
      <div className="row">
        <div className="col s12 bar">
          <Bar value={salary.InssPercent.toString()} color="#e67e22" />
          <Bar value={salary.IprfPercent.toString()} color="#c0392b" />
          <Bar value="100" color="#16a085" />
        </div>
      </div>
    </div>
  );
};

export default App;
