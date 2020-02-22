import React from "react";
import styles from "./Calendar.module.scss";
import Day from "../Day/Day.component";
import { connect } from "react-redux";
import { openModal, closeModal } from "../../Redux/actionCreator";

const Calendar = ({
  name,
  daysInMonth,
  isCurrentMonth,
  setOpenModal,
  hasNotes
}) => {
  let daysArr = [];
  const modalOpen = (day, month) => {
    const date = [day, month];
    // send date to modal
    setOpenModal(date);
  };

  if (daysInMonth) {
    for (let i = 1; i <= daysInMonth; i++) {
      daysArr.push(
        <Day
          key={i}
          dayNumber={i}
          currentMonth={name}
          openModal={(date, month) => modalOpen(date, month)}
          hasNotes={hasNotes[name].length >= 1 ? hasNotes[name] : null}
          // setNote={(day, month) => setNote(day, month)}
        />
      );
    }
  }
  return (
    <div className={styles.wrapper}>
      <div
        className={`${styles.header} ${
          isCurrentMonth ? styles.currentMonth : null
        }`}
      >
        {name}
      </div>
      <div className={styles.body}>{daysArr}</div>
    </div>
  );
};
const mapDispatchToProps = dispatch => {
  return {
    setOpenModal: date => dispatch(openModal(date)),
    setCloseModal: () => dispatch(closeModal())
  };
};
const mapStateToProps = state => {
  return {
    hasNotes: state.modalInformation
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Calendar);
