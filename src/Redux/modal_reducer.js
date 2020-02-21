import { OPEN_MODAL, CLOSE_MODAL, ADD_NOTES_TO_DATE } from "./actionTypes";
const initialState = {
  modalInformation: {
    displayDate: "",
    January: [],
    February: [],
    March: [],
    April: [],
    May: [],
    June: [],
    July: [],
    August: [],
    September: [],
    October: [],
    November: [],
    December: []
  },
  showModal: false
};

const showModalReducer = (state = initialState, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        showModal: true,
        modalInformation: {
          ...state.modalInformation,
          displayDate: action.payload.displayDate
        }
      };
    case CLOSE_MODAL:
      return {
        ...state,
        showModal: false
      };
    case ADD_NOTES_TO_DATE:
      return {
        ...state,
        modalInformation: {
          ...state.modalInformation,
          [action.payload.month]: [
            ...state.modalInformation[action.payload.month],
            { day: action.payload.data.day, note: action.payload.data.note }
          ]
        }
      };
    default:
      return state;
  }
};

export default showModalReducer;
