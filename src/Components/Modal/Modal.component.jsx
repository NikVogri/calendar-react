import React from "react";
import classes from "./Modal.module.scss";

const Modal = ({ show }) => {
  return (
    <div
      className={`${classes.modal} ${
        show ? classes.showModal : classes.HideModal
      }`}
    >
      hello I am the modal
    </div>
  );
};

export default Modal;
