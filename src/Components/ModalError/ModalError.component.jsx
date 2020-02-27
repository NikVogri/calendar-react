import React from "react";
import classes from "./ModalError.module.scss";

const ModalError = ({ error, closeError }) => {
  return (
    <span
      className={`${classes.error} ${
        error ? classes.showError : classes.hideError
      }`}
      onClick={closeError}
    >
      {error}
    </span>
  );
};

export default ModalError;
