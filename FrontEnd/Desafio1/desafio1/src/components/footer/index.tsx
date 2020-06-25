import React from "react";

const Footer = (props: any) => {
  return (
    <div>
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
