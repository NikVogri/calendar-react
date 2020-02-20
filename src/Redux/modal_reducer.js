import { OPEN_MODAL, CLOSE_MODAL } from "./actionTypes";
const initialState = {
  showModal: false
};

const showModalReducer = (state = initialState, action) => {
  console.log("reducer here");
  switch (action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        showModal: true
      };
    case CLOSE_MODAL:
      return {
        ...state,
        showModal: false
      };
    default:
      return state;
  }
};

export default showModalReducer;
