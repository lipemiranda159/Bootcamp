import React from "react";
import "./App.css";
import Header from "./components/header";
import MainHeader from "./components/mainHeader";
import Main from "./components/main";

function App() {
  return (
    <div className="container">
      <Header title="React - Juros compostos" />
      <MainHeader />
      <Main />
    </div>
  );
}

export default App;
