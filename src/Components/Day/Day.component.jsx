import React from "react";
import styles from "./Day.module.scss";
import Modal from "../Modal/Modal.component";

const Day = ({ dayNumber, currentMonth, toggleModal }) => {
  //  const [notification, setNotification] = useState(false);

  // const setNotifiction = (month, day) => {
  //   showModal()
  // };

  return (
    <div className={styles.day} onClick={toggleModal}>
      {/* <div className={styles.note}></div> */}
      {dayNumber}
    </div>
  );
};

export default Day;
