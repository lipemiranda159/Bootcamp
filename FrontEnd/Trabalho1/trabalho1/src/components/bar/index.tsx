import React from "react";

const Bar: React.FC<{
  value: string;
  color: string;
}> = ({ value, color }) => {
  return (
    <div
      style={{
        marginTop: "40px",
        width: value + "%",
        height: "20px",
        backgroundColor: color,
      }}
    />
  );
};

export default Bar;
