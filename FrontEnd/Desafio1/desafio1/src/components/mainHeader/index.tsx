import React from "react";
import Input from "../input";

const MainHeader = () => {
  return (
    <div className="row">
      <div className="col s12">
        <div className="row">
          <Input inputId="value" label="Montante inicial" />
          <Input inputId="taxMonth" label="Taxa de juros mensal" />
          <Input inputId="period" label="Período" />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
