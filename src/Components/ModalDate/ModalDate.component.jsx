import React from "react";
import classes from "./ModalDate.module.scss";
const ModalDate = ({ day, month }) => {
  return (
    <span className={classes.dateName}>
      {day} {month}
    </span>
  );
};

export default ModalDate;
