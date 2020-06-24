import React from "react";
import css from "./index.module.css";

const HeaderCard: React.FC<{
  period: number[];
  month: number;
  setState: any;
}> = ({ period, month, setState }) => {
  const handleClick = () => {
    period = period.filter((m) => m !== month);
    setState(period);
  };
  return (
    <header className={css.header}>
      <a
        className="btn-floating btn-small waves-effect waves-light red"
        onClick={handleClick}
      >
        <i className="material-icons">clear</i>
      </a>
      <a className="dropdown-trigger" href="#!" data-target="dropdown1">
        <i className="material-icons ">more_vert</i>
      </a>
      <ul id="dropdown1" className="dropdown-content">
        <li>
          <a href="#!">one</a>
        </li>
      </ul>
    </header>
  );
};

export default HeaderCard;
