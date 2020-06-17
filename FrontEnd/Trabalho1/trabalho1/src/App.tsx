import React from "react";
import "./App.css";
import Header from "./components/header";
import Salary from "./components/salary";
import Values from "./components/values";
import Result from "./components/result";
import Bar from "./components/bar";

function App() {
  return (
    <div className="main">
      <Header />
      <div className="row">
        <Salary />
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
}

export default App;
