import { APIUrls } from '../helpers/urls';
import {
  FETCH_USER_PROFILE,
  USER_PROFILE_FAILURE,
  USER_PROFILE_SUCCESS,
} from './actionTypes';
import { getAuthTokenFromLocalStorage } from '../helpers/utils';

export function startUserProfileFetch() {
  return {
    type: FETCH_USER_PROFILE,
  };
}
export function userProfileSuccess(user) {
  return {
    type: USER_PROFILE_SUCCESS,
    user,
  };
}

export function userProfileFailure(error) {
  return {
    type: USER_PROFILE_FAILURE,
    error,
  };
}

export function fetchUserProfile(userId) {
  return (dispatch) => {
    // when we call this we can start userprofile
    dispatch(startUserProfileFetch());
    const url = APIUrls.userProfile(userId);
    fetch(url, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Bearer ${getAuthTokenFromLocalStorage()}`, // for checking authorization
      },
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(userProfileSuccess(data.data.user));
        // todo need to handle the error case
      });
  };
}
