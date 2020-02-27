import React, { useState } from "react";
import classes from "./Modal.module.scss";
import { connect } from "react-redux";
import {
  addNotesToState,
  removeNoteFromState,
  addErrorToState,
  removeErrorFromState
} from "../../Redux/actionCreator";
import ModalError from "../ModalError/ModalError.component";
import ModalDate from "../ModalDate/ModalDate.component";
import ModalNotesList from "../ModalNoteList/ModalNoteList.component";
import ModalClose from "../ModalClose/ModalClose.component";
import ModalListLength from "../ModalListLength/ModalListLength.component";

const Modal = ({
  show,
  closeModal,
  date,
  setNotes,
  notes,
  removeNote,
  setError,
  removeError,
  error
}) => {
  const [input, setInput] = useState("");
  const [day, month] = date;

  const setCloseModal = () => {
    // when user clicks close modal execute this
    removeError();
    setInput("");
    closeModal();
  };

  const setErrorMessage = type => {
    // check what type of error to display
    if (type === "duplicate") {
      setError("Note already exists");
    } else if (type === "empty") {
      setError("Note can't be empty");
    }
  };

  const addNotesToMonth = () => {
    // checks if theres more than one note already in state
    if (input === "") {
      setErrorMessage("empty");
      return;
    } else {
      removeError();
    }
    if (notes[month].length >= 1) {
      if (
        !notes[month].filter(el => el.note === input && el.day === day).length >
        0
      ) {
        // not a duplicate
        removeError();
        setNotes(day, month, input);
        setInput("");
      } else {
        // then its a duplicate
        setErrorMessage("duplicate");
      }
    } else {
      // this is for adding the first item to an empty array
      setNotes(day, month, input);
      setInput("");
    }
  };
  // this variable is for the counter - to display number of notes & check if it's over 5.
  const displayNotes = () => {
    if (month) {
      const allNotes = notes;
      const currentMonthNotes = allNotes[month];
      // loops over month notes arr and returns arr with all days that contain notes
      const notesArr = currentMonthNotes.filter(note => note.day === day);
      return notesArr;
    } else {
      return 0;
    }
  };
  return (
    <div
      className={`${classes.modal} ${
        show ? classes.showModal : classes.hideModal
      }`}
    >
      <ModalClose closeModal={() => setCloseModal()} />
      <ModalDate day={date[0]} month={date[1]} />
      <ModalNotesList
        date={date}
        showNotes={() => displayNotes()}
        removeNote={removeNote}
      />

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

      {error ? <ModalError error={error} closeError={removeError} /> : null}
      <ModalListLength length={displayNotes().length} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    date: state.modalInformation.displayDate,
    notes: state.modalInformation,
    error: state.showError
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setNotes: (day, month, note) => dispatch(addNotesToState(day, month, note)),
    removeNote: (note, month) => dispatch(removeNoteFromState(note, month)),
    setError: error => dispatch(addErrorToState(error)),
    removeError: () => dispatch(removeErrorFromState())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
