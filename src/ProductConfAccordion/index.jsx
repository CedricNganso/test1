import React, { useState } from "react";
import "./component.module.less";
import AccordionButton from "./ProductConfAccordionButton";
import AccordionBody from "./ProductConfAccordionBody";

const ProductConfAccordion = ({ children, initial, maxItems }) => {
  const [open, setOpen] = useState(initial);

  const handleOpen = (e) => {
    const id = parseInt(e.target.getAttribute("data-id"), 10);
    let isSelected = true;
    let isSelectedPrev = false;
    let isFirst = false;
    let firstSelected = null;
    for (let i = id; i >= 0; i--) {
      if (
        !e.target.parentNode.parentNode.children[i].className.includes(
          "selected"
        )
      ) {
        isSelected = false;
      }
      if (maxItems > i) {
        if (
          !e.target.parentNode.parentNode.children[i].className.includes(
            "selected"
          )
        ) {
          firstSelected = i;
        }
      }
    }
    if (firstSelected !== null) {
      e.target.parentNode.parentNode.children[firstSelected].className =
        e.target.parentNode.parentNode.children[
          firstSelected
        ].className.replace(" pleaseSelect", "") + " pleaseSelect";
    }

    if (firstSelected !== null) {
      e.target.parentNode.parentNode.children[firstSelected].className =
        e.target.parentNode.parentNode.children[
          firstSelected
        ].className.replace(" pleaseSelect", "") + " pleaseSelect";
    }

    if (
      firstSelected !== null &&
      firstSelected !== 0 &&
      e.target.parentNode.parentNode.children[
        firstSelected - 1
      ].className.includes("selected")
    ) {
      isSelectedPrev = true;
    }

    if (id === 0) {
      isFirst = true;
    }
    if (isSelected || isFirst) {
      id === open ? setOpen("") : setOpen(id);
    }
    if (isSelectedPrev) {
      id === open ? setOpen("") : setOpen(firstSelected);
    }
    if (id === 0) {
      isFirst = true;
    }
    if (isSelected || isFirst) {
      id === open ? setOpen("") : setOpen(id);
    }
  };

  const handleOpenNext = (e) => {
    const id = parseInt(e.target.getAttribute("data-id"), 10) + 1;
    id === open ? setOpen("") : setOpen(id);
    e.stopPropagation();
  };

  const handleSetSelected = (e) => {
    console.log(e.target.parentNode.parentNode.className);
    e.target.parentNode.parentNode.className =
      e.target.parentNode.parentNode.className
        .replace(" selected", "")
        .replace(" pleaseSelect", "") + " selected";
  };

  return (
    <div className="accordion">
      {children.map((child, idx) => {
        const id = child.props.children[0].props.id;
        const expand = id === open;

        const button = React.cloneElement(child.props.children[0], {
          handleOpen,
          id,
          expand
        });

        const body = React.cloneElement(child.props.children[1], {
          handleOpenNext,
          handleSetSelected,
          id,
          expand
        });

        return (
          <div className="accordionItem" key={idx}>
            {button}
            {id === open && body}
          </div>
        );
      })}
    </div>
  );
};

ProductConfAccordion.Button = AccordionButton;
ProductConfAccordion.Body = AccordionBody;
ProductConfAccordion.Item = ({ children }) => children;

export default ProductConfAccordion;
