import React from "react";
import css from "./index.module.css";

const Footer = (props: any) => {
  return (
    <div className={css.footer}>
      <a
        href="#!"
        className="btn-floating btn-large waves-effect waves-light red"
        onClick={props.addCard}
      >
        <i className="material-icons no-autoinit">add</i>
      </a>
    </div>
  );
};

export default Footer;
