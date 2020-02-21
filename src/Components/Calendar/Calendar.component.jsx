import React from "react";
import styles from "./Calendar.module.scss";
import Day from "../Day/Day.component";
import { connect } from "react-redux";
import { openModal, closeModal } from "../../Redux/actionCreator";

const Calendar = ({ name, daysInMonth, isCurrentMonth, setOpenModal }) => {
  let daysArr = [];

  const modalOpen = (day, month) => {
    const date = [day, month];
    // send date and notes to modal
    setOpenModal(date, null);
  };

  if (daysInMonth) {
    for (let i = 1; i <= daysInMonth; i++) {
      daysArr.push(
        <Day
          key={i}
          dayNumber={i}
          currentMonth={name}
          openModal={(date, month) => modalOpen(date, month)}
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
    setOpenModal: (date, notes) => dispatch(openModal(date, notes)),
    setCloseModal: () => dispatch(closeModal())
  };
};

export default connect(null, mapDispatchToProps)(Calendar);
