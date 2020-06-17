import React from "react";
import "./App.css";
import Header from "./components/header";
import Salary from "./components/salary";
import Values from "./components/values";
import Result from "./components/result";

function App() {
  return (
    <div className="main">
      <Header />
      <div className="row">
        <Salary />
      </div>
      <Values />
      <Result />
    </div>
  );
}

export default App;
