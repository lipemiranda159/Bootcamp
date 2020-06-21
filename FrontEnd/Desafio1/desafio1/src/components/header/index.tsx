import React from "react";
import css from "./index.module.css";

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <header>
      <h1 className={css.title}>{title}</h1>
    </header>
  );
};

export default Header;
