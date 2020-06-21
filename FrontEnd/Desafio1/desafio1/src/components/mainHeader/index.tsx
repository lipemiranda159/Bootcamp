import React from "react";
import Input from "../input";

const MainHeader = () => {
  return (
    <div className="row">
      <div className="col s12">
        <div className="row">
          <Input inputId="value" label="Montante inicial" />
          <Input inputId="value" label="Montante inicial" />
          <Input inputId="value" label="Montante inicial" />
          <Input inputId="value" label="Montante inicial" />
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
