import * as type from "./actionTypes";

export const openModal = () => {
  return { type: type.OPEN_MODAL };
};
export const closeModal = () => {
  return { type: type.CLOSE_MODAL };
};
