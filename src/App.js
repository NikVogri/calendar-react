import React, { useState, useEffect } from "react";
import styles from "./App.module.scss";
import Calendar from "./Components/Calendar/Calendar.component";
import Modal from "./Components/Modal/Modal.component";
import { connect } from "react-redux";
import { closeModal } from "./Redux/actionCreator";

function App({ showModal, setCloseModal, setOpenModal }) {
  const [allMonths, setAllMonths] = useState({});
  useEffect(() => {
    // gets current month number(0 based)
    setAllMonths(getDaysInMonths());
  }, []);

  // creates a 2 index array(number of month & days in that month) that for each month
  const getDaysInMonths = () => {
    let months = {
      January: [1],
      February: [2],
      March: [3],
      April: [4],
      May: [5],
      June: [6],
      July: [7],
      August: [8],
      September: [9],
      October: [10],
      November: [11],
      December: [12]
    };

    // get current year
    const currentDate = new Date().getFullYear();
    // loop through all months and add length in days to the object
    for (let month in months) {
      const daysInMonth = new Date(currentDate, months[month], 0).getDate();
      const monthNumber = months[month][0];
      months[month] = [monthNumber, daysInMonth];
    }
    return months;
  };

  let calendars = [];
  // loop through all months and create a calendar for each month
  if (allMonths) {
    for (let month in allMonths) {
      const [monthIndex, daysInMonth] = allMonths[month];
      const getMonth = new Date().getMonth() + 1;
      calendars.push(
        <Calendar
          key={monthIndex}
          name={`${month}`}
          daysInMonth={daysInMonth}
          isCurrentMonth={monthIndex === getMonth}
        />
      );
    }
  }

  return (
    <div className={styles.app}>
      <Modal show={showModal} closeModal={() => setCloseModal()} />
      {calendars}
    </div>
  );
}
const mapStateToProps = state => {
  return state;
};
const mapDispatchToProps = dispatch => {
  return {
    setCloseModal: () => dispatch(closeModal())
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
