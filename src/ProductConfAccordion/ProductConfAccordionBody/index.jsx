import React from "react";
import "./component.module.less";

const ProductConfAccordionBody = ({
  children,
  handleOpenNext,
  handleSetSelected,
  id
}) => {
  return (
    <div
      className="accordionBody"
      onClick={(e) => {
        handleOpenNext(e);
        handleSetSelected(e);
      }}
      data-id={id}
    >
      {children}
    </div>
  );
};

export default ProductConfAccordionBody;
