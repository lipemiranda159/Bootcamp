import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import MainHeader from "./components/mainHeader";
import Main from "./components/main";

function App() {
  const [InitAmount, setInitAmount] = useState(0);
  const [Tax, setTax] = useState(0);
  const initialPeriod: number[] = [0];
  const [Period, setPeriod] = useState(initialPeriod);
  const [graphAble, setGraphAble] = useState(false);

  return (
    <div className="fullContent">
      <Header graph={graphAble} />
      <div className="container">
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
          setGraph={setGraphAble}
        />
      </div>
    </div>
  );
}

export default App;
