import * as type from "./actionTypes";

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
  showModal: false,
  showError: ""
};

const showModalReducer = (state = initialState, action) => {
  console.log(action);
  console.log(state);
  switch (action.type) {
    case type.OPEN_MODAL:
      return {
        ...state,
        showModal: true,
        modalInformation: {
          ...state.modalInformation,
          displayDate: action.payload.displayDate
        },
        showError: ""
      };
    case type.CLOSE_MODAL:
      return {
        ...state,
        showModal: false
      };
    case type.ADD_NOTE_TO_DATE:
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
    case type.REMOVE_NOTE_FROM_STATE:
      return {
        ...state,
        modalInformation: {
          ...state.modalInformation,
          [action.payload.date[1]]: state.modalInformation[
            action.payload.date[1]
          ].filter(note => {
            // check if provided date is the same as date in state, if it is then filter over element else dont
            if (action.payload.date[0] === note.day) {
              // if it is check if notes are not equal, if they are not then save them to state.
              return action.payload.note !== note.note;
            } else return true;
          })
        }
      };
    case type.ADD_ERROR_TO_MODAL:
      return {
        ...state,
        showError: action.payload
      };
    case type.REMOVE_ERROR_FROM_MODAL:
      return {
        ...state,
        showError: ""
      };
    default:
      return state;
  }
};

export default showModalReducer;
