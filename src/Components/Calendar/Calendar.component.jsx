import React from "react";
import styles from "./Calendar.module.scss";
import Day from "../Day/Day.component";

const Calendar = ({ name, daysInMonth, isCurrentMonth, setModal }) => {
  let daysArr = [];

  if (daysInMonth) {
    for (let i = 1; i <= daysInMonth; i++) {
      daysArr.push(
        <Day key={i} dayNumber={i} currentMonth={name} toggleModal={setModal} />
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

export default Calendar;
