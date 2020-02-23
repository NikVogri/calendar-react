import React from "react";
import classes from "./ModalClose.module.scss";

const ModalClose = ({ closeModal }) => {
  return (
    <span className={classes.closeModal} onClick={closeModal} title="Close">
      X
    </span>
  );
};

export default ModalClose;
