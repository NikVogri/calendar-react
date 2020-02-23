import React from "react";
import classes from "./ModalNoteList.module.scss";

const ModalNoteList = ({ date, showNotes, removeNote }) => {
  const list = showNotes();
  if (list) {
    return (
      <ul className={classes.listEvents}>
        {list.map((item, index) => (
          <li key={index}>
            <span
              className={classes.removeItem}
              onClick={() => removeNote(item.note, date)}
            >
              X{" "}
            </span>
            <span className={classes.itemValue}>{item.note}</span>
          </li>
        ))}
      </ul>
    );
  } else {
    return null;
  }
};

export default ModalNoteList;
