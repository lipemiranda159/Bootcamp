import React from "react";
import css from "./index.module.css";

const Footer = (props: any) => {
  return (
    <footer className={css.footer}>
      <a
        href="#"
        className="btn-floating btn-large waves-effect waves-light red"
        onClick={props.addCard}
      >
        <i className="material-icons">add</i>
      </a>
    </footer>
  );
};

export default Footer;
