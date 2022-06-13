import {
  STUDENT_ID
} from "../actions/types";



export const studendIdAction = (id) => {
  return {
    type: STUDENT_ID,
    payload: id,
  };
};