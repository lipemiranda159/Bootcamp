import React from "react";
import "./App.css";
import Header from "./components/header";
import InputValue from "./components/input";

function App() {
  return (
    <div className="main">
      <Header />
      <div className="row">
        <InputValue id="salary" type="number" disabled={false} />
      </div>
    </div>
  );
}

export default App;
