import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import MainHeader from "./components/mainHeader";
import Main from "./components/main";
import ValueState from "./model/ValueState";
import M from "materialize-css";

function App() {
  M.AutoInit();
  const valueAux = new ValueState();
  valueAux.InitAmount = 70000;
  valueAux.TaxMonth = -2;
  valueAux.Period = 24;
  const [value, setValue] = useState(valueAux);

  return (
    <div className="container">
      <Header title="React - Juros compostos" />
      <MainHeader />
      <Main state={value} />
    </div>
  );
}

export default App;
