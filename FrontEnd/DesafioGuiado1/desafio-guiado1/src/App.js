import React, { useState } from "react";
import "./App.css";

function App() {
  const [dates, setDates] = useState([]);

  const handleClick = () => {
    var datesObj = Object.assign(dates);
    var options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      timeZoneName: "short",
    };

    var date = new Date();
    var formatedDate = new Intl.DateTimeFormat("pt-BR", options).format(date);
    datesObj.push(formatedDate);

    setDates(datesObj);
  };

  return (
    <div className="App">
      <header className="App-header"></header>
      <button onClick={handleClick}>Log</button>
      {console.log(dates)}
    </div>
  );
}

export default App;
