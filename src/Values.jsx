import React from "react";

const Values = ({ values, index }) => {
  return values.map((value, i) => {
    return (
      <div data-id={index} key={i}>
        {value.name}
      </div>
    );
  });
};

export default Values;
