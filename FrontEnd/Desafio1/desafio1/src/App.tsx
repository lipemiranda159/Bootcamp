import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import MainHeader from "./components/mainHeader";
import Main from "./components/main";
import M from "materialize-css";

function App() {
  M.AutoInit();
  const [InitAmount, setInitAmount] = useState(0);
  const [Tax, setTax] = useState(0);
  const initialPeriod: number[] = [0];
  const [Period, setPeriod] = useState(initialPeriod);

  return (
    <div className="container">
      <Header title="React - Juros compostos" />
      <MainHeader
        InitAmount={InitAmount}
        setInitAmount={setInitAmount}
        Tax={Tax}
        setTax={setTax}
        Period={Period}
        setPeriod={setPeriod}
      />
      <Main
        Period={Period}
        InitAmount={InitAmount}
        TaxMonth={Tax}
        setState={setPeriod}
      />
    </div>
  );
}

export default App;
