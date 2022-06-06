import React from "react";
import "./component.module.less";

const ProductConfAccordionButton = ({ children, handleOpen, id, expand }) => {
  console.log("id: " + id + " -- " + expand);
  return (
    <button
      type="button"
      className="accordionButton"
      aria-expanded={expand}
      aria-controls={id}
      onClick={handleOpen}
      data-id={id}
    >
      {children}
    </button>
  );
};

export default ProductConfAccordionButton;
