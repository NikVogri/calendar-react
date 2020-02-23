import React from "react";
import classes from "./ModalListLength.module.scss";
const ModalListLength = ({ length }) => {
  return <span className={classes.amount}>{length >= 1 ? length : "0"}/5</span>;
};

export default ModalListLength;
