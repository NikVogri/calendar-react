import React from "react";
import styles from "./Day.module.scss";

const Day = ({ dayNumber, currentMonth, openModal, hasNotes }) => {
  let showNotification = false;
  const checkHasNotes = () => {
    hasNotes.forEach(el => {
      if (parseInt(el.day) === parseInt(dayNumber)) {
        showNotification = true;
      }
    });
  };

  //get current day (to display current day)
  const currentDay = new Date().getDate();
  // get current month
  const month = new Date().getMonth();
  // months array - use index for dates
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  if (hasNotes) {
    checkHasNotes();
  }
  return (
    <div
      className={`${styles.day} ${
        currentDay === parseInt(dayNumber) && currentMonth === months[month]
          ? styles.today
          : null
      }`}
      onClick={() => {
        openModal(dayNumber, currentMonth);
      }}
    >
      {dayNumber}
      {showNotification ? <div className={styles.note}></div> : null}
    </div>
  );
};

export default Day;
