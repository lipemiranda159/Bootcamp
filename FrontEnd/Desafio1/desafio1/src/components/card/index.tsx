import React from "react";
import HeaderCard from "./headerCard";
import BodyCard from "./body";
import css from "./index.module.css";

const Card = () => {
  const cssClass = `card horizontal ${css.flexOrientation}`;
  return (
    <div className={cssClass}>
      <HeaderCard />
      <BodyCard />
    </div>
  );
};

export default Card;
