import React from "react";
import "./App.css";
import Header from "./components/header";
import MainHeader from "./components/mainHeader";

function App() {
  return (
    <div className="container">
      <Header title="React - Juros compostos" />
      <MainHeader />
    </div>
  );
}

export default App;
