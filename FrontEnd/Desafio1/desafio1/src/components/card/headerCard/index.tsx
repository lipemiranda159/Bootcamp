import React from "react";
import css from "./index.module.css";

const HeaderCard: React.FC<{
  period: number[];
  month: number;
  setState: any;
}> = ({ period, month, setState }) => {
  const handleClick = () => {
    console.log(period);
    let auxState = Object.assign([], period);
    auxState = auxState.filter((m) => m !== month);
    console.log(auxState);
    for (let index = month; index < auxState.length; index++) {
      (auxState as any)[index] = (auxState[index] - 1) as number;
    }
    setState(auxState);
  };
  return (
    <header className={css.header}>
      <div className={css.left}>
        <h5>{month}</h5>
      </div>
      <div className={css.right}>
        <a
          href="#!"
          className="btn-floating btn-small waves-effect waves-light red"
          onClick={handleClick}
        >
          <i className="material-icons">clear</i>
        </a>
      </div>
    </header>
  );
};

export default HeaderCard;
