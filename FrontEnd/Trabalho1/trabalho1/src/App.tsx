import React from "react";
import "./App.css";
import Header from "./components/header";
import InputValue from "./components/input";

function App() {
  return (
    <div className="main">
      <Header />
      <div className="row">
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
        <div className="row">
          <div className="col s12">
            <div className="input-field col s3">
              <InputValue
                id="BaseInss"
                type="text"
                disabled={true}
                text="Base INSS"
              />
            </div>
            <div className="input-field col s3">
              <InputValue
                id="DescInss"
                type="text"
                disabled={true}
                text="Deconto INSS"
              />
            </div>
            <div className="input-field col s3">
              <InputValue
                id="BaseIprf"
                type="text"
                disabled={true}
                text="Base IPRF"
              />
            </div>
            <div className="input-field col s3">
              <InputValue
                id="DescIprf"
                type="text"
                disabled={true}
                text="Desconto IPRF"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col s12">
          <div className="input-field col s3">
            <InputValue
              id="SalaryLiq"
              type="text"
              disabled={true}
              text="Salário Líquido"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
