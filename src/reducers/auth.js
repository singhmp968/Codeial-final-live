import {
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
} from '../actions/actionTypes';

const initialAuthState = {
  user: {}, // user  when we wwill get success as the response
  error: null, //error that server will give to us
  isLogged: false, // weather the user is logged or not
  inProgress: false, // whean we press the loggin button that time we will start checking and make disable and enable the button
};
export default function auth(state = initialAuthState, action) {
  switch (action.type) {
    case LOGIN_START: // COMMING FROM ACTIONS
      return {
        ...state,
        inProgress: true,
      };
    case LOGIN_SUCCESS: // COMMING FROM ACTIONS
      return {
        ...state,
        user: action.user,
        isLogged: true,
        inProgress: false,
        error: null,
      };

    case LOGIN_FAILED: // COMMING FROM ACTIONS
      return {
        ...state,
        inProgress: false,
        error: action.error,
      };

    default:
      return state;
  }
}
