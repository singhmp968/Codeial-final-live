// writing the reducer is the 2nd step after defining the actions
import {
  LOGIN_FAILED,
  LOGIN_START,
  LOGIN_SUCCESS,
  SIGNUP_START,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
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
    case LOGIN_START:
      return {
        ...state,
        inProgress: true,
      };
    case LOGIN_SUCCESS: // COMMING FROM ACTIONS
    case SIGNUP_SUCCESS: // we case also do like this
      return {
        ...state,
        user: action.user,
        isLogged: true,
        inProgress: false,
        error: null,
      };

    case LOGIN_FAILED: // COMMING FROM ACTIONS
    case SIGNUP_FAILED:
      return {
        ...state,
        inProgress: false,
        error: action.error,
      };
    /*can also be done like this
      case SIGNUP_START:
        return{
          ...state,
          inProgress
        }
        */
    default:
      return state;
  }
}
