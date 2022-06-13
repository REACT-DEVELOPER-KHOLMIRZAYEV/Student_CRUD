import {
  USER_AUTHENTICATION,
  USER_FAILURE,
  USER_SIGNOUT,
} from "../actions/types";

export const user_authentication = (user_data) => {
  return {
    type: USER_AUTHENTICATION,
    payload: user_data,
  };
};

export const user_failauthentication = (user_data) => {
  return {
    type: USER_FAILURE,
    payload: user_data,
  };
};

export const user_signout = () => {
  return {
    type: USER_SIGNOUT,
  };
};

