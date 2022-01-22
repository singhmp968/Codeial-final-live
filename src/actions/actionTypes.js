export const UPDATE_POSTS = 'UPDATE_POSTS';
// login actions types
export const LOGIN_START = 'LOGIN_START'; // HERE WE ARE RESSTRCTING THE LOGIN AND MAKING THE LOGNIN BUTTON TO STOP WORK TEMPRORLY UNTILL THE RESPONSE COMES
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILED = 'LOGIN_FAILED';

// Signup actions Types
export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_FAILED = 'SIGNUP_FAILED';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
//
export const AUTHENTICATE_USER = 'AUTHENTICATE_USER'; // THIS IS THE ACTION THAT WE WILL DISPATCH WHEN WE FIND THE USER IN THE LOCAL STORAGE USING JWT TOKEN
export const LOG_OUT = 'LOG_OUT';

export const CLEAR_AUTH_STATE = 'CLEAR_AUTH_STATE';
export const EDIT_USER_SUCCESSFUL = 'EDIT_USER_SUCCESSFUL';
export const EDIT_USER_FAILED = 'EDIT_USER_FAILED';

export const USER_PROFILE_SUCCESS = 'USER_PROFILE_SUCCESS'; // this is the action  that will be dispatch when we will be fetching the user profile and te request is success ful
export const USER_PROFILE_FAILURE = 'USER_PROFILE_FAILURE'; // this is the action  that will be dispatch when we will be fetching the user profile and te request is failed
export const FETCH_USER_PROFILE = 'FETCH_USER_PROFILE';

// for adding freind
export const FETCH_FRIENDS_SUCCESS = 'FETCH_FRIENDS_SUCCESS';
export const ADD_FRIEND = 'ADD_FRIEND';
export const ADD_POST = 'ADD_POST';
