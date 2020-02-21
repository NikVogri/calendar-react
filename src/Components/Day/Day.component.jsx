import React from "react";
import styles from "./Day.module.scss";

const Day = ({ dayNumber, currentMonth, openModal }) => {
  //  const [notification, setNotification] = useState(false);

  // const setNotifiction = (month, day) => {
  //   showModal()
  // };

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

  return (
    <div
      className={`${styles.day} ${
        currentDay === parseInt(dayNumber) && currentMonth === months[month]
          ? styles.today
          : null
      }`}
      onClick={e => {
        openModal(e.target.innerHTML, currentMonth);
      }}
    >
      {/* <div className={styles.note}></div> */}
      {dayNumber}
    </div>
  );
};

export default Day;
