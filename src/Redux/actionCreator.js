import * as type from "./actionTypes";

export const openModal = date => {
  let [day, month] = date;
  // convert day into correct suffix
  switch (parseInt(day)) {
    case 1:
      day = "1st";
      break;
    case 2:
      day = "2nd";
      break;
    case 3:
      day = "3rd";
      break;
    // 20s
    case 21:
      day = "21st";
      break;
    case 22:
      day = "22nd";
      break;
    case 23:
      day = "23rd";
      break;
    // 30s
    case 31:
      day = "31st";
      break;
    default:
      day = `${day}th`;
      break;
  }
  const newDate = [day, month];
  return { type: type.OPEN_MODAL, payload: { displayDate: newDate } };
};
export const closeModal = () => {
  return { type: type.CLOSE_MODAL };
};

// add notes to state
export const addNotesToState = (day, month, note) => {
  console.log(day, month, note);
  return {
    type: type.ADD_NOTE_TO_DATE,
    payload: {
      month,
      data: {
        day,
        note
      }
    }
  };
};

export const removeNoteFromState = (note, date) => {
  return {
    type: type.REMOVE_NOTE_FROM_STATE,
    payload: { note, date }
  };
};

export const addErrorToState = error => {
  console.log("from: add error to state", error);
  return {
    type: type.ADD_ERROR_TO_MODAL,
    payload: error
  };
};
export const removeErrorFromState = () => {
  console.log("from: remove error from state");
  return {
    type: type.ADD_ERROR_TO_MODAL
  };
};
