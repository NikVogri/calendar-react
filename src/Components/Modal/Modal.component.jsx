import React, { useState } from "react";
import classes from "./Modal.module.scss";
import { connect } from "react-redux";
import {
  addNotesToState,
  removeNoteFromState
} from "../../Redux/actionCreator";
const Modal = ({ show, closeModal, date, setNotes, notes, removeNote }) => {
  const [input, setInput] = useState("");
  const [alreadyOnList, setAlreadyOnList] = useState(false);
  const [noteIsNotEmpty, setNoteIsNotEmpty] = useState(false);
  const [day, month] = date;

  const closeErrorMessage = type => {
    if (type === "duplicate") {
      setAlreadyOnList(false);
    } else if (type === "empty") {
      setNoteIsNotEmpty(false);
    }
  };

  closeErrorMessage();
  const addNotesToMonth = () => {
    console.log("i ran");
    // checks if theres more than one note already in state
    if (input === "") {
      setNoteIsNotEmpty(true);
      return;
    } else {
      setNoteIsNotEmpty(false);
    }
    if (notes[month].length >= 1) {
      if (
        !notes[month].filter(el => el.note === input && el.day === day).length >
        0
      ) {
        // not a duplicate
        setAlreadyOnList(false);
        setNotes(day, month, input);
        setInput("");
      } else {
        // then its a duplicate
        setAlreadyOnList(true);
      }
    } else {
      // this is for adding the first item to an empty array
      setNotes(day, month, input);
      setInput("");
    }
  };
  // this variable is for the counter - to display number of notes & check if it's over 5.
  let notesLength;
  const displayNotes = () => {
    if (month) {
      const allNotes = notes;
      const currentMonthNotes = allNotes[month];
      // loops over month notes arr and returns arr with all days that contain notes
      const notesArr = currentMonthNotes.filter(note => note.day === day);
      notesLength = notesArr.length;
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
      <ul className={classes.listEvents}>
        {month
          ? displayNotes().map((item, index) => (
              <li key={index}>
                <span
                  className={classes.removeItem}
                  onClick={() => removeNote(item.note, date)}
                >
                  X{" "}
                </span>
                <span className={classes.itemValue}>{item.note}</span>
              </li>
            ))
          : null}
      </ul>

      {month ? (
        notesLength >= 5 ? null : (
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
        )
      ) : null}
      <span
        className={`${classes.error} ${
          alreadyOnList ? classes.showError : classes.hideError
        }`}
      >
        Note already exists
      </span>
      <span
        className={`${classes.error} ${
          noteIsNotEmpty ? classes.showError : classes.hideError
        }`}
      >
        Note can't be empty
      </span>
      <span className={classes.amount}>{month ? notesLength : "0"}/5</span>
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
    setNotes: (day, month, note) => dispatch(addNotesToState(day, month, note)),
    removeNote: (note, month) => dispatch(removeNoteFromState(note, month))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
