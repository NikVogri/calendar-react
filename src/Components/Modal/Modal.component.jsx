import React, { useState } from "react";
import classes from "./Modal.module.scss";
import { connect } from "react-redux";
import { addNotesToState } from "../../Redux/actionCreator";
const Modal = ({ show, closeModal, date, setNotes, notes }) => {
  const [input, setInput] = useState("");
  const [day, month] = date;

  const addNotesToMonth = () => {
    setNotes(day, month, input);
    setInput("");
  };

  const displayNotes = () => {
    if (month) {
      const allNotes = notes;
      const currentMonthNotes = allNotes[month];
      const notesArr = currentMonthNotes.filter(note => note.day === day);
      return notesArr;
    }
  };
  return (
    <div
      className={`${classes.modal} ${
        show ? classes.showModal : classes.hideModal
      }`}
    >
      <span className={classes.closeModal} onClick={closeModal} title="Close">
        X
      </span>
      <span className={classes.dateName}>
        {date[0]} {date[1]}
      </span>
      <div className={classes.addItems}>
        <span
          className={classes.addEventButton}
          title="Add an event"
          onClick={() => addNotesToMonth()}
        >
          +
        </span>
        <input
          onChange={e => setInput(e.target.value)}
          maxLength="65"
          value={input}
        />
      </div>
      <ul className={classes.listEvents}>
        {month
          ? displayNotes().map((item, index) => (
              <li key={index}>
                <span className={classes.removeItem}>X </span>
                <span className={classes.itemValue}>{item.note}</span>
              </li>
            ))
          : null}
      </ul>
      <span className={classes.amount}>
        {month ? displayNotes().length : "0"}/5
      </span>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    date: state.modalInformation.displayDate,
    notes: state.modalInformation
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setNotes: (day, month, note) => dispatch(addNotesToState(day, month, note))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
