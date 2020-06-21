import React from "react";
import css from "./index.module.css";

const Footer = () => {
  return (
    <footer className={css.footer}>
      <a className="btn-floating btn-large waves-effect waves-light red">
        <i className="material-icons">add</i>
      </a>
    </footer>
  );
};

export default Footer;
