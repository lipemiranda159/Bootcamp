import React from "react";
import css from "./index.module.css";

const Header: React.FC<{ graph: boolean }> = (graph) => {
  const classTitleName = `nav-wrapper ${css.headerTitle}`;
  return (
    <nav>
      <div className={classTitleName}>
        <a href="!#" className="brand-logo">
          Bootcamp - Desafio
        </a>
        {graph.graph ? (
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="sass.html">Ver gráfico</a>
            </li>
          </ul>
        ) : (
          ""
        )}
      </div>
    </nav>
  );
};

export default Header;
