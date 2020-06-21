import React from "react";
import css from "./index.module.css";

const HeaderCard = () => {
  return (
    <head className={css.header}>
      <a className="btn-floating btn-small waves-effect waves-light red">
        <i className="material-icons">clear</i>
      </a>
      <a className="dropdown-trigger" href="#!" data-target="dropdown1">
        <i className="material-icons ">more_vert</i>
        <ul id="dropdown1" className="dropdown-content">
          <li>
            <a href="#!">one</a>
          </li>
        </ul>
      </a>
    </head>
  );
};

export default HeaderCard;
